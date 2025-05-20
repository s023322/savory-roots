<script>
    let {text, font = "lato", href, padding="2"} = $props();
</script>


<a href={href} class="group px-{padding} py-[2px]   active:animate-button select-none transition duration-200 bg-white dark:bg-black text-light hover:bg-black hover:text-black dark:hover:bg-white dark:hover:text-white rounded-full   border-2">
    <h1 class="font-{font} text-black group-hover:text-white dark:text-white dark:group-hover:text-black">{text}</h1>
</a>