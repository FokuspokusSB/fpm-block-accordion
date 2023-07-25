import "./editor.scss";

import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";

import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	__experimentalInputControl as InputControl,
	ToggleControl,
	Dashicon,
} from "@wordpress/components";

const PRE_TEMPLATE_BODY = [["core/paragraph", {}]];

export default function Edit({ attributes, setAttributes }) {
	const setValue = (key, value) => {
		if (Object.hasOwnProperty.call(attributes, key)) {
			setAttributes({ [key]: value });
		} else {
			console.error(key, "doesnt exists in attributes!!!!11");
		}
	};
	const values = { ...attributes };

	const blockProps = useBlockProps({
		className: `accordion-item ${values.editorOpen ? "active" : ""}`,
	});

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title="Einstellungen">
					<ToggleControl
						label="geöffnet"
						checked={values.open}
						onChange={(value) => setValue("open", value)}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="accordion-item__header">
				<div className="accordion-item__header-icon">
					<button
						type="button"
						onClick={() => setValue("editorOpen", !values.editorOpen)}
					>
						<Dashicon
							icon={values.editorOpen ? "arrow-up-alt2" : "arrow-down-alt2"}
						/>
					</button>
				</div>
				<div className="accordion-item__header-text">
					<InputControl
						value={values.headerText}
						onChange={(value) => setValue("headerText", value)}
					/>
				</div>
			</div>
			<div className="accordion-item__body">
				<InnerBlocks template={PRE_TEMPLATE_BODY} />
			</div>
		</div>
	);
}
