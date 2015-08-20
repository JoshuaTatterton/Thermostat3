$( document ).ready(function() {
thermostat = new Thermostat();

  var setTempColor = function(){
    $('#temperature').html(thermostat.temperature + "\xBAC");
    $('#temperature').css("color", thermostat.tempColor);
  }

  setTempColor();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=Dewsbury&units=metric&APPID=f46b9c5aef58799f2f61b6c7f003f5e8', function(data){
    $('h2').text("The temperature in " + data.name + " is " + Math.round(data.main.temp) + "\xBAC");
  });

  $('#increase').click(function(){
    thermostat.raise();
    setTempColor();
  });

  $('#decrease').click(function(){
    thermostat.lower();
    setTempColor();
  });

  $('#reset').click(function(){
    thermostat.resetTemp();
    setTempColor();
  });

  $('#powerSave').click(function(){
    ($("#powerSave").is(":checked")) ? thermostat.powerSaveOn() : thermostat.powerSaveOff();
    $('#temperature').html(thermostat.temperature);
  });

  $('#submitLocation').click(function(){
    var city = $('#cityName').val()
    if (city) {
      $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID=f46b9c5aef58799f2f61b6c7f003f5e8', function(data){
        $('h2').text("The temperature in " + data.name + " is " + Math.round(data.main.temp) + "\xBAC");
        $('h3').text("")
      });
    } else {
      $('h3').text("You have not entered a city")
    };
  });
});
