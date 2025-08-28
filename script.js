document.addEventListener('DOMContentLoaded', () => {
    let hearts = 0;
    let coins = 100;

    const heartDisplay = document.getElementById('heart-count');
    const coinDisplay = document.getElementById('coin-count');
    const callHistoryList = document.getElementById('call-history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    // Clear call history
    clearHistoryBtn.addEventListener('click', () => {
        callHistoryList.innerHTML = '';
    });

    // Loop through 9 cards
    for (let i = 1; i <= 9; i++) {
        const heartIcon = document.getElementById(`heart-${i}`);
        const callBtn = document.getElementById(`call-${i}`);
        const card = document.getElementById(`card-${i}`);

        // Heart click
        heartIcon.addEventListener('click', () => {
            hearts++;
            heartDisplay.textContent = hearts;
            heartIcon.classList.toggle('text-red-500');
        });

        // Call click
        callBtn.addEventListener('click', () => {
            const serviceName = card.querySelector('h3').textContent;
            const serviceNumber = card.querySelector('h2 span').textContent;

            if (coins < 20) {
                alert('Not enough coins to make a call!');
                return;
            }

            coins -= 20;
            coinDisplay.textContent = coins;

            alert(`Calling ${serviceName} (${serviceNumber})`);

            const li = document.createElement('li');

            // Current time
            const now = new Date();
            const time = now.toLocaleTimeString(); // e.g. "8:32:15 PM"

            li.innerHTML = `${serviceName} - ${serviceNumber} <span class="text-gray-500 ml-2">[${time}]</span>`;
            callHistoryList.appendChild(li);
        });
    }
});
