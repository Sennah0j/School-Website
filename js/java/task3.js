document.getElementById('check-1');
var temp1 = 2;
const dices = [0, 0, 0, 0, 0];


document.getElementById('throwDice').addEventListener('click',function(){
    document.getElementById('counter').innerHTML = temp1--;
    if(document.getElementById('counter').innerHTML == 0){
        document.getElementById('throwDice').disabled = true;
        document.getElementById('throwDice').style.background = '#995f08';
        document.getElementById('throwDice').style.color = '#969087';
    }
    
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
    document.getElementById('ones').innerHTML = checkNumbs(1);
    document.getElementById('twos').innerHTML = checkNumbs(2);
    document.getElementById('threes').innerHTML = checkNumbs(3);
    document.getElementById('fours').innerHTML = checkNumbs(4);
    document.getElementById('fives').innerHTML = checkNumbs(5);
    document.getElementById('sixes').innerHTML = checkNumbs(6);
    

        
});

function checkNumbs(int){
    var temp3 = 0;  
    for (let i = 0; i < dices.length; i++){
        if (dices[i] == int){
            temp3 = temp3 + 1 * int;
        }
    }
    console.log(temp3);
    return (temp3);
}

document.getElementById('ones').addEventListener('click', function(){
    document.getElementById('ones').style.background = '#eb4034';
});


document.querySelector('#point').addEventListener('click', function(){
    

});