<script>
    import {base} from "$app/paths"
	import GradientButton from "$lib/gradient-button.svelte";
	import Navbar from "$lib/navbar.svelte";
	import { writable } from "svelte/store";

</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

<div class="z-0 font-lato">
    <img class="absolute top-0 right-0 w-full h-[512px]   select-none object-cover overflow-y-hidden" alt="Food" src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <!--<div class="relative top-0 flex w-fit min-w-1/2 h-[512px] bg-white/[.5]   px-8 items-center   backdrop-blur-sm">
        <h1 class="font-lato">Welcome to Savory Roots <br> <span class="font-display text-black text-left text-4xl tracking-tighter">Fresh food from farm to fork.</span></h1>
    </div>-->
    <div class="relative top-0 w-full h-[512px] flex   justify-center items-center">
        <div class="flex w-full max-w-7xl h-full">
            <div class="flex flex-row bg-white/[0.5] backdrop-blur-sm w-fit h-full px-8   items-center">
                <h1 class="font-lato">Welcome to Savory Roots <br> <span class="font-display text-black text-left text-4xl tracking-tighter">Fresh food from farm to fork.</span></h1>
                <div class="absolute bottom-8 left-8 flex w-min h-min space-x-4">
                    <GradientButton text="center_focus_weak" title="Instagram" font="icons" href="https://www.instagram.com"></GradientButton>
                    <GradientButton text="youtube_activity" title="Youtube" font="icons" href="https://www.youtube.com"></GradientButton>
                    <GradientButton text="X" font="display" title="X" padding="3" href="https://www.x.com"></GradientButton>
                </div>
                <div class="absolute bottom-8 right-8 flex">
                    <a class="flex flex-row h-min   space-x-4 items-center   group   bg-white hover:bg-black rounded-full pl-2   border-2 text-white hover:text-black" href="/order/">
                        <h1 class="text-black group-hover:text-white">Order Now</h1>
                        <GradientButton element="div" text="arrow_outward" title="Order" font="icons" href="/order/"></GradientButton>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="relative top-[2560px]">
        <h1>sd</h1>
    </div>
</div>