<script>
	import { getContext } from "svelte";
    import Dropdown from "./dropdown.svelte";
    import GradientButton from "./gradient-button.svelte";
	import PlainButton from "./plain-button.svelte";
    import { itemCount } from "./stores";
    import { browser } from "$app/environment";
    import { page } from '$app/state';

    let open = $state(false);

    let count = $state(0);
    
    let scrollY = $state(0);
    
    let innerHeight = $state(0);

    let home = page.url.pathname == "/";

    const unsub = itemCount.subscribe((value) => {count = value; if (browser) {localStorage.setItem("itemCount", value.toString()); }})

    if (browser && localStorage.theme == "dark") {
        document.body.classList.add("dark");
    }

    //console.log($itemCount);

    function toggleDark() {
        document.body.classList.toggle(
        "dark");
        localStorage.theme = document.body.classList.contains("dark") ? "dark" : "light";
    }


</script>

<svelte:window bind:scrollY={scrollY} bind:innerHeight={innerHeight}/>

<main class="z-50 top-0">
    <div class="fixed top-0 flex w-full {open && "h-96 sm:h-88 md:h-24"} {!open && "h-16"} transition-all   justify-center backdrop-blur-sm {home && scrollY < innerHeight ? "bg-transparent" : "bg-white/[0.8] dark:bg-black/[0.8]"}">
        <div class="flex max-w-7xl w-full h-16   justify-between   px-8 z-50">
            <div class="flex   items-center space-x-8">
                <a class="font-display {home && scrollY < innerHeight ? "text-white" : "text-black"} dark:text-white text-xl sm:text-2xl sm:mr-16 tracking-tighter whitespace-nowrap" href="/">Savory Roots</a>
                <div class="hidden sm:flex items-center space-x-8">
                    <PlainButton text="Home" href="/" home={home && scrollY < innerHeight}></PlainButton>
                </div>
                <div class="hidden md:flex item-center space-x-8">
                    <PlainButton text="Our Menu" href="/menu" home={home && scrollY < innerHeight}></PlainButton>
                    <PlainButton text="Reservation" href="/reservation" home={home && scrollY < innerHeight}></PlainButton>
                </div>
                <div class="max-sm:inline hidden -mr-16">
                    <Dropdown bind:open text="" home={home && scrollY < innerHeight} hrefs={["", "menu", "reservation", "about", "process", "staff", "faq", "documentation"]} pages={["Home", "Our Menu", "Reservation", "About", "Our Process", "Our Staff", "FAQ", "Reference Page"]}></Dropdown>
                </div>
                <div class="hidden md:inline">
                    <Dropdown bind:open text="More" home={home && scrollY < innerHeight} states={["keyboard_arrow_down", "keyboard_arrow_up"]} hrefs={["about", "process", "staff", "faq", "documentation"]} pages={["About", "Our Process", "Our Staff", "FAQ", "Reference Page"]}></Dropdown>
                </div>
                <div class="max-sm:hidden inline md:hidden -mr-16 z-50">
                    <Dropdown bind:open text="" home={home && scrollY < innerHeight} hrefs={["menu", "reservation", "about", "process", "staff", "faq", "documentation"]} pages={["Our Menu", "Reservation", "About", "Our Process", "Our Staff", "FAQ", "Reference Page"]}></Dropdown>
                </div>
                <i class="px-2"></i>
            </div>
            <div class="hidden lg:flex   items-center {home && scrollY < innerHeight ? "text-white" : "text-blacks"} dark:text-white">
                <h1>Mon-Fri 10AM-10PM</h1>
            </div>
            <div class="flex -mr-4   items-center w-fit h-full">
                <button class="m-0 p-0 w-fit h-fit mr-8" onclick={toggleDark}>
                    <GradientButton text="dark_mode" padding="2" font="icons" href="" element="button"></GradientButton>
                </button>

                <GradientButton text="shopping_bag" padding="2" font="icons" href="/order"></GradientButton>
                <h1 class="relative right-3 bottom-3 px-[5px] py-[1px] pointer-events-none   bg-black dark:bg-white text-white dark:text-black rounded-full text-xs">{count}</h1>
            </div>
        </div>
    </div>
</main>