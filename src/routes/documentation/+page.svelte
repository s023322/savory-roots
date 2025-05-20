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
    <h1 class="font-display text-2xl text-black dark:text-white relative mt-16 mb-8 text-[67px]">Reference Page</h1>
    <p>All styling and the theme was created by 2082-901. Frameworks were used for efficiency but no templates were used.</p>
    <div class="flex space-x-8">
        <GradientButton text="Work Log" padding=4 href="/worklog.pdf"></GradientButton>
    </div>
    <div class="flex space-x-8">
        <GradientButton text="Copyright Checklist" padding=4 href="/copyright.pdf"></GradientButton>
    </div>
    
    <div class="w-full h-7 border-b-2 border-dark"></div>
    
    <h1 class="font-display text-2xl text-black dark:text-white relative mt-16 mb-8 text-[50.5px]">Sources</h1>

    <ul class="list-none text-black dark:text-white">
        <li><span class="font-display">Images</span> - <a class="underline" href="https://pexels.com">Pexels (Click on an image to find its source)</a></li>
        <li><span class="font-display">Home Video</span> - <a class="underline" href="https://www.pexels.com/video/fresh-dim-sum-set-up-on-a-bamboo-steam-tray-for-cooking-3297268/">Pexels (Made by cottonbro studio)</a></li>
    </ul>

    <div class="w-full h-7 border-b-2 border-dark"></div>

    <h1 class="font-display text-2xl text-black dark:text-white relative mt-16 mb-8 text-[50.5px]">Tools & Frameworks</h1>

    <ul class="list-none text-black dark:text-white mb-16">
        <li><span class="font-display">Deployment</span> - <a class="underline" href="https://github.com">Github</a> & <a class="underline" href="https://vercel.com">Vercel</a></li>
        <li><span class="font-display">Environment</span> - <a class="underline" href="https://nodejs.org">NodeJS</a></li>
        <li><span class="font-display">Frontend</span> - <a class="underline" href="https://vite.dev">Vite</a></li>
        <li><span class="font-display">Payment</span> - <a class="underline" href="https://stripe.com">Stripe</a> & <a class="underline" href="https://sveltestripe.com">Svelte-Stripe</a></li>
        <li><span class="font-display">Scripting</span> - <a class="underline" href="https://www.typescriptlang.org/">Typescript</a> & <a class="underline" href="https://www.javascript.com/">Javascript</a></li>
        <li><span class="font-display">Styling</span> - <a class="underline" href="https://tailwindcss.com">TailwindCSS</a></li>
        <li><span class="font-display">UI</span> - <a class="underline" href="https://svelte.dev">Svelte</a> & <a class="underline" href="https://svelte.dev/docs/kit/introduction">Sveltekit</a></li>
    </ul>
</div>
