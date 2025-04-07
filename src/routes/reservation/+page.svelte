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
        <div class="w-full max-w-2xl mx-auto justify-between flex flex-row border-2 rounded-full pl-5 pr-2 py-2 items-center text-gray-300">
            <input id="date" class="text-xl text-black border-b-2 px-2" type="date" min="2025-04-23" value="2025-04-23" onchange={checkDate}>
            <input id="time" class="text-black px-2 border-b-2" value="13:30" min="10:00" max="22:00" type="time" onchange={checkDate}>
            <div class="flex flex-row space-x-2 text-black">
                <h1 class="">People:</h1>
                <input id="people" class="text-black w-12 px-2 border-b-2" value="1" min="1" max="10" type="number" onchange={checkDate}>
            </div>
            <h1 id="status" class="font-icons text-amber-800">close</h1>
            <button onclick={submitDate}><GradientButton href="" element="div" text="Submit" padding="8"></GradientButton></button>
        </div>
        <div class="w-fit mx-auto mt-8 h-fit border-2 text-gray-300 rounded-xl p-2">
            <h1 id="header" class="text-black font-display text-xl text-center">This time is not available, sorry</h1>
            <p id="body" class="text-black font-lato text-center mt-2">Try another time or date</p>
        </div>
    </div>
</div>