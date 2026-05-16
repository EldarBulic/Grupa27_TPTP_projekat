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
});
