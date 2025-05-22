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
    <h1 class="font-display text-2xl text-black dark:text-white relative mt-16 mb-8 text-[67px]">About Us</h1>
    <div class="w-full h-7 border-b-2 border-dark"></div>
    <a class="w-full h-fit" href="https://www.pexels.com/photo/close-up-photo-of-formal-table-setting-735869/"><img class="rounded-2xl overflow-hidden mb-8 h-96 w-full object-cover object-center" src="https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg"></a>
    <p>Whether you love handcrafted, vegetarian dishes or looking to try something new, Savory Roots is the place for you. Here at Savory Roots we are proud to serve as the number one designation for the families of Pennsylvania. Having been awarded the Pennsylvania Restaurant & Lodging Association (PRLA) Spirit of Hospitality award two years running, it's no secret that we value our customers and the dishes we serve. Each day, our staff work tirelessly to provide handcrafted dishes that blend tradition with our commitment to providing vegetarian dishes that leaves each customer coming back year after year. </p>

</div>
