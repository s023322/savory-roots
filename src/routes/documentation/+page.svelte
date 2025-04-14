<script>
    import {base} from "$app/paths"
	import GradientButton from "$lib/gradient-button.svelte";
	import Navbar from "$lib/navbar.svelte";
	import { writable } from "svelte/store";
    import Question from "$lib/question.svelte";

</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

<div class="z-0 font-lato text-xl max-w-7xl space-y-8 p-8 relative mx-auto">
    <h1 class="font-display text-2xl text-black relative mt-16 mb-8">Reference Page</h1>
    <p>Team 2082-901</p>
    <div class="flex space-x-8">
        <GradientButton text="Work Log" padding=4 href="/src/lib/worklog.pdf"></GradientButton>
    </div>
    <div class="flex space-x-8">
        <GradientButton text="Copyright Checklist" padding=4 href="/src/lib/copyright.pdf"></GradientButton>
    </div>
    
    <div class="w-full h-7 border-b-2 border-amber-800"></div>
    
    <h1 class="font-display text-2xl text-black relative mt-16 mb-8">Sources</h1>

    <ul class="list-none text-black">
        <li><span class="font-semibold font-display">Images</span> - <a href="https://pexels.com">Pexels (Click on an image to find its source)</a></li>
    </ul>

    <div class="w-full h-7 border-b-2 border-amber-800"></div>

    <h1 class="font-display text-2xl text-black relative mt-16 mb-8">Tools & Frameworks</h1>

    <ul class="list-none text-black mb-16">
        <li><span class="font-semibold font-display">Deployment</span> - Github & Vercel</li>
        <li><span class="font-semibold font-display">Environment</span> - NodeJS</li>
        <li><span class="font-semibold font-display">Frontend</span> - Vite</li>
        <li><span class="font-semibold font-display">Payment</span> - Stripe & Svelte-Stripe</li>
        <li><span class="font-semibold font-display">Scripting</span> - Typescript & Javascript</li>
        <li><span class="font-semibold font-display">Styling</span> - TailwindCSS</li>
        <li><span class="font-semibold font-display">UI</span> - Svelte & Sveltekit</li>
    </ul>
</div>