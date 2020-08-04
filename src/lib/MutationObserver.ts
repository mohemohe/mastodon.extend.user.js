export function watch(selector: string, callback: MutationCallback) {
  const target = document.querySelector(selector);
  if (!target) {
    return null;
  }

  const observer = new MutationObserver(callback);
  observer.observe(target, {
    attributes: true,
    childList: true,
    subtree: true,
  });

  return observer;
}
