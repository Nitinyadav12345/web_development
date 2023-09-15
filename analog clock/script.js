const secondHand = document.getElementById('sec-hand')
const minuteHand = document.getElementById('min-hand')
const hourHand = document.getElementById('hour-hand')

function clocktick(){
   const date = new Date();
   const seconds = date.getSeconds() / 60;
   const min = (seconds + date.getMinutes()) / 60;
   const hour = (min + date.getHours()) / 12;

   rotateclockhand(secondHand,seconds);
   rotateclockhand(minuteHand,min);
   rotateclockhand(hourHand,hour);

}

function rotateclockhand(element , rotation){
    element.style.setProperty('--rotate',rotation*360);
}
setInterval(clocktick,1000)