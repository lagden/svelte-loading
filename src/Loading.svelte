<script>
	import {fade} from 'svelte/transition'
	import {isloading} from './store'
</script>

{#if $isloading}
	<div class="_tadashi_svelte_loading" transition:fade|local={{duration: 400}}>
		<div class="_tadashi_svelte_loading_animation"></div>
	</div>
{/if}

<style type="text/css">
	:root {
		--tadashi_svelte_loading_background_color: hsla(0, 0%, 0%, 0.3);
		--tadashi_svelte_loading_background_image: none;

		--tadashi_svelte_loading_animation_padding: 15px;
		--tadashi_svelte_loading_animation_border: 6px solid hsl(0, 0%, 80%);
		--tadashi_svelte_loading_animation_border_right_color: hsl(0, 0%, 50%);
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
	}

	._tadashi_svelte_loading_animation {
		height: 0;
		width: 0;
		padding: var(--tadashi_svelte_loading_animation_padding);
		border: var(--tadashi_svelte_loading_animation_border);
		border-right-color: var(--tadashi_svelte_loading_animation_border_right_color);
		border-radius: var(--tadashi_svelte_loading_animation_border_radius);
		animation: _tadashi_svelte_loading_rotate var(--tadashi_svelte_loading_animation_duration) infinite linear;
		position: absolute;
		left: 50%;
		top: 50%;
	}

	@keyframes _tadashi_svelte_loading_rotate {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
