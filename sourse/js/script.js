$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});
// Функція для анімації збільшення чисел від 0 до певного значення
function animateNumbers(targetElements, duration) {
        targetElements.forEach((element) => {
            const targetNumber = parseInt(element.textContent, 10);
            let currentNumber = 0;
            const increment = targetNumber / (duration / 16); // 16ms is about 1 frame at 60fps
    
            const interval = setInterval(() => {
                currentNumber += increment;
                element.textContent = Math.round(currentNumber);
    
                if (currentNumber >= targetNumber) {
                    element.textContent = targetNumber;
                    clearInterval(interval);
                }
            }, 16);
        });
    }
    
    // Визначте елементи, які мають бути проанімовані та тривалість анімації (у мілісекундах)
    const targetElements = document.querySelectorAll(".number_animation");
    const animationDuration = 2000; // 2 секунди
    
    // Запуск анімації після завантаження сторінки
    window.addEventListener("load", () => {
        animateNumbers(targetElements, animationDuration);
    });
    