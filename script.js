
// Get navbar elements
const heartCountEl = document.querySelector('.navbar .btn:first-child span');
const coinCountEl = document.querySelector('.navbar .btn:nth-child(2) span');
const callHistoryEl = document.querySelector('aside div.flex.flex-col');
const clearHistoryBtn = document.querySelector('aside button');

// Initialize values
let hearts = 0;
let coins = parseInt(coinCountEl.textContent);

// Create a container inside call history
const callHistoryContainer = document.createElement('div');
callHistoryContainer.classList.add('flex', 'flex-col', 'gap-2', 'mt-4');
document.querySelector('aside').appendChild(callHistoryContainer);

// Heart Icon Functionality
const heartIcons = document.querySelectorAll('.card i.fa-heart');
heartIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    hearts++;
    heartCountEl.textContent = hearts;
    icon.classList.toggle('text-red-500'); // optional: color toggle on click
  });
});

// Call Button Functionality
const callButtons = document.querySelectorAll('.card .btn-success');
callButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const serviceName = card.querySelector('h3').textContent;
    const serviceNumber = card.querySelector('h2 span').textContent;

    if (coins < 20) {
      alert('Not enough coins to make a call!');
      return;
    }

    coins -= 20;
    coinCountEl.textContent = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // Add to call history
    const historyItem = document.createElement('div');
    historyItem.classList.add('flex', 'justify-between', 'items-center', 'p-2', 'border', 'rounded', 'bg-gray-100');
    historyItem.innerHTML = `<span>${serviceName} - ${serviceNumber}</span>`;
    callHistoryContainer.appendChild(historyItem);
  });
});

// Clear History Functionality
clearHistoryBtn.addEventListener('click', () => {
  callHistoryContainer.innerHTML = '';
});

