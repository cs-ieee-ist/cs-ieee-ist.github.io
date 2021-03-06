let currentPageId = "welcome";

document.querySelector("body").onload = () => {
	$.ajaxSetup({
		cache: false,
	});
	onPageLoad();
};

const onPageLoad = () => {
	document.querySelector("body").style.visibility = "visible";
	handleUrl();
	setupListeners();
};

const handleUrl = () => {
	if (
		location.href.split("/")[3] !== "#" ||
		location.href.split("/")[4] === undefined
	) {
		showPage(currentPageId);
	} else {
		const pageId = location.href.split("/")[4];
		loadPage(pageId);
		expandDropdownOptions(pageId);
		showPage(pageId);
	}
};

const setupListeners = () => {
	$(".dropdown-btn").on("click", handleDropdownBtnClick);
	$("#navigate-about").on("click", handleDropdownBtnClick);
	$(".menu-icon").on("click", handleMenuBtnClick);
	$(".dropdown-container").on("click", handleTopicClick);
};

const loadPage = (pageId) => {
	const page = $(`#${pageId}`);
	if (page.children().length !== 0) return;

	page.load(`./pages/${pageId}.html`, () => {
		PR.prettyPrint();
	});
};

const showPage = (newPageId) => {
	const currentPage = $(`#${currentPageId}`);
	const newPage = $(`#${newPageId}`);
	loadPage(newPageId);

	if (currentPageId !== newPageId) currentPage.hide();
	newPage.show();
	currentPageId = newPageId;
};

const toggleSidenav = () => {
	const menu = $(".sidenav");
	const menuBtn = $(".menu-icon");
	if (menu.hasClass("active")) {
		menu.removeClass("active");
		menuBtn.removeClass("close");
	} else {
		menu.addClass("active");
		menuBtn.addClass("close");
	}
};

const handleMenuBtnClick = () => {
	toggleSidenav();
};

const handleDropdownBtnClick = (e) => {
	const pageId = e.target.id.split("-")[1]; // id format: navigate-$[page id]

	if (pageId !== currentPageId) {
		if (currentPageId !== "welcome") {
			closeDropdownOption(currentPageId);
		}
		expandDropdownOptions(pageId);
		if (window.innerWidth <= 1024) toggleSidenav();
	} else {
		if (e.currentTarget.classList.contains("active")) {
			closeDropdownOption(currentPageId);
		} else {
			expandDropdownOptions(currentPageId);
		}
	}

	window.location.href = location.origin + `#/${pageId}`;

	showPage(pageId);
};

const handleTopicClick = (event) => {
	const topic = $(event.target.parentElement);
	if (topic.find(".activeTopic"))
		$(".dropdown-container a").removeClass("activeTopic");
	if (window.innerWidth <= 1024) toggleSidenav();
	$(event.target).addClass("activeTopic");
};

const closeDropdownOption = (pageId) => {
	const btn = $(`#navigate-${pageId}`);
	const options = $(`#options-${pageId}`);
	btn.removeClass("active");
	options.hide();
};

const expandDropdownOptions = (pageId) => {
	if ($(".dropdown-container").find("activeTopic"))
		$(".dropdown-container a").removeClass("activeTopic");

	const btn = $(`#navigate-${pageId}`);
	const options = $(`#options-${pageId}`);
	btn.addClass("active");
	options.show();
};
