import {sveltekit} from '@sveltejs/kit/vite'
import {defineConfig} from 'vitest/config'

const config = {
	plugins: [sveltekit()],
	test: {
		include: ['test/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		threads: false,
		globals: true,
		// prettier-ignore
		coverage: {
			include: ['src/lib/**'],
			reporter: [
				'text',
				'text-summary',
				'lcovonly',
				'cobertura',
			],
		},
	},
}

export default defineConfig(config)
