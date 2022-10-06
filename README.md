# svelte-loading

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]


[npm-img]:  https://img.shields.io/npm/v/@tadashi/svelte-loading.svg
[npm]:      https://www.npmjs.com/package/@tadashi/svelte-loading
[ci-img]:   https://github.com/lagden/svelte-loading/workflows/Node.js%20CI/badge.svg
[ci]:       https://github.com/lagden/svelte-loading/actions?query=workflow%3A%22Node.js+CI%22

---

Svelte component

## Install

```
$ npm i -S @tadashi/svelte-loading
```


## Usage

You can see an example here: https://svelte.dev/repl/be139b8c36074a9e9bbc824d6c8f0130?version=3.50.1

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


## License

MIT © [Thiago Lagden](https://github.com/lagden)
MIT © [Griffin Johnston](https://github.com/GriffinJohnston/uiball-loaders/blob/main/LICENSE)
