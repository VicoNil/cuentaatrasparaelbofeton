function startCountdown(targetDate) {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateCountdown() {
        let now = new Date().getTime();
        let timeLeft = targetDate - now;

        if (timeLeft < 0) {
            timeLeft = 0;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

        if (timeLeft > 0) {
            requestAnimationFrame(updateCountdown);
        }
    }

    updateCountdown();
}

const targetDate = new Date('2024-10-02T00:00:00').getTime(); // Fecha fija: 55 días desde 08/08/2024
startCountdown(targetDate);
