const ignoreWarnings = new Set([
	'a11y-no-onchange',
	'a11y-label-has-associated-control',
	'css-unused-selector',
	// 'missing-declaration',
])

const config = {
	compilerOptions: {
		css: true,
		// customElement: true,
	},
	filterWarnings(warning) {
		// console.log('------------------>>>', JSON.stringify(warning, undefined, '  '))
		if (ignoreWarnings.has(warning.code)) {
			return false
		}
		return true
	},
}

export default config
