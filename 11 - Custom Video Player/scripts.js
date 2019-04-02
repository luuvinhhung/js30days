const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('input[type="range"]')
// console.log(ranges)
function togglePlay(){
    (video.paused) ? video.play(): video.pause();
}
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log('updated')
}
function skip(){
    // console.log(this.dataset.skip)
    // console.log(video.currentTime)
    video.currentTime += parseFloat(this.dataset.skip) 
}
function handleRangeUpdate() {
    video[this.name] = this.value
    // console.log(this)
    // console.log(this.value)
}
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
    
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    console.log(progress.dataset)
    video.currentTime = scrubTime;
}
let mouseDown = false;
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
// full screen
const fullSce = document.querySelector('.fullScreen')
fullSce.addEventListener('click', () => player.requestFullscreen())