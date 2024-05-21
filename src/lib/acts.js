import storeLoading, * as store from './store.js'

export function getLoading(name) {
	const loading = name ? store.unique(name) : storeLoading
	return loading
}

export function open(name) {
	const loading = store.getUnique(name)
	if (loading) {
		loading.openIt()
	}
}

export function close(name) {
	const loading = store.getUnique(name)
	if (loading) {
		loading.closeIt()
	}
}

export function show(value, name) {
	const loading = store.getUnique(name)
	if (loading) {
		value ? loading.openIt(name) : loading.closeIt(name)
	}
}
