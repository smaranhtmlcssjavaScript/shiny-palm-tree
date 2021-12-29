prediction1 = "";
prediction2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version - ', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5J1kG7Ewe/model.json", modelLoaded);

function modelLoaded(){
    console.log("model loaded")
}

function speak() {
    var synth = window.SpeachSynthesis;
    speak_data1 = "the first prediction is - " + prediction1;
    speak_data2 = "the second prediction is - " + prediction2;
    var utterThis = new SpeachSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}