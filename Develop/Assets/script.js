var currentDayEl= $('#currentDay');





function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);