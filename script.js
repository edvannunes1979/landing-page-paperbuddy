document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Menu Hambúrguer
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.querySelector('.main-nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Lógica do Contador Regressivo
    const countdownElement = document.getElementById('countdown-timer');
    if (countdownElement) {
        let timeInSeconds = 23 * 3600 + 59 * 60 + 59; // 23h 59m 59s
        
        setInterval(() => {
            if (timeInSeconds <= 0) return;
            timeInSeconds--;
            
            let hours = Math.floor(timeInSeconds / 3600);
            let minutes = Math.floor((timeInSeconds % 3600) / 60);
            let seconds = timeInSeconds % 60;
            
            countdownElement.textContent = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }
});