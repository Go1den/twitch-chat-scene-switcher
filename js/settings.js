////Twitch settings


// A string representing your Twitch username.
let myUsername = 'Username';




//// OBS Server settings 
// Note: Server settings are found in OBS itself. 
// Tools -> WebSocket Server Settings
// Make sure you have Enable WebSocket server checked.

// A string representing the open server port configured in your OBS settings.
let myServerPort = '4455';

// A string representing the server password configured in your OBS settings.
let myServerPassword = 'Password';




//// OBS Scene Settings


// A dictionary representing the chat messages which correspond to scene names.
// Each key represents a message you want to type in chat to trigger a scene change.
// Each value represents the scene you want to change to when that key is typed by the broadcaster in chat.
// Note: The value must be the EXACT name of the scene as it appears in the OBS Scenes window.
let myScenes = {
    "1" : "Scene 1",
    "2" : "Scene 2",
    "3" : "Scene 3"
}

// A string representing the chat message which corresponds to starting a broadcast.
let broadcastStartString = "Start";

// A string representing the chat message which corresponds to ending a broadcast.
let broadcastStopString = "Stop";