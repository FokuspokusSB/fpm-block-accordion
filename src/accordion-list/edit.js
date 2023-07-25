import "./editor.scss";

import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const ALLOWED_BLOCKS = ["fpm-block/accordion-item"];

export default function Edit({ attributes, setAttributes }) {
	// const setValue = (key, value) => {
	// 	if (Object.hasOwnProperty.call(attributes, key)) {
	// 		setAttributes({ [key]: value });
	// 	} else {
	// 		console.error(key, "doesnt exists in attributes!!!!11");
	// 	}
	// };

	const blockProps = useBlockProps({
		className: "accordion-list",
	});
	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				renderAppender={InnerBlocks.ButtonBlockAppender}
			/>
		</div>
	);
}
