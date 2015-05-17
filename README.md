# Pepo

Currently cucumber-js provides snippets with missing steps, but these are colored with ANSI escape codes and apparently are intended to be copied and pasted into what your actual step file should be.

Pepo is a very simple tool that helps alleviate this. It reads from the standard input and do some useful transformations:

* Removes CSI codes.
* Extracts the snippets
* And *optionaly* wraps them in module.exports = function () {...};

This way you only need to save them into your desired step file:

```
cucumber-js | pepo > path/to/your/new/step/file
```

When adding new steps to an existing file, to avoid wrapping them into a CommonJS export, just add the --no-wrap option.

```
cucumber-js | pepo --no-wrap
```