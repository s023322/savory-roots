<script>
	import { fade } from "svelte/transition";
	import PlainButton from "./plain-button.svelte";

    let {text, pages, open = $bindable()} = $props();

    function updateOpen() {
        open = !open;
    }
</script>

<main>
    <button type="button" class="group cursor-pointer" onclick={updateOpen}>
        <h1 class="text-black group-hover:text-amber-800">{ text }<span class="font-icons relative ml-1 -bottom-0.5">keyboard_arrow_down</span></h1>
    </button>
    {#if open}
        <div transition:fade={{duration: 100}} class="fixed flex flex-col md:flex-row left-0 top-16 w-full h-48 md:h-8   justify-center md:justify-evenly md:items-center">
            <div class="absolute left-0 top-0 w-full h-full z-0   border-t-2 text-amber-800"></div>
            {#each pages as page}
            <div class="flex relative top-4 md:top-0 mx-8 my-2 md:inline">
                <PlainButton text={page} href="./#{page}"></PlainButton>
            </div>
            {/each}
        </div>
    {/if}
</main>