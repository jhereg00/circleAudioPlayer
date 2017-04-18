/**
 *  scripts.js
 *  This should include objects, which in turn include the lib files they need.
 *  This keeps us using a modular approach to dev while also only including the
 *  parts of the library we need.
 */
var CircleAudioPlayer = require('app/CircleAudioPlayer');

// test
window.cap = new CircleAudioPlayer({
	audio: '/audio/Motherlode.mp3',
	borderWidth: 5
});
cap.appendTo(document.body);
