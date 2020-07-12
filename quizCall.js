var  i= 0;
var correctCount = 0;
var j;
generate(0);
function generate(index){
	document.getElementById("question").innerHTML = jsonData[index].q ;
	document.getElementById("optt1").innerHTML = jsonData[index]. opt1;
	document.getElementById("optt2").innerHTML = jsonData[index]. opt2;
	document.getElementById("optt3").innerHTML = jsonData[index]. opt3;

}
function checkAnswers(){
    // console.log(jsonData[0].answers);
    // console.log(document.getElementById("opt1").checked);

	if(document.getElementById("opt1").checked && jsonData[i].opt1==jsonData[i].answers ){
		correctCount++;
        // document.getElementById("opt1").checked=false;

	}
    	
	if(document.getElementById("opt2").checked && jsonData[i].opt2==jsonData[i].answers ){
		correctCount++;
       // document.getElementById("opt2").checked=false;
	}	
    
	if(document.getElementById("opt3").checked && jsonData[i].opt3==jsonData[i].answers ){
		correctCount++;
        //document.getElementById("opt3").checked=false;
	}
    
	document.getElementById("opt1").checked=false;
    document.getElementById("opt2").checked=false;
    document.getElementById("opt3").checked=false;
    i++;
    // console.log(correctCount);
	if(jsonData.length-1 < i ){
		if(correctCount==4){
            document.write("");
            document.write("<h1 style=text-align:center>***Congratulations***<h1>")
		    document.write("<h1 style=text-align:center>YOUR SCORE IS : "+correctCount+ "/4");
        }
        else{
            document.write("")
		    document.write("<h1 style=text-align:center>YOUR SCORE IS : "+correctCount+ "/4");
        }
        document.write("<hr>");
        document.write("<h2 style=text-align:center><u>LIST OF ALL THE QUESTION WITH THE CORRECT ANSWERS</u></h2>");
        document.write("<hr>");
        document.write("<hr>");
        for(var j=0;j<4;j++)
        {
        
        document.write("<h3><u>QUESTION </u>"+(j+1)+" : "+jsonData[j]. q);
        document.write("<h4>Option 1 : "+jsonData[j]. opt1);
        document.write("<h4>Option 2 : "+jsonData[j]. opt2);
        document.write("<h4>Option 3 : "+jsonData[j]. opt3);
        document.write("<h3 style=background-color:green>CORRECT ANS : "+jsonData[j]. answers);
        
        }
       
	}
	generate(i);
}
