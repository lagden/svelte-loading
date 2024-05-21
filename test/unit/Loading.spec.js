// import {setTimeout} from 'timers/promises'
import {test, expect, beforeEach, vi} from 'vitest'
import {Loading, acts} from '$lib/index.js'

globalThis.HTMLElement.prototype.showPopover = vi.fn()

function doc_query(selector) {
	const node = document.querySelector(selector)
	if (!node) {
		throw new Error(`No element found for selector: ${selector}`)
	}
	return node
}

beforeEach(() => {
	globalThis.document.body.innerHTML = ''
})

test('Loading', async () => {
	const target = document.body
	new Loading({target})

	acts.show(true)

	const el = doc_query('.tadashi-svelte-loading')
	expect(el).toMatchSnapshot()

	acts.show(false)
})

test('Loading name', async () => {
	const target = document.body
	const name = 'Jelly'
	new Loading({
		target,
		props: {
			name,
			animation: name,
		},
	})

	acts.show(true, name)

	const el = doc_query('.tadashi-svelte-loading')
	expect(el).toMatchSnapshot()
})

// test('Loading not exist', async () => {
// 	const target = document.body
// 	const name = 'Uebaaa'
// 	acts.show(true, name)
// 	new Loading({
// 		target,
// 		props: {
// 			name,
// 			animation: name,
// 		},
// 	})

// 	await setTimeout(1500)
// 	const div = doc_query('.tadashi-svelte-loading')
// 	expect(div).toMatchSnapshot()
// })
