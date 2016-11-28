//Javascript
var timer = new Timer();
var isOn = false;
$(document).ready(function(){
    $('body').keyup(function (e){
        if(e.keyCode == 32 && isOn === false){
			timer.start({precision: 'secondTenths', callback: function (values) {
    			$('#chrono').html(values.toString(['minutes', 'seconds', 'secondTenths']));
			}});
			isOn = true;
	    }else if (e.keyCode == 32 && isOn === true){
	    	timer.pause();
	    	isOn = false;
	    }else if (e.keyCode == 13){
	    	timer.stop();
	    }

		timer.addEventListener('secondsUpdated', function (e) {
		    $('#chrono .values').html(timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']));
		});      

        timer.addEventListener('started', function (e) {
		    $('#chrono .values').html(timer.getTimeValues().toString());
		});

	});
}); 