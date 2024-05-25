src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js";
src
document.getElementById('check-1');
var trueFalseVisibilty = false;
var firstDone = false;
var name1 = 'player1';
var name2 = 'player2';
var neutralName = '';
var turnsLeft = '0';
const dices = [2, 2, 2, 4, 4];
var sortedDices = [];

const play1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const play1Check = [false, false , false, false, false, false, false, false , false, false, false, false, false, false, false];
const play2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const play2Check = [false, false , false, false, false, false, false, false , false, false, false, false, false, false, false];

const tempPlay1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const tempPlay2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 'player1';

document.addEventListener('DOMContentLoaded', function(){
    disableThrow();
    const nodeList = document.querySelectorAll(".play2ScoreButtons");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].disabled = true;
        }
    const nodeList2 = document.querySelectorAll(".play1ScoreButtons");
    for (let i = 0; i < nodeList2.length; i++) {
        nodeList2[i].disabled = true;
    }
    const checkList = document.querySelectorAll(".largerCheckBox");
        for(let i = 0; i < checkList.length; i++){
            checkList[i].disabled = true;
        }
     
});

document.getElementById('throwDice').addEventListener('click',function(){
    whichName();
    console.log('----------------');
    
    const checkList = document.querySelectorAll(".largerCheckBox");
    for(let i = 0; i < checkList.length; i++){
        checkList[i].disabled = false;
    }
    turnsLeft--;
    disableThrow();
        var num = 1;
        
        const nodeList = document.querySelectorAll(".dice");
        for (let i = 0; i < nodeList.length; i++) {
            
            
            if (document.getElementById("check-" + (i + 1)).checked != true)
            {
                var t1 = Math.floor(Math.random() * 6) +1;
                nodeList[i].src = '/js/img/dice-' + t1 + '.png';
                nodeList[i].alt = t1;
                console.log("off");
            }
            dices[i] = nodeList[i].alt;
            console.log(dices);
            console.log(i);
              
        }
        sortedDices = dices.sort(function(a, b){return a - b});
        console.log('sorted dices'+ sortedDices);


        
        calculateStraights();
        chanceCalculate();
        yatzy();
        ofAkind();
        fullHouse();
        pairs();
        checkNumbs();

        sumUpEverything();
        
        

        if(turn == 'player1'){
            bruh4();
            console.log('bruh 4 '+tempPlay1);
        }
        else{
            bruh5();
            console.log('bruh 5 '+tempPlay2);
        }

        finish();
        console.log('----------------');
                
});
document.getElementById('inputDoneButton').addEventListener('click', function(){nameInputs()});
document.getElementById('rulesButton').addEventListener('click', function(){
    if(document.getElementById('rules').style.visibility == 'hidden'){
        document.getElementById('rules').style.visibility = 'visible';
    }
    else{
        document.getElementById('rules').style.visibility = 'hidden';
    }
});

document.getElementById('ones').addEventListener('click', function(){saveNumbers(this.innerHTML, 1)});
document.getElementById('twos').addEventListener('click', function(){saveNumbers(this.innerHTML, 2)});
document.getElementById('threes').addEventListener('click', function(){saveNumbers(this.innerHTML, 3)});
document.getElementById('fours').addEventListener('click', function(){saveNumbers(this.innerHTML, 4)});
document.getElementById('fives').addEventListener('click', function(){saveNumbers(this.innerHTML, 5)});
document.getElementById('sixes').addEventListener('click', function(){saveNumbers(this.innerHTML, 6)});
document.getElementById('onePair').addEventListener('click', function(){saveNumbers(this.innerHTML, 7)});
document.getElementById('twoPair').addEventListener('click', function(){saveNumbers(this.innerHTML, 8)});
document.getElementById('threeKind').addEventListener('click', function(){saveNumbers(this.innerHTML, 9)});
document.getElementById('fourKind').addEventListener('click', function(){saveNumbers(this.innerHTML, 10)});
document.getElementById('fullHouse').addEventListener('click', function(){saveNumbers(this.innerHTML, 11)});
document.getElementById('smallStraight').addEventListener('click', function(){saveNumbers(this.innerHTML, 12)});
document.getElementById('largeStraight').addEventListener('click', function(){saveNumbers(this.innerHTML, 13)});
document.getElementById('chance').addEventListener('click', function(){saveNumbers(this.innerHTML, 14)});
document.getElementById('yhatzee').addEventListener('click', function(){saveNumbers(this.innerHTML, 15)});

document.getElementById('ones2').addEventListener('click', function(){saveNumbers(this.innerHTML, 1)});
document.getElementById('twos2').addEventListener('click', function(){saveNumbers(this.innerHTML, 2)});
document.getElementById('threes2').addEventListener('click', function(){saveNumbers(this.innerHTML, 3)});
document.getElementById('fours2').addEventListener('click', function(){saveNumbers(this.innerHTML, 4)});
document.getElementById('fives2').addEventListener('click', function(){saveNumbers(this.innerHTML, 5)});
document.getElementById('sixes2').addEventListener('click', function(){saveNumbers(this.innerHTML, 6)});
document.getElementById('onePair2').addEventListener('click', function(){saveNumbers(this.innerHTML, 7)});
document.getElementById('twoPair2').addEventListener('click', function(){saveNumbers(this.innerHTML, 8)});
document.getElementById('threeKind2').addEventListener('click', function(){saveNumbers(this.innerHTML, 9)});
document.getElementById('fourKind2').addEventListener('click', function(){saveNumbers(this.innerHTML, 10)});
document.getElementById('fullHouse2').addEventListener('click', function(){saveNumbers(this.innerHTML, 11)});
document.getElementById('smallStraight2').addEventListener('click', function(){saveNumbers(this.innerHTML, 12)});
document.getElementById('largeStraight2').addEventListener('click', function(){saveNumbers(this.innerHTML, 13)});
document.getElementById('chance2').addEventListener('click', function(){saveNumbers(this.innerHTML, 14)});
document.getElementById('yhatzee2').addEventListener('click', function(){saveNumbers(this.innerHTML, 15)});

function whichName(){
    if(turn == 'player1'){
        document.getElementById('playerTurnText').innerHTML = name1 + "'s turn";
        console.log(name1 + ' first name');
    }
    else{
        document.getElementById('playerTurnText').innerHTML = name2 + "'s turn";
        console.log(name2 + ' first name');
    }
    document.getElementById('player1-table-name').innerHTML = name1;
    document.getElementById('player2-table-name').innerHTML = name2;
    if(firstDone == false){
        turnsLeft =3;
        disableThrow();
        const nodeList2 = document.querySelectorAll(".play1ScoreButtons");
        for (let i = 0; i < nodeList2.length; i++) {
            nodeList2[i].disabled = false;
        }
        firstDone = true;
    }
    
}

function nameInputs(){
    document.getElementById('inputDiv').style.visibility = 'hidden';
    name1 = document.getElementById('player1-input').value;
    name2 = document.getElementById('player2-input').value;
    whichName();
    
}

function finish(){
    let temp25 = 0;
    for(let i = 0; i < play2Check.length; i++){
        if(play2Check[i] == true){
            temp25++;
        }
        else{
            break;
        }
    }
    if(temp25 == play2Check.length){
        if(parseInt(document.getElementById('total').innerHTML) > parseInt(document.getElementById('total2').innerHTML)){
            document.getElementById('finishingDiv').innerHTML = ( name1 +' WON');
            document.getElementById('finishingDiv').style.visibility = 'visible';
        }
        else if(parseInt(document.getElementById('total').innerHTML) == parseInt(document.getElementById('total2').innerHTML)){
            document.getElementById('finishingDiv').innerHTML = 'it is a tie';
            document.getElementById('finishingDiv').style.visibility = 'visible';
        }
        else{
            document.getElementById('finishingDiv').innerHTML = ( name2 +' WON');
            document.getElementById('finishingDiv').style.visibility = 'visible';
        }
        turnsLeft =0;
        disableThrow();
       
    }
    else{
        document.getElementById('test').innerHTML = ('');
    }
}

function sumUpEverything(){
    let firstSum = 0;
    let firstSum2 = 0;
    let secSum = 0;
    let secSum2 = 0;
    let bonus = 0;
    let bonus2 = 0;
    for(let i = 0; i < 6; i++){
        firstSum += parseFloat(play1[i]);
        firstSum2 += parseFloat(play2[i]);
    }
    document.getElementById('sum').innerHTML = (firstSum);
    document.getElementById('sum2').innerHTML = (firstSum2);
    if(firstSum >= 63){
        bonus = 50;
    }
    if(firstSum2 >= 63){
        bonus = 50;
    }

    for(let i = 6; i < 15; i++){
        secSum += parseFloat(play1[i]);
        secSum2 += parseFloat(play2[i]);
    }

    document.getElementById('bonus').innerHTML = (bonus);
    document.getElementById('bonus2').innerHTML = (bonus2);

    document.getElementById('total').innerHTML = (bonus + firstSum + secSum);
    document.getElementById('total2').innerHTML = (bonus2 + firstSum2 + secSum2);
}

function pairs(){
    let temp20 = 0;
    let onePair = 0;
    let twoPair = 0;
    const itemCounter = (value, index) => {
        return value.filter((x) => x == index).length;
    };

    for(let i = 6; i > 0; i--){
        if(itemCounter(sortedDices, i) >= 2){
            onePair = i * 2;
            temp20 = i;
            break;
        }
        console.log(itemCounter(sortedDices, i) + ' one pairs checking' +i);
    }
    for(temp20-1 > 0; temp20--;){
        if(itemCounter(sortedDices, temp20) >= 2){
            console.log('testubg ' + itemCounter(sortedDices, temp20) + ' ' + temp20);
            twoPair = onePair +(temp20 * 2);
            break;
        }
       
    }
    if(turn == 'player1' && (play1Check[6] == false)){
        tempPlay1[6] = onePair;
    }
    else if((play2Check[6] == false)){
        tempPlay2[6] = onePair;
    }
    if(turn == 'player1' && (play1Check[7] == false)){
        tempPlay1[7] = twoPair;
    }
    else if((play2Check[7] == false)){
        tempPlay2[7] = twoPair;
    }
}

function yatzy(){
    const allEqual = arr => arr.every(v => v === arr[0]);
    
    if(allEqual(dices) == true && play1Check[14] == false){
        if(turn == 'player1'){
            tempPlay1[14] = 50;
        }
    else if(play2Check[14] == false){
            tempPlay2[14] = 50;
        }
    }
    console.log(allEqual(dices)+" yazty check")
}

function chanceCalculate(){
    let temp5 = 0;
    if(turn == 'player1' && play1Check[13] == false){
        for(let i = 0; i < dices.length; i++){
            temp5 += parseFloat(dices[i]); 
        }
        console.log("temp5 "+ temp5 );
            tempPlay1[13] = temp5;
    }
    else if(play2Check[13] == false){
        for(let i = 0; i < dices.length; i++){
            temp5 += parseFloat(dices[i]); 
        }
        console.log("temp5 "+ temp5 );
            tempPlay2[13] = temp5;
    }
}

function calculateStraights(){
   let temp9 = 0;
   let straightPoints = 0;
   let straightPostion = 0;
   for(let i = 0; i < dices.length; i++){
        if(sortedDices[i] == (sortedDices[i + 1] - 1)){
            temp9++;
            console.log(temp9+' temp9');
        }

   }
   console.log('how close to straight ' + temp9);
   if(temp9 == 4){
    if(sortedDices[0] == 1){
        straightPoints = 15;
        straightPostion = 11;
    }
    else{
        straightPoints = 20;
        straightPostion = 12;
    }
    if(turn == 'player1' && play1Check[straightPostion] == false){
        tempPlay1[straightPostion] = straightPoints;
    }
    else if(play1Check[straightPostion] == false){
        tempPlay2[straightPostion] = straightPoints;
    }
   }
    
}

function fullHouse(){
    let temp15 = 0;
    let temp16 = 0;
    let sumHouse = 0;
    for(let i = 0; i < dices.length; i++){
        if(sortedDices[i] == sortedDices[i + 1]){
            temp15++;
        }
        else{
            break;
        }
    }
    if(temp15 == 2){
        for(let i = 3; i < dices.length; i++){
            if(sortedDices[i] == sortedDices[i + 1]){
                temp16++;
            }
            else{
                break;
            }
        }
    }
    else if(temp15 == 1){
        for(let i = 2; i < dices.length; i++){
            if(sortedDices[i] == sortedDices[i + 1]){
                temp16++;
            }
            else{
                break;
            }
        }

    }
    sumHouse = (sortedDices[0] * (temp15 +1) +(sortedDices[4] * (temp16 + 1)));
    if(temp15 + temp16 == 3){
        if(turn == 'player1' && play1Check[10] == false){
            tempPlay1[10] = (sumHouse);
        }
        else if(play2Check[10] == false){
            tempPlay2[10] = (sumHouse);
        }
    
    }
    
    console.log(temp15 + ' t15');
    console.log(temp16 + ' t16');
    console.log(sumHouse + ' sumHouse');
}


function ofAkind(){
    let temp11 = 0; 
    let temp12 = 0;
    const itemCounter = (value, index) => {
        return value.filter((x) => x == index).length;
    };
    
    console.log(itemCounter(dices, 1) + ' itemcounter 1');
    console.log(itemCounter(dices, 2) + ' itemcounter 2');
    console.log(itemCounter(dices, 3)+ ' itemcounter 3');
    console.log(itemCounter(dices, 4)+ ' itemcounter 4');
    console.log(itemCounter(dices, 5)+ ' itemcounter 5');
    console.log(itemCounter(dices, 6)+ ' itemcounter 6');
    
    for(let i = 0; i <= dices.length; i++){
        if(itemCounter(dices, i + 1) >= 4){
            temp12 = (i + 1) * 4;
            console.log('saved 4 pair ' + temp12);
            
        }
        if(itemCounter(dices, i + 1) >= 3){
            temp11 = (i + 1) * 3;
            console.log('saved 3 pair ' + temp11);
            
        }
        
    }
    
    if(turn == 'player1' && (play1Check[8] == false)){
        tempPlay1[8] = temp11;
    }
    else if((play1Check[8] == false)){
        tempPlay2[8] = temp11;
    }if(turn == 'player1' && (play1Check[9] == false)){
        tempPlay1[9] = temp12;
    }
    else if((play2Check[9] == false)){
        tempPlay2[9] = temp12;
    }
}

function checkNumbs(){
   if(turn == 'player1'){
    for(let j = 0; j < 6; j++){
        var temp3 = 0;  
        if(play1Check[j] == false){
            for (let i = 0; i < dices.length; i++){
                if (dices[i] == j + 1){
                    temp3 = temp3 + 1 * j+1;
                }
            }
            tempPlay1[j] = temp3;
        }
    }
   }
   else{
        for(let j = 0; j < 6; j++){
            var temp3 = 0;  
            if(play2Check[j] == false){
                for (let i = 0; i < dices.length; i++){
                    if (dices[i] == j + 1){
                        temp3 = temp3 + 1 * j+1;
                    }
                }
                tempPlay2[j] = temp3;
            }
        }
    }

    console.log(temp3);
   
}

function saveNumbers(string, i){
    
    if(turn == 'player1'){
        play1[i-1] = string;
        play1Check[i-1] = true;
        turnsLeft = '3';
        disableThrow();
        console.log('player 1 array: ' + play1 + ' play 1 check: ' + play1Check);
        console.log('player 1 number ' + (i) +' saved');
        turn = 'player2';

        for(let j = 0; j < play1.length; j++){
            if(play1Check[j] == false){
                tempPlay1[j] = 0;
                console.log('test ' + j + ' '+ play1Check[j]);
            }
        }
        bruh4();
        const nodeList = document.querySelectorAll(".play1ScoreButtons");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].disabled = true;
        }
        const nodeList2 = document.querySelectorAll(".play2ScoreButtons");
        for (let i = 0; i < nodeList2.length; i++) {
            if(play2Check[i] == false){
                nodeList2[i].disabled = false;
            }
           
        }
    }

    else{
        play2[i-1] = string;
        play2Check[i-1] = true;
        turnsLeft = '3';
        disableThrow();
        console.log('player 2 array: ' + play2 + ' play 2 check: ' + play2Check)
        turn = 'player1'

        for(let j = 0; j < play2.length; j++){
            if(play2Check[j] == false){
                tempPlay2[j] = 0;
                console.log('test ' + j);
            }
        }
        bruh5();
        const nodeList = document.querySelectorAll(".play2ScoreButtons");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].disabled = true;
        }
        const nodeList2 = document.querySelectorAll(".play1ScoreButtons");
        for (let i = 0; i < nodeList2.length; i++) {
            if(play1Check[i] == false){
                nodeList2[i].disabled = false;
            }
        }
    }
    
    const checkList = document.querySelectorAll(".largerCheckBox");
    for(let i = 0; i < checkList.length; i++){
        checkList[i].disabled = true;
        checkList[i].checked = false;
    }
    whichName();
    sumUpEverything();
    finish();

}

function bruh4(){
    document.getElementById('ones').innerHTML = tempPlay1[0];
    document.getElementById('twos').innerHTML = tempPlay1[1];
    document.getElementById('threes').innerHTML = tempPlay1[2];
    document.getElementById('fours').innerHTML = tempPlay1[3];
    document.getElementById('fives').innerHTML = tempPlay1[4];
    document.getElementById('sixes').innerHTML = tempPlay1[5];
    document.getElementById('onePair').innerHTML = tempPlay1[6];
    document.getElementById('twoPair').innerHTML = tempPlay1[7];
    document.getElementById('threeKind').innerHTML = tempPlay1[8];
    document.getElementById('fourKind').innerHTML = tempPlay1[9];
    document.getElementById('fullHouse').innerHTML = tempPlay1[10];
    document.getElementById('smallStraight').innerHTML = tempPlay1[11];
    document.getElementById('largeStraight').innerHTML = tempPlay1[12];
    document.getElementById('chance').innerHTML = tempPlay1[13];
    document.getElementById('yhatzee').innerHTML = tempPlay1[14];


}


function bruh5(){
        document.getElementById('ones2').innerHTML = tempPlay2[0];
        document.getElementById('twos2').innerHTML = tempPlay2[1];
        document.getElementById('threes2').innerHTML = tempPlay2[2];
        document.getElementById('fours2').innerHTML = tempPlay2[3];
        document.getElementById('fives2').innerHTML = tempPlay2[4];
        document.getElementById('sixes2').innerHTML = tempPlay2[5];
        document.getElementById('onePair2').innerHTML = tempPlay2[6];
        document.getElementById('twoPair2').innerHTML = tempPlay2[7];
        document.getElementById('threeKind2').innerHTML = tempPlay2[8];
        document.getElementById('fourKind2').innerHTML = tempPlay2[9];
        document.getElementById('fullHouse2').innerHTML = tempPlay2[10];
        document.getElementById('smallStraight2').innerHTML = tempPlay2[11];
        document.getElementById('largeStraight2').innerHTML = tempPlay2[12];
        document.getElementById('chance2').innerHTML = tempPlay2[13];
        document.getElementById('yhatzee2').innerHTML = tempPlay2[14];
    
}

function disableThrow(){
    if(turnsLeft == 0){
        document.getElementById('throwDice').disabled = true;
        document.getElementById('throwDice').style.background = '#995f08';
        document.getElementById('throwDice').style.color = '#969087';
    }
    else{
        document.getElementById('throwDice').disabled = false;
        document.getElementById('throwDice').style.background = '#de8005';
        document.getElementById('throwDice').style.color = '#ffffff';
    }
    document.getElementById('counter').innerHTML = turnsLeft;
}
