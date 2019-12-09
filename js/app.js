// DOM Elements
const time = document.getElementById('time-clock');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Options
let showAmPm = true;

// Show Time
const showTime = () => {
    let today = new Date()
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // Set AM or PM
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // 12hr Format
    // EX: 13 % 12 => 1
    // EX: 14 % 12 => 2
    // EX: 15 % 12 => 3
    hours = hours % 12 || 12;

    // Output time
    time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zero to time
const addZero = n => (parseInt(n, 10) < 10 ? '0' : '') + n;

// Set Background and Greeting
const setBackgroundAndGreeting = () => {
    let today = new Date();
    let hours = today.getHours();

    if (hours < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = '#fff';
    } else if (hours < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = '#fff';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = '#fff';
    }
}

// Get Name
const getName = () => {
    let storedName = localStorage.getItem('landing_page_name');

    if (storedName === null) {
        name.textContent = '[Enter Your Name]';
    } else {
        name.textContent = storedName;
    }
}

// Set Name
const setName = (e) => {
    // Check what the event type because this function work with to event listeners
    if (e.type === 'keypress') {
        // Check if Key pressed is Enter (We Want to save if we press "enter" key)
        if (e.keyCode === 13) { // Enter Key Code is 13
            localStorage.setItem('landing_page_name', e.target.innerText);
            
            // Use Blur to get away from the name and not insert the new line from the "Enter" press
            name.blur();
        }
    } else {
        // Blur Event
        localStorage.setItem('landing_page_name', e.target.innerText)
    }
}

// Get Focus
const getFocus = () => {
    let storedFocus = localStorage.getItem('landing_page_focus');

    if (storedFocus === null) {
        focus.textContent = '[Enter Your Focus]';
    } else {
        focus.textContent = storedFocus;
    }
}

// Set Focus
const setFocus = (e) => {
    // Check what the event type because this function work with to event listeners
    if (e.type === 'keypress') {
        // Check if Key pressed is Enter (We Want to save if we press "enter" key)
        if (e.keyCode === 13) { // Enter Key Code is 13
            localStorage.setItem('landing_page_focus', e.target.innerText);
            
            // Use Blur to get away from the focus and not insert the new line from the "Enter" press
            focus.blur();
        }
    } else {
        // Blur Event
        localStorage.setItem('landing_page_focus', e.target.innerText)
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

time.addEventListener('click', () => showAmPm = !showAmPm);

// Run Show Time
showTime();

// Run Background and Greeting
setBackgroundAndGreeting();

// Run Get Name
getName();

// Run Get Focus
getFocus();