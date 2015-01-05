
// =====================
// Simple Object Literal
myApp.notepad = {};
myApp.notepad.writable = true;
myApp.notepad.font = 'Helvetica';
myApp.notepad.setFont = function(theFont) {
  myApp.notepad.font = theFont;
}

// ====================
//Nested Object Literal
myApp.notepad = {
  writable : true,
  font : 'Helvetica',
  setFont = function(theFont) {
    this.font = theFont;
  }
}

// ================================
// Constructor using Object Literal
myApp.Notepad = function(defaultFont) {
  var that = {};
  that.writeable = true;
  that.font = defaultFont;
  that.setFont = function(theFont) {
    that.font = theFont;
  }
  return that;
}
myApp.notepad1 = myApp.Notepad('Helvetica');

// ==========================
// Simple Constructor for new
myApp.Notepad = function(defaultFont) {
  this.writeable = true;
  this.font = defaultFont;
  this.setFont = function(theFont) {
    this.font = theFont;
  }
}
myApp.notepad1  = new myApp.Notepad('helvetica');

// ==================================
// Prototype with constructor for new
myApp.Notepad = function(defaultFont) {
  this.font = defaultFont;
}
myApp.Notepad.prototype.writeable  = true;
myApp.Notepad.prototype.setFont  = function(theFont) {
  this.font = theFont;
}
myApp.notepad1  = new myApp.Notepad('helvetica');
