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
    <h1 class="font-display text-2xl text-black dark:text-white relative mt-16 mb-8 text-[67px]">Our Staff</h1>

    <div class="w-full h-7 border-b-2 border-dark"></div>
    
    <ul class="space-y-8 mb-8">
        <li>
            <a href="https://www.pexels.com/photo/old-man-smiling-2421934/" class="w-full flex flex-col sm:flex-row items-center">
            <div class="w-full max-sm:p-8 sm:w-80 h-64 bg-cover relative bg-center overflow-hidden rounded-lg bg-[url(https://images.pexels.com/photos/2421934/pexels-photo-2421934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]"></div>
            <p class="w-full max-sm:mt-8 sm:px-8">A long-time chef and vegetarian, Yun Lan has served as Savory Roots’ executive chef for over four years. Known for his appearances on the Food Network, he now continues his passion within our humble kitchen, committing himself to a mission of innovation and creativity in each and every dish. </p></a>
        </li>
        <li>
            <a href="https://www.pexels.com/photo/man-in-gray-crew-neck-shirt-smiling-3761521/" class="w-full flex flex-col sm:flex-row items-center">
            <div class="w-full max-sm:p-8 sm:w-80 h-64 bg-cover relative bg-center overflow-hidden rounded-lg bg-[url(https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg?auto=compress&cs=tinysrgb&w=600)]"></div>
            <p class="w-full max-sm:mt-8 sm:px-8">Born and raised in the Philadelphia area, John Wei has served as Savory Roots’ head host for over five years. Having previously served as a host at acclaimed restaurants across Pittsburgh, he is directly responsible for leading our highly trained team of servers, ensuring smooth service, and coordinating with the kitchen to ensure each order is to the satisfaction of our customers.</p></a>
        </li>
        <li>
            <a href="https://www.pexels.com/photo/shallow-focus-photo-of-man-3018993/" class="w-full flex flex-col sm:flex-row items-center">
            <div class="w-full max-sm:p-8 sm:w-80 h-64 bg-cover relative bg-center overflow-hidden rounded-lg bg-[url(https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]"></div>
            <p class="w-full max-sm:mt-8 sm:px-8">A devoted fan of Savory Roots’ ever since its creation in 1945, Martin Barlowe has proudly served as our general manager for over ten years. Every day, he works tirelessly overseeing all aspects of our daily operations whether it be ensuring customer satisfaction, managing staff, or maintaining compliance with health and safety standards.</p></a>
        </li>
    </ul>
</div>
