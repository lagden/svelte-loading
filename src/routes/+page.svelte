<script>
	import { Loading, acts } from '$lib/index.js'

	let show = {}

	function toggle(animation) {
		return () => {
			show[animation] = !show?.[animation] ?? false
			acts.show(show[animation], animation)
		}
	}

	const animations = ['ChaoticOrbit', 'Jelly', 'Ring', 'ThreeBody']
</script>

{#each animations as animation}
	<section>
		<h2>{animation}</h2>
		<button
			type="button"
			on:click={toggle(animation)}
			style="z-index: 100;position: relative;"
			>{animation}load is {show[animation] ? 'showing' : 'hidden'}</button
		>
	</section>
	<Loading name={animation} {animation} />
{/each}

<svelte:head>
	<style>
		:root {
			--uib-color: hsl(200deg 50% 50%);
			--uib-size: 5rem;
		}
	</style>
</svelte:head>
