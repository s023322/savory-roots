import { g as copy_payload, j as assign_payload, c as pop, p as push } from "../../../chunks/index3.js";
import { N as Navbar } from "../../../chunks/navbar.js";
import "clsx";
import "@stripe/stripe-js";
import "../../../chunks/client2.js";
function _page($$payload, $$props) {
  push();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="z-50 fixed">`;
    Navbar($$payload2);
    $$payload2.out += `<!----></div> <div class="z-0 font-lato"><div class="mt-24 px-8 w-full max-w-7xl mx-auto">`;
    {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="w-fit h-fit font-lato text-lg flex flex-row space-x-2"><h1 class="relative block w-fit h-fit animate-spin font-icons">progress_activity</h1><h1>Loading...</h1></div>`;
    }
    $$payload2.out += `<!--]--></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
