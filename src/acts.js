import {isloading} from './store'

export function show(value) {
	isloading.set(value)
}
