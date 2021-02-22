﻿var ContextMenu = function () {
	this.show = function (settings) {
		var container = document.getElementById(settings.id);
		if (!container) return;

		container.style.top = settings.y + 'px';
		container.style.left = settings.x + 'px';
		container.style.display = "flex";

		window.addEventListener('keydown', function (e) {
			if (e.keyCode === 27) {

				container.style.display = "none";
				return false;
			}

			return true;
		});
	}

	this.hide = function (settings) {
		var container = document.getElementById(settings.id);
		if (!container) return;

		container.style.display = "none";
	}
}

window.contextMenu = new ContextMenu();