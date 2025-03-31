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
    <img class="mx-auto my-8 w-[calc(100%-64px)] h-full rounded-3xl overflow-hidden" src="https://picsum.photos/200/300">
</div>