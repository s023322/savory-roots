<script>
    import {base} from "$app/paths"
	import GradientButton from "$lib/gradient-button.svelte";
	import Navbar from "$lib/navbar.svelte";
	import { writable } from "svelte/store";
    import Question from "$lib/question.svelte";

</script>

<div class="z-50 fixed">
    <Navbar></Navbar>
</div>

<div class="z-0 font-lato text-xl max-w-7xl space-y-8 p-8 relative mx-auto">
    <h1 class="font-display text-2xl text-black dark:text-white relative mt-16 mb-8 text-[67px]">Frequently Asked Questions</h1>

    <div class="w-full h-7 border-b-2 border-dark"></div>

    <Question question="What are your days and hours of operation?" answer="10AM to 10PM, Five days a week(Mon-Fri)"></Question>
    <Question question="How does your restaurant handle allergies?" answer="While we cannot promise to meet the exact needs of every customer, our menu is tailored to handle a variety of allergies, as our chefs are trained and certified to provide allergen friendly meals while avoiding cross contamination."></Question>
    <Question question="How long is the wait time?" answer="While the average wait time varies day to day, customers can usually expect around a 45 minute to one hour wait, however reservations are available for those who wish to request a table in advance."></Question>
    <Question question="Do you offer takeout?" answer="Yes, we currently offer takeout on our website. See the menu tab for more information."></Question>
    <Question question="What methods of payment do you accept?" answer="We currently accept cash, credit, debit cards and Apple pay as valid forms of payment."></Question>
    <Question question="Do you use locally-sourced ingredients in your recipes?" answer="Yes, it is our mission to provide great food at a great value, something that comes in part from the help of our local community and partners who supply us with pesticide free, organic ingredients weekly."></Question>
    <div class="mb-8"></div>
</div>