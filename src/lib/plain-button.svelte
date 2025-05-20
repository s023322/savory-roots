<script>
    let {text, href} = $props();
</script>


<a href={href}>
    <h1 class="active:animate-button   relative text-nowrap   select-none transition-colors duration-200 font-lato text-black dark:text-white hover:text-dark">{text}</h1>
</a>