
'use strict'
var curlTotal = 0;
var densityTotal="";
var porosityTotal= "";
var photoResults = ["Hair-Type-1A.jpg", "Hair-Type-1B.jpg", "Hair-Type-1C.jpg", "Hair-Type-2A.jpg","Hair-Type-2B.jpg","Hair-Type-2C.jpg", "Hair-Type-3A.jpg", "Hair-Type-3B.jpg", "Hair-Type-3C.jpg","Hair-Type-4A.jpg","Hair-Type-4B.jpg","Hair-Type-4C.jpg"];
document.getElementById('submitBtn').onclick=curlResult;
document.getElementById('learnMoreBtn').onclick=learnResult;

$(document).ready(function() {
  $("#startQuiz").on("click", function() {
    $(".intro").addClass("hideQ");
    $(".numOne").removeClass("hideQ");
  })
  $(".firstQ").on("click", function() {
    $(".numOne").addClass("hideQ");
    $(".numTwo").addClass("showQ");
  })
  $(".secQ").on("click", function() {
    $(".numTwo").removeClass("showQ");
    $(".numThree").addClass("showQ");
  })
  $(".thirdQ").on("click", function() {
    $(".numThree").removeClass("showQ");
    $("#submitBtn").removeClass("hideQ");
  })
  $("#submitBtn").on("click", function() {
    $("#learnMoreBtn").removeClass("hideQ");

})
$("#learnMoreBtn").on("click", function() {
  $(".signIn").addClass("increaseFont");

})
  $(".straight").on("click", function() {
    curlTotal+=1
    console.log("curlTotal"+curlTotal)
})
$(".wavy").on("click", function() {
  curlTotal+=2
  console.log("curlTotal"+curlTotal)
})

$(".curly").on("click", function() {
  curlTotal+=3
  console.log("curlTotal"+curlTotal)
})

$(".coily").on("click", function() {
  curlTotal+=4
  console.log("curlTotal"+curlTotal)
})
$(".a").on("click", function() {
  densityTotal+="a"
  console.log("densityTotal"+densityTotal)
})
$(".b").on("click", function() {
  densityTotal+="b"
  console.log("densityTotal"+densityTotal)
})
$(".c").on("click", function() {
  densityTotal+="c"
  console.log("densityTotal"+densityTotal)
})
$(".low").on("click", function() {
  porosityTotal+="low"
  console.log("porosityTotal"+porosityTotal)
})
$(".normal").on("click", function() {
  porosityTotal+="normal"
  console.log("porosityTotal"+porosityTotal)
})
$(".high").on("click", function() {
  porosityTotal+="high"
  console.log("porosityTotal"+porosityTotal)
})
})


//what am I appending or showing on the dom
function curlResult(){
    document.getElementById('hairType').innerHTML = "You have type "+curlTotal+densityTotal+" " +porosityTotal+" "+"porosity hair!";
    console.log("You have type "+curlTotal+densityTotal+" " +porosityTotal+" "+"porosity hair")
}


function learnResult(){
  if(curlTotal ==1 && densityTotal=="a" && porosityTotal=="low" || curlTotal ==1 && densityTotal=="a" && porosityTotal=="normal"|| curlTotal ==1 && densityTotal=="a" && porosityTotal=="high"){
    document.querySelector('#resultPic').setAttribute('src', photoResults[0]);

  }else if(curlTotal ==1 && densityTotal=="b" && porosityTotal=="low" || curlTotal ==1 && densityTotal=="b" && porosityTotal=="normal" || curlTotal ==1 && densityTotal=="b" && porosityTotal=="high"){
    document.querySelector('#resultPic').setAttribute('src', photoResults[1]);

  }else if(curlTotal ==1 && densityTotal=="C" && porosityTotal=="low" || curlTotal ==1 && densityTotal=="c" && porosityTotal=="normal" || curlTotal ==1 && densityTotal=="c" && porosityTotal=="high"){
    document.querySelector('#resultPic').setAttribute('src', photoResults[2]);

  }else if(curlTotal ==2 && densityTotal=="a" && porosityTotal=="low" || curlTotal ==2 && densityTotal=="a" && porosityTotal=="normal" || curlTotal ==2 && densityTotal=="a" && porosityTotal=="high" ){
    document.querySelector('#resultPic').setAttribute('src', photoResults[3]);

  }else if(curlTotal ==2 && densityTotal=="b" && porosityTotal=="low" || curlTotal ==2 && densityTotal=="b" && porosityTotal=="normal" || curlTotal ==2 && densityTotal=="b" && porosityTotal=="high" ){
    document.querySelector('#resultPic').setAttribute('src', photoResults[4]);

  }else if(curlTotal ==2 && densityTotal=="c" && porosityTotal=="low" || curlTotal ==2 && densityTotal=="c" && porosityTotal=="normal" || curlTotal ==2 && densityTotal=="c" && porosityTotal=="high" ){
    document.querySelector('#resultPic').setAttribute('src', photoResults[5]);

  }else if(curlTotal ==3 && densityTotal=="a" && porosityTotal=="low" || curlTotal ==3 && densityTotal=="a" && porosityTotal=="normal" || curlTotal ==3 && densityTotal=="a" && porosityTotal=="high"){
    document.querySelector('#resultPic').setAttribute('src', photoResults[6]);
    document.querySelector("#hairInfo").innerHTML = "Hello World!";
  }else if(curlTotal ==3 && densityTotal=="b" && porosityTotal=="low" || curlTotal ==3 && densityTotal=="b" && porosityTotal=="normal" || curlTotal ==3 && densityTotal=="b" && porosityTotal=="high"){
    document.querySelector('#resultPic').setAttribute('src', photoResults[7]);
    document.querySelector("#hairInfo").innerHTML = "Your beautiful medium sized-corkcrew curls tend to get frizzy and dry. Add moisture to your hair with shea moisture's coconut & hibsicus, seal it in with avocado oil! Add definition with Deva Curl Light Defining Gel!";
  }else if(curlTotal ==3 && densityTotal=="c" && porosityTotal=="low" || curlTotal ==3 && densityTotal=="c" && porosityTotal=="normal" || curlTotal ==3 && densityTotal=="c" && porosityTotal=="high"){
  }else if(curlTotal ==3 && densityTotal=="c" && porosityTotal=="low" || curlTotal ==3 && densityTotal=="c" && porosityTotal=="normal" || curlTotal ==3 && densityTotal=="c" && porosityTotal=="high"){
    document.querySelector('#resultPic').setAttribute('src', photoResults[8]);

  }else if(curlTotal ==4 && densityTotal=="a" && porosityTotal=="low" || curlTotal ==4 && densityTotal=="a" && porosityTotal=="normal" || curlTotal ==4 && densityTotal=="a" && porosityTotal=="high"){
    document.querySelector('#resultPic').setAttribute('src', photoResults[9]);

  }else if(curlTotal ==4 && densityTotal=="b" && porosityTotal=="low" || curlTotal ==4 && densityTotal=="b" && porosityTotal=="normal" || curlTotal ==4 && densityTotal=="b" && porosityTotal=="high"){
    document.querySelector('#resultPic').setAttribute('src', photoResults[10]);

  }else if(curlTotal ==4 && densityTotal=="c" && porosityTotal=="low" || curlTotal ==4 && densityTotal=="c" && porosityTotal=="normal" || curlTotal ==4 && densityTotal=="c" && porosityTotal=="high"){
    document.querySelector('#resultPic').setAttribute('src', photoResults[11]);
  }
}
