// allow us to easily wait for speech
function say(s) 
{
    let msg = new SpeechSynthesisUtterance(s);
    return new Promise(resolve => {
      msg.lang = 'en-US';
      msg.onend = (event) => {
        console.log(3); resolve('done');}
      speechSynthesis.resume();
      speechSynthesis.speak(msg);
    });
  }
  
  // easily wait for sounds
  
 say("Welcome to the Jam Session");
 say("This game will give you a chance to play your favorite instruments and learn the notes in the scale in the most fun and easy way. Have fun and make some music!");
 say("Press ENTER to learn how to play. Press SPACE to start game.");
  
 function cancelAudio(){
   speechSynthesis.cancel();
 }

  document.getElementsByName('button').addEventListener('click', cancelAudio);

  document.addEventListener('keydown', event => {
    if (event.keyCode == 13) {
        document.getElementById("Help").click(); 
        cancelAudio();
    } else if (event.keyCode == 32) {
        document.getElementById("Start").click();
        cancelAudio(); 
    }
});
  
 
  

  

  
  
  

 