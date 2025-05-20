<script>
	import GradientButton from "./gradient-button.svelte";
	import { itemCount } from "./stores";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import { cartItems } from "./stores";
    import Cart from "./cart.svelte";

    let {data, page} = $props();
    let pageData = $state();

    let cartData;
    let cartObject;

    const unsub = cartItems.subscribe((value) => {cartData = value; if (browser) { localStorage.setItem("cartItems", JSON.stringify(value)); }})

    let innerWidth = $state(browser && Math.min(window.innerWidth, 1280) || 800);
    let cols = $derived(Math.max(Math.min(Math.floor((innerWidth - 32) / (256 + 128)), 3), 2));

    $effect(() => {
        dataChanged(page)
    });

    function dataChanged(newValue) {
        switch(newValue) {
        case 0:
            pageData = data.appetizers;
            break;
        case 1:
            pageData = data.dumplings;
            break;
        case 2:
            pageData = data.noodles;
            break;
        case 3:
            pageData = data.vegetables;
            break;
	case 4:
	    pageData = data.soups
	    break;
	case 5:
	    pageData = data.rices
	    break;
	}
    }

    function updateItems(itemData) {
        if (!cartData["items"]) {
            cartData = {"items":[]};
        }
        cartData["items"].push(itemData);
        itemCount.set(cartData["items"].length);
        cartItems.set(cartData);
        localStorage.setItem("cartItems", JSON.stringify(cartData));
        cartObject.updateTotal();
    }
</script>

<svelte:window bind:innerWidth />

<div class="flex justify-center flex-row   lg:space-x-8 mb-8">
<div class="flex justify-center">
<div style="grid-template-columns: repeat({cols}, minmax(0, 1fr));" class="grid max-sm:grid-cols-1 max-md:grid-cols-2 w-fit max-w-7xl   gap-8">
{#each pageData as item, i}
    <div class="flex   w-40 sm:w-64 h-72 sm:h-80 rounded-3xl p-2 m-0   text-light dark:text-dark border-2">
        <div style="background-image: url('{item.image}'); background-color: {item.color};" class="w-full h-full bg-cover bg-center   rounded-2xl   overflow-hidden">
            <div class="flex float-left w-fit h-fit bg-white dark:bg-black rounded-b-2xl   items-center">
                <button onclick={() => updateItems(item)} class="flex w-fit h-fit">
                    <GradientButton text="add" font="icons" element="div" href=""></GradientButton>
                </button>
                <h1 class="text-dark text-md/[0.5]   ml-2 mb-1 mr-3">${item.price}</h1>
            </div>
            <a href="{item.url}" class="relative w-full top-16 sm:top-32 h-44 sm:h-40 p-2 float-left   bg-white/[0.8] backdrop-blur-sm dark:bg-black/[0.8]">
                <h1 class="text-black dark:text-white font-display text-[20px] sm:text-[28.4px]/[0.9] text-left">{item.name}</h1>
                <h1 class="text-black dark:text-white text-[12px]/[1] sm:text-[12.8px]/[1] mt-2 text-left">{item.description}</h1>
            </a>
        </div>
    </div>
{/each}
</div>
</div>

<div class="items-top">
    <Cart bind:this={cartObject}></Cart>
</div>
</div>
