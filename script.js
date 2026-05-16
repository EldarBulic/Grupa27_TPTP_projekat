document.addEventListener("DOMContentLoaded", () => {

   // ==========================================
    // 1. TAMNI MOD + LOCALSTORAGE
    // ==========================================
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if(themeBtn) themeBtn.innerText = '';
    }

    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeBtn.innerText = '';
            } else {
                localStorage.setItem('theme', 'light');
                themeBtn.innerText = '';
            }
        });
    }
// ==========================================
    // 2. FILTRIRANJE KARTICA BEZ RELOADA
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'sve' || category === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'none';
                    card.offsetHeight; /* restart animacije */
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });   
});
