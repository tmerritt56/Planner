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