<script>
    import { browser } from "$app/environment";
    import {base} from "$app/paths"
	import GradientButton from "$lib/gradient-button.svelte";
    import Input from "$lib/input.svelte";
	import Navbar from "$lib/navbar.svelte";
	import { writable } from "svelte/store";

    if (browser) {
        localStorage.setItem("dates", "2025-04-2313:30")
    }

    let booked = $state(false);

    function checkDate() {
        if (!localStorage.getItem("dates")?.includes(document.getElementById("date").value+document.getElementById("time").value)) {
            //document.getElementById("status").innerHTML = "check";
            document.getElementById("header").innerHTML = "This time is available";
            document.getElementById("body").innerHTML = "Press submit to book your reservation";
        }
        else {
            //document.getElementById("status").innerHTML = "close";
            document.getElementById("header").innerHTML = "This time is not available, sorry";
            document.getElementById("body").innerHTML = "Try another time or date";
        }
    }

    function submitDate() {
        let filled = true;
        let ids = ["date", "time", "size", "email", "name"];

        for (let index = 0; index < ids.length; index++) {
            if (browser && document.getElementById(ids[index]).value == "") {
                filled = false;
            }
        }

        if (!localStorage.getItem("dates")?.includes(document.getElementById("date").value+document.getElementById("time").value) && filled) {
            localStorage.setItem("dates", localStorage.getItem("dates") + document.getElementById("date").value+document.getElementById("time").value);
            booked = true;
            //document.getElementById("status").innerHTML = "favorite";
            document.getElementById("header").innerHTML = "Thank you!";
            document.getElementById("body").innerHTML = "Your reservation has been booked!";
        }
    }
</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

<div class="z-0 font-lato text-xl max-w-7xl p-8 relative mx-auto">
    <div class="flex flex-row m-0 justify-between items-center">
        <h1 class="font-display text-2xl text-black dark:text-white relative mt-16 text-[67px]">Reservation</h1>
        
        <div class="flex mt-[60px] text-dark border-2 rounded-full w-min h-min hover:border-white max-sm:hidden">
            <a class="flex flex-row w-min   space-x-4 items-center   group   bg-white hover:bg-black dark:bg-black dark:hover:bg-white rounded-full pl-2   border-2 text-white dark:text-black hover:text-black dark:hover:text-white" href="/order/">
                <h1 class="text-black dark:text-white group-hover:text-white  dark:group-hover:text-black text-nowrap text-[16px]">Order</h1>
                <GradientButton element="div" text="arrow_outward" title="Order" font="icons" href="/order/"></GradientButton>
            </a>
        </div>
    </div>

    <div class="w-full h-8 border-b-2 border-dark"></div>

    <div class="mt-12 mx-auto w-full max-w-7xl flex flex-col justify-center">
        <form class="flex flex-col w-full p-8 border-2 text-light rounded-2xl justify-center space-y-4">
            <div class="w-full h-fit flex flex-row max-sm:flex-col items-center sm:space-x-8 space-y-4">
                <Input type="date" id="date" label="Date"></Input>
                <Input type="time" id="time" label="Time"></Input>
            </div>
            <div class="w-full h-fit flex flex-row max-sm:flex-col items-center sm:space-x-8 space-y-8">
                <Input type="number" id="size" label="Group Size" placeholder="1"></Input>
                <Input type="email" id="email" label="Email" placeholder="user@example.com"></Input>
            </div>
                <Input type="text" id="name" label="Full Name" placeholder="John Doe" spacing="28"></Input>
            <div class="flex w-fit mx-auto">
                <button onclick={submitDate} type="submit">
                <GradientButton element="div" padding=4 text="Book"></GradientButton>
                </button>
            </div>
        </form>
        <div class="w-fit mx-auto mt-8 h-fit border-2 text-light dark:text-dark rounded-xl p-4 {booked ? "block" : "hidden"}">
            <h1 id="header" class="text-black dark:text-white font-display text-xl text-center">This time is not available, sorry</h1>
            <p id="body" class="text-black dark:text-white font-lato text-center mt-2">Try another time or date</p>
        </div>
    </div>
</div>