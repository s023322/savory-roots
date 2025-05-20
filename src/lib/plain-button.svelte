<script>
    let {text, href, home = false} = $props();
</script>


<a href={href}>
    <h1 class="active:animate-button   relative text-nowrap   select-none transition-colors font-lato {home ? "text-white" : "text-black"} dark:text-white hover:text-dark">{text}</h1>
</a>