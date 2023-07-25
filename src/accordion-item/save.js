/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import { Dashicon } from "@wordpress/components";
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: `accordion-item ${attributes.open ? "active" : ""}`,
	});

	return (
		<div {...blockProps}>
			<div className="accordion-item__header" data-accordion-item="">
				<div className="accordion-item__header-icon">
					<Dashicon icon="arrow-down-alt2" className="arrow-down" />
					<Dashicon icon="arrow-up-alt2" className="arrow-up" />
				</div>

				<div className="accordion-item__header-text">
					{attributes.headerText}
				</div>
			</div>
			<div className="accordion-item__body">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
