const second = document.querySelector(".second-hand");
const minute = document.querySelector(".minute-hand");
const hour = document.querySelector(".hour-hand");
const setDate = () =>{
    const now = new Date();
    const miliseconds = now.getMilliseconds();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hours = now.getHours();

    const secondDegree = 6 * seconds + 0.006 * miliseconds;
    const minuteDegree = 6 * minutes + 0.1 * seconds;
    const hourDegree = 30 * hours + 0.5 * minutes;

    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
    requestAnimationFrame(setDate);
};

setDate();

