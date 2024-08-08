function startCountdown(duration) {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    let endTime = Date.now() + duration * 1000;

    function updateCountdown() {
        let now = Date.now();
        let timeLeft = Math.max(0, endTime - now);

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

const countdownDuration = 55 * 24 * 60 * 60; // 55 días en segundos
startCountdown(countdownDuration);
