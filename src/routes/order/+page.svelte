<script>
    import {base} from "$app/paths"
	import { page } from "$app/stores";
	import GradientButton from "$lib/gradient-button.svelte";
	import GridButtons from "$lib/grid-buttons.svelte";
	import Input from "$lib/input.svelte";
	import Navbar from "$lib/navbar.svelte";
	import StandardButton from "$lib/standard-button.svelte";
	import Toggle from "$lib/toggle.svelte";
    import foodData from "$lib/items.json";
    import Cart from "$lib/cart.svelte";

    let tstate = 0;
    let input = "";
    let pages = ["Appetizers", "Meals", "Drinks", "Dessert"];
</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

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