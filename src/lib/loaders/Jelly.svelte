<div
	class="jelly"
	{...$$restProps}
></div>

<svg
	width="0"
	height="0"
	class="jelly-maker"
>
	<defs>
		<filter id="uib-jelly-ooze">
			<feGaussianBlur
				in="SourceGraphic"
				stdDeviation="6.25"
				result="blur"
			/>
			<feColorMatrix
				in="blur"
				mode="matrix"
				values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
				result="ooze"
			/>
			<feBlend
				in="SourceGraphic"
				in2="ooze"
			/>
		</filter>
	</defs>
</svg>

<style>
.jelly {
	position: relative;
	height: calc(var(--uib-size, 50px) / 2);
	width: var(--uib-size, 50px);
	filter: url('#uib-jelly-ooze');
	animation: rotate calc(var(--uib-speed, 0.9s) * 2) linear infinite;
}

.jelly::before,
.jelly::after {
	content: '';
	position: absolute;
	top: 0%;
	left: 25%;
	width: 50%;
	height: 100%;
	background: var(--uib-color, black);
	border-radius: 100%;
}

.jelly::before {
	animation: shift-left var(--uib-speed, 0.9s) ease infinite;
}

.jelly::after {
	animation: shift-right var(--uib-speed, 0.9s) ease infinite;
}

.jelly-maker {
	width: 0;
	height: 0;
	position: absolute;
}

@keyframes rotate {
	0%,
	49.999%,
	100% {
		transform: none;
	}

	50%,
	99.999% {
		transform: rotate(90deg);
	}
}

@keyframes shift-left {
	0%,
	100% {
		transform: translateX(0%);
	}
	50% {
		transform: scale(0.65) translateX(-75%);
	}
}

@keyframes shift-right {
	0%,
	100% {
		transform: translateX(0%);
	}
	50% {
		transform: scale(0.65) translateX(75%);
	}
}
</style>
