import "clsx";
import { N as Navbar } from "../../../chunks/navbar.js";
function _page($$payload) {
  $$payload.out += `<div class="z-50 fixed">`;
  Navbar($$payload);
  $$payload.out += `<!----></div> <div class="z-0 font-lato"><img alt="Menu" class="mx-auto my-8 w-[calc(100%-64px)] h-full rounded-3xl overflow-hidden pointer-events-none select-none" src="https://picsum.photos/200/300"></div>`;
}
export {
  _page as default
};
