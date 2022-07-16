$(document).ready(function () {
var nowMoment = moment().format("MMMM Do YYYY");
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = nowMoment;
var currentHour = moment().format ("HH")

$("#clearbtn").click(function (event) {
  event.preventDefault;
  $("textarea").val("");
  localStorage.clear();
});

$(".timedv").each(function(){
  var timeDiv = $(this).attr("id").split("-")[1];
  
  if (currentHour == timeDiv) {
    $(this).addClass("present");
    $(this).children(".description").addClass("white-text");
  } else if (currentHour < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else (currentHour > timeDiv)
  $(this).removeClass("present");
  $(this).removeClass("future");
  $(this).addClass("past");

 });


 function eightA () {
  var input_textarea = document.querySelector("#comment8am"); 
  var outputD = document.querySelector("#comment8am");
  var svBtn = document.querySelector("#btn1");

  svBtn.addEventListener("click", updateOutput);
  outputD.textContent = localStorage.getItem("8am");
  input_textarea.value = localStorage.getItem("8am");

  function updateOutput() {
    localStorage.setItem("8am", input_textarea.value);

    outputD.textContent = input_textarea.value;
  }
}

function nineA () {
  var input_textarea1 = document.querySelector("#comment9am"); 
  var outputD1 = document.querySelector("#comment9am");
  var svBtn1 = document.querySelector("#btn2");

  svBtn1.addEventListener("click", updateOutput1);
  outputD1.textContent = localStorage.getItem("9am");
  input_textarea1.value = localStorage.getItem("9am");

  function updateOutput1() {
    localStorage.setItem("9am", input_textarea1.value);

    outputD1.textContent = input_textarea1.value;
  }
}
function tenA () {
  var input_textarea2 = document.querySelector("#comment10am"); 
  var outputD2 = document.querySelector("#comment10am");
  var svBtn2 = document.querySelector("#startBtn3");

  svBtn2.addEventListener("click", updateOutput2)
  outputD2.textContent = localStorage.getItem("10am");
  input_textarea2.value = localStorage.getItem("10am");

  function updateOutput2() {
    localStorage.setItem("10am", input_textarea2.value);

    outputD2.textContent = input_textarea2.value;
  }
}
function elevenA () {
  var input_textarea3 = document.querySelector("#comment11am"); 
  var outputD3 = document.querySelector("#comment11am");
  var svBtn3 = document.querySelector("#startBtn4");

  svBtn3.addEventListener("click", updateOutput3);
  outputD3.textContent = localStorage.getItem("11am");
  input_textarea3.value = localStorage.getItem("11am");

  function updateOutput3() {
    localStorage.setItem("11am", input_textarea3.value);

    outputD3.textContent = input_textarea3.value;
  }
}
function tweleveP () {
  var input_textarea4 = document.querySelector("#comment12pm"); 
  var outputD4 = document.querySelector("#comment12pm");
  var svBtn4 = document.querySelector("#startBtn5");

  svBtn4.addEventListener("click", updateOutput4);
  outputD4.textContent = localStorage.getItem("12pm");
  input_textarea4.value = localStorage.getItem("12pm");

  function updateOutput4() {
    localStorage.setItem("12pm", input_textarea4.value);

    outputD4.textContent = input_textarea4.value;
  }
}
function oneP () {
  var input_textarea5 = document.querySelector("#comment1pm"); 
  var outputD5 = document.querySelector("#comment1pm");
  var svBtn5 = document.querySelector("#startBtn6");

  svBtn5.addEventListener("click", updateOutput5);
  outputD5.textContent = localStorage.getItem("1pm");
  input_textarea5.value = localStorage.getItem("1pm");

  function updateOutput5() {
    localStorage.setItem("1pm", input_textarea5.value);

    outputD5.textContent = input_textarea5.value;
  }
}
function twoP () {
  var input_textarea6 = document.querySelector("#comment2pm"); 
  var outputD6 = document.querySelector("#comment2pm");
  var svBtn6 = document.querySelector("#bstartBtn7");

  svtn6.addEventListener("click", updateOutput6);
  outputD6.textContent = localStorage.getItem("2pm");
  input_textarea6.value = localStorage.getItem("2pm");

  function updateOutput6() {
    localStorage.setItem("2pm", input_textarea6.value);

    outputD6.textContent = input_textarea6.value;
  }
}
function threeP () {
  var input_textarea7 = document.querySelector("#comment3pm"); 
  var outputD7 = document.querySelector("#comment3pm");
  var svBtn7 = document.querySelector("#saveBtn8");

  svBtn7.addEventListener("click", updateOutput7);
  outputD7.textContent = localStorage.getItem("3pm");
  input_textarea7.value = localStorage.getItem("3pm");

  function updateOutput7() {
    localStorage.setItem("3pm", input_textarea7.value);

    outputD7.textContent = input_textarea7.value;
  }
}
function fourP () {
  var input_textarea8 = document.querySelector("#comment4pm"); 
  var outputD8 = document.querySelector("#comment4pm");
  var svBtn8 = document.querySelector("#saveBtn9");

  svBtn8.addEventListener("click", updateOutput8);
  outputD8.textContent = localStorage.getItem("4pm");
  input_textarea8.value = localStorage.getItem("4pm");

  function updateOutput8() {
    localStorage.setItem("4pm", input_textarea8.value);

    outputD8.textContent = input_textarea8.value;
  }
}
function fiveP () {
  var input_textarea9 = document.querySelector("#comment5pm"); 
  var outputD9 = document.querySelector("#comment5pm");
  var svBtn9 = document.querySelector("#saveBtn10");

  svBtn9.addEventListener("click", updateOutput9);
  outputD9.textContent = localStorage.getItem("5pm");
  input_textarea9.value = localStorage.getItem("5pm");

  function updateOutput9() {
    localStorage.setItem("5pm", input_textarea9.value);

    outputD9.textContent = input_textarea9.value;
  }
}

  eightA();
  nineA();
  tenA();
  elevenA();
  tweleveP();
  oneP();
  twoP();
  threeP();
  fourP();
  fiveP();
} );

function displayTime () {
  document.querySelector("#ticktock").innerHTML = moment().format('h:mm:ss a');
}
displayTime();
setInterval(displayTime, 1000);
