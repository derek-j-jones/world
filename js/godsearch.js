document.getElementById('search').addEventListener('input', function () {
    const query = this.value.trim().toLowerCase();

    // Фільтрація карток
    document.querySelectorAll('.god-card').forEach(card => {
        const name = card.textContent.toLowerCase();
        card.style.display = name.includes(query) ? '' : 'none';
    });

    // Перевірка заголовків і списків
    document.querySelectorAll('h2').forEach(h2 => {
        const list = h2.nextElementSibling; // наступний елемент після h2
        if (list && list.classList.contains('god-list')) {
            const visibleCards = list.querySelectorAll('.god-card:not([style*="display: none"])');
            const hasVisible = visibleCards.length > 0;
            h2.style.display = hasVisible ? '' : 'none';
            list.style.display = hasVisible ? '' : 'none';
        }
    });
});
