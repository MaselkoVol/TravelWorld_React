export function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

export function addBodyClassIfMobile () {
	if (isMobile()) {
		document.body.classList.add("_touch");
	}
}
