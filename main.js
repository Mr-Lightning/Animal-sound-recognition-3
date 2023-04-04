function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error,result)
{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        r=Math.floor(Math.random( )* 255 ) + 1;
        g=Math.floor(Math.random( )* 255 ) + 1;
        b=Math.floor(Math.random( )* 255 ) + 1;
        
        document.getElementById
    }

}
