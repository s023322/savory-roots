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
    <p>All styling and theme created by 2082-901. Frameworks were used for components and efficiency, but no templates were used.</p>
    <div class="flex space-x-8">
        <GradientButton text="Work Log" padding=4 href="https://drive.google.com/file/d/1Nca0eQiXdEC0xupED2IMtccfmfoogZiw/view?usp=sharing"></GradientButton>
    </div>
    <div class="flex space-x-8">
        <GradientButton text="Copyright Checklist" padding=4 href="https://drive.google.com/file/d/1gJLT0PP3iMU09DSZ6ha4ks5CXlmSWtWI/view?usp=sharing"></GradientButton>
    </div>
    
    <div class="w-full h-7 border-b-2 border-amber-800"></div>
    
    <h1 class="font-display text-2xl text-black relative mt-16 mb-8">Sources</h1>

    <ul class="list-none text-black">
        <li><span class="font-semibold font-display">Images</span> - <a href="https://pexels.com">Pexels (Click on an image to find its source)</a></li>
    </ul>

    <div class="w-full h-7 border-b-2 border-amber-800"></div>

    <h1 class="font-display text-2xl text-black relative mt-16 mb-8">Tools & Frameworks</h1>

    <ul class="list-none text-black mb-16">
        <li><span class="font-semibold font-display">Deployment</span> - <a href="https://github.com">Github</a> & <a href="https://vercel.com">Vercel</a></li>
        <li><span class="font-semibold font-display">Environment</span> - <a href="https://nodejs.org">NodeJS</a></li>
        <li><span class="font-semibold font-display">Frontend</span> - <a href="https://vite.dev">Vite</a></li>
        <li><span class="font-semibold font-display">Payment</span> - <a href="https://stripe.com">Stripe</a> & <a href="https://sveltestripe.com">Svelte-Stripe</a></li>
        <li><span class="font-semibold font-display">Scripting</span> - <a href="https://www.typescriptlang.org/">Typescript</a> & <a href="https://www.javascript.com/">Javascript</a></li>
        <li><span class="font-semibold font-display">Styling</span> - <a href="https://tailwindcss.com">TailwindCSS</a></li>
        <li><span class="font-semibold font-display">UI</span> - <a href="https://svelte.dev">Svelte</a> & <a href="https://svelte.dev/docs/kit/introduction">Sveltekit</a></li>
    </ul>
</div>
