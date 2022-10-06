<svg
	class="ring"
	viewBox="25 25 50 50"
	stroke-width="5"
	{...$$restProps}
>
	<circle cx="50" cy="50" r="20" />
</svg>

<style>
.ring {
	height: var(--uib-size, 40px);
	width: var(--uib-size, 40px);
	vertical-align: middle;
	transform-origin: center;
	animation: rotate var(--uib-speed, 2s) linear infinite;
}

.ring circle {
	fill: none;
	stroke: var(--uib-color, black);
	stroke-dasharray: 1, 200;
	stroke-dashoffset: 0;
	stroke-linecap: round;
	animation: stretch calc(var(--uib-speed, 2s) * 0.75) ease-in-out infinite;
}

@keyframes rotate {
	100% {
		transform: rotate(360deg);
	}
}

@keyframes stretch {
	0% {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 90, 200;
		stroke-dashoffset: -35px;
	}
	100% {
		stroke-dashoffset: -124px;
	}
}
</style>
