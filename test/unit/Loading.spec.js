import { setTimeout } from 'timers/promises'
import { get } from 'svelte/store'
import { tick } from 'svelte'
import {
	test,
	expect,
	beforeEach,
	vi,
} from 'vitest'
import {
	Loading,
	acts,
} from '$lib/index.js'

beforeEach(() => {
	document.body.innerHTML = ''
})

function doc_query(selector) {
	const node = document.querySelector(selector)
	if (!node) {
		throw new Error(`No element found for selector: ${selector}`)
	}
	return node
}

test('Loading', async () => {
	const target = document.body
	new Loading({ target })
	acts.show(true)

	await setTimeout(1500)
	const div = doc_query('div._tadashi_svelte_loading')
	expect(div).toMatchSnapshot()
	acts.show(false)
})

test('Loading name', async () => {
	const target = document.body
	const name = 'Jelly'
	new Loading({ target, props: {
		name,
		animation: name,
	}})
	acts.show(true, name)

	await setTimeout(1500)
	const div = doc_query('div._tadashi_svelte_loading')
	expect(div).toMatchSnapshot()
})

test('Loading not exist', async () => {
	const target = document.body
	const name = 'Uebaaa'
	acts.show(true, name)
	new Loading({ target, props: {
		name,
		animation: name,
	}})

	await setTimeout(1500)
	const div = doc_query('div._tadashi_svelte_loading')
	expect(div).toMatchSnapshot()
})
