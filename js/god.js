


// Відкриття модалки
document.querySelectorAll('.god-card').forEach(card => {
    card.addEventListener('click', () => {
        const god = card.getAttribute('data-god');
        document.getElementById('modal-' + god).style.display = 'block';
    });
});
// Закриття модалки
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        const god = btn.getAttribute('data-close');
        document.getElementById('modal-' + god).style.display = 'none';
    });
});
// Закриття по кліку за межами
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
