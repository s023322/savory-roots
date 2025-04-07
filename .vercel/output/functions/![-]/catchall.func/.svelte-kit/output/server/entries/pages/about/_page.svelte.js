import "clsx";
import { N as Navbar } from "../../../chunks/navbar.js";
import { e as escape_html, d as attr_class, f as stringify } from "../../../chunks/index3.js";
function Question($$payload, $$props) {
  let { question, answer } = $$props;
  let open = false;
  $$payload.out += `<button class="block font-display text-left cursor-pointer active:animate-button">${escape_html(question)} <span class="font-icons">${escape_html("keyboard_arrow_down")}</span></button> <p${attr_class(`${stringify("max-h-0")} ${stringify(open)} h-auto transition-all overflow-hidden -mt-8`)}>${escape_html(answer)}</p>`;
}
function _page($$payload) {
  $$payload.out += `<div class="z-50 fixed">`;
  Navbar($$payload);
  $$payload.out += `<!----></div> <div class="z-0 font-lato text-xl max-w-7xl space-y-8 p-8 relative mx-auto"><h1 class="font-display text-2xl text-black relative mt-16 mb-8">About Us</h1> <p>Ever since its creation in 1945, Savory Roots has been proud to serve the families of Pennsylvania providing them with handcrafted dishes and an experience that leaves each customer coming back for more each and every year. Something that, while a small part of our mission statement, means worlds to us and the work of our staff each and every day.</p> <div class="w-full h-7 border-b-2 border-amber-800"></div> <h1 class="font-display text-2xl text-black relative mt-16 mb-8">Frequently Asked Questions</h1> `;
  Question($$payload, {
    question: "What are your days and hours of operation?",
    answer: "10AM to 10PM, Five days a week(Mon-Fri)"
  });
  $$payload.out += `<!----> `;
  Question($$payload, {
    question: "How does your restaurant handle allergies?",
    answer: "While we cannot promise to meet the exact needs of every customer, our menu is tailored to handle a variety of allergies, as our chefs are trained and certified to provide allergen friendly meals while avoiding cross contamination."
  });
  $$payload.out += `<!----> `;
  Question($$payload, {
    question: "How long is the wait time?",
    answer: "While the average wait time varies day to day, customers can usually expect around a 45 minute to one hour wait, however reservations are available for those who wish to request a table in advance."
  });
  $$payload.out += `<!----> `;
  Question($$payload, {
    question: "Do you offer takeout?",
    answer: "Yes, we currently offer takeout on our website. See the menu tab for more information."
  });
  $$payload.out += `<!----> `;
  Question($$payload, {
    question: "What methods of payment do you accept?",
    answer: "We currently accept cash, credit, debit cards and Apple pay as valid forms of payment."
  });
  $$payload.out += `<!----> `;
  Question($$payload, {
    question: "Do you use locally-sourced ingredients in your recipes?",
    answer: "Yes, it is our mission to provide great food at a great value, something that comes in part from the help of our local community and partners who supply us with pesticide free, organic ingredients weekly."
  });
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
