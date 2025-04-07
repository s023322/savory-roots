

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BHc3qm9O.js","_app/immutable/chunks/CYoz0CFR.js","_app/immutable/chunks/BH-x3xJj.js","_app/immutable/chunks/5_erstYV.js"];
export const stylesheets = ["_app/immutable/assets/app.DX4JCKPT.css"];
export const fonts = [];
