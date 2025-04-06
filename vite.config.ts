import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	server: {
		allowedHosts: ["22bd-108-36-89-142.ngrok-free.app", "s.azez.eu.org", "savory-roots.vercel.app"]
	}
});
