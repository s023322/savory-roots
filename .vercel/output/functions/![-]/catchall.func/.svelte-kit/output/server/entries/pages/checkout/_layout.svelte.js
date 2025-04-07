import { h as head } from "../../../chunks/index3.js";
/* empty css                  */
function _layout($$payload, $$props) {
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Menu | Savory Roots</title>`;
  });
  children($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
