/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { setCategories, getCategories } from '@wordpress/blocks';

/**
 * Internal Dependencies
 */
import icons from './icons';

const categories = [
	{
		slug: 'blazing-fast-block-backup',
		title: 'Blazing Fast Block Backup',
		icon: icons.plugin,
	},
	...getCategories().filter(
		( { categorySlug } ) => categorySlug !== 'blazing-fast-block-backup'
	),
];
setCategories( categories );
