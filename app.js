const arrowHours = document.querySelector('.hours')
const arrowMinutes = document.querySelector('.minutes')
const arrowSeconds = document.querySelector('.seconds')


const runCLock = ()=>{ 
const hours = (new Date()).getHours();
const minutes = (new Date()).getMinutes();
const seconds = (new Date()).getSeconds();


const hoursDeg = ((hours / 12) * 360); 
arrowHours.style.transform = `rotate(${hoursDeg}deg)`

const minutesDeg = ((minutes / 60) * 360); 
arrowMinutes.style.transform = `rotate(${minutesDeg}deg)`; 

const secondsDeg = ((seconds / 60) * 360 ); 
arrowSeconds.style.transform = `rotate(${secondsDeg}deg)`


}




setInterval(runCLock, 1000)