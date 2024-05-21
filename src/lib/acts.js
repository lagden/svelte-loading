import storeLoading, * as store from './store.js'

export function createLoading(name) {
	const loading = name ? store.unique(name) : storeLoading
	return loading
}

export function removeLoading(name) {
	return store.remove(name)
}

export function getLoading(name) {
	return name ? store.getUnique(name) : storeLoading
}

export function open(name) {
	const loading = getLoading(name)
	if (loading) {
		loading.openIt()
	}
}

export function close(name) {
	const loading = getLoading(name)
	if (loading) {
		loading.closeIt()
	}
}

export function show(value, name) {
	const loading = getLoading(name)
	if (loading) {
		value ? loading.openIt(name) : loading.closeIt(name)
	}
}
