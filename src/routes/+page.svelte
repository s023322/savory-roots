<script>
    import {base} from "$app/paths"
	import Navbar from "$lib/navbar.svelte";
</script>

<div class="z-0">
    <img class="absolute top-16 right-8 w-1/2 h-[512px] object-cover overflow-visible" alt="Food" src="{base}/bokchoy.png">
    <div class="absolute top-16 flex w-fit min-w-1/2 h-[512px]   px-8 items-center   backdrop-blur-sm">
        <h1 class="font-lato">Welcome to Savory Roots <br> <span class="font-display text-black text-left text-4xl tracking-tighter">Fresh food from farm to fork.</span></h1>
    </div>
    <div class="relative top-[1280px]">
        <h1>sd</h1>
    </div>
</div>
<Navbar></Navbar>