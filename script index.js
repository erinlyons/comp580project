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
  say("The game will give people a way to play different instruments and manipulate the sounds/pitch without having any musical training. People can play different instruments together and have jam sessions.");
  say("Press ENTER to learn how to play. Press SPACE to start game.");

  
  

  document.addEventListener('keydown', event => {
    if (event.keyCode == 13) {
        document.getElementById("Help").click(); 
        speechSynthesis.cancel();
    } else if (event.keyCode == 32) {
        document.getElementById("Start").click();
        speechSynthesis.cancel(); 
    }
});
  
 
  

  

  
  
  

 