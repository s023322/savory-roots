<script>
import {
    base
} from "$app/paths"
import GradientButton from "$lib/gradient-button.svelte";
import Navbar from "$lib/navbar.svelte";
import {
    writable
} from "svelte/store";
import {
    PUBLIC_STRIPE_KEY
} from "$env/static/public"
import {
    onMount
} from "svelte";
import {
    loadStripe
} from "@stripe/stripe-js";
import {
    Elements,
    PaymentElement,
    LinkAuthenticationElement,
    Address
} from "svelte-stripe";
import {
    goto
} from "$app/navigation";

let stripe = null
let clientSecret = null
let error = null
let elements
let processing = false

onMount(async () => {
    stripe = await loadStripe(PUBLIC_STRIPE_KEY)

    clientSecret = await createPaymentIntent()
})

async function createPaymentIntent() {
    const response = await fetch('/payment-intent?price="2000"', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({})
    })
    const {
        clientSecret
    } = await response.json()

    return clientSecret
}

async function submit() {
    if (processing) return

    processing = true

    const result = await stripe.confirmPayment({
        elements,
        redirect: 'if_required'
    })

    if (result.error) {
        error = result.error
        processing = false
    } else {
        goto("/order?status=complete")
    }
}

const options = {
    appearance: {
        theme:"night",
        fonts: [
            {
                cssSrc: "https://fonts.googleapis.com/css?family=Croissant+One"
            }
        ],
        variables: {
            fontFamily: "Croissant One",
        }
    }
}
</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

<div class="z-0 font-lato">
    <div class="mt-24 px-8 w-full max-w-7xl mx-auto">
        {#if clientSecret}
        <Elements
            {stripe}
            {clientSecret}
            bind:elements
            theme="flat"
            fonts={[{
                cssSrc: "https://fonts.googleapis.com/css?family=Alegreya+Sans"
                },
                {
                cssSrc: "https://fonts.googleapis.com/css2?family=Croissant+One"
                }]}
            variables={{fontFamily: "Croissant One, sans-serif, system-ui", colorDanger:"#ff0000", fontSizeBase:"16px", colorPrimaryText:"#faf5e9", colorText:"#451b00", colorPrimary:"#66754f", colorBackground:"#faf5e9", borderRadius:"8px"}}
            rules={{".Input":{fontFamily:"Alegreya Sans", padding:"8px"}}}
            >
            <form on:submit|preventDefault={submit}>
                <div class="hidden"><LinkAuthenticationElement /></div>
                <PaymentElement options={{layout: {type:"tabs", defaultCollapsed:false}}} />
    
                <button class="w-fit mx-auto relative block mt-8" disabled={processing}>
                    {#if processing}
                    <div class="w-fit h-fit font-lato text-lg flex flex-row space-x-2"><h1 class="relative block w-fit h-fit animate-spin font-icons">progress_activity</h1><h1>Processing...</h1></div>
                    {:else}
                    <GradientButton text="Confirm and Pay" href="" element="div" padding="4"></GradientButton>
                    {/if}
                </button>
            </form>
        </Elements>
        {:else}
        <div class="w-fit h-fit font-lato text-lg flex flex-row space-x-2"><h1 class="relative block w-fit h-fit animate-spin font-icons">progress_activity</h1><h1>Loading...</h1></div>
        {/if}
    </div>
</div>
