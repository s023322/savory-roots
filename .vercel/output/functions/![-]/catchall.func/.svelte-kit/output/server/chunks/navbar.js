import { q as element, d as attr_class, e as escape_html, f as stringify, n as attr, p as push, k as ensure_array_like, l as bind_props, c as pop, g as copy_payload, j as assign_payload } from "./index3.js";
import { w as writable } from "./index2.js";
function Gradient_button($$payload, $$props) {
  let {
    text,
    font = "lato",
    href,
    padding = "2",
    title = "",
    element: element$1 = "a",
    iconText = ""
  } = $$props;
  if (element$1 == "h1") {
    element$1 = "div";
  }
  element(
    $$payload,
    element$1,
    () => {
      $$payload.out += `${attr("href", href || null)}${attr("title", title)}${attr_class(`px-${stringify(padding)} py-1 cursor-pointer select-none transition duration-200 from-black to-black bg-linear-to-tl hover:from-amber-300 hover:to-amber-800 group-hover:from-amber-300 group-hover:to-amber-800 rounded-full active:from-white active:to-black active:animate-button`)}`;
    },
    () => {
      $$payload.out += `<h1${attr_class(`font-${stringify(font)} text-white`)}>${escape_html(text)}<span class="font-icons relative top-0.5">${escape_html(iconText)}</span></h1>`;
    }
  );
}
function Plain_button($$payload, $$props) {
  let { text, href } = $$props;
  $$payload.out += `<a${attr("href", href)}><h1 class="active:animate-button relative text-nowrap select-none transition-colors duration-200 font-lato text-black hover:text-amber-800">${escape_html(text)}</h1></a>`;
}
function Dropdown($$payload, $$props) {
  push();
  let {
    text,
    pages,
    hrefs,
    states = ["menu", "menu_open"],
    open = void 0
  } = $$props;
  $$payload.out += `<main><button type="button" class="group cursor-pointer active:animate-button"><h1 class="text-black group-hover:text-amber-800">${escape_html(text)}<span class="font-icons relative ml-1 -bottom-0.5">${escape_html(!open ? states[0] : states[1])}</span></h1></button> <div${attr_class(`fixed flex h-64 flex-col md:flex-row left-0 top-16 w-full md:h-8 overflow-hidden transition-all ${stringify(open ? "max-h-screen sm:max-h-56 max-md:pb-8" : "max-h-0")} justify-center md:justify-evenly md:items-center`)}><div${attr_class(`absolute left-0 top-0 w-full h-full ${stringify(open ? "max-h-96" : "max-h-0")} z-0 border-t-2 text-amber-800`)}></div> `;
  if (open) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(pages);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let page = each_array[i];
      $$payload.out += `<div class="flex relative top-4 md:top-0 mx-8 my-2 md:inline">`;
      Plain_button($$payload, {
        text: page,
        href: `./${stringify(hrefs[i])}`
      });
      $$payload.out += `<!----></div>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></main>`;
  bind_props($$props, { open });
  pop();
}
const itemCount = writable(0);
const cartItems = writable('{"items":[]}');
const cartTotal = writable(0);
function Navbar($$payload, $$props) {
  push();
  let open = false;
  let count = 0;
  itemCount.subscribe((value) => {
    count = value;
  });
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<main class="z-50 top-0"><div${attr_class(`fixed top-0 flex w-full ${stringify(open && "h-80 sm:h-72 md:h-24")} ${stringify(!open && "h-16")} transition-all justify-center backdrop-blur-sm bg-white/[0.75]`)}><div class="flex max-w-7xl w-full h-16 justify-between px-8 z-50"><div class="flex items-center space-x-8"><h1 class="font-display text-xl sm:text-2xl sm:mr-16 tracking-tighter whitespace-nowrap pointer-events-none">Savory Roots</h1> <div class="hidden sm:flex items-center space-x-8">`;
    Plain_button($$payload2, { text: "Home", href: "/" });
    $$payload2.out += `<!----></div> <div class="hidden md:flex item-center space-x-8">`;
    Plain_button($$payload2, { text: "Our Menu", href: "/menu" });
    $$payload2.out += `<!----> `;
    Plain_button($$payload2, { text: "Reservation", href: "./" });
    $$payload2.out += `<!----></div> <div class="max-sm:inline hidden -mr-16">`;
    Dropdown($$payload2, {
      text: "",
      hrefs: [
        "",
        "menu",
        "reservation",
        "about",
        "process",
        "documentation"
      ],
      pages: [
        "Home",
        "Our Menu",
        "Reservation",
        "About",
        "Our Process",
        "Documentation"
      ],
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div class="hidden md:inline">`;
    Dropdown($$payload2, {
      text: "More",
      states: ["keyboard_arrow_down", "keyboard_arrow_up"],
      hrefs: ["about", "process", "documentation"],
      pages: ["About", "Our Process", "Documentation"],
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div class="max-sm:hidden inline md:hidden -mr-16">`;
    Dropdown($$payload2, {
      text: "",
      hrefs: [
        "menu",
        "reservation",
        "about",
        "process",
        "documentation"
      ],
      pages: [
        "Our Menu",
        "Reservation",
        "About",
        "Our Process",
        "Documentation"
      ],
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <i class="px-2"></i></div> <div class="hidden lg:flex items-center"><h1>Mon-Fri 10AM-10PM</h1></div> <div class="flex -mr-4 items-center w-fit h-full">`;
    Gradient_button($$payload2, {
      text: "shopping_bag",
      padding: "2",
      font: "icons",
      href: "/order"
    });
    $$payload2.out += `<!----> <h1 class="relative right-3 bottom-3 px-[5px] py-[1px] pointer-events-none bg-black text-white rounded-full text-xs">${escape_html(count)}</h1></div></div></div></main>`;
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
  Gradient_button as G,
  Navbar as N,
  cartTotal as a,
  cartItems as c,
  itemCount as i
};
