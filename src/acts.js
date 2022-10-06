import {writable} from 'svelte/store'

const isloading = writable(false)
const show = value => {
	isloading.set(value)
}


export {
	isloading,
	show,
}
