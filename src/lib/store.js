import {writable} from 'svelte/store'

const loadingMap = new Map()
const base = {
	isloading: false,
}

function loadingStore() {
	const {set, subscribe, update} = writable({...base})
	return {
		set,
		subscribe,
		update,
		openIt() {
			update(n => {
				n.isloading = true
				return n
			})
		},
		closeIt() {
			update(n => {
				n.isloading = false
				return n
			})
		},
	}
}

/**
 * @param {string=} name
 */
function unique(name) {
	if (loadingMap.has(name)) {
		return loadingMap.get(name)
	}
	loadingMap.set(name, loadingStore())
	return loadingMap.get(name)
}

/**
 * @param {string=} name
 */
function getUnique(name) {
	if (name !== undefined && loadingMap.has(name)) {
		return loadingMap.get(name)
	}
}

const KEY = Symbol.for('store.loading')
const singleton = Object.create(null)
singleton[KEY] = loadingStore()

export default singleton[KEY]
export {base, unique, getUnique}
