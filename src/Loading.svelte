<script>
	import {fade} from 'svelte/transition'
	import {isloading} from './store'

	let className = ''
	export {className as class}
</script>

{#if $isloading}
	<div
		class="_tadashi_svelte_loading {className}"
		transition:fade|local={{duration: 400}}
		{...$$restProps}
	>
		<div class="_tadashi_svelte_loading_animation"></div>
	</div>
{/if}

<style type="text/css">
	:root {
		--tadashi_svelte_loading_background_color: hsl(0deg 0% 0% / 20%);
		--tadashi_svelte_loading_background_image: none;
		--tadashi_svelte_loading_zindex: 99;

		--tadashi_svelte_loading_animation_padding: 15px;
		--tadashi_svelte_loading_animation_border: 6px solid hsl(0deg 0% 80%);
		--tadashi_svelte_loading_animation_border_right_color: hsl(0deg 0% 50%);
		--tadashi_svelte_loading_animation_border_radius: 22px;
		--tadashi_svelte_loading_animation_duration: 0.5s;
	}

	._tadashi_svelte_loading {
		background-color: var(--tadashi_svelte_loading_background_color);
		background-image: var(--tadashi_svelte_loading_background_image);
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: var(--tadashi_svelte_loading_zindex);
	}

	._tadashi_svelte_loading_animation {
		height: 0;
		width: 0;
		padding: var(--tadashi_svelte_loading_animation_padding);
		border: var(--tadashi_svelte_loading_animation_border);
		border-right-color: var(--tadashi_svelte_loading_animation_border_right_color);
		border-radius: var(--tadashi_svelte_loading_animation_border_radius);
		animation: _tadashi_svelte_loading_rotate var(--tadashi_svelte_loading_animation_duration) infinite linear;
	}

	@keyframes _tadashi_svelte_loading_rotate {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
