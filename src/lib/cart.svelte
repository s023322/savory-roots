<script>
	import GradientButton from "./gradient-button.svelte";
	import { itemCount, cartTotal } from "./stores";
    import { browser } from "$app/environment";
    import { cartItems } from "./stores";
    import { get } from "svelte/store";
    import { untrack } from "svelte";

    let data = $state();
    let items = $state();
    let addedPrice = $state(0);
    let open = $state(false);
    let text = $state("shopping_cart");

    let count = $state(0);

    const itemUnsub = itemCount.subscribe((value) => {count = value; if (browser) {localStorage.setItem("itemCount", value.toString()); }});


    const unsub = cartItems.subscribe((value) => {data = value; if (browser) {localStorage.setItem("cartItems", JSON.stringify(value)); }});

    export function updateTotal () {
        addedPrice = 0;
        if (data["items"]) {
            for (let i = 0; i < data["items"].length; i++) {
                addedPrice += data["items"][i].price;
            }
        }
        addedPrice = Math.round(addedPrice * 100.0) / 100.0;
        localStorage.setItem("cartTotal", addedPrice.toFixed(2).toString());
        cartTotal.set(addedPrice);
        
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
            text = "close";
        }
        else {
            text = "shopping_cart";
        }
    }
</script>

<div class="lg:w-64 lg:h-fit  transition-all duration-50 overflow-hidden lg:relative lg:top-0 lg:flex    max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:fixed max-lg:block   {!open && "max-lg:w-0 max-lg:max-w-0 max-lg:h-0 max-lg:top-24"} {open && "max-lg:block max-lg:h-fit max-lg:top-24 max-lg:px-8 max-lg:min-w-full max-lg:max-w-7xl"}">
    <div class="flex flex-col justify-center p-4 rounded-3xl w-full   text-light dark:text-dark bg-white dark:bg-black border-2">
        <h1 class="font-display text-black dark:text-white text-xl">Cart</h1>
        <div class="flex flex-col p-2   text-black dark:text-white">
            {#each items as item, i}
                    <button onmousedown={() => {removeItem(item); updateTotal()}} class="w-full flex flex-row justify-between   text-black dark:text-white hover:text-light cursor-pointer transition-colors duration-200  active:animate-delete">
                        <div class="flex items-center space-x-2">
                            <h1 class="font-icons">close</h1>
                            <h1>{item.name}</h1>
                        </div>
                        <h1>${item.price}</h1>
                    </button>
            {/each}
            <div class="w-full h-0.5 my-2 bg-dark"></div>
            <div class="flex flex-row   justify-between -mb-2">
                <h1>Total</h1>
                <h1>${addedPrice.toFixed(2)}</h1>
            </div>
        </div>
        {#if count > 0}
        <div class="mt-4 text-light border-2 rounded-full w-min hover:border-white">
            <a class="flex flex-row w-min   space-x-4 items-center   group   bg-white hover:bg-black dark:bg-black dark:hover:bg-white rounded-full pl-2   border-2 text-white hover:text-black dark:text-black dark:hover:text-white" href="/checkout/">
                <h1 class="text-black dark:text-white group-hover:text-white dark:group-hover:text-black text-nowrap">Checkout</h1>
                <GradientButton element="div" text="arrow_outward" title="Checkout" font="icons" href="/checkout/"></GradientButton>
            </a>
        </div>
        {/if}
    </div>
</div>
<div class="fixed z-60 top-0 w-full left-0  flex lg:hidden pointer-events-none">
    <div class="flex justify-end float-right ml-auto mr-8 py-4">
        <button class="relative flex pointer-events-auto" onclick="{updateDrop}">
            <h1 class="relative left-9 bottom-1.5 px-[5px] py-[1px] pointer-events-none h-min   bg-black dark:bg-white text-white dark:text-black rounded-full text-xs">{count}</h1>
            <GradientButton font="icons" text={text} element="h1" href=""></GradientButton>
        </button>
    </div>
</div>