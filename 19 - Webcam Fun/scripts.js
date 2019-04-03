const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then((localMediaStream) => {
            console.log(localMediaStream)
            video.srcObject = (localMediaStream)
            video.play()
        }).catch(err => console.error(err))
}
getVideo()
function paintToCanvas() {
    const width = video.videoHeight
    const height = video.videoHeight
    console.log(width, height)
    canvas.width = width
    canvas.height = height
    setInterval(() => {
        // tao hinh anh tu video voi toa do x = y = 0
        // moi 16 milisecond se tu tao moi anh
        ctx.drawImage(video, 0, 0 ,width, height)
    },16)

}
video.addEventListener('click', stop)
function stop(){
    video.pause()
}
function takePhoto() {
    const data = canvas.toDataURL('image/jpeg')
    const link = document.createElement('a')
    link.href = data
    link.setAttribute('download', 'handsome')
    link.textContent = 'Download Image'
    strip.insertBefore(link, strip.firstChild)
}
video.addEventListener('canplay', paintToCanvas)