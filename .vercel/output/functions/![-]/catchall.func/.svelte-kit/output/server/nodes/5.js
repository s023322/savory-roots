

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/order/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.C6n_4cL0.js","_app/immutable/chunks/CYoz0CFR.js","_app/immutable/chunks/BH-x3xJj.js","_app/immutable/chunks/5_erstYV.js"];
export const stylesheets = ["_app/immutable/assets/app.DX4JCKPT.css"];
export const fonts = [];
