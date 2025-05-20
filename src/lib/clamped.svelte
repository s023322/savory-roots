<script>
    let { text } = $props();
    let open = $state(false);
</script>

<h1 class="{!open ? "line-clamp-5" : ""}">{text}</h1>
<button class="flex cursor-pointer w-full justify-center h-fit text-[16px]/[1] -mb-4" onclick={open = !open}>
    <h1 class="font-icons relative top-1 {open && "hidden"}">keyboard_arrow_down</h1>
    <h1 class="font-icons relative top-1 {!open && "hidden"}">keyboard_arrow_up</h1>
</button>