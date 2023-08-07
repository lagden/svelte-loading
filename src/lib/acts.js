import storeLoading, * as store from './store'

export function getLoading(name) {
	const loading = name ? store.unique(name) : storeLoading
	return loading
}

export function open(name) {
	const loading = getLoading(name)
	if (loading) {
		loading.open()
	}
}

export function close(name) {
	const loading = getLoading(name)
	if (loading) {
		loading.close()
	}
}

export function show(value, name) {
	const loading = getLoading(name)
	if (loading) {
		value ? open(name) : close(name)
	}
}
