// DOM Elements
const heartCountSpan = document.getElementById('heart-count');
const coinCountSpan = document.getElementById('coin-count');
const callHistoryDiv = document.getElementById('call-history');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const navbarCopyBtn = document.getElementById('navbar-copy-btn');

// Initialize counts
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Update heart, coin, and copy counts in the UI
function updateCounts() {
  heartCountSpan.textContent = heartCount;
  coinCountSpan.textContent = coinCount;
  document.getElementById('copy-count').textContent = copyCount;
}

// Toggle heart icon and update count
function toggleHeart(heartIcon) {
    if (heartIcon.classList.contains('fa-regular')) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
    }
    heartCount++;
    updateCounts();
}

// বাকি ফাংশন এবং ইভেন্ট লিসেনার অপরিবর্তিত থাকবে
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutes} ${ampm}`;
}

function handleCall(serviceName, serviceNumber) {
  if (coinCount < 20) {
    alert('Not enough coins to make a call!');
    return;
  }
  coinCount -= 20;
  updateCounts();
  alert(`Calling ${serviceName}: ${serviceNumber}`);
  const callTime = formatTime(new Date());
  const callItem = document.createElement('div');
  callItem.className = 'bg-white p-3 rounded-lg shadow flex justify-between items-center';
  callItem.innerHTML = `
    <div>
      <p class="font-semibold">${serviceName}</p>
      <p class="text-sm text-gray-500">${serviceNumber}</p>
    </div>
    <span class="text-xs text-gray-500">${callTime}</span>
  `;
  callHistoryDiv.prepend(callItem);
}

function handleCopy(serviceNumber) {
  navigator.clipboard.writeText(serviceNumber)
    .then(() => {
      copyCount++;
      updateCounts();
      alert(`${serviceNumber} has been copied!`);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
}

clearHistoryBtn.addEventListener('click', () => {
  callHistoryDiv.innerHTML = '<p class="text-center text-gray-500 py-4">Call history is empty</p>';
});

navbarCopyBtn.innerHTML = `
  <span id="copy-count">${copyCount}</span>
  <i class="fa-solid fa-copy ml-1"></i> Copy
`;

// Add event listeners to all heart icons
document.querySelectorAll('.card [id^="heart-"]').forEach(heartIcon => {
  heartIcon.addEventListener('click', () => {
    toggleHeart(heartIcon);
  });
});

// Add event listeners to all call buttons
document.querySelectorAll('.call-btn').forEach(callBtn => {
  const card = callBtn.closest('.card');
  const serviceName = card.querySelector('h3').textContent;
  const serviceNumber = card.querySelector('span').textContent;
  callBtn.addEventListener('click', () => {
    handleCall(serviceName, serviceNumber);
  });
});

// Add event listeners to all copy buttons
document.querySelectorAll('.copy-btn').forEach(copyBtn => {
  const card = copyBtn.closest('.card');
  const serviceNumber = card.querySelector('span').textContent;
  copyBtn.addEventListener('click', () => {
    handleCopy(serviceNumber);
  });
});

// Navbar copy button event listener
navbarCopyBtn.addEventListener('click', () => {
  copyCount++;
  updateCounts();
  alert('Navbar "Copy" button has been clicked!');
});

// Initialize UI
updateCounts();
