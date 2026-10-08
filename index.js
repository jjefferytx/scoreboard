let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function addHome (optionType) {
  if (optionType === 1) {
    homeScore += 1;
    homeEl.textContent = homeScore
  } else if (optionType === 2) {
    homeScore += 2;
    homeEl.textContent = homeScore
  } else if (optionType === 3) {
    homeScore += 3;
    homeEl.textContent = homeScore
  } else {
    console.error("Invalid option!");
  }
}

function addGuest (optionType) {
  if (optionType === 1) {
    guestScore += 1;
    guestEl.textContent = guestScore
  } else if (optionType === 2) {
    guestScore += 2;
    guestEl.textContent = guestScore
  } else if (optionType === 3) {
    guestScore += 3;
    guestEl.textContent = guestScore
  } else {
    console.error("Invalid option!");
  }
}

function resetBoard () {
    homeScore = 0
    homeEl.textContent = 0
    
    guestScore = 0
    guestEl.textContent = 0
}