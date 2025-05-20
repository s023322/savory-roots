<script>
	import { fade } from "svelte/transition";
	import PlainButton from "./plain-button.svelte";

    let {text, pages, hrefs, states=["menu", "menu_open"], open = $bindable()} = $props();

    function updateOpen() {
        open = !open;
    }
</script>
<div class="h-6">
    <button type="button" class="group cursor-pointer active:animate-button flex items-center" onclick={updateOpen}>
        <h1 class="text-black dark:text-white group-hover:text-dark h-6 items-center flex">{ text }<span class="font-icons ml-1 mt-0.5">{!open ? states[0] : states[1]}</span></h1>
    </button>
    <!--{#if open}-->
        <div class="fixed flex h-64 flex-col md:flex-row left-0 top-16 w-full md:h-8 overflow-hidden transition-all {open ? "max-h-screen sm:max-h-56 max-md:pb-8" : "max-h-0"}   justify-center md:justify-evenly md:items-center">
            <div class="absolute left-0 top-0 w-full h-full {open ? "max-h-96" : "max-h-0"} z-0   border-t-2 text-dark"></div>
            {#if open}{#each pages as page, i}
            <div class="flex relative top-4 md:top-0 mx-8 my-2 md:inline">
                <PlainButton text={page} href="./{hrefs[i]}"></PlainButton>
            </div>
            {/each}{/if}
        </div>
    <!--{/if}-->
</div>