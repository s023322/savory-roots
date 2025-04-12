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

<div class="z-0 font-lato text-xl max-w-7xl space-y-8 p-8 relative mx-auto h-full">
    <h1 class="font-display text-2xl text-black relative mt-16 mb-8">Work Log</h1>
    <div class="w-full h-7 border-b-2 border-amber-800"></div>
    
    <embed class="w-full" height="512" src="https://drive.google.com/viewerng/
viewer?embedded=true&url=https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf">
</div>