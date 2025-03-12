<script>
	import GradientButton from "./gradient-button.svelte";

    let {placeholder, input = $bindable()} = $props();
</script>

<main>
    <div class="rounded-full w-fit h-fit   border-2 text-gray-300">
        <input bind:value={input} class="px-3 py-1 rounded-full   font-lato text-black placeholder:text-gray-300" placeholder="{placeholder}" type="text">
    </div>
</main>