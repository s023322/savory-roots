<script>
  import { createEventDispatcher } from "svelte";
	import GradientButton from "./gradient-button.svelte";

    let {placeholder = "", w="1/2", spacing="32", id, label, type} = $props();

    const dispatch = createEventDispatcher();

    function changeInput() {
        dispatch("changeInput");
    }
</script>

<div class="flex flex-row items-center w-{w}">
<label for={id} class="text-black dark:text-white text-nowrap ml-8 mr-4 block w-{spacing}">{label}</label>
<input id={id} class="bg-black dark:bg-white p-2 w-full rounded-2xl text-white dark:text-black" placeholder={placeholder} type={type}>
</div>