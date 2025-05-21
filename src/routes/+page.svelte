<script>
    import {base} from "$app/paths"
	import GradientButton from "$lib/gradient-button.svelte";
	import Navbar from "$lib/navbar.svelte";
	import { writable } from "svelte/store";
    import Clamped from "$lib/clamped.svelte";

</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

<div class="z-0 font-lato text-black dark:text-white">
    <!--<div class="relative top-0 flex w-fit min-w-1/2 h-[512px] bg-white/[.5]   px-8 items-center   backdrop-blur-sm">
        <h1 class="font-lato">Welcome to Savory Roots <br> <span class="font-display text-black text-left text-4xl tracking-tighter">Fresh food from farm to fork.</span></h1>
    </div>-->
    <div class="relative top-0 w-full h-screen flex   justify-center items-center flex-col">
         <video class="w-screen h-screen absolute object-[24%_0%] object-cover top-0 z-0 brightness-40" autoplay muted loop playsinline disablepictureinpicture>
            <source src="/DimSum.mov" type="video/mp4">
        </video>
        <h1 class="font-lato z-10 text-white text-center mx-8">Welcome to Savory Roots</h1>
        <h1 class="font-display text-[40px]/[1] sm:text-[67px]/[1] z-10 text-white text-center mx-8">Fresh food from farm to fork.</h1>
        <div class="absolute bottom-8 flex w-full h-min justify-center space-x-4">
                    <a href="https://instagram.com" aria-label="Instagram" class="size-8 p-2 flex justify-center align-items transition duration-200 from-black to-black bg-linear-to-tl rounded-full fill-white    hover:from-light hover:to-dark active:from-white active:to-black active:animate-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a href="https://youtube.com" aria-label="Youtube" class="size-8 p-2 flex justify-center align-items transition duration-200 from-black to-black bg-linear-to-tl rounded-full fill-white    hover:from-light hover:to-dark active:from-white active:to-black active:animate-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                    </a>
                    <a href="https://x.com" aria-label="X" class="size-8 p-2 flex justify-center align-items transition duration-200 from-black to-black bg-linear-to-tl rounded-full fill-white    hover:from-light hover:to-dark active:from-white active:to-black active:animate-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                    </a>
        </div>
    </div>
        <div class="relative mt-8 top-0 w-full h-[512px] flex   justify-center items-center">
        
        <a class="absolute top-0 right-0 w-full h-[512px] overflow-y-hidden p-0 m-0" href="https://www.pexels.com/photo/green-and-brown-leaves-on-brown-wooden-tray-5720825/">
            <img class="object-cover w-full h-full" alt="Food" src="https://images.pexels.com/photos/5720825/pexels-photo-5720825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        </a>
            <div class="flex w-full max-w-7xl h-full">
                <div class="flex ml-auto bg-white/[0.8] dark:bg-black/[0.8] backdrop-blur-sm w-128 h-full px-8   items-center">
                    <h1 class="text-lg font-lato tracking-normal text-left"><span class="font-display text-black dark:text-white text-4xl tracking-tighter w-full block">Our mission</span><br>Our mission at Savory Roots is to bring fresh, vegetarian dishes from farm to feast. We work our hardest to give our customers the best experience and food possible.</h1>
                    <div class="absolute bottom-8 right-8 flex">
                        <a class="flex flex-row h-min   space-x-4 items-center   group   bg-white dark:bg-black hover:bg-black dark:hover:bg-white rounded-full pl-2   border-2 text-white dark:text-black hover:text-black dark:hover:text-white" href="/about/">
                            <h1 class="text-black dark:text-white group-hover:text-white dark:group-hover:text-black">Learn more</h1>
                            <GradientButton element="div" text="arrow_outward" title="About" font="icons" href="/about/"></GradientButton>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-8 mt-0 rounded-2xl overflow-hidden mx-auto max-w-7xl dark:invert top-8 relative" style="width: 100%"><iframe width="100%" height="512" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=512&amp;hl=en&amp;q=50%20E%20Wynnewood%20Rd+(Savory%20Roots)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">best drones</a></iframe></div>
        <div class="block h-8 relative"></div>
</div>