var qtdLap = 0;
var valLap="";

window.onload = function() {
    var viewer = document.getElementById("viewer");
    var lap = document.getElementById("laps");
    var lap2 = document.getElementById("laps2");
    var lap3 = document.getElementById("laps3");
}

function start(){
    if ($("#Start").val() == "Start"){
        $("#Start").prop("value", "Stop");
        tempoInicial = new Date();
        controle = setInterval(cronometro, 10);
    }else if ($("#Start").val() == "Stop"){
        clearInterval(controle);
        $("#Start").prop("value", "Resume");
    }else if ($("#Start").val() == "Resume"){
        resumeAtual = new Date();
        resumeAtual = resumeAtual.getTime();
        resumeAcumulo = resumeAtual - tempoAcumulado;

        tempoInicial.setTime(resumeAcumulo);
        controle = setInterval(cronometro, 10);
        $("#Start").prop("value", "Stop");
    }
    
}

function lap(){
    if ($("#Start").val() == "Stop"){
    qtdLap = qtdLap + 1;
    valLap = viewer.textContent;
    //laps.innerHTML = laps.textContent + '|  #'+ qtdLap +" "+ valLap + "  ";
    if (qtdLap <= 10){
        $('#laps').append(' #'+ qtdLap +" "+ valLap + ' <br>');
    } else if (qtdLap >= 11 && qtdLap <= 20)   {
        $('#laps2').append(' #'+ qtdLap +" "+ valLap + ' <br>');
    }else if (qtdLap >= 21 && qtdLap <= 30)   {
        $('#laps3').append(' #'+ qtdLap +" "+ valLap + ' <br>');
    }else{
        return false;
    }
    }
}

function reset(){
    clearInterval(controle);
    tempoAcumulado = 0;
    viewer.innerHTML = "00:00,00";
    laps.innerHTML = "";
    laps2.innerHTML = "";
    laps3.innerHTML = "";
    qtdLap = 0;
    $("#Start").prop("value", "Start");
}


function cronometro(){     
    tempoAtual = new Date();
    tempoAcumulado = tempoAtual - tempoInicial;
    tempoAcumulado2 = new Date();
    tempoAcumulado2.setTime(tempoAcumulado);
    
    mili = Math.round(tempoAcumulado2.getMilliseconds()/10);
    sec = tempoAcumulado2.getSeconds();
    min = tempoAcumulado2.getMinutes();

    if (mili < 10) {mili = "0"+mili;}
         if (sec < 10) {sec = "0"+sec;} 
         if (min < 10) {min = "0"+min;}
    viewer.innerHTML =  min+":"+sec+","+mili;
    
    }
