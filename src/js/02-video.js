console.log(`6666`);
import _ from "lodash";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// var throttle = require('lodash.throttle');

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

// _.throttle(onTimeUpdate, 1000);


  player.on('timeupdate', _.throttle(function () {
    console.log('played the video!');
    player
      .getCurrentTime()
      .then(function (seconds) {
        // seconds = the current playback position
        localStorage.setItem('videoplayer-current-time', seconds);
        console.log(`seconds ${seconds}`);
      })
      .catch(function (error) { console.log(`seconds ${seconds}, error ${error}`);});
  }, 1000)
  
  );


player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
