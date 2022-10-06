window.onload = () => {
    if (isElectron) {
        let text= document.getElementById("snap-text");
        //get ip address (either get on initial load and make/readfile or broadcast it)
        //(may be able to ping something and get local ip via webrtc)
        text.innerText = "Connect to Local-ip:3000 on your other devices";

        /* fetch('/ip').then((res) => {
            //console.log(res.text);
        }) */
    }
    function isElectron() {
    
    
        // Main process
        if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
            return true;
        }
    
        // Detect the user agent when the `nodeIntegration` option is set to false
        if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
            return true;
        }
    
        return false;
    }
}