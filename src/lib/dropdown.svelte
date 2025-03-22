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
        <div transition:fade={{duration: 100}} class="fixed flex flex-row left-0 top-16 w-full h-8   justify-evenly items-center">
            <div class="absolute left-0 top-0 w-full h-full opacity-75 z-0   bg-white border-t-2 text-gray-300"></div>
            {#each pages as page}
                <PlainButton text={page} href="./#{page}"></PlainButton>
            {/each}
        </div>
    {/if}
</main>