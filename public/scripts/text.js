window.onload = () => {
    if (isElectron) {
        let text= document.getElementById("snap-text");
        //So far is not accurate and attempts to get ip address on every run
        text.innerText = "Connect to Local-ip:3000 on your other devices";

        fetch('/ip').then((res) => {
            return res.json();
        }).then((data) => {
            console.log(Object.values(data).flat()); //be able to switch between these if more than one
        });
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