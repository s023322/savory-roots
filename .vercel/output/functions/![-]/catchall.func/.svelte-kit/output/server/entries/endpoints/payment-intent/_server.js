import { j as json } from "../../../chunks/index.js";
import Stripe from "stripe";
import "../../../chunks/client.js";
import "clsx";
const SECRET_STRIPE_KEY = "sk_test_51OnOAzH4ceWkCZ13EoDQKI80LrWTxGhtcen5qoIrcGjWYdd8fyZc17z2a2UFDj1rshGMhHRum3G13RTtDA9bBB5R00Xq2Ap2C1";
const stripe = new Stripe(SECRET_STRIPE_KEY);
async function POST() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true
    }
  });
  return json({
    clientSecret: paymentIntent.client_secret
  });
}
export {
  POST
};
