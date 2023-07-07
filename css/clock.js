const second = document.querySelector(".second-hand");
const minute = document.querySelector(".minute-hand");
const hour = document.querySelector(".hour-hand");

const setTime = (setting) =>{
    if (setting === 'minute'){
        const time = document.getElementById('time-text-minute');
        time.classList.add('animate');
        setTimeout(()=>{
            time.innerHTML = new Date().getMinutes();
        },1500);
        setTimeout(()=>{
            time.classList.remove('animate');
        },2000)
    }
    else if(setting === 'hour') {
        const minute = document.getElementById('time-text-minute');
        const hour = document.getElementById('time-text-hour');
        minute.classList.add('animate');
        hour.classList.add('animate');
        setTimeout(() => {
            minute.innerHTML = new Date().getMinutes();
            hour.innerHTML = new Date().getHours();
        }, 1500);
        setTimeout(() => {
            hour.classList.remove('animate');
            minute.classList.remove('animate');
        }, 2000)
    }
};


const setDate = () =>{
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hours = now.getHours();

    const secondDegree = 6 * seconds + 0.006 * milliseconds;
    const minuteDegree = 6 * minutes + 0.1 * seconds;
    const hourDegree = 30 * hours + 0.5 * minutes;

    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;

    if(seconds > 58 ){
        setTime('minute')
    }
    else if(minuteDegree === 360){
        setTime('hour')
    }

    requestAnimationFrame(setDate);
};
document.getElementById('time-text-minute').innerHTML = new Date().getMinutes();
document.getElementById('time-text-hour').innerHTML = new Date().getHours();
setDate();

