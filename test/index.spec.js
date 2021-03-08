/* globals describe, afterEach, test, expect */

import {cleanup, render} from '@testing-library/svelte'
import {Loading, acts} from '../src'

describe('Loading', () => {
	afterEach(cleanup)

	test('should match snapshot', () => {
		acts.show(true)

		const {container} = render(Loading, {
			props: {
				class: 'teste',
				'data-theme': 'dark'
			}
		})
		expect(container).toMatchSnapshot()
	})
})
