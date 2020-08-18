import {cleanup, render} from '@testing-library/svelte'
import {Loading} from '../src'

describe('Loading', () => {
	afterEach(cleanup)

	test('should match snapshot', () => {
		const {container} = render(Loading)
		expect(container).toMatchSnapshot()
	})
})
