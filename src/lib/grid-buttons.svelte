<script>
	import GradientButton from "./gradient-button.svelte";
	import { itemCount } from "./stores";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import { cartItems } from "./stores";

    let {data, page} = $props();
    let pageData = $state();

    let cartData;

    const unsub = cartItems.subscribe((value) => {cartData = value; if (browser) { localStorage.setItem("cartItems", JSON.stringify(value)); }})

    let innerWidth = $state(browser && window.innerWidth || 800);
    let cols = $derived(Math.floor((innerWidth - 32) / (256 + 32)));

    $effect(() => {
        dataChanged(page)
    });

    function dataChanged(newValue) {
        switch(newValue) {
        case 0:
            pageData = data.appetizers;
            break;
        case 1:
            pageData = data.meals;
            break;
        case 2:
            pageData = data.drinks;
            break;
        case 3:
            pageData = data.desserts;
            break;
        }
    }

    function updateItems(itemData) {
        itemCount.set($itemCount + 1);
        cartData["items"].push(itemData);
        cartItems.set(cartData);
        localStorage.setItem("cartItems", JSON.stringify(cartData));
    }
</script>

<svelte:window bind:innerWidth />

<div class="flex justify-center">
<div style="grid-template-columns: repeat({cols}, minmax(0, 1fr));" class="grid w-fit max-w-7xl   gap-8">
{#each pageData as item, i}
    <div class="flex   w-64 h-64 rounded-3xl p-2 m-0   text-gray-300 border-2">
        <div class="w-full h-full bg-[url(https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg)] bg-cover bg-center   rounded-2xl   overflow-hidden">
            <div class="flex w-fit h-fit bg-white rounded-b-2xl   items-center">
                <button onclick={() => updateItems(item)} class="flex w-fit h-fit">
                    <GradientButton text="add" font="icons" href="/order/"></GradientButton>
                </button>
                <h1 class="text-amber-800 text-md/[0.5]   ml-2 mb-1 mr-3">${item.price}</h1>
            </div>
            <div class="relative w-full h-1/2 top-1/2 p-2   bg-white/[0.75] backdrop-blur-sm">
                <h1 class="text-black font-display text-xl">{item.name}</h1>
                <h1 class="text-black text-lg/[1]">{item.description}</h1>
            </div>
        </div>
    </div>
{/each}
</div>
</div>