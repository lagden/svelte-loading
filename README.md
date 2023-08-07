# svelte-loading

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[npm-img]: https://img.shields.io/npm/v/@tadashi/svelte-loading.svg
[npm]: https://www.npmjs.com/package/@tadashi/svelte-loading
[ci-img]: https://github.com/lagden/svelte-loading/actions/workflows/nodejs.yml/badge.svg
[ci]: https://github.com/lagden/svelte-loading/actions/workflows/nodejs.yml
[coveralls-img]: https://coveralls.io/repos/github/lagden/svelte-loading/badge.svg?branch=main
[coveralls]: https://coveralls.io/github/lagden/svelte-loading?branch=main

---

Svelte component

## Install

```
$ npm i -S @tadashi/svelte-loading
```


### CSS Vars

vars                                               | default
---------------------------------------------------| --------------------------------
--uib-color                                        | black
--uib-size                                         | depends on loader
--uib-speed                                        | depends on loader
\-                                                 | \-
--tadashi_svelte_loading_background_color          | hsl(0deg 0% 0% / 20%)
--tadashi_svelte_loading_background_image          | none
--tadashi_svelte_loading_fixed                     | fixed
--tadashi_svelte_loading_top                       | 0
--tadashi_svelte_loading_left                      | 0
--tadashi_svelte_loading_width                     | 100vw
--tadashi_svelte_loading_height                    | 100vh
--tadashi_svelte_loading_flex                      | flex
--tadashi_svelte_loading_align_items               | center
--tadashi_svelte_loading_justify_content           | center
--tadashi_svelte_loading_zindex                    | 99


## Usage

You can see an example here: https://svelte.dev/repl/be139b8c36074a9e9bbc824d6c8f0130

```svelte
<script>
  import {Loading, acts} from '@tadashi/svelte-loading'

  function show() {
    acts.show(true)
  }

  function hide(event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      acts.show(false)
    }
  }
</script>

<button type="button" on:click={show}>Show</button>

<Loading
  animation="ThreeBall"
  color="hsl(200deg 50% 50%)"
  --tadashi_svelte_loading_background_color="hsl(100deg 50% 50% / 20%)"
  --tadashi_svelte_loading_zindex=1011
/>

<svelte:window on:keydown={hide} />
```


## Loaders

Lightweight loaders built by [Griffin Johnston](https://twitter.com/griffinjohnston) for [UI Ball](https://uiball.com).


## Donate ❤️

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4


## License

MIT © [Thiago Lagden](https://github.com/lagden)
MIT © [Griffin Johnston](https://github.com/GriffinJohnston/uiball-loaders/blob/main/LICENSE)
