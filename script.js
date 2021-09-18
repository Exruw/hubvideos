$(document).ready(function(){

var videos = [
    [{type:'mp4', 'src':'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}],
    [{type:'mp4', 'src':'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}],
    [{type:'mp4', 'src':'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}]
];

// selecting random item from array,you can make your own
var randomitem = videos[Math.floor(Math.random()*videos.length)];

// This function adds a new video source (dynamic) in the video html tag

function videoadd(element, src, type) {
    var source = document.createElement('source');

    source.src = src;
    source.type = type;
   element.appendChild(source);
}
// this function fires the video for particular video tag

function newvideo(src)
{
var vid = document.getElementById("myVideo");
videoadd(vid,src ,'video/ogg');
vid.autoplay = true;
vid.load();
//vid.play();
}
// function call
newvideo(randomitem[0].src)

// Added an event listener so that everytime the video finishes ,a new video is loaded from array
document.getElementById('myVideo').addEventListener('ended',handler,false);

function handler(e)
{
newvideo(randomitem[0].src)

}
  

})
