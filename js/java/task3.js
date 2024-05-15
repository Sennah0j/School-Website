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
    

});
document.querySelector('#point').addEventListener('click', function(){
    

});