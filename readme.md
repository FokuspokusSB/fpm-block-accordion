# Fpm Block Accordion (List & Item)

Contributors: soerenbalke<br>
Tags: block<br>
Tested up to: 6.1<br>
Stable tag: 0.1.0<br>
License: GPL-2.0-or-later<br>
License URI: https://www.gnu.org/licenses/gpl-2.0.html<br>

## Description

Accordion list and item block. Simple and easy to style. Has option to set default open in view.

## Installation

1. Upload the plugin files to the `/wp-content/plugins/fpm-block-accordion` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

### Styling

In theme.json

```json
{
  [...]
	"styles": {
		"blocks": {
          [...]
			"fpm-block/accordion-item": {
				"css": "& .accordion-item__header { flex-direction: row-reverse; }",
				"color": {
					"background": "red",
					"text": "black"
				},
				"spacing": {
					"padding": "var(--wp--custom--spacing--gap)"
				}
			},
          [...]
		},
    [...]
	}
  [...]
}
```

## Frequently Asked Questions

### A question that someone might have

An answer to that question.

## Screenshots

1.

## Changelog

### 0.1.0

- Release
