<script>
    let {text, font = "lato", href, padding="2", title="", element="a"} = $props();
</script>


<svelte:element this={element} href={href || null} title={title} class="px-{padding} py-1   select-none transition duration-200 from-black to-black bg-linear-to-tl hover:from-amber-300 hover:to-amber-800 group-hover:from-amber-300 group-hover:to-amber-800 rounded-full active:from-white active:to-black">
    <h1 class="font-{font} text-white">{text}</h1>
</svelte:element>