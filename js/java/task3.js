document.getElementById('check-1');

document.querySelector('#throwDice').addEventListener('click',function(){
    var num = 1;
    const nodeList = document.querySelectorAll(".dice");
    for (let i = 0; i < nodeList.length; i++) {
        
        var t1 = Math.floor(Math.random() * 6) +1;
        if (document.getElementById("check-" + num).checked != true)
        {
            nodeList[i].src = '/js/img/dice-' + t1 + '.png';
            console.log("off");
        }
        console.log(num);
        num++;
    }
});