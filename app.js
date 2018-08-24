var base = function(){
    canvas = document.getElementById("canvas").getContext("2d");
    canvas.fillStyle = "#ff3333";
    uret();
}
var uret = function(){
    var key = "";
    for(var i = 0;i < 6;i++){
        var rnd = Math.random();
        if(Math.round(rnd)==0){
            key+= String.fromCharCode(48+9*Math.random());
        }else{
            key+= String.fromCharCode(65+25*Math.random());
        }
    }
    canvas.clearRect(0,0,200,50);
    canvas.fillRect(0,0,200,50);
    canvas.font = "35px Arial";
    canvas.strokeText(key,24,34);
}