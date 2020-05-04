# Jam Session 

The purpose of our app is to allow users to play their favorite instruments and learn the notes in the musical scale in an easy and fun way. Users have the opportunity to select an instrument they are interested in and scroll play the different notes in the 12-note musical scale, hear what note name they are playing, and create music using the sounds. For the drumkit, users can experiment with 6 different drum sounds and create their own beat. There is also a "DJ" page where users can play a few sounds from each instrument, record their musical creation, and play it back. The intended audience is visually impaired people who are interested in exploring musical instruments. The instruments are each playable using only the left and right arrow keys, space bar, and enter key on the keyboard. On the DJ page, recording is stopped and started by the shift key, and the recorded music can be played back using the up arrow. Page navigation is done fully through the left and right arrow keys, enter and spacebar keys, and the backspace key to return to the previous page. Upon navigating to each instrument page, the instructions for that page are read aloud unless interrupted by the user beginning to play the notes. 

* TECHNOLOGIES/FRAMEWORKS/LIBRARIES USED

This app is built entirely using HTML, Javascript, and CSS. The instrument sound files were pulled from nbrosowsky/tonejs-instruments repository on Github (https://github.com/nbrosowsky/tonejs-instruments). The drumkit sound files were pulled from wesbos/JavaScript30 Github repository (https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit). 

* HOW TO BUILD AND DEPLOY

The project can be played in the web browser at https://erinlyons.github.io/comp580project/. 

* PROBLEMS ENCOUNTERED 

There is no way to have the instructions read upon opening the homepage, so reading the first instructions is triggered by pressing any key on the keyboard other than the space and enter keys which are used to navigate to the next pages. 

* FUTURE WORK

With more time, we would hope to add more instruments so that users have a wider variety of instrument sounds to explore. We would also like to add the recording feature to each page so that users could create and playback songs using just one instrument of their choice, instead of just on the instrument mix page.   
