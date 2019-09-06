let currentPageId = "welcome";
let currentDropdownBtn = "";

document.querySelector("body").onload = () => {
	$.ajaxSetup({
		cache: false
	});
	onPageLoad();
}

const onPageLoad = () => {
	document.querySelector("body").style.visibility = "visible";
	handleUrl();
	setupListeners();
}

const handleUrl = () => {
	if (location.href.split("/")[3] !== "#" || location.href.split("/")[4] === undefined) {
		showPage(currentPageId);
		return;
	};
	const section = location.href.split("/")[4];
	$(`#${section}`).load(`${section}.html`);
	showPage(section);
}

const setupListeners = () => {
	$(".dropdown-btn").on("click", handleDropdownBtnClick);
	$("#navigate-about").on("click", handleDropdownBtnClick);
}

const loadPage = (pageId) => {
	const page = $(`#${pageId}`);
	if (page.children().length !== 0) return;

	page.load(`${pageId}.html`);
}

const showPage = (newPageId) => {
	const currentPage = $(`#${currentPageId}`);
	const newPage = $(`#${newPageId}`);

	loadPage(newPageId);

	if (currentPageId !== newPageId)
		currentPage.hide();
	newPage.show();
	currentPageId = newPageId;
}

const handleDropdownBtnClick = (e) => {
	const btn = $(e.target);
	const pageId = e.target.id.split("-")[1] // id format: navigate-$[page id]
	const options = $(`#options-${pageId}`);

	const previousBtn = $(`#navigate-${currentDropdownBtn}`);
	const previouOptions = $(`#options-${currentDropdownBtn}`);

	if (pageId !== currentDropdownBtn) {
		previousBtn.removeClass("active");
		previouOptions.hide();
	}

	window.location.href = location.origin + `#/${pageId}`;

	btn.addClass("active");
	options.show();

	showPage(pageId);
	currentDropdownBtn = pageId;
}