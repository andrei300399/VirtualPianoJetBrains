document.addEventListener("keypress", function (e) {
    let strLetters = "ASDFGHWETYUJasdfghjwetyu";
    if (strLetters.indexOf(e.key) != -1) {
        let audioObject = new Audio("./"+e.key.toUpperCase()+".mp3");
        audioObject.play();
    } else {
        console.log("Warning");
    }
})