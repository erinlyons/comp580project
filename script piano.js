// allow us to easily wait for speech
function say(s) {
    let msg = new SpeechSynthesisUtterance(s);
    return new Promise(resolve => {
      msg.lang = 'en-US';
      msg.onend = (event) => {
        console.log(3); resolve('done');}
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
  

  
  var Notes = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs','G','Gs','A','As','B'];
  var sounds;
  var playlist = [new Audio('tonejs-instruments/samples/piano/C3.wav'), new Audio('tonejs-instruments/samples/piano/Cs3.wav'), new Audio('tonejs-instruments/samples/piano/D3.wav'), 
  new Audio('tonejs-instruments/samples/piano/Ds3.wav'), new Audio('tonejs-instruments/samples/piano/E3.wav'), new Audio('tonejs-instruments/samples/piano/F3.wav'), new Audio('tonejs-instruments/samples/piano/Fs3.wav')
  ,new Audio('tonejs-instruments/samples/piano/G3.wav'),new Audio('tonejs-instruments/samples/piano/Gs3.wav'),new Audio('tonejs-instruments/samples/piano/A3.wav'),new Audio('tonejs-instruments/samples/piano/As3.wav'),new Audio('tonejs-instruments/samples/piano/B3.wav')];
  //var soundEffect=
  console.log(Notes);
  
  var Answers = "";
  var Path = "";
 // var SoundAnswer="";
  //let Target ="";
  
  async function load()
  {
    
    //var random= 6;
    // Target  = Notes[random];
    //console.log(Target);
    //let SoundTarget = playlist[random];
   //console.log(SoundTarget);
    Answers = Notes;
    Path= playlist;
    
    //console.log(Target, Answers);
    //Answsers = Answers;
    //console.log(SoundAnswer);
    Answers = Answers.slice(0, 12);
    Path= Path.slice(0, 12);
    
    //console.log(Answers);
  // Answers.push(Answers);
  console.log('answers', Answers);
  console.log('sound', Path);
  
  AnswerList();
  await say("Welcome to the Piano page!");
 // await say("Click on the right arrow key to hear the notes name and click the enter key  to play the note! Have fun!");
 // await say("Welcome to the Cello page!");
 // await say("Click on the right arrow key to hear the notes name and click the enter key  to play the note! Have fun!");
  
  //await  play(SoundTarget);
  
  }

  // nextRound
  let score = 0;
  let count= 1;
  //var c = -1;
  var cs= -1;
  var c= 0;
  
  
  async function nextChoice()
   {
     cs = (cs + 1) % Answers.length;
    console.log(cs, Answers[cs]);
  await say('Note ' + Answers[cs]);
  //console.log("note",Path[cs]);

  }
  async function previous()
   {
     c = cs;
     c--;
    
     if (c < 0)
     {
       c=0;
     }
     cs=c;
    console.log(c, Answers[c]);
  await say('Note ' + Answers[c]);
  console.log("note",Path[cs]);

  }
  



  



function startAnatural()
{
  
  Path[cs].play();
}

function stopAnatural(){
  Path[cs].pause();
  Path[cs].currentTime = 0;
}
  
  
  function AnswerList()
  {
    document.getElementById("option1").innerHTML =Answers[0];
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
  
  
  

  document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===13)
    {
      startAnatural();
    }
    if(key===39)
    {
        nextChoice();
    }
    if(key===37)
    {
      previous();
    }
    if(key === 8) {
        document.getElementById("return").click(); 
    }
};

document.onkeyup = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===13){
        stopAnatural();
    }

};
  
 
  