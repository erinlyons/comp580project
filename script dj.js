// allow us to easily wait for speech
function say(s) {
  let msg = new SpeechSynthesisUtterance(s);
  return new Promise(resolve => {
    msg.lang = 'en-US';
    msg.onend = (event) => {
      console.log(3); resolve('done');
    }
    speechSynthesis.speak(msg);
  });
}

// easily wait for sounds

function play(path) {



  var a = new Audio(path);
  a.play();


}
function stop(path) {
  var sound = new Audio(path);

  sound.pause();
  sound.currentTime = 0;
}


var isRecording = false;
var Notes = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'Snare', 'Kick', 'Hihat'];
var sounds;
var playlist = [new Audio('tonejs-instruments/samples/cello/C3.wav'), new Audio('tonejs-instruments/samples/cello/Cs3.wav'), new Audio('tonejs-instruments/samples/cello/D3.wav'),
new Audio('tonejs-instruments/samples/guitar-acoustic/Ds2.wav'), new Audio('tonejs-instruments/samples/guitar-acoustic/E2.wav'), new Audio('tonejs-instruments/samples/guitar-acoustic/F2.wav'), new Audio('tonejs-instruments/samples/piano/Fs3.wav')
  , new Audio('tonejs-instruments/samples/piano/G3.wav'), new Audio('tonejs-instruments/samples/piano/Gs3.wav'), new Audio('sounds/snare.wav'), new Audio('sounds/kick.wav'), new Audio('sounds/hihat.wav')];
//var soundEffect=
console.log(Notes);

var Answers = "";
var Path = "";
// var SoundAnswer="";
//let Target ="";

async function load() {

  //var random= 6;
  // Target  = Notes[random];
  //console.log(Target);
  //let SoundTarget = playlist[random];
  //console.log(SoundTarget);
  Answers = Notes;
  Path = playlist;

  //console.log(Target, Answers);
  //Answsers = Answers;
  //console.log(SoundAnswer);
  Answers = Answers.slice(0, 12);
  Path = Path.slice(0, 12);

  //console.log(Answers);
  // Answers.push(Answers);
  console.log('answers', Answers);
  console.log('sound', Path);

  AnswerList();
  await say("Welcome to the DJ page! This page will let you mix sounds from different instruments and record the music you create. Use the left and right arrow keys to scroll through the notes. Click enter to hear the note name and click the space bar to play the note sound! Press the shift key to start or stop recording, and once you have recorded yourself playing, press the up arrow to play it back. Press the right arrow to begin.");

  //await  play(SoundTarget);

}

// nextRound
let score = 0;
let count = 1;
//var c = -1;
var cs = -1;
var c = 0;


async function nextChoice() {
  cs = (cs + 1) % Answers.length;
  //console.log(cs, Answers[cs]);
  //await say('Note ' + Answers[cs]);
  //console.log("note", Path[cs]);

}
async function previous() {
  c = cs;
  c--;

  if (c < 0) {
    c = 0;
  }
  cs = c;
  //console.log(c, Answers[c]);
  //await say('Note ' + Answers[c]);
  //console.log("note", Path[cs]);

}








function startAnatural() {

  Path[cs].play();
}

function stopAnatural() {
  Path[cs].pause();
  Path[cs].currentTime = 0;
}


function AnswerList() {
  document.getElementById("option1").innerHTML = Answers[0];
  document.getElementById("option2").innerHTML = Answers[1];
  document.getElementById("option3").innerHTML = Answers[2];
  document.getElementById("option4").innerHTML = Answers[3];
  document.getElementById("option5").innerHTML = Answers[4];
  document.getElementById("option6").innerHTML = Answers[5];
  document.getElementById("option7").innerHTML = Answers[6];
  document.getElementById("option8").innerHTML = Answers[7];
  document.getElementById("option9").innerHTML = Answers[8];
  document.getElementById("option10").innerHTML = Answers[9];
  document.getElementById("option11").innerHTML = Answers[10];
  document.getElementById("option12").innerHTML = Answers[11];

  // document.getElementById("score").innerHTML = "Your score is: " + score;
}



document.onkeydown = function (e) {
  e = e || window.event;
  var key = e.which || e.keyCode;
  if (key === 32) {
    e.preventDefault();
    startAnatural();
  }
  if (key===13) {
    say("Note " + Answers[cs]);
  }
  if (key === 39) {
    nextChoice();
  }
  if (key === 37) {
    previous();
  }
  if (key === 8) {
    speechSynthesis.cancel();
    document.getElementById("return").click();
  }
  if (key === 16){
    speechSynthesis.cancel();
    if (isRecording) { document.getElementById("stop_button").click(); }
    else { document.getElementById("record_button").click(); }
  }
  if (key === 38){
    speechSynthesis.cancel();
    document.getElementById("playback_button").click();
  }
};

document.onkeyup = function (e) {
  e = e || window.event;
  var key = e.which || e.keyCode;
  if (key === 32) {
    stopAnatural();
  }

};

/*--------------------------------------------RECORD & PLAYBACK-----------------------------------------------*/

//restart from beginning
function restart() {
  cs = -1;
}

//array to save key events
var recording = function (e) {
  recording.data.push(e);
};


//recording function
document.getElementById("record_button").onclick = function () {

  isRecording = true;
  var record = document.getElementById("record_button");
  var stop = document.getElementById("stop_button");
  var playb = document.getElementById("playback_button");

  //hide record and playback buttons, show stop button
  record.style.display = "none";
  stop.style.display = "block";
  playb.style.display = "none";

  //wipe new
  restart();
  recording.data = [];

  //start saving events
  document.addEventListener("keyup", recording);
  document.addEventListener("keydown", recording);
};

//stop recording
document.getElementById("stop_button").onclick = function () {

  isRecording = false;

  var record = document.getElementById("record_button");
  var stop = document.getElementById("stop_button");
  var playb = document.getElementById("playback_button");

  //show record and playback buttons, hide stop
  stop.style.display = "none";
  record.style.display = "block";
  playb.style.display = "block";

  //stop listening for key events
  document.removeEventListener("keydown", recording);
  document.removeEventListener("keyup", recording);
  // console.log(recording.data);

  restart();
};


//playback function
document.getElementById("playback_button").onclick = function () {

  var record = document.getElementById("record_button");
  var stop = document.getElementById("stop_button");
  var playb = document.getElementById("playback_button");

  restart();

  //simulate events from data
  //get time of first keydown
  let startTime = recording.data[0].timeStamp;

  //for each event we saved, simulate it
  for (let i = 0; i < recording.data.length; i++) {

    //set timeout to amount of time elapsed between first keydown and current event
    let delay = recording.data[i].timeStamp - startTime;
    setTimeout(function () {

      //create a keydown or keyup event for the current key
      if (recording.data[i].type == "keydown") {
        console.log("pressing down" + recording.data[i].code);
        var e = $.Event('keydown');
        e.which = recording.data[i].keyCode;

      } else {
        console.log("letting go of" + recording.data[i].code);
        var e = $.Event('keyup');
        e.which = recording.data[i].keyCode;
      }

      //play event
      $(document).trigger(e);

    }, delay);
  }



};



