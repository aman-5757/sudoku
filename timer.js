const timeH = document.querySelector('h1');
let timeSecond = 180;
displayTime(timeSecond);

const countDown = setInterval(()=>{
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond<=0 || timeSecond<1 || !flag ){
        if(!flag)
        {
            timeH.innerHTML = 'TIMER STOPPED';

        }
        else{
            endTime();
        }
        
        clearInterval(countDown);
    }
},1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10?'0':''}${sec}`;
}

function endTime(){
    timeH.innerHTML = 'TIME OUT!!';
}
let flag = true;
markSol.addEventListener("click", stopTime);

function stopTime(){
    flag = false;
}