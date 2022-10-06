<script>
	import {fade} from 'svelte/transition'
	import {isloading} from './acts.js'

	import ChaoticOrbit from './loaders/ChaoticOrbit.svelte'
	import Jelly from './loaders/Jelly.svelte'
	import Ring from './loaders/Ring.svelte'
	import ThreeBody from './loaders/ThreeBody.svelte'

	export let animation = 'Ring'
	export let color = 'black'

	const style = `--uib-color:${color};`

	const animationMap = {
		ChaoticOrbit,
		Jelly,
		Ring,
		ThreeBody,
	}

	let className = ''
	export {className as class}

	const component = animationMap?.[animation] ?? Ring
</script>

{#if $isloading}
	<div
		class="_tadashi_svelte_loading {className}"
		transition:fade|local={{duration: 400}}
		{...$$restProps}
	><svelte:component this={component} {style} /></div>
{/if}

<style>
._tadashi_svelte_loading {
	background-color: var(--tadashi_svelte_loading_background_color, hsl(0deg 0% 0% / 20%));
	background-image: var(--tadashi_svelte_loading_background_image, hsl(0deg 0% 0% / 20%));
	position: var(--tadashi_svelte_loading_fixed, fixed);
	top: var(--tadashi_svelte_loading_top, 0);
	left: var(--tadashi_svelte_loading_left, 0);
	width: var(--tadashi_svelte_loading_width, 100vw);
	height: var(--tadashi_svelte_loading_height, 100vh);
	display: var(--tadashi_svelte_loading_flex, flex);
	align-items: var(--tadashi_svelte_loading_align_items, center);
	justify-content: var(--tadashi_svelte_loading_justify_content, center);
	z-index: var(--tadashi_svelte_loading_zindex, 99);
}
</style>
