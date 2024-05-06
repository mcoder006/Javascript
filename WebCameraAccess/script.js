
(function(){

    const video = document.querySelector("#video");

    const startVideo = document.querySelector("#startVideo");
    
    const stopVideo = document.querySelector("#stopVideo");

    let stream;

    // if(navigator.mediaDevices.getUserMedia) {
    // }
    
    startVideo.onclick = function() {
        navigator.mediaDevices.getUserMedia({video: true})
        .then(function(data) {

            stream = data;

            video.srcObject = data;
            if(data.active) {
                alert("Video Started!");
            }
            else {
                alert("Webcam Access Denied!");
            }
        })

    };

    stopVideo.onclick = function() {
        if(stream) {
            const tracks = stream.getTracks();

            console.log(tracks);

            tracks.forEach(track => track.stop());
            video.srcObject = null;

            alert("video Stopped!");
        }
        else {
            alert("Video Not Stopped!");
        }
    }

}())

