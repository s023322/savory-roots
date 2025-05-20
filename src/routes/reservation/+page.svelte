<script>
    import { browser } from "$app/environment";
    import {base} from "$app/paths"
	import GradientButton from "$lib/gradient-button.svelte";
	import Navbar from "$lib/navbar.svelte";
	import { writable } from "svelte/store";

    if (browser) {
        localStorage.setItem("dates", "2025-04-2313:30")
    }

    function checkDate() {
        if (!localStorage.getItem("dates")?.includes(document.getElementById("date").value+document.getElementById("time").value)) {
            document.getElementById("status").innerHTML = "check";
            document.getElementById("header").innerHTML = "This time is available";
            document.getElementById("body").innerHTML = "Press submit to book your reservation";
        }
        else {
            document.getElementById("status").innerHTML = "close";
            document.getElementById("header").innerHTML = "This time is not available, sorry";
            document.getElementById("body").innerHTML = "Try another time or date";
        }
    }

    function submitDate() {
        if (!localStorage.getItem("dates")?.includes(document.getElementById("date").value+document.getElementById("time").value)) {
            localStorage.setItem("dates", localStorage.getItem("dates") + document.getElementById("date").value+document.getElementById("time").value);
            document.getElementById("status").innerHTML = "favorite";
            document.getElementById("header").innerHTML = "Thank you!";
            document.getElementById("body").innerHTML = "Your reservation has been booked!";
        }
    }
</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

<div class="z-0 font-lato">
    <div class="mt-32 mx-auto w-full max-w-7xl px-8 flex flex-col justify-center">
        <div class="w-fit sm:w-full max-w-2xl mx-auto justify-between flex flex-row max-sm:flex-col border-2 rounded-full max-sm:rounded-xl sm:pl-5 sm:pr-2 max-sm:px-4 max-sm:py-4 sm:py-2 items-center text-light dark:text-dark scheme-light dark:scheme-dark">
            <input id="date" class="text-xl text-black dark:text-white border-b-2 px-2" type="date" min="2025-04-23" value="2025-04-23" onchange={checkDate}>
            <input id="time" class="text-black dark:text-white px-2 py-0.5 border-b-2" value="13:30" min="10:00" max="22:00" type="time" onchange={checkDate}>
            <div class="flex flex-row space-x-2 text-black dark:text-white">
                <h1 class="">People:</h1>
                <input id="people" class="text-black dark:text-white w-12 px-2 border-b-2" value="1" min="1" max="10" type="number" onchange={checkDate}>
            </div>
            <h1 id="status" class="font-icons text-dark">close</h1>
            <button onclick={submitDate}><GradientButton href="" element="div" text="Submit" padding="8"></GradientButton></button>
        </div>
        <div class="w-fit mx-auto mt-8 h-fit border-2 text-light dark:text-dark rounded-xl p-4">
            <h1 id="header" class="text-black dark:text-white font-display text-xl text-center">This time is not available, sorry</h1>
            <p id="body" class="text-black dark:text-white font-lato text-center mt-2">Try another time or date</p>
        </div>
    </div>
</div>