<script>
  import { createEventDispatcher } from "svelte";
	import GradientButton from "./gradient-button.svelte";

    let {placeholder = "", spacing="32", id, label, type} = $props();
</script>

<div class="flex flex-row items-center w-full">
  <div class="w-24">
    <label for={id} class="text-black dark:text-white text-nowrap block w-48">{label}</label>
  </div>
  <div class="w-full sm:mr-4 max-sm:overflow-hidden rounded-2xl">
    <input id={id} class="bg-black dark:bg-white p-2 w-full rounded-2xl text-white dark:text-black ml-4" placeholder={placeholder} type={type} required>
  </div>
</div>