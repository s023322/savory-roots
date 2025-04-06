<script>
    import {base} from "$app/paths"
	import { page } from "$app/state";
	import GradientButton from "$lib/gradient-button.svelte";
	import GridButtons from "$lib/grid-buttons.svelte";
	import Input from "$lib/input.svelte";
	import Navbar from "$lib/navbar.svelte";
	import StandardButton from "$lib/standard-button.svelte";
	import Toggle from "$lib/toggle.svelte";
    import foodData from "$lib/items.json";
    import Cart from "$lib/cart.svelte";
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import { cartItems, cartTotal, itemCount } from "$lib/stores";

    let tstate = 0;
    let input = "";
    let pages = ["Appetizers", "Meals", "Drinks", "Dessert"];
    
    let orderReceived = page.url.searchParams.has("status");
    let orderStatus = "";
    if (orderReceived) {
        orderStatus = page.url.searchParams.get("status");
        if (orderStatus.includes("complete") && browser) {
            localStorage.setItem("cartItems", '{"items":[]}');
            cartItems.set({"items":[]});
            localStorage.setItem("itemCount", "0");
            itemCount.set(0);
            localStorage.setItem("cartTotal", "0");
            cartTotal.set(0);
        }
    }
</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>


{#if orderReceived}
<button onclick={() => {orderReceived = !orderReceived}} class="fixed left-0 top-32 w-full h-fit flex justify-center z-100 cursor-pointer">
    <div class="backdrop-blur-sm bg-white/[0.9] w-fit h-fit px-4 py-2 border-2 text-gray-300 rounded-lg space-y-4">
        <h1 class="font-display text-2xl text-black">Order {orderStatus.includes("complete") ? "Complete" : "Failed"} <span class="relative top-1 font-icons">{orderStatus.includes("complete") ? "check" : "close"}</span></h1>
        <h1 class="text-lg text-black font-lato mb-2">{orderStatus.includes("complete") ? "Thank you!" : "Sorry, we couldn't complete your order"}</h1>
    </div>
</button>
{/if}

<div class="font-lato">
    <div class="z-0 flex flex-col md:flex-row justify-center space-x-8">
        <div class="inline relative max-md:mx-auto mt-24 mb-0   w-fit h-fit">
            <Toggle titles="{["Pickup", "Delivery"]}" text="{["Pickup", "Delivery"]}"></Toggle>
        </div>
        <div class="block max-md:mx-auto md:inline relative mt-8 md:mt-24 w-fit h-fit">
            <Toggle font="icons" pad="[9px]" space="4" titles="{["Appetizers", "Meals", "Drinks", "Dessert"]}" bind:tstate text="{["rice_bowl", "ramen_dining", "local_bar", "icecream"]}"></Toggle>
        </div>
    </div>
    <div class="w-full justify-center flex mt-8">
        <h1 class="font-display text-2xl  text-center">{pages[tstate]}</h1>
    </div>
    <div class="flex justify-center flex-row   space-x-8">
        <div class="flex justify-center pt-8">
            <GridButtons data={foodData} page={tstate}></GridButtons>
        </div>
    </div>
    <!--<div class="flex justify-center w-full h-fit relative mt-8">
        {#if tstate == 1}
        <div class="relative flex flex-row w-fit h-min">
            <div class="block relative mx-auto   w-fit h-fit">
                <Input placeholder="Address" bind:input></Input>
            </div>
            <button class="ml-8 flex w-max h-max">
                <GradientButton font="icons" href="/order" text=search></GradientButton>
            </button>
        </div>
        {/if}
    </div>-->
</div>