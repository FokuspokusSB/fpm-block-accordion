import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: "accordion-list",
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
