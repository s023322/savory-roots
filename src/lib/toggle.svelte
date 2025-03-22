<script>
	import GradientButton from "./gradient-button.svelte";
	import StandardButton from "./standard-button.svelte";

    let {text, titles, font="Lato", pad="8", tstate = $bindable(0)} = $props();
</script>

<main>
    <div class="relative flex flex-row justify-center space-x-8 p-2   text-gray-300 border-2 rounded-full   w-fit">
        {#each text as t, i}
            <button title={titles[i]} class="flex w-min h-min" onclick={() => tstate = i}>
                {#if tstate != i}
                    <GradientButton href="/order" font={font} text={t} padding={pad}></GradientButton>
                {:else}
                    <div class="px-{pad} py-1   transition duration-200 bg-linear-to-tl from-amber-300 to-amber-800 rounded-full active:from-blue-200">
                        <h1 class="font-{font} text-white">{t}</h1>
                    </div>
                {/if}
            </button>
        {/each}
        <!--<button class="flex w-min h-min" onclick={() => tstate = 1}>
        {#if tstate == 1}
            <div class="px-8 py-1   transition duration-200 bg-linear-to-tl from-amber-300 to-amber-800 rounded-full active:from-blue-200">
                <h1 class="font-lato text-white">Delivery</h1>
            </div>
        {:else}
            <GradientButton href="/order" text="Delivery" padding="8"></GradientButton>
        {/if}
        </button>-->
    </div>
</main>