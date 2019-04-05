const player = document.querySelector('.player')
const video = document.querySelector('.player__video')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const toggle = document.querySelector('.player__button')
const skipButtons = document.querySelectorAll('[data-skip]')
const ranges = document.querySelectorAll('.player__slider')

function togglePlay() {
    video.paused ? video.play(): video.pause()
}
function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon
}
function skip() {
    const timeSkip = this.dataset.skip
    video.currentTime += parseFloat(timeSkip) 
    console.dir(video)
}
function handleRangeUpdate(e) {
    video[this.name] = this.value
    // console.log(this.name, this.value)
}
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
    
}
function scrub(e) {
    console.dir(progressBar)
    per = e.offsetX / progress.offsetWidth
    video.currentTime = per * video.duration
    console.log(per, video.duration)
}
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
const btnFullscreen = document.querySelector('.fullScreen')
btnFullscreen.addEventListener('click', () => video.requestFullscreen())
skipButtons.forEach(btn => {
    btn.addEventListener('click', skip)
})
ranges.forEach(range => {
    range.addEventListener('change', handleRangeUpdate)
})
video.addEventListener('timeupdate', handleProgress)
progress.addEventListener('click', scrub)
