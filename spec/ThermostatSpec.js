describe('Thermostat', function(){

    beforeEach(function() {
       thermostat = new Thermostat();
     });

  var thermostat;

  describe('thermostat should show current temperature', function(){

    it('thermostat starts at 20 degrees', function(){
      expect(thermostat.temperature).toBe(20);
    });

    it('and by default is on power saving mode', function() {
      expect(thermostat.powerSavemode).toBe(true);
    });
  });

  describe('Thermostat temperature value can be modified', function(){

    it('temperature can be incrementally increased', function(){
      thermostat.raise();
      expect(thermostat.temperature).toBe(21);
    });

    it('temperature can be incrementally decreased', function(){
      thermostat.lower();
      expect(thermostat.temperature).toBe(19);
    });

    it('temperature can not be below 10 degrees', function(){
      for (i=0; i < 11; i++) {
        thermostat.lower();
      };
      expect(thermostat.temperature).toBe(10);
    });

    it('should be able to turn power save mode off', function(){
      thermostat.powerSaveOff();
      expect(thermostat.powerSavemode).toBe(false);
    });

    it('should be able to turn power save mode on', function(){
      thermostat.powerSaveOn();
      expect(thermostat.powerSavemode).toBe(true);
    });

    it('temperature can not exceed 25 degrees when power saving mode is on', function(){
      thermostat.powerSaveOn();
      for (i=0; i < 6; i++) {
        thermostat.raise();
      };
      expect(thermostat.temperature).toBe(25);
    });

    it('temperature can not exceed 32 degrees when power saving mode is off', function(){
      thermostat.powerSaveOff();
      for (i=0; i < 13; i++) {
        thermostat.raise();
      };
      expect(thermostat.temperature).toBe(32);
    });

    it('and be reset to default', function() {
      thermostat.raise(5);
      thermostat.resetTemp();
      expect(thermostat.temperature).toBe(20);
    });

    it('default color is yellow', function() {
      expect(thermostat.tempColor).toBe("yellow");
    });

    it('should display green if temp < 18', function() {
      for (i=0; i < 3; i++) {
        thermostat.lower();
      };
      expect(thermostat.tempColor).toBe("green");
    });

    it('should display red if temp > 24', function() {
      for (i=0; i < 5; i++) {
        thermostat.raise();
      };
      expect(thermostat.tempColor).toBe("red");
    });
  });
});
