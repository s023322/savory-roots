<script>
	import { getContext, setContext } from "svelte";
	import GradientButton from "./gradient-button.svelte";
	import { writable } from "svelte/store";

    let {data, page} = $props();
    let pageData = $state();

    let itemCount = writable(0);

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

    function updateItems() {
        $itemCount += 1;
        console.log($itemCount)
    }
</script>

<div class="flex justify-center">
<div class="grid grid-cols-3 w-full max-w-7xl pl-8 space-x-8 space-y-8">
{#each pageData as item, i}
    <div class="flex   w-64 h-64 rounded-3xl p-2   text-gray-300 border-2">
        <div class="w-full h-full bg-[url(https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg)] bg-cover bg-center   rounded-2xl   overflow-hidden">
            <div class="flex w-fit h-fit bg-white rounded-b-2xl   items-center">
                <button onclick="{updateItems}" class="flex w-fit h-fit">
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