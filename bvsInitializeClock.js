
 	function initializeClock(id, endtime){
  		var clock = document.getElementById(id);
  		var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');
  		function updateClock(){
  			var t = getTimeRemaining(endtime);
  			daysSpan.innerHTML = t.days;
    		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  			if(t.total<=0){
    			clearInterval(timeinterval);
  			}
		}

		updateClock(); // run function once at first to avoid delay
		var timeinterval = setInterval(updateClock,1000);
	}
	
	initializeClock('clockdiv', deadline);