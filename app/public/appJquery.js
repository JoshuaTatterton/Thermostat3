var cookieCity
var cookieTemp
var cookieEsm
$.get('/cookies/city', function(city) {

  city ? cookieCity = city : cookieCity = "Dewsbury";

  $.get('/cookies/temp', function(temp) {

    temp ? cookieTemp = temp : cookieTemp = 20;
    
    $.get('/cookies/esm',function(esm) {

      var thermostat = new Thermostat();
      thermostat.temperature = cookieTemp;

      if (esm == "false") {
        $('#powerSave').prop('checked', false);
        thermostat.powerSavemode = false
      };  

      $( document ).ready(function() {

        var setTempColor = function(){
          $('#temperature').html(thermostat.temperature + "\xBAC");
          thermostat.changeColor();
          $('#temperature').css("color", thermostat.tempColor);
        };

        setTempColor()

        $.get('http://api.openweathermap.org/data/2.5/weather?q='+cookieCity+'&units=metric&APPID=f46b9c5aef58799f2f61b6c7f003f5e8', function(data){
          $('h2').text("The temperature in " + data.name + " is " + Math.round(data.main.temp) + "\xBAC");
        });

        $('#increase').click(function(){
          thermostat.raise();
          setTempColor();
          $.get('setcookie/temp/'+thermostat.temperature);
        });

        $('#decrease').click(function(){
          thermostat.lower();
          setTempColor();
          $.get('setcookie/temp/'+thermostat.temperature);  
        });

        $('#reset').click(function(){
          thermostat.resetTemp();
          setTempColor();
          $.get('setcookie/temp/'+thermostat.temperature);
        });

        $('#powerSave').click(function(){
          ($("#powerSave").is(":checked")) ? thermostat.powerSaveOn() : thermostat.powerSaveOff();
          setTempColor();
          $.get('setcookie/temp/'+thermostat.temperature);
          $.get('setcookie/esm/'+thermostat.powerSavemode);
        });

        $('#submitLocation').click(function(){
          var city = $('#cityName').val()
          if (city) {
            $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID=f46b9c5aef58799f2f61b6c7f003f5e8', function(data){
              $('h2').text("The temperature in " + data.name + " is " + Math.round(data.main.temp) + "\xBAC");
              $('h3').text("")
            });
            $.get('setcookie/city/'+city);
          } else {
            $('h3').text("You have not entered a city")
          };
        });
      });
    });
  });
});