<script>
	import { getContext } from "svelte";
    import Dropdown from "./dropdown.svelte";
    import GradientButton from "./gradient-button.svelte";
	import PlainButton from "./plain-button.svelte";
    import { itemCount } from "./stores";
    import { browser } from "$app/environment";
    let open = false;

    let count = 0

    const unsub = itemCount.subscribe((value) => {count = value; if (browser) {localStorage.setItem("itemCount", value.toString()); }})

    //console.log($itemCount);
</script>

<main class="z-50 top-0">
    <div class="fixed top-0 flex w-full {open && "h-24"} {!open && "h-16"}   justify-center backdrop-blur-sm bg-white/[0.75]">
        <div class="flex max-w-7xl w-full h-16   justify-between   px-8 z-50">
            <div class="flex   items-center space-x-8">
                <h1 class="font-display text-2xl mr-16 tracking-tighter   pointer-events-none">Savory Roots</h1>
                <PlainButton text="Home" href="/"></PlainButton>
                <PlainButton text="Our Menu" href="./"></PlainButton>
                <PlainButton text="Reservation" href="./"></PlainButton>
                <Dropdown bind:open text="More" pages="{["About", "Our Process", "Documentation"]}"></Dropdown>
                <i class="px-2"></i>
            </div>
            <div class="flex -mr-4   items-center w-fit h-full">
                <GradientButton text="shopping_bag" padding="2" font="icons" href="/order"></GradientButton>
                <h1 class="relative right-3 bottom-3 px-[5px] py-[1px] pointer-events-none   bg-black text-white rounded-full text-xs">{count}</h1>
            </div>
        </div>
    </div>
</main>