// Task 1: Temperature Conversion
function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById("tempInput").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("tempResult").textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F.`;
}

function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById("tempInput").value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("tempResult").textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C.`;
}

// Task 2: Display Current Day and Time
function displayDateTime() {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[date.getDay()];

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // If 0, make it 12

    const timeString = `Today is: ${day}. Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`;
    document.getElementById("dateTimeResult").textContent = timeString;
}

// Task 3: Leap Year Checker
function checkLeapYear() {
    const year = parseInt(document.getElementById("yearInput").value);
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    document.getElementById("leapYearResult").textContent = isLeap ? `${year} is a leap year.` : `${year} is not a leap year.`;
}

// Task 4: January 1st on a Sunday
function findSundays() {
    let result = "1st January falls on a Sunday in the following years:<br>";
    let count = 0;

    for (let year = 2014; year <= 2050; year++) {
        const date = new Date(year, 0, 1);
        if (date.getDay() === 0) { // 0 represents Sunday
            result += `${year} <br>`;
            count++;
        }
    }

    document.getElementById("sundayResult").innerHTML = result + `<br>Total: ${count} times`;
}

// Task 5: Remove Character at Position
function removeCharacter() {
    const str = document.getElementById("stringInput").value;
    const pos = parseInt(document.getElementById("positionInput").value);

    if (pos >= 0 && pos < str.length) {
        const modifiedString = str.slice(0, pos) + str.slice(pos + 1);
        document.getElementById("removeCharResult").textContent = `Modified string: ${modifiedString}`;
    } else {
        document.getElementById("removeCharResult").textContent = "Invalid position.";
    }
}
