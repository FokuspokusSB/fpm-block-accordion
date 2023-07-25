document.addEventListener(
	"DOMContentLoaded",
	function () {
		function initAccordionItem(item) {
			item.addEventListener("click", () => {
				item.parentElement.classList.toggle("active");
			});
		}

		const list = document.querySelectorAll("[data-accordion-item]");
		console.log(list);
		for (const item of list) {
			initAccordionItem(item);
		}
	},
	false
);
