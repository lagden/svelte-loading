import {writable} from 'svelte/store'

const loadingMap = new Map()
const base = {
	open: false,
	isloading: false,
}

function loadingStore() {
	const {set, subscribe, update} = writable({...base})
	return {
		set,
		subscribe,
		open: () => update(n => {
			n.open = true
			n.isloading = true
			return n
		}),
		close: () => update(n => {
			n.open = false
			n.isloading = false
			return n
		}),
	}
}

export function unique(name) {
	if (loadingMap.has(name)) {
		return loadingMap.get(name)
	}
	loadingMap.set(name, loadingStore())
	return loadingMap.get(name)
}

const KEY = Symbol.for('store.loading')
const singleton = {}
singleton[KEY] = loadingStore()

export default singleton[KEY]
