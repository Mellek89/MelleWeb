document.querySelectorAll('.lang').forEach(el => {
  el.addEventListener('click', () => {
    const lang = el.dataset.lang;

    // aktive Klasse setzen
    document.querySelectorAll('.lang').forEach(l => l.classList.remove('active'));
    el.classList.add('active');

    // aktuelle Datei holen
    let file = window.location.pathname.split("/").pop();
    if (!file) file = "index.html";

    // 👉 Weiterleitung (einfach & robust)
    window.location.href = `/${lang}/${file}`;
  });
});