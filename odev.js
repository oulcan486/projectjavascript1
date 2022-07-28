
let Name=document.querySelector("#myName")
let clockdiv=document.querySelector("#myClock")
let N=prompt("Ad girin")
Name.innerHTML=N

let nowDay=new Date().getDay();
switch(nowDay){
    case 1:
        nowDay="Pazartesi"
        break;
    case 2:
        nowDay="Salı"
        break;
    case 3:
        nowDay="Çarşamba"
        break;
    case 4:
        nowDay="Perşembe"
        break;
    case 5:
        nowDay="Cuma"
        break;
    case 6:
        nowDay="Cumartesi"
        break;
    default:
        nowDay="Pazar"
        break;
}
function showTime(){
    
    let saat=`<p> ${new Date().toLocaleTimeString()} ${nowDay}</p>`
    clockdiv.innerHTML=saat;
    
}

setInterval(showTime,1000)