let countHome = 0
const hplusOne = () => {
    countHome += 1;
    document.getElementById("homeScore").innerHTML = countHome;
}
const hplusTwo = () => {
    countHome += 2;
    document.getElementById("homeScore").innerHTML = countHome;
}
const hplusThree = () => {
    countHome += 3;
    document.getElementById("homeScore").innerHTML = countHome;
}

let countGuest = 0
const gplusOne = () => {
    countGuest += 1;
    document.getElementById("guestScore").innerHTML = countGuest;
}
const gplusTwo = () => {
    countGuest += 2;
    document.getElementById("guestScore").innerHTML = countGuest;
}
const gplusThree = () => {
    countGuest += 3;
    document.getElementById("guestScore").innerHTML = countGuest;
}