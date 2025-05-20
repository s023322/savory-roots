<script>
	import GradientButton from "./gradient-button.svelte";
	import StandardButton from "./standard-button.svelte";

    let {text, titles, font="Lato", pad="4", space="4", tstate = $bindable(0)} = $props();
</script>

    <div class="relative flex flex-row justify-center space-x-4 sm:space-x-{space} p-2   text-light dark:text-dark border-2 rounded-full   w-fit max-sm:max-w-dvw overflow-x-scroll">
        {#each text as t, i}
            <button title={titles[i]} class="active:animate-button flex relative w-min h-min" onclick={() => tstate = i}>
                {#if tstate != i}
                    <GradientButton href="" element="div" font={font} text={t} padding={pad}></GradientButton>
                {:else}
                    <div class="px-{pad} py-1.5   transition duration-200 bg-linear-to-tl from-light to-dark rounded-full cursor-pointer select-none">
                        <h1 class="font-{font} text-white dark:text-black">{t}</h1>
                    </div>
                {/if}
            </button>
        {/each}
        <!--<button class="flex w-min h-min" onclick={() => tstate = 1}>
        {#if tstate == 1}
            <div class="px-8 py-1   transition duration-200 bg-linear-to-tl from-light to-dark rounded-full active:from-blue-200">
                <h1 class="font-lato text-white">Delivery</h1>
            </div>
        {:else}
            <GradientButton href="/order" text="Delivery" padding="8"></GradientButton>
        {/if}
        </button>-->
    </div>