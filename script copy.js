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
    
    return new Promise(resolve => {
      let sound = new Howl({
        src: [path]
      });
      sound.once('end', resolve);
      sound.play();
    });
    
  }
  function stop(path) {
    return new Promise(resolve => {
      let sound = new Howl({
        src: [path]
      });
      sound.once('end', resolve);
      sound.pause();
      
    });
  }
  //  shuffles the  answer choices
  function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }
  
  var Notes = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs','G','Gs','A','As','B'];
  var playlist = ['tonejs-instruments/samples/cello/C3.wav', 'tonejs-instruments/samples/cello/Cs3.wav', 'tonejs-instruments/samples/cello/D3.wav', 'tonejs-instruments/samples/cello/Ds3.wav', 'tonejs-instruments/samples/cello/E3.wav', 'tonejs-instruments/samples/cello/F3.wav', 'tonejs-instruments/samples/cello/Fs3.wav'
  ,'tonejs-instruments/samples/cello/G3.wav','tonejs-instruments/samples/cello/Gs3.wav','tonejs-instruments/samples/cello/A3.wav','tonejs-instruments/samples/cello/As3.wav','tonejs-instruments/samples/cello/B3.wav'];
  //var soundEffect=
  console.log(Notes);
  
  var Answers = "";
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
    //console.log(Target, Answers);
    //Answsers = Answers;
    //console.log(SoundAnswer);
    Answers = Answers.slice(0, 12);
    //console.log(Answers);
  // Answers.push(Answers);
  console.log('answers', Answers);
  AnswerList();
  await say("Welcome to the Cello page!");
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
  
  
  async function nextChoice()
   {
     cs = (cs + 1) % Answers.length;
    console.log(cs, Answers[cs]);
  await say('Note ' + Answers[cs]);
  
  
  
  }
  async function playnote()
{
  //cs = (cs + 1) % Answers.length;
  console.log(cs, Answers[cs]);
  
  if (Answers[cs]=="C")
  {
    await play('tonejs-instruments/samples/cello/C3.wav');
    //await stop('tonejs-instruments/samples/cello/C3.wav')
  }
  else if (Answers[cs]=="Cs")
  {
    await play('tonejs-instruments/samples/cello/Cs3.wav');
  }
  else if (Answers[cs]=="D")
  {
    await play('tonejs-instruments/samples/cello/D3.wav');
  }else if (Answers[cs]=="Ds")
  {
    await play('tonejs-instruments/samples/cello/Ds3.mp3');
  }else if (Answers[cs]=="E")
  {
    await play('tonejs-instruments/samples/cello/E3.wav');
  }else if (Answers[cs]=="F")
  {
    await play('tonejs-instruments/samples/cello/F3.wav');
  }else if (Answers[cs]=="Fs")
  {
    await play('tonejs-instruments/samples/cello/Fs3.wav');
  }
  else if (Answers[cs]=="G")
  {
    await play('tonejs-instruments/samples/cello/G3.wav');
  }
  else if (Answers[cs]=="Gs")
  {
    await play('tonejs-instruments/samples/cello/Gs3.wav');
  }
  else if (Answers[cs]=="A")
  {
    await play('tonejs-instruments/samples/cello/A3.wav');
  }
  else if (Answers[cs]=="As")
  {
    await play('tonejs-instruments/samples/cello/As3.wav');
  }
  else if (Answers[cs]=="B")
  {
    await play('tonejs-instruments/samples/cello/B3.wav');
  }
  
}


async function stopnote()
{
  //cs = (cs + 1) % Answers.length;
  console.log(cs, Answers[cs]);
  
  if (Answers[cs]=="C")
  {
    await stop('tonejs-instruments/samples/cello/C3.wav');
  }
  else if (Answers[cs]=="Cs")
  {
    await play('tonejs-instruments/samples/cello/Cs3.wav');
  }
  else if (Answers[cs]=="D")
  {
    await play('tonejs-instruments/samples/cello/D3.wav');
  }else if (Answers[cs]=="Ds")
  {
    await play('tonejs-instruments/samples/cello/Ds3.mp3');
  }else if (Answers[cs]=="E")
  {
    await play('tonejs-instruments/samples/cello/E3.wav');
  }else if (Answers[cs]=="F")
  {
    await play('tonejs-instruments/samples/cello/F3.wav');
  }else if (Answers[cs]=="Fs")
  {
    await play('tonejs-instruments/samples/cello/Fs3.wav');
  }
  else if (Answers[cs]=="G")
  {
    await play('tonejs-instruments/samples/cello/G3.wav');
  }
  else if (Answers[cs]=="Gs")
  {
    await play('tonejs-instruments/samples/cello/Gs3.wav');
  }
  else if (Answers[cs]=="A")
  {
    await play('tonejs-instruments/samples/cello/A3.wav');
  }
  else if (Answers[cs]=="As")
  {
    await play('tonejs-instruments/samples/cello/As3.wav');
  }
  else if (Answers[cs]=="B")
  {
    await stop('tonejs-instruments/samples/cello/B3.wav');
  }
  
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
  
  
  
  
  document.addEventListener('keydown', event => {
    console.log('kd', event);
    if (event.key == 'ArrowRight') {
      nextChoice();
    } else if (event.key == 'ArrowLeft')
    {
      AnswerSelected();
    }
    else if (event.key == 'Enter')
  {
    playnote();
  
  }
  else if (event.keyCode == '32')
  {
      window.location.href = "guitar.html";
  }
  });
  document.addEventListener('keyup', event => {
    console.log('ku', event);
    
  if (event.key == 'Enter')
  {
    stopnote();
  
  }
  
  });