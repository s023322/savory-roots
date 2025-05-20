<script>
	import GradientButton from "./gradient-button.svelte";

    let {placeholder, input = $bindable()} = $props();
</script>

<main>
    <div class="rounded-full w-fit h-fit   border-2 text-light">
        <input bind:value={input} class="px-3 py-1 rounded-full   font-lato text-black dark:text-white placeholder:text-light" placeholder="{placeholder}" type="text">
    </div>
</main>