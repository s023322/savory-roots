<script>
	import Navbar from "$lib/navbar.svelte";
    import foodData from "$lib/items.json";
    import GradientButton from "$lib/gradient-button.svelte";
</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

<div class="z-0 font-lato text-xl max-w-7xl space-y-8 p-8 relative mx-auto">
    <div class="flex flex-row m-0 justify-between">
        <h1 class="font-display text-2xl text-black relative mt-16 mb-4">Our Menu</h1>
        
        <div class="flex mt-[60px] text-gray-300 border-2 rounded-full w-min h-min hover:border-white">
            <a class="flex flex-row w-min   space-x-4 items-center   group   bg-white hover:bg-black rounded-full pl-2   border-2 text-white hover:text-black" href="/order/">
                <h1 class="text-black group-hover:text-white text-nowrap text-[16px]">Order</h1>
                <GradientButton element="div" text="arrow_outward" title="Order" font="icons" href="/order/"></GradientButton>
            </a>
        </div>
    </div>

    <div class="w-full h-8 border-b-2 border-amber-800"></div>
    
    <h1 class="font-display text-2xl text-black relative mt-12 mb-8">Appetizers</h1>
    {#each foodData.appetizers as item}
        <div class="flex flex-row justify-between m-0">
            <h1 class="font-display">{item.name}</h1>
            <h1>${item.price}</h1>
        </div>
        <h1 class="font-lato mb-8">{item.description}</h1>
    {/each}
    
    <div class="w-full h-4 border-b-2 border-amber-800"></div>
    
    <h1 class="font-display text-2xl text-black relative mt-12 mb-8">Dumplings</h1>
    {#each foodData.dumplings as item}
        <div class="flex flex-row justify-between m-0">
            <h1 class="font-display">{item.name}</h1>
            <h1>${item.price}</h1>
        </div>
        <h1 class="font-lato mb-8">{item.description}</h1>
    {/each}
    
    <div class="w-full h-4 border-b-2 border-amber-800"></div>
    
    <h1 class="font-display text-2xl text-black relative mt-12 mb-8">Noodles</h1>
    {#each foodData.noodles as item}
        <div class="flex flex-row justify-between m-0">
            <h1 class="font-display">{item.name}</h1>
            <h1>${item.price}</h1>
        </div>
        <h1 class="font-lato mb-8">{item.description}</h1>
    {/each}
    
    <div class="w-full h-4 border-b-2 border-amber-800"></div>
    
    <h1 class="font-display text-2xl text-black relative mt-12 mb-8">Vegetables</h1>
    {#each foodData.vegetables as item}
        <div class="flex flex-row justify-between m-0">
            <h1 class="font-display">{item.name}</h1>
            <h1>${item.price}</h1>
        </div>
        <h1 class="font-lato mb-8">{item.description}</h1>
    {/each}
    
    <div class="w-full h-4 border-b-2 border-amber-800"></div>
    
    <h1 class="font-display text-2xl text-black relative mt-12 mb-8">Soups</h1>
    {#each foodData.soups as item}
        <div class="flex flex-row justify-between m-0">
            <h1 class="font-display">{item.name}</h1>
            <h1>${item.price}</h1>
        </div>
        <h1 class="font-lato mb-8">{item.description}</h1>
    {/each}
    
    <div class="w-full h-4 border-b-2 border-amber-800"></div>
    
    <h1 class="font-display text-2xl text-black relative mt-12 mb-8">Rices</h1>
    {#each foodData.rices as item}
        <div class="flex flex-row justify-between m-0">
            <h1 class="font-display">{item.name}</h1>
            <h1>${item.price}</h1>
        </div>
        <h1 class="font-lato mb-8">{item.description}</h1>
    {/each}
    
    <div class="w-full h-4 border-b-2 border-amber-800"></div>
</div>