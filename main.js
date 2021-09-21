function soundClassify(){
    navigator.mediaDevices.getUserMedia({
       audio:true 
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ebdXozvWY/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
   if(error){
       console.error(error);
   }
   else{
       console.log(results);
       randomNumberR=Math.floor(Math.random()*255)+1;
       randomNumberG=Math.floor(Math.random()*255)+1;
       randomNumberB=Math.floor(Math.random()*255)+1;
       document.getElementById("resulting").innerHTML='I Can Hear--'+results[0].label;
       document.getElementById("resultTwo").innerHTML='Accuracy--'+(results[0].confidence*100).toFixed(2)+"%";
       document.getElementById("resulting").style.color="rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
       document.getElementById("resultTwo").style.color="rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
       img1= document.getElementById("alienOne");
       img2= document.getElementById("alienTwo");
       img3= document.getElementById("alienThree");
       img4= document.getElementById("alienFour");
       
       if(results[0].label=="clap"){
           img1.src='aliens-01.gif';
           img2.src='aliens-02.png';
           img3.src='aliens-03.png';
           img4.src='aliens-04.png';
       }
       else if(results[0].label=="snap"){
        img2.src='aliens-02.gif';
        img1.src='aliens-01.png';
        img3.src='aliens-03.png';
        img4.src='aliens-04.png';
       }
       else if(results[0].label=="bang"){
       img3.src='aliens-03.gif';
       img1.src='aliens-01.png';
       img2.src='aliens-02.png';
       img4.src='aliens-04.png';

   }
   else{
    img4.src='aliens-04.gif';
    img1.src='aliens-01.png';
    img2.src='aliens-02.png';
    img3.src='aliens-03.png';
   }
}
}

