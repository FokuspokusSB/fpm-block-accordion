<?php

/**
 * Plugin Name:       Fpm Block Accordion
 * Description:       Accordion Guttenberg Block.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Sören Balke
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fpm-block-accordion
 *
 * @package           fpm-blocks
 */

function fpm_block_accordion_block_init()
{
	register_block_type(__DIR__ . '/build/accordion-item');
	register_block_type(__DIR__ . '/build/accordion-list');
}
add_action('init', 'fpm_block_accordion_block_init');
