let myAddress = 'ws://localhost:' + myServerPort;

const obs = new OBSWebSocket();
const connect = async () => {
    try {
        logInBrowser("Connecting to " + myAddress + "...");
        await obs.connect(myAddress, myServerPassword);
        logInBrowser("Connected to OBS server");
    } catch (error) {
        logInBrowser("Failed to connect to OBS server");
    }
};

connect();

ComfyJS.onChat = (user, message, flags, self, extra) => {
    checkIfUserIsMeAndPressKey(user, message);
}

ComfyJS.Init(myUsername);

function checkIfUserIsMeAndPressKey(user, msg) {
    if (user === myUsername) {
        processMessage(msg);
    }
}

async function processMessage(msg) {
    if (msg in myScenes) {
        setCurrentScene(msg);
    } else if (msg === broadcastStartString) {
        startStream();
    } else if (msg === broadcastStopString) {
        stopStream();
    }
}

async function setCurrentScene(msg) {
    try {
        let scene = myScenes[msg];
        await obs.call('SetCurrentProgramScene', {sceneName: scene});
        await logInBrowser('Setting scene to ' + scene);
    }
    catch {
        await logInBrowser('An error occurred trying to switch scene to ' + scene);
        return;
    }
}

async function startStream() {
    await logInBrowser('Starting stream...');
    await obs.call('StartStream');
    await logInBrowser('Stream started!');
}

async function stopStream() {
    await logInBrowser('Stopping stream...');
    await obs.call('StopStream');
    await logInBrowser('Stream stopped!');
}

async function logInBrowser(msg) {
    let browserLog = document.getElementById("browserLog");
    browserLog.innerHTML += '<br>' + msg;
}