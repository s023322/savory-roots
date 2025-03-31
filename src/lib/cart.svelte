<script>
	import GradientButton from "./gradient-button.svelte";
	import { itemCount } from "./stores";
    import { browser } from "$app/environment";
    import { cartItems } from "./stores";
    import { get } from "svelte/store";
    import { untrack } from "svelte";

    let data = $state();
    let items = $state();
    let addedPrice = $state(0);
    let open = $state(false);
    let text = $state("shopping_cart");


    const unsub = cartItems.subscribe((value) => {data = value; if (browser) {localStorage.setItem("cartItems", JSON.stringify(value)); }})

    export function updateTotal () {
        addedPrice = 0;
        for (let i = 0; i < data["items"].length; i++) {
            addedPrice += data["items"][i].price;
        }
    }

    $effect (() => {
        untrack(() => {updateTotal()});
        change(data);
    })

    function change(itms) {
        items = data["items"];
    }

    function removeItem(item) {
        itemCount.set(data["items"].length - 1);
        itemCount.set(Math.max(0, $itemCount));
        data["items"].splice(data["items"].indexOf(item), 1);
        data["items"] = data["items"].sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            else if (a.name < b.name) {
                return -1;
            }
            else {
                return 0;
            }
        });
        localStorage.setItem("cartItems", JSON.stringify(data));
        cartItems.set(data);
    }

    function updateDrop() {
        open = !open;
        if (open) {
            text = "chevron_right";
        }
        else {
            text = "shopping_cart";
        }
    }
</script>

<div class="{!open && "hidden"} {open && "block absolute left-1/2 -translate-x-1/2 px-8 min-w-full max-w-7xl"} lg:block lg:w-64">
    <div class="flex flex-col justify-center p-4 rounded-3xl w-full   text-gray-300 bg-white border-2">
        <h1 class="font-display text-black text-xl">Cart</h1>
        <div class="flex flex-col p-2   text-black">
            {#each items as item, i}
                    <button onclick={() => {removeItem(item); updateTotal()}} class="w-full flex flex-row justify-between   text-black hover:text-amber-300 cursor-pointer transition-colors duration-200">
                        <h1>{item.name}</h1>
                        <h1>${item.price}</h1>
                    </button>
            {/each}
            <div class="w-full h-0.5 my-2 bg-amber-800"></div>
            <div class="flex flex-row -mb-2   justify-between">
                <h1>Total</h1>
                <h1>${addedPrice}</h1>
            </div>
        </div>
    </div>
</div>
<div class="fixed top-1/2 -translate-y-1/2 right-8   flex lg:hidden">
    <button onclick="{updateDrop}">
        <GradientButton font="icons" text="{text}" element="h1" href=""></GradientButton>
    </button>
</div>