# svelte-loading

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/svelte-loading.svg
[npm]:             https://www.npmjs.com/package/@tadashi/svelte-loading
[ci-img]:          https://github.com/lagden/svelte-loading/workflows/Node.js%20CI/badge.svg
[ci]:              https://github.com/lagden/svelte-loading/actions?query=workflow%3A%22Node.js+CI%22

---

Svelte component

## Install

```
$ npm i -S @tadashi/svelte-loading
```


## Usage

You can see an example here: https://svelte.dev/repl/7a37b1cee629432da956cab08bf2cb0f?version=3.24.1

```html
<script>
  import {Loading, acts} from '@tadashi/svelte-loading'
  import {Btn} from '@tadashi/svelte-loading'

  function show() {
    acts.show(true)
  }
</script>

<Btn type="button" on:click={show}>Show</Btn>
<Loading />
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
