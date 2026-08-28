(function () {
  const supported = ['zh-Hans', 'zh-Hant', 'ja', 'ko', 'en'];
  const requested = new URLSearchParams(location.search).get('lang');
  const current = supported.includes(requested) ? requested : 'zh-Hans';
  window.switchLanguage = function (language) {
    if (!supported.includes(language)) return;
    const next = new URL(location.href);
    next.searchParams.set('lang', language);
    location.href = next.toString();
  };
  document.documentElement.lang = current;
  document.querySelectorAll('[data-lang]').forEach((node) => { node.hidden = node.dataset.lang !== current; });
  document.querySelectorAll('[data-language-select]').forEach((select) => { select.value = current; select.addEventListener('change', () => switchLanguage(select.value)); });
  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    const next = new URL(link.href, location.href);
    if (next.origin === location.origin) { next.searchParams.set('lang', current); link.href = next.toString(); }
  });
})();
