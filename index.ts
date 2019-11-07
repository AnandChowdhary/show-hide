export const hide = (element: HTMLElement, ms = 300) => {
  if (!element) return;
  const currentTransition = element.style.transition;
  element.style.transition = `opacity ${ms}ms`;
  requestAnimationFrame(() => {
    element.style.opacity = "0";
    setTimeout(() => {
      element.style.display = "none";
      element.setAttribute("hidden", "hidden");
      element.style.transition = currentTransition;
    }, ms);
  });
}

export const show = (element: HTMLElement, ms = 300) => {
  if (!element) return;
  if (element.hasAttribute("hidden")) return;
  element.style.opacity = "0";
  element.style.display = "";
  element.removeAttribute("hidden");
  const currentTransition = element.style.transition;
  element.style.transition = `opacity ${ms}ms`;
  requestAnimationFrame(() => {
    element.style.opacity = "1";
    setTimeout(() => {
      element.style.transition = currentTransition;
    }, ms);
  });
}
