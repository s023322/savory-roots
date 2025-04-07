import { p as push, k as ensure_array_like, d as attr_class, e as escape_html, l as bind_props, c as pop, f as stringify, m as attr_style, n as attr, g as copy_payload, j as assign_payload } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/index4.js";
import { i as itemCount, c as cartItems, G as Gradient_button, a as cartTotal, N as Navbar } from "../../../chunks/navbar.js";
import "clsx";
import { D as DEV } from "../../../chunks/false.js";
const browser = DEV;
function Cart($$payload, $$props) {
  push();
  let data = void 0;
  let items = void 0;
  let addedPrice = 0;
  let open = false;
  let text = "shopping_cart";
  let count = 0;
  itemCount.subscribe((value) => {
    count = value;
  });
  cartItems.subscribe((value) => {
    data = value;
  });
  function updateTotal() {
    addedPrice = 0;
    if (data["items"]) {
      for (let i = 0; i < data["items"].length; i++) {
        addedPrice += data["items"][i].price;
      }
    }
    localStorage.setItem("cartTotal", addedPrice.toString());
    cartTotal.set(addedPrice);
  }
  const each_array = ensure_array_like(items);
  $$payload.out += `<div${attr_class(`lg:w-64 lg:h-fit transition-all duration-50 overflow-hidden lg:relative lg:top-0 lg:flex max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:absolute max-lg:block ${stringify("max-lg:w-0 max-lg:max-w-0 max-lg:h-0 max-lg:top-24")} ${stringify(open)}`)}><div class="flex flex-col justify-center p-4 rounded-3xl w-full text-gray-300 bg-white border-2"><h1 class="font-display text-black text-xl">Cart</h1> <div class="flex flex-col p-2 text-black"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$payload.out += `<button class="w-full flex flex-row justify-between text-black hover:text-amber-300 cursor-pointer transition-colors duration-200 active:animate-delete"><div class="flex items-center space-x-2"><h1 class="font-icons">close</h1> <h1>${escape_html(item.name)}</h1></div> <h1>$${escape_html(item.price)}</h1></button>`;
  }
  $$payload.out += `<!--]--> <div class="w-full h-0.5 my-2 bg-amber-800"></div> <div class="flex flex-row justify-between -mb-2"><h1>Total</h1> <h1>$${escape_html(addedPrice)}</h1></div></div> `;
  if (count > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="mt-4 text-gray-300 border-2 rounded-full w-min hover:border-white"><a class="flex flex-row w-min space-x-4 items-center group bg-white hover:bg-black rounded-full pl-2 border-2 text-white hover:text-black" href="/checkout/"><h1 class="text-black group-hover:text-white text-nowrap">Checkout</h1> `;
    Gradient_button($$payload, {
      element: "div",
      text: "arrow_outward",
      title: "Order",
      font: "icons",
      href: "/checkout/"
    });
    $$payload.out += `<!----></a></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> <div class="fixed z-60 top-0 w-full left-0 flex lg:hidden pointer-events-none"><div class="flex justify-end float-right ml-auto mr-8 py-4"><button class="relative flex pointer-events-auto"><h1 class="relative left-9 bottom-1.5 px-[5px] py-[1px] pointer-events-none h-min bg-black text-white rounded-full text-xs">${escape_html(count)}</h1> `;
  Gradient_button($$payload, {
    font: "icons",
    text,
    element: "h1",
    href: ""
  });
  $$payload.out += `<!----></button></div></div>`;
  bind_props($$props, { updateTotal });
  pop();
}
function Grid_buttons($$payload, $$props) {
  push();
  let pageData = void 0;
  cartItems.subscribe((value) => {
  });
  let innerWidth = 800;
  let cols = Math.max(Math.min(Math.floor((innerWidth - 32) / (256 + 128)), 3), 2);
  const each_array = ensure_array_like(pageData);
  $$payload.out += `<div class="flex justify-center flex-row lg:space-x-8"><div class="flex justify-center"><div${attr_style(`grid-template-columns: repeat(${stringify(cols)}, minmax(0, 1fr));`)} class="grid max-sm:grid-cols-1 max-md:grid-cols-2 w-fit max-w-7xl gap-8"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$payload.out += `<div class="flex w-40 sm:w-64 h-64 sm:h-64 rounded-3xl p-2 m-0 text-gray-300 border-2"><div class="w-full h-full bg-[url(https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg)] bg-cover bg-center rounded-2xl overflow-hidden"><div class="flex float-left w-fit h-fit bg-white rounded-b-2xl items-center"><button class="flex w-fit h-fit">`;
    Gradient_button($$payload, {
      text: "add",
      font: "icons",
      element: "div",
      href: ""
    });
    $$payload.out += `<!----></button> <h1 class="text-amber-800 text-md/[0.5] ml-2 mb-1 mr-3">$${escape_html(item.price)}</h1></div> <div class="relative w-full h-1/2 top-1/2 p-2 float-left bg-white/[0.75] backdrop-blur-sm"><h1 class="text-black font-display text-md text-nowrap sm:text-xl text-left">${escape_html(item.name)}</h1> <h1 class="text-black text-lg/[1] text-left">${escape_html(item.description)}</h1></div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="items-top">`;
  Cart($$payload, {});
  $$payload.out += `<!----></div></div>`;
  pop();
}
function Toggle($$payload, $$props) {
  push();
  let {
    text,
    titles,
    font = "Lato",
    pad = "4",
    space = "4",
    tstate = 0
  } = $$props;
  const each_array = ensure_array_like(text);
  $$payload.out += `<div${attr_class(`relative flex flex-row justify-center space-x-4 sm:space-x-${stringify(space)} p-2 text-gray-300 border-2 rounded-full w-fit max-sm:max-w-dvw overflow-x-scroll`)}><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let t = each_array[i];
    $$payload.out += `<button${attr("title", titles[i])} class="active:animate-button flex relative w-min h-min">`;
    if (tstate != i) {
      $$payload.out += "<!--[-->";
      Gradient_button($$payload, {
        href: "",
        element: "div",
        font,
        text: t,
        padding: pad
      });
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div${attr_class(`px-${stringify(pad)} py-1 transition duration-200 bg-linear-to-tl from-amber-300 to-amber-800 rounded-full cursor-pointer select-none`)}><h1${attr_class(`font-${stringify(font)} text-white`)}>${escape_html(t)}</h1></div>`;
    }
    $$payload.out += `<!--]--></button>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { tstate });
  pop();
}
function _page($$payload, $$props) {
  push();
  let tstate = 0;
  let pages = ["Appetizers", "Meals", "Drinks", "Dessert"];
  let orderReceived = page.url.searchParams.has("status");
  let orderStatus = "";
  if (orderReceived) {
    orderStatus = page.url.searchParams.get("status");
    if (orderStatus.includes("complete") && browser) ;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="z-50 fixed">`;
    Navbar($$payload2);
    $$payload2.out += `<!----></div> `;
    if (orderReceived) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<button class="fixed left-0 top-32 w-full h-fit flex justify-center z-100 cursor-pointer"><div class="backdrop-blur-sm bg-white/[0.9] w-fit h-fit px-4 py-2 border-2 text-gray-300 rounded-lg space-y-4"><h1 class="font-display text-2xl text-black">Order ${escape_html(orderStatus.includes("complete") ? "Complete" : "Failed")} <span class="relative top-1 font-icons">${escape_html(orderStatus.includes("complete") ? "check" : "close")}</span></h1> <h1 class="text-lg text-black font-lato mb-2">${escape_html(orderStatus.includes("complete") ? "Thank you!" : "Sorry, we couldn't complete your order")}</h1></div></button>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="font-lato"><div class="z-0 flex flex-col md:flex-row justify-center space-x-8"><div class="inline relative max-md:mx-auto mt-24 mb-0 w-fit h-fit">`;
    Toggle($$payload2, {
      titles: ["Pickup", "Delivery"],
      text: ["Pickup", "Delivery"]
    });
    $$payload2.out += `<!----></div> <div class="block max-md:mx-auto md:inline relative mt-8 md:mt-24 w-fit h-fit">`;
    Toggle($$payload2, {
      font: "icons",
      pad: "[9px]",
      space: "4",
      titles: ["Appetizers", "Meals", "Drinks", "Dessert"],
      text: [
        "rice_bowl",
        "ramen_dining",
        "local_bar",
        "icecream"
      ],
      get tstate() {
        return tstate;
      },
      set tstate($$value) {
        tstate = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div></div> <div class="w-full justify-center flex mt-8"><h1 class="font-display text-2xl text-center">${escape_html(pages[tstate])}</h1></div> <div class="flex justify-center flex-row space-x-8"><div class="flex justify-center pt-8">`;
    Grid_buttons($$payload2);
    $$payload2.out += `<!----></div></div></div>`;
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
