var currentDayEl= $('#currentDay');
var now = new Date().getHours();


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);

  // scrolling down shows business hours with timeblocks to enter text/events. 
  // color coding timeblocks to represent hours passed(Past), current hour(present), or future. 

  window.onload = function (){
    colorC();
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
    }

  function colorC () {
    if (now > 8) {
      $("#comment8am").addClass("past");
    } else if (now>=8 && now < 9) {
      $("comment8am").addClass("present");
    } else (now < 9) 
      $("comment8am").addClass("future")
      if (now > 9) {
        $("#comment9am").addClass("past");
      } else if (now>=9 && now < 10) {
        $("comment9am").addClass("present");
      } else if (now < 10) 
        $("comment9am").addClass("future")
        if (now > 10) {
          $("#comment10am").addClass("past");
        } else if (now>=10 && now < 11) {
          $("comment10am").addClass("present");
        } else if (now < 11) 
          $("comment10am").addClass("future")
          if (now > 11) {
            $("#comment11am").addClass("past");
          } else if (now>=11 && now < 12) {
            $("comment11am").addClass("present");
          } else if (now < 12) 
            $("comment11am").addClass("future")
            else if (now > 12) {
              $("#comment12pm").addClass("past");
            } else if (now>=12 && now < 13) {
              $("comment12pm").addClass("present");
            } else if (now < 12) 
              $("comment12pm").addClass("future")
              else if (now > 13) {
                $("#comment1pm").addClass("past");
              } else if (now>=13 && now < 14) {
                $("comment1pm").addClass("present");
              } else if (now < 13) 
                $("comment1pm").addClass("future")
                else if (now > 14) {
                  $("#comment2pm").addClass("past");
                } else if (now>=14 && now < 15) {
                  $("comment2pm").addClass("present");
                } else if (now < 14) 
                  $("comment2pm").addClass("future")
                  else if (now > 15) {
                    $("#comment3pm").addClass("past");
                  } else if (now>=15 && now < 16) {
                    $("comment3pm").addClass("present");
                  } else if (now < 15) 
                    $("comment3pm").addClass("future")
                    else if (now > 16) {
                      $("#comment4pm").addClass("past");
                    } else if (now>=16 && now < 17) {
                      $("comment4pm").addClass("present");
                    } else if (now < 17) 
                      $("comment5pm").addClass("future")
                      else if (now > 17) {
                        $("#comment5pm").addClass("past");
                      } else if (now>=17 && now < 18) {
                        $("comment5pm").addClass("present");
                      } else(now < 17) 
                        $("comment5pm").addClass("future");
  }

  function eightA () {
    var input_textarea = document.querySelector("#comment8am"); 
    var outputD = document.querySelector("#comment8am");
    var saveBtn = document.querySelector("#btn8am");

    saveBtn.addEventListener("click", updateOutput);
    outputD.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");

    function updateOutput() {
      localStorage.setItem("content", input_textarea.value);

      outputD.textContent = input_textarea.value;
    }
  }

  function nineA () {
    var input_textarea1 = document.querySelector("#comment9am"); 
    var outputD1 = document.querySelector("#comment9am");
    var saveBtn1 = document.querySelector("#btn9am");

    saveBtn1.addEventListener("click", updateOutput1);
    outputD1.textContent = localStorage.getItem("content1");
    input_textarea1.value = localStorage.getItem("content1");

    function updateOutput1() {
      localStorage.setItem("content1", input_textarea1.value);

      outputD1.textContent = input_textarea1.value;
    }
  }
  function tenA () {
    var input_textarea2 = document.querySelector("#comment10am"); 
    var outputD2 = document.querySelector("#comment10am");
    var saveBtn2 = document.querySelector("#btn10am");

    saveBtn2.addEventListener("click", updateOutput2)
    outputD2.textContent = localStorage.getItem("content2");
    input_textarea2.value = localStorage.getItem("content2");

    function updateOutput2() {
      localStorage.setItem("content2", input_textarea2.value);

      outputD2.textContent = input_textarea2.value;
    }
  }
  function elevenA () {
    var input_textarea3 = document.querySelector("#comment11am"); 
    var outputD3 = document.querySelector("#comment11am");
    var saveBtn3 = document.querySelector("#btn11am");

    saveBtn3.addEventListener("click", updateOutput3);
    outputD3.textContent = localStorage.getItem("content3");
    input_textarea3.value = localStorage.getItem("content3");

    function updateOutput3() {
      localStorage.setItem("content3", input_textarea3.value);

      outputD3.textContent = input_textarea3.value;
    }
  }
  function tweleveP () {
    var input_textarea4 = document.querySelector("#comment12pm"); 
    var outputD4 = document.querySelector("#comment12pm");
    var saveBtn4 = document.querySelector("#btn12pm");

    saveBtn4.addEventListener("click", updateOutput4);
    outputD4.textContent = localStorage.getItem("content4");
    input_textarea4.value = localStorage.getItem("content4");

    function updateOutput4() {
      localStorage.setItem("content4", input_textarea4.value);

      outputD4.textContent = input_textarea4.value;
    }
  }
  function oneP () {
    var input_textarea5 = document.querySelector("#comment1pm"); 
    var outputD5 = document.querySelector("#comment1pm");
    var saveBtn5 = document.querySelector("#btn1pm");

    saveBtn5.addEventListener("click", updateOutput5);
    outputD5.textContent = localStorage.getItem("content5");
    input_textarea5.value = localStorage.getItem("content5");

    function updateOutput5() {
      localStorage.setItem("content5", input_textarea5.value);

      outputD5.textContent = input_textarea5.value;
    }
  }
  function twoP () {
    var input_textarea6 = document.querySelector("#comment2pm"); 
    var outputD6 = document.querySelector("#comment2pm");
    var saveBtn6 = document.querySelector("#btn2pm");

    saveBtn6.addEventListener("click", updateOutput6);
    outputD6.textContent = localStorage.getItem("content6");
    input_textarea6.value = localStorage.getItem("content6");

    function updateOutput6() {
      localStorage.setItem("content6", input_textarea6.value);

      outputD6.textContent = input_textarea6.value;
    }
  }
  function threeP () {
    var input_textarea7 = document.querySelector("#comment3pm"); 
    var outputD7 = document.querySelector("#comment3pm");
    var saveBtn7 = document.querySelector("#btn3pm");

    saveBtn7.addEventListener("click", updateOutput7);
    outputD7.textContent = localStorage.getItem("content7");
    input_textarea7.value = localStorage.getItem("content7");

    function updateOutput7() {
      localStorage.setItem("content7", input_textarea7.value);

      outputD7.textContent = input_textarea7.value;
    }
  }
  function fourP () {
    var input_textarea8 = document.querySelector("#comment4pm"); 
    var outputD8 = document.querySelector("#comment4pm");
    var saveBtn8 = document.querySelector("#btn4pm");

    saveBtn8.addEventListener("click", updateOutput8);
    outputD8.textContent = localStorage.getItem("content8");
    input_textarea8.value = localStorage.getItem("content8");

    function updateOutput8() {
      localStorage.setItem("content8", input_textarea8.value);

      outputD8.textContent = input_textarea8.value;
    }
  }
  function fiveP () {
    var input_textarea9 = document.querySelector("#comment5pm"); 
    var outputD9 = document.querySelector("#comment5pm");
    var saveBtn9 = document.querySelector("#btn5pm");

    saveBtn9.addEventListener("click", updateOutput9);
    outputD9.textContent = localStorage.getItem("content9");
    input_textarea9.value = localStorage.getItem("content9");

    function updateOutput9() {
      localStorage.setItem("content9", input_textarea9.value);

      outputD9.textContent = input_textarea9.value;
    }
  }