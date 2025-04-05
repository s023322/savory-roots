import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const itemCount = writable(browser && parseInt(localStorage.getItem("itemCount") || "0") || 0);
export const cartItems = writable(browser && JSON.parse(localStorage.getItem("cartItems") || "{}") || '{"items":[]}');