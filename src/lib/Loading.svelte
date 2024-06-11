<script>
import {createLoading} from './acts.js'

import ChaoticOrbit from './loaders/ChaoticOrbit.svelte'
import Jelly from './loaders/Jelly.svelte'
import Ring from './loaders/Ring.svelte'
import ThreeBody from './loaders/ThreeBody.svelte'

export let animation = 'Ring'
export let name = undefined
export let full = true

const loading = createLoading(name)
const animationMap = {
	ChaoticOrbit,
	Jelly,
	Ring,
	ThreeBody,
}
const component = animationMap?.[animation] ?? Ring

let popoverElement
const toogle = v => {
	if (popoverElement) {
		v ? popoverElement.showPopover() : popoverElement.hidePopover()
	}
}

const unsubscribe = loading.subscribe(n => {
	toogle(n.isloading)
})

/**
 * Initializes the dialog element and appends it to the document body.
 *
 * @param {HTMLDialogElement} node - The dialog element to initialize.
 * @returns {object} - An object with a `destroy` function to remove the loading from the DOM.
 */
function init(node) {
	globalThis.document.body.insertAdjacentElement('beforeend', node)
	return {
		destroy() {
			unsubscribe && unsubscribe()
		},
	}
}
</script>

<section
	use:init
	bind:this={popoverElement}
	popover="manual"
	class="tadashi-svelte-loading"
>
	<div class:tadashi-svelte-loading-full={full}><svelte:component this={component} /></div>
</section>

<style>
.tadashi-svelte-loading[popover] {
	box-sizing: border-box;
	background-color: transparent;
	outline: none;
	border: none;
	padding: 2rem;
	inset: 0;
	overflow: hidden;
	pointer-events: all;

	&,
	&::backdrop {
		opacity: 0;
		transition:
			display var(--tadashi-svelte-loading-duration, 0.5s) allow-discrete,
			overlay var(--tadashi-svelte-loading-duration, 0.5s) allow-discrete,
			opacity var(--tadashi-svelte-loading-duration, 0.5s);
	}

	&::backdrop {
		background-color: var(--tadashi-svelte-loading-background-color, oklch(0% 0 0 / 0.3));
	}

	&:popover-open {
		opacity: 1;
		&::backdrop {
			opacity: 1;
		}
	}

	@starting-style {
		&:popover-open,
		&:popover-open::backdrop {
			opacity: 0;
		}
	}
}

.tadashi-svelte-loading-full {
	display: grid;
	place-items: center;
	position: fixed;
	inset: 0;
	width: -webkit-fill-available;
	width: -moz-available;
	width: stretch;
	height: -webkit-fill-available;
	height: -moz-available;
	height: stretch;
}
</style>
