export function scrollToTopSmooth() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function scrollToTopFast() {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}
