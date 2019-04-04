let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const timerEnd = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('.timer__button')
function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000
    displayEndTime(then)
    displayTimer(seconds)
    countdown = setInterval(() => {
        const secondLeft = Math.round((then - Date.now()) / 1000)
        
        if(secondLeft < 0 ) {
            clearInterval(countdown)
            return
        }
        displayTimer(secondLeft)
    }, 1000)
}
function displayTimer(seconds){
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    // console.log(seconds, mins, secs)
    const display = `${mins}:${secs < 10 ? 0 : ''}${secs}`
    document.title = display
    timerDisplay.textContent = display
    
}
function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour
    const minute = end.getMinutes();
    timerEnd.textContent = `Be back at: ${adjustedHour}:${minute < 10 ? 0 : ''}${minute}`
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sec = button.dataset.time
        timer(sec)
    })
})
// lay ele them name
document.customForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputSec = document.querySelector('[name="minutes"]')
    const mins = inputSec.value
    console.log(mins * 60)
    timer(mins * 60)
})