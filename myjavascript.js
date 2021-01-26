/*    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    console.log(hour + ":" + min + ":" + sec);
    let clock =  hour + ":" + min + ":" + sec;
    document.getElementById("clock").innerHTML = clock;*/
    
setInterval(timing , 1000);
function timing() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let clock =  hour + ":" + min + ":" + sec;
    document.getElementById("clock").innerHTML = clock;
    
}
timing();