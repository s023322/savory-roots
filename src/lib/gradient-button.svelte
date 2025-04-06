<script>
    let {text, font = "lato", href, padding="2", title="", element="a", iconText=""} = $props();
    if (element == "h1") {
        element = "div";
    }
</script>


<svelte:element this={element} href={href || null} title={title} class="px-{padding} py-1 cursor-pointer   select-none transition duration-200 from-black to-black bg-linear-to-tl hover:from-amber-300 hover:to-amber-800 group-hover:from-amber-300 group-hover:to-amber-800 rounded-full active:from-white active:to-black active:animate-button">
    <h1 class="font-{font} text-white">{text}<span class="font-icons relative top-0.5">{iconText}</span></h1>
</svelte:element>