document.getElementById('search').addEventListener('input', function () {
    const query = this.value.trim().toLowerCase();
    document.querySelectorAll('.god-card').forEach(card => {
        const name = card.textContent.toLowerCase();
        card.style.display = name.includes(query) ? '' : 'none';
    });
});