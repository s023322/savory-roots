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
    <h1 class="font-display text-2xl text-black relative mt-16 mb-8">About Us</h1>
    <p>Ever since its creation in 1945, Savory Roots has been proud to serve the families of Pennsylvania providing them with handcrafted dishes and an experience that leaves each customer coming back for more each and every year. Something that, while a small part of our mission statement, means worlds to us and the work of our staff each and every day.</p>

    <div class="w-full h-7 border-b-2 border-amber-800"></div>
    
    <h1 class="font-display text-2xl text-black relative mt-16">Frequently Asked Questions</h1>

    <Question question="What are your days and hours of operation?" answer="10AM to 10PM, Five days a week(Mon-Fri)"></Question>
    <Question question="How does your restaurant handle allergies?" answer="While we cannot promise to meet the exact needs of every customer, our menu is tailored to handle a variety of allergies, as our chefs are trained and certified to provide allergen friendly meals while avoiding cross contamination."></Question>
    <Question question="How long is the wait time?" answer="While the average wait time varies day to day, customers can usually expect around a 45 minute to one hour wait, however reservations are available for those who wish to request a table in advance."></Question>
    <Question question="Do you offer takeout?" answer="Yes, we currently offer takeout on our website. See the menu tab for more information."></Question>
    <Question question="What methods of payment do you accept?" answer="We currently accept cash, credit, debit cards and Apple pay as valid forms of payment."></Question>
    <Question question="Do you use locally-sourced ingredients in your recipes?" answer="Yes, it is our mission to provide great food at a great value, something that comes in part from the help of our local community and partners who supply us with pesticide free, organic ingredients weekly."></Question>
    <div class="mb-8"></div>

    
    <div class="w-full h-7 border-b-2 border-amber-800"></div>
    
    <h1 class="font-display text-2xl text-black relative mt-16">Our staff</h1>
    <ul class="space-y-8 mb-8">
        <li>
            <a href="https://www.pexels.com/photo/old-man-smiling-2421934/" class="w-full flex flex-col sm:flex-row items-center">
            <div class="w-full max-sm:p-8 sm:w-80 h-64 bg-cover relative bg-center overflow-hidden rounded-lg bg-[url(https://images.pexels.com/photos/2421934/pexels-photo-2421934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]"></div>
            <p class="w-full max-sm:mt-8 sm:px-8">Yun Lan has been Savory Root’s executive chef for over four years. A master chef known for his appearance on Food Network's Chopped and Beat Bobby Flay, he now continues his passion here, committing himself to a mission of innovation and creativity with each and every dish.</p></a>
        </li>
        <li>
            <a href="https://www.pexels.com/photo/man-in-gray-crew-neck-shirt-smiling-3761521/" class="w-full flex flex-col sm:flex-row items-center">
            <div class="w-full max-sm:p-8 sm:w-80 h-64 bg-cover relative bg-center overflow-hidden rounded-lg bg-[url(https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg?auto=compress&cs=tinysrgb&w=600)]"></div>
            <p class="w-full max-sm:mt-8 sm:px-8">John Wei has served as Savory Root’s head hostess for over five years. Having previously served as a hostess at the acclaimed Malai Kitchen in Dallas, she is directly responsible for leading our highly trained team of servers, ensuring smooth service, and coordinating with the kitchen to make sure each order is to the satisfaction of our customers.</p></a>
        </li>
        <li>
            <a href="https://www.pexels.com/photo/shallow-focus-photo-of-man-3018993/" class="w-full flex flex-col sm:flex-row items-center">
            <div class="w-full max-sm:p-8 sm:w-80 h-64 bg-cover relative bg-center overflow-hidden rounded-lg bg-[url(https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]"></div>
            <p class="w-full max-sm:mt-8 sm:px-8">Martin Barlowe has served as Savory Root’s general manager for over ten years. A graduate of the Harvard Business School, Martin Barlowe oversees all aspects of daily operations, ensures customer satisfaction, manages staff, and maintains compliance with health and safety standards.</p></a>
        </li>
    </ul>
</div>