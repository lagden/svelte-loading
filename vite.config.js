import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['test/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		threads: false,
		globals: true,
		coverage: {
			reporter: ['text', 'text-summary', 'lcov', 'json-summary'],
		},
	},
})
