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
   // ==========================================
    // 3. KALKULATOR CIJENE
    // ==========================================
    const guestInput = document.getElementById('guestCount');
    const packageSelect = document.getElementById('packageSelect');
    const totalPriceDisplay = document.getElementById('totalPrice');

    function calculatePrice() {
        if(!guestInput  !packageSelect 
Spoiler
 !totalPriceDisplay) return;
        const guests = parseInt(guestInput.value)  0;
        const pricePerPerson = parseInt(packageSelect.value) 
Spoiler
 0;
        const total = guests * pricePerPerson;
        totalPriceDisplay.innerText = total + " KM";
    }

    if(guestInput) guestInput.addEventListener('input', calculatePrice);
    if(packageSelect) packageSelect.addEventListener('change', calculatePrice);
});
// ==========================================
    // 4. VALIDACIJA FORME (ISKLJUČIVO JS REGEX)
    // ==========================================
    const form = document.getElementById('reservationForm');
    const btnReset = document.querySelector('button[type="reset"]');

    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            document.querySelectorAll('.error-text').forEach(err => err.style.display = 'none');
            document.querySelectorAll('input, select, textarea').forEach(el => el.style.borderColor = '#ccc');

            const ime = document.getElementById('ime');
            const prezime = document.getElementById('prezime');
            const email = document.getElementById('email');
            const telefon = document.getElementById('telefon');
            const paket = document.getElementById('packageSelect');
            const poruka = document.getElementById('poruka');

            // AI asistencija: Regex obrasci za validaciju
            const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]{2,}$/;
            const phoneRegex = /^[\d\s+-]+$/;

            let isValid = true;

            function prikaziGresku(element, idGreske) {
                document.getElementById(idGreske).style.display = 'block';
                element.style.borderColor = '#e74c3c';
                isValid = false;
            }
           if(ime.value.trim() === "") prikaziGresku(ime, 'imeError');
            if(prezime.value.trim() === "") prikaziGresku(prezime, 'prezimeError');
            if(!emailRegex.test(email.value)) prikaziGresku(email, 'emailError');
            if(!phoneRegex.test(telefon.value) || telefon.value.trim() === "") prikaziGresku(telefon, 'telefonError');
            if(paket.value === "") prikaziGresku(paket, 'paketError');
            if(poruka.value.trim().length === 0) prikaziGresku(poruka, 'porukaError');

            if(isValid) {
                const modal = document.getElementById('successModal');
                const text = document.getElementById('successText');
                text.innerText = Poštovani/a ${ime.value.trim()}, Vaš upit za rezervaciju je uspješno poslan!;
                modal.style.display = 'block';
            }
        });

        if(btnReset) {
            btnReset.addEventListener('click', () => {
                document.querySelectorAll('.error-text').forEach(err => err.style.display = 'none');
                document.querySelectorAll('input, select, textarea').forEach(el => el.style.borderColor = '#ccc');
                setTimeout(calculatePrice, 50); 
            });
        }
    }
