---
layout: ../layouts/MdxFileLayout.astro
title: Hello, Astro.
author: Baz
description: First Entry. Stardate Unknown.
---

# Functionals of Markdown

A demonstration of md features and the pro shortcuts for the **Markdown All in One** Extension for _VS Code_ <br> on a ~~Mac~~ Windows Rig

`[ctrl] + [shift] + p` >`markdown` - Markdown AIO Command Menu

## Table of Contents

* `[ctrl] + [shift] + p` >`ctoc` - Create Table of Contents
* `[ctrl] + [shift] + p` >`utoc` - Update Table of Contents

- [Functionals of Markdown](#functionals-of-markdown)
  - [Table of Contents](#table-of-contents)
  - [Links](#links)
  - [Images &Links](#images-links)
  - [Task List](#task-list)
  - [Ordered List &Unordered](#ordered-list-unordered)
  - [Horizontal Rule](#horizontal-rule)
  - [Block Qoutes](#block-qoutes)
  - [Table](#table)
  - [Code Block](#code-block)
  - [Preview formated md](#preview-formated-md)
    - [Github](#github)
    - [Third Party Apps](#third-party-apps)

## Links

* <http://www.github.com/baz-co>
* [LinkedIn](linkedin.com/in/shehbaz-sherwani/ "Change the tooltip")
* [Medium][1]

## Images &Links

![Programming GIF](https://media.giphy.com/media/Lny6Rw04nsOOc/giphy.gif "Are we?")
[![Programming GIF][lost_spongebob]](https://media.giphy.com/media/Lny6Rw04nsOOc/giphy.gif "Are we?")

## Task List

Unordered Tasks

* [x] Use md
* [x] Learn md
* [ ] Live md

`[alt] +c` - Toggle task completion

## Ordered List &Unordered

1. Collect Underpants
   * I donno why
   * But it is the first step
1. ?
   1. Sub Step
   1. Sub Step
1. Profit

## Horizontal Rule

[O'doyle rules][odoyle]

---

[O'doyle rules][odoyle]

---

[O'doyle rules][odoyle]

## Block Qoutes

> When a distinguished but elderly scientist states that something is possible, he is almost certainly right. When he states that something is impossible, he is very probably wrong.
>
> The only way of discovering the limits of the possible is to venture a little way past them into the impossible.
>
> Any sufficiently advanced technology is indistinguishable from magic.
> **--Arthur C Clarke**

> Music in the soul can be heard by the universe. --Lao Tzu

## Table

|col0 (right)|col1 (left)|col2 (center)|
|---:|:---|:---:|
|john|jacob|jingleheimer|
|0|1|2|

| col0 (right) | col1 (left) | col2 (center) |
| -----------: | :---------- | :-----------: |
|         john | jacob       | jingleheimer  |
|            0 | 1           |       2       |

* `[right click]` Format Document - Prettifies Table
* `[alt] + [shift] + F` - Aligns table column width

## Code Block

```js
foo() => {
  return 'hey';
}
```

```php
$age = 28;
$name = "baz";
```

```diff
$age = 28;
- $name = "baz";
+ $name = "co";
```

## Preview formated md

* `[ctrl] + [shift] + V` - Open Preview

### Github
`#` - Hashtags for tagging issue numbers
`@` - [At symbol](http://www.atsymbol.com/history.htm) for tagging users

### Third Party Apps

* [Marked 2](http://marked2app.com/) - Auto Load shaved changes to an app set to preview md
* Mou - Side by Side scroll of editor and preview
* MultiMarkdown - 2

[1]: http://medium.com/@Bazco "Instructional Articles"
[github]: http://www.github.com/baz-co "GitHub Profile"
[lost_spongebob]: https://media.giphy.com/media/3o7aCTPPm4OHfRLSH6/giphy.gif
[odoyle]: https://www.youtube.com/watch?v=XVO3NJCPIoY
