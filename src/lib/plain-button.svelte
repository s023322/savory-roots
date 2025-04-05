<script>
    let {text, href} = $props();
</script>


<a href={href}>
    <h1 class="active:animate-button   relative text-nowrap   select-none transition-colors duration-200 font-lato text-black hover:text-amber-800">{text}</h1>
</a>