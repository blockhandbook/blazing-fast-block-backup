/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */

const Edit = ( props ) => {
	const {
		setAttributes,
		attributes: {
			// put attribute key names here to use them
			className,
		},
	} = props;

	return (
		<>
			<BlockControls></BlockControls>
			<InspectorControls></InspectorControls>
			<div { ...useBlockProps( { className } ) }>
				<p className="text-xl border-2 rounded-xl border-solid p-10 shadow-xl">
					{ __(
						'This is a static starter block.  This block is great for getting up and running fast.  Throw whatever html markup you want in here to start building something cool.  Edit this file in src/blocks/static-block/edit.js.',
						'blazing-fast-block-backup'
					) }
				</p>
			</div>
		</>
	);
};

export default Edit;
