<script>
    let { question, answer } = $props();
    let open = $state(false);

    function updateOpen() {
        open = !open;
    }
</script>

<button onclick={updateOpen} class="block font-display text-left cursor-pointer active:animate-button">{question} <span class="font-icons">{open ? "keyboard_arrow_up" : "keyboard_arrow_down"}</span></button>
<p class="{!open && "max-h-0"} {open && "max-h-96"} h-auto transition-all overflow-hidden -mt-8">{answer}</p>