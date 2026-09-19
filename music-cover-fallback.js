(() => {
  const applyPlaceholder = (img) => {
    img.remove();
  };

  document.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) return;
      if (!target.matches('[data-cover-fallback]')) return;

      const fallback = target.dataset.fallbackSrc;
      if (fallback && target.src !== fallback) {
        target.src = fallback;
        delete target.dataset.fallbackSrc;
        return;
      }

      target.parentElement?.classList.add('is-placeholder');
      applyPlaceholder(target);
    },
    true
  );
})();
