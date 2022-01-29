console.log(`6666`);
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function setVideoTime(){
    let seco = localStorage.getItem("videoplayer-current-time", );
    console.log(`On Page load ${seco}`);

    player.setCurrentTime(seco).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
}

setVideoTime();

player.on('timeupdate', function() {
    console.log('played the video!');
    
    player.getCurrentTime().then(function(seconds) {
        // seconds = the current playback position
        // console.log(`seconds ${seconds}`);
        localStorage.setItem("videoplayer-current-time", seconds);
        // localStorage.setItem("bosya-the-cat", 'super cool');
        // localStorage.setItem("lord-the-dog", 'amazing');
    }).catch(function(error) {
        console.log(`seconds ${seconds}, error ${error}`);
    });
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
