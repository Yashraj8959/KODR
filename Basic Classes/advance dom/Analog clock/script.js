function positionNumbers() {
    const numbersContainer = document.getElementById('numbers');
    const clockRadius = 200; // Diameter of the clock in pixels
    const center = clockRadius / 2; // Center point of the clock
    const numberRadius = center - 20; // Distance of numbers from the center
  
    for (let i = 1; i <= 12; i++) {
      const angle = (i * 30 - 90) * (Math.PI / 180); // Start at -90 degrees for 12 o'clock
      const x = center + numberRadius * Math.cos(angle); // X-coordinate
      const y = center + numberRadius * Math.sin(angle); // Y-coordinate
  
      const number = document.createElement('div');
      number.className = 'number';
      number.style.left = `${x}px`;
      number.style.top = `${y}px`;
      number.textContent = i;
      numbersContainer.appendChild(number);
    }
  }
  
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Convert 24-hour format to 12-hour format for analog clock
    hours = hours % 12 || 12; // If hours is 0, change it to 12
  
    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');
  
    // Calculate angles for the clock hands
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 360° / 12 = 30° per hour
    const minuteDeg = minutes * 6 + (seconds / 60) * 6; // 360° / 60 = 6° per minute
    const secondDeg = seconds * 6; // 360° / 60 = 6° per second
  
    // Rotate the hands
    hourElement.style.transform = `rotate(${hourDeg}deg)`;
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
    secondElement.style.transform = `rotate(${secondDeg}deg)`;
  }
  
  // Position numbers dynamically
  positionNumbers();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize clock immediately on page load
  updateClock();
  