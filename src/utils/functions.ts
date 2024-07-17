export function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

export function addBodyClassIfMobile() {
  if (isMobile()) {
    document.body.classList.add("_touch");
  }
}

export function setCSSVariable(
  ref: React.MutableRefObject<unknown>,
  varName: string,
  value: string
) {
  const elem = ref.current as HTMLDivElement | null;
  if (!elem) return;
  elem.style.setProperty(varName, value);
}
