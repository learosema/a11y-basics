---
title: Good ARIA examples
layout: layouts/slide.njk
---

# Good ARIA examples

## aria-hidden

Hiding off-screen content from screen readers `aria-hidden="true"`

## aria-label

Provide alt text to SVG images

```html
<svg role="img" aria-label="A beautiful tiger standing on a rock"></svg>
```

Describe emojis:

```html
Made with <span role="img" aria-label="love">💖</span> by Lea
```
