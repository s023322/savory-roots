<script>
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'
  import { loadStripe } from '@stripe/stripe-js'
  import { PUBLIC_STRIPE_KEY } from '$env/static/public'
  import Navbar from '$lib/navbar.svelte';
  import GradientButton from "$lib/gradient-button.svelte";
import {
    Elements,
    PaymentElement,
    LinkAuthenticationElement,
    Address
} from "svelte-stripe";

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
    const response = await fetch('/payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({})
    })
    const { clientSecret } = await response.json()

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
      goto('/order?status=complete')
    }
  }
</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

<div class="z-0 font-lato">
    <div class="mt-24 px-8 w-full max-w-7xl mx-auto">
{#if error}
  <p class="error">{error.message} Please try again.</p>
{/if}

{#if clientSecret}
  <Elements
    {stripe}
            {clientSecret}
            bind:elements
            theme="flat"
            fonts={[{
                cssSrc: "https://fonts.googleapis.com/css?family=Spline+Sans"
                },
                {
                cssSrc: "https://fonts.googleapis.com/css2?family=Playfair+Display"
                }]}
            variables={{fontFamily: "Playfair Display, sans-serif, system-ui", colorDanger:"#ff0000", fontSizeBase:"16px", colorPrimaryText:"#faf5e9", colorText:"#451b00", colorPrimary:"#66754f", colorBackground:"#c0cea0", borderRadius:"16px"}}
            rules={{".Input":{fontFamily:"Spline Sans", padding:"16px"}}}
  >
    <form on:submit|preventDefault={submit} class="space-y-8">
      <LinkAuthenticationElement />
      <PaymentElement />
      <Address mode="billing" />

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
  Loading...
{/if}
</div>
</div>