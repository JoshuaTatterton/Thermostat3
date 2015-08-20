var Thermostat = function(){
  this.temperature = 20;
  this.powerSavemode = true;
  this.defaultMaxTemp = 32;
  this.powerSaveMaxTemp = 25;
  this.defaultMinTemp = 10;
  this.tempColor = "yellow"
};

Thermostat.prototype.raise = function(){
  if (this.powerSavemode) {
    if(this.temperature < this.powerSaveMaxTemp) {
      this.temperature++;
    }
  } else {
    if (this.temperature < this.defaultMaxTemp) {
      this.temperature++;
    }
  }
  this.changeColor();
};

Thermostat.prototype.lower = function(){
  if(this.temperature > this.defaultMinTemp) {
    this.temperature--;
  }
  this.changeColor();
};

Thermostat.prototype.powerSaveOff = function(){
  this.powerSavemode = false;
};

Thermostat.prototype.powerSaveOn = function(){
  this.powerSavemode = true;
  if (this.temperature > this.powerSaveMaxTemp) {
    this.temperature = this.powerSaveMaxTemp;
  }
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
  this.tempColor ="yellow";
};

Thermostat.prototype.changeColor = function(){
  if(this.temperature > 24){
    this.tempColor ="red";
  }
  if(this.temperature < 25){
    this.tempColor ="yellow";
  }
  if(this.temperature < 18){
    this.tempColor ="green";
  }
};
