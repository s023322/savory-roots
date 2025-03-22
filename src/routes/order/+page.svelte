<script>
    import {base} from "$app/paths"
	import { page } from "$app/stores";
	import GradientButton from "$lib/gradient-button.svelte";
	import Input from "$lib/input.svelte";
	import Navbar from "$lib/navbar.svelte";
	import StandardButton from "$lib/standard-button.svelte";
	import Toggle from "$lib/toggle.svelte";

    let tstate = 0;
    let input = "";
</script>

<div>
    <div class="z-0 flex flex-row justify-center space-x-8">
        <div class="inline relative mt-24 mb-0   w-fit h-fit">
            <Toggle titles="{["Pickup", "Delivery"]}" text="{["Pickup", "Delivery"]}" bind:tstate></Toggle>
        </div>
        <div class="inline relative mt-24 w-fit h-fit">
            <Toggle font="icons" titles="{["Appetizers", "Meals", "Drinks", "Dessert"]}" text="{["rice_bowl", "ramen_dining", "local_bar", "icecream"]}"></Toggle>
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

<Navbar></Navbar>