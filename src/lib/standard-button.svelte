<script>
    let {text, font = "lato", href, padding="2"} = $props();
</script>


<a href={href} class="group px-{padding} py-[2px]   transition duration-200 bg-white text-gray-300 hover:bg-black hover:text-black rounded-full   border-2">
    <h1 class="font-{font} text-black group-hover:text-white">{text}</h1>
</a>