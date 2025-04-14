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
        <h1 class="font-display text-2xl text-black relative mt-16 mb-4">Our Process</h1>
    
        <div class="w-full h-8 border-b-2 border-amber-800"></div>
    </div>

    <div class="overflow-hidden  flex flex-row relative mt-12  min-h-64">
        <a href="https://www.pexels.com/photo/lettuce-field-near-cornfield-1443867/" class="absolute w-full h-full pointer-events-auto bg-cover bg-bottom bg-[url(https://images.pexels.com/photos/1443867/pexels-photo-1443867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
        </a>
        <div class="flex relative w-full sm:w-1/2 max-w-7xl mr-auto">
        <div class="w-full sm:mr-auto p-8 bg-white/[0.7] backdrop-blur-sm">
            <h1 class="font-display text-2xl text-black mb-8">From the farms</h1>
            <Clamped text="Our process begins in the hilly farms of Linvilla which is directly responsible for the fresh and organic ingredients we pride ourselves on in each and every one of our recipes. A commitment that has ensured each of our ingredients are free from GMOS, synthetic pesticides and fertilizers and produced substantially with environmentally friendly practices." />
        </div>
        </div>
    </div>

    <div class="overflow-hidden  flex flex-row relative mt-8 min-h-64">
        <a href="https://www.pexels.com/photo/person-slicing-vegetables-on-chopping-board-9986235/" class="absolute w-full h-full pointer-events-auto bg-center bg-bottom bg-[url(https://images.pexels.com/photos/9986235/pexels-photo-9986235.jpeg)]">
        </a>
        <div class="flex relative w-full sm:w-1/2 max-w-7xl ml-auto">
        <div class="w-full sm:ml-auto p-8 bg-white/[0.7] backdrop-blur-sm">
            <h1 class="font-display text-2xl text-black relative mb-8">To our chefs</h1>
            <Clamped text="These ingredients are then sent to our restaurants, where our chefs work hard each day to prepare dishes for our customers, constantly pushing themselves to refine and improve each one of the dishes we are proud to offer. Furthermore, in accordance with the mission of our company our restaurant is committed to accommodating each one of our consumers by not only providing vegetarian and vegan friendly dishes but also maintaining a commitment to preventing cross contamination to address common allergies." />
        </div>
    </div>
    </div>

    
    <div class="overflow-hidden flex flex-row relative bg-cover mt-8 min-h-64 mb-16">
        <a href="https://www.pexels.com/photo/fritters-with-sesame-sauce-13887556/" class="absolute w-full h-full pointer-events-auto bg-cover bg-center bg-[url(https://images.pexels.com/photos/13887556/pexels-photo-13887556.jpeg)]">
        </a>
        <div class="flex relative w-full sm:w-1/2 max-w-7xl mr-auto">
            <div class="w-full sm:mr-auto p-8 bg-white/[0.7] backdrop-blur-sm">
                <h1 class="font-display text-2xl text-black relative mb-8 line-clamp-4">To <span class="text-amber-800">you</span></h1>
                <Clamped text="Our valued customers then enter into our humble experience and order from one of the many servers or hosts on standby, ready to assist any and all of our customers. Once ordered, each dish is cooked and finalized before being sent out into the hands of the consumer, where delicious and aromatic flavors will hopefully leave them coming back for more in the future" />
            </div>
        </div>
    </div>
</div>