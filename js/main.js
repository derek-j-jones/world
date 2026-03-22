(async () => {

  // Підвантаження хедера
  try {
    const headerResponse = await fetch('/world/header.html');
    const headerText = await headerResponse.text();
    const headerPlaceholder = document.querySelector('.headerPlaceholder');
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = headerText;
      addHeaderHandlers();
    }
  } catch (err) {
    console.error('Помилка завантаження хедера:', err);
  }

  // Підвантаження футера
  try {
    const footerResponse = await fetch('/world/footer.html');
    const footerText = await footerResponse.text();
    const footerPlaceholder = document.querySelector('.footerPlaceholder');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = footerText;
    }
  } catch (err) {
    console.error('Помилка завантаження футера:', err);
  }
})();

function addHeaderHandlers() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }

}
