//https://teachablemachine.withgoogle.com/models/YBwW5F_89/

var cat=0;
var dog=0;


function start(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YBwW5F_89/model.json",modelready);

}

function modelready(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error)

    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1; 

        document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
        

        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        
        


        if(results[0].label=="clap"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }

       else if(results[0].label=="snap"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }

       else if(results[0].label=="bell"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }

        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }
    }
}