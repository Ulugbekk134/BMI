document.getElementById("btn").addEventListener("click",function(){
  var inputt= document.getElementById("input2").value ;
  var input = document.getElementById("input").value;
    var hisob =(inputt/ (input/100)**2) 
    let qogoz =""
    if(hisob < 18.5){
     qogoz="O'tta kam vazn"
    }else if(hisob >= 18.5&&hisob < 24.9){
     qogoz="Normal vazn"
    }else if(hisob >= 24.9&& hisob< 29.9){
    qogoz ="Ortiqcha vazn"
    }else qogoz="O'tta ortiqcha vazn"
   document.getElementById("p").innerText=qogoz;
})



