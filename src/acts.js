import {isloading} from './store'

export function show(value = false) {
	isloading.set(value)
}
