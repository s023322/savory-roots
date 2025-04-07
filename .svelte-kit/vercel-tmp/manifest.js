export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bokchoy.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DdxO_w21.js",app:"_app/immutable/entry/app.DebXtzUf.js",imports:["_app/immutable/entry/start.DdxO_w21.js","_app/immutable/chunks/DIcWehZj.js","_app/immutable/chunks/BH-x3xJj.js","_app/immutable/chunks/BwSG8Dic.js","_app/immutable/chunks/BJBH5m3E.js","_app/immutable/chunks/CAJhvfer.js","_app/immutable/entry/app.DebXtzUf.js","_app/immutable/chunks/BH-x3xJj.js","_app/immutable/chunks/Dc8CBiT0.js","_app/immutable/chunks/CYoz0CFR.js","_app/immutable/chunks/qqA6fhLo.js","_app/immutable/chunks/BwSG8Dic.js","_app/immutable/chunks/C0r3UhqY.js","_app/immutable/chunks/CAJhvfer.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/checkout",
				pattern: /^\/checkout\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/menu",
				pattern: /^\/menu\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/order",
				pattern: /^\/order\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/payment-intent",
				pattern: /^\/payment-intent\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/payment-intent/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
