let img=document.getElementById("playerImg")
let paperBtn=document.querySelector('#paper-btn')
let scrissorBtn=document.getElementById("rock-btn")
let result=document.getElementById("gamename")
let Pscore=document.getElementById("pscore")
let Cscore=document.getElementById("cscore")
let ComputerImg=document.getElementById("computerImg")
 
let computerTern
let c=0
let p=0


function rock(){
    img.src='./rock.png';
    
    computerTern=(Math.floor(Math.random()*3)+1)
    rockb();

}
function paper(){

    img.src='./paper.png';
    computerTern=(Math.floor(Math.random()*3)+1)
    paperb();

}
function scrissor(){
    img.src='./scissors.png';
    computerTern=(Math.floor(Math.random()*3)+1)
    srissorb()
}
function rockb(){
    
    if(computerTern===2){
        result.textContent="computer win";
        Cscore.textContent= (c+=1)
        ComputerImg.src='./paper.png';

    }else if(computerTern===3){
        result.textContent="you win";
        Pscore.textContent= (p+=1);
        ComputerImg.src='./scissors.png';

    }else{
        result.textContent="match draw";
        ComputerImg.src='./rock.png';


    }
}
function paperb(){
    
    if(computerTern===3){
        result.textContent="computer win";
        Cscore.textContent= (c+=1)
        ComputerImg.src='./scissors.png';

    }else if(computerTern===1){
        result.textContent="you win";
        Pscore.textContent= (p+=1);
        ComputerImg.src='./rock.png';

    }else{
        result.textContent="match draw";
        ComputerImg.src='./paper.png';


    }
}
function srissorb(){
    
    if(computerTern===1){
        result.textContent="computer win";
        Cscore.textContent= (c+=1)
        ComputerImg.src='./rock.png';

    }else if(computerTern===2){
        result.textContent="you win";
        Pscore.textContent= (p+=1);
        ComputerImg.src='./paper.png';

    }else{
        result.textContent="match draw";
        ComputerImg.src='./scissors.png';


    }
}