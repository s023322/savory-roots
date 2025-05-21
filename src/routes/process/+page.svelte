<script>
    import {base} from "$app/paths"
	import GradientButton from "$lib/gradient-button.svelte";
	import Navbar from "$lib/navbar.svelte";
	import { writable } from "svelte/store";
    import Question from "$lib/question.svelte";
    import Clamped from "$lib/clamped.svelte";

</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

<div class="z-0 font-lato text-xl w-full">
    <div class="w-full max-w-7xl p-8 relative mx-auto">
        <h1 class="font-display text-2xl text-black dark:text-white relative mt-16 mb-4 text-[67px]">Our Process</h1>
    
        <div class="w-full h-8 border-b-2 border-dark"></div>
    </div>
    <div class="max-w-7xl w-full h-full mx-auto flex justify-center flex-col px-8">
    <div class="overflow-hidden  flex flex-row relative mt-12  min-h-64">
        <a href="https://www.pexels.com/photo/lettuce-field-near-cornfield-1443867/" class="absolute w-full h-full pointer-events-auto bg-cover bg-bottom bg-[url(https://images.pexels.com/photos/1443867/pexels-photo-1443867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
        </a>
        <div class="flex relative w-full sm:w-1/2 max-w-7xl mr-auto">
        <div class="w-full sm:mr-auto p-8 bg-white/[0.8] dark:bg-black/[0.8]">
            <h1 class="font-display text-2xl text-black dark:text-white mb-8 text-[50.5px]">From the farms</h1>
            <Clamped text="Our process begins in the hilly farms of Linvilla, where our staff and partners work tirelessly to plant, grow and harvest the organic and fresh ingredients we pride ourselves on. Ingredients that you can rest easy knowing are not only USDA and Non-GMO certified but are also free of any synthetic pesticides and fertilizers, and produced substantially with environmentally friendly practices. Furthermore, for any sourced eggs and dairy products, these ingredients are certified humane and pasture raised, standards backed by legal precedent in comparison to other labels, ensuring the best conditions for the animals they are sourced from." />
        </div>
        </div>
    </div>

    <div class="overflow-hidden  flex flex-row relative mt-8 min-h-64">
        <a href="https://www.pexels.com/photo/person-slicing-vegetables-on-chopping-board-9986235/" class="absolute w-full h-full pointer-events-auto bg-center bg-bottom bg-[url(https://images.pexels.com/photos/9986235/pexels-photo-9986235.jpeg)]">
        </a>
        <div class="flex relative w-full sm:w-1/2 max-w-7xl ml-auto">
        <div class="w-full sm:ml-auto p-8 bg-white/[0.8] dark:bg-black/[0.8]">
            <h1 class="font-display text-2xl text-black dark:text-white relative mb-8 text-[50.5px]">To our chefs</h1>
            <Clamped text="These ingredients are then collected, prepped and transported to our restaurant, where our chefs utilize them to prepare our signature dishes for our customers. Each chef is ServSafe and CEC certified, highlighting our commitment to accommodating each one of our consumers through not just our vegetarian friendly dishes but through our efforts to prevent cross contamination in addressing common allergies. " />
        </div>
    </div>
    </div>

    
    <div class="overflow-hidden flex flex-row relative bg-cover mt-8 min-h-64 mb-16">
        <a href="https://www.pexels.com/photo/fritters-with-sesame-sauce-13887556/" class="absolute w-full h-full pointer-events-auto bg-cover bg-center bg-[url(https://images.pexels.com/photos/13887556/pexels-photo-13887556.jpeg)]">
        </a>
        <div class="flex relative w-full sm:w-1/2 max-w-7xl mr-auto">
            <div class="w-full sm:mr-auto p-8 bg-white/[0.8] dark:bg-black/[0.8]">
                <h1 class="font-display text-2xl text-black dark:text-white relative mb-8 line-clamp-4 text-[50.5px]">To <span class="bg-linear-to-tl from-black via-dark via-25% to-light to-90% animate-gradient bg-clip-text clear-text bg-size-[400%]">you</span></h1>
                <Clamped text="Our valued customers then enter Savory Roots and order from one of the many servers on standby, ready to assist. Like our other staff, it is important for each server to be ServSafe and CRS certified in order to ensure the safety of our customers and provide them with the top notch experience we pride ourselves on. Whether it be for here or to go, once your order is taken, your dish is cooked and sent out, where delicious and aromatic flavors will hopefully leave you coming back for more and more in the future. " />
            </div>
        </div>
    </div>
    </div>
</div>