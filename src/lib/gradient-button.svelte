<script>
    let {text, font = "lato", href, padding="2"} = $props();
</script>


<a href={href} class="px-{padding} py-1   transition duration-200 from-black to-black bg-linear-to-tl hover:from-amber-300 hover:to-amber-800 rounded-full active:from-blue-200">
    <h1 class="font-{font} text-white">{text}</h1>
</a>