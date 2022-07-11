x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_sq = "";

//this is the API used to convert speech to text

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is Listening";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    //having the text content of the speech
    content = event.results[0][0].transcript;

    if(content == "Circle" || content == "circle"){
        x = Math.floor(Math.random() * 900); 
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Drawing Circle";
        draw_circle = "set";
    }

    if(content == "rectangle" || content == "Rectangle"){
        x = Math.floor(Math.random() * 900); 
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Drawing Rectangle";
        draw_rect = "set";
    }

    if(content == "Square" || content == "square"){
        x = Math.floor(Math.random() * 900); 
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Drawing Square";
        draw_sq = "set";
    }
}

function preload(){
}

function setup(){
    createCanvas(900, 600);
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random() * 200);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is Drawn";
        draw_circle = ""
    }

    if(draw_rect == "set"){
        rect(x, y, 100, 40);
        document.getElementById("status").innerHTML = "Rectangle is Drawn";
        draw_rect = ""
    }

    if(draw_sq == "set"){
        rect(x, y, 100, 100);
        document.getElementById("status").innerHTML = "Square is Drawn";
        draw_sq = ""
    }
}
