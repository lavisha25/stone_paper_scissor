function computerchoice(){
    let cc=Math.random()*3;
    let choice;
    if(cc>0 && cc<=1){
        choice='stone'
    }
    else if(cc>1 && cc<=2){
        choice='paper'
    }
    else{
        choice='scissor'
    }
    return choice;
}
function winner(userchoice, randomchoice){
    let res;
    let randomm
    if(userchoice=='stone' && randomchoice=='stone'){
        res='tie'
        randomm='stone'
    }
    else if(userchoice=='stone' && randomchoice=='paper'){
        res='computer won'
        randomm='paper'
    }
    else if(userchoice=='stone' && randomchoice=='scissor'){
        res='user won'
        randomm='scissor'
    }
    else if(userchoice=='paper' && randomchoice=='stone'){
        randomm='stone'
        res='user won'
    }
    else if(userchoice=='paper' && randomchoice=='paper'){
        randomm='paper'
        res='tie'
    }
    else if(userchoice=='paper' && randomchoice=='scissor'){
        randomm='scissor'
        res='computer won'
    }
    else if(userchoice=='scissor' && randomchoice=='stone'){
        randomm='stone'
        res='computer won'
    }
    else if(userchoice=='scissor' && randomchoice=='scissor'){
        randomm='scissor'
        res='tie'
    }
    else{
        res='user won'
        randomm='paper'
    }
    alert(`user choice is ${userchoice}
                  and
           computer choise is ${randomm}
                  and
           result of the game is ${res}`);
}