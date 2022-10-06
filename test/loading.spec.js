import {
	describe,
	expect,
	test,
	afterEach,
} from '@jest/globals'
import {cleanup, render} from '@testing-library/svelte'
import {Loading, acts} from '../src/loading.js'

describe('Loading default', () => {
	afterEach(cleanup)

	test('should match snapshot', () => {
		acts.show(true)

		const {container} = render(Loading, {
			props: {
				class: 'teste',
			},
		})
		expect(container).toMatchSnapshot()
	})
})

describe('Loading Jelly', () => {
	afterEach(cleanup)

	test('should match snapshot', () => {
		acts.show(true)

		const {container} = render(Loading, {
			props: {
				class: 'teste',
				animation: 'Jelly',
			},
		})
		expect(container).toMatchSnapshot()
	})
})
