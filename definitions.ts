Blockly.Blocks['import_neopixel'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("import neopixel");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#02AD4D");
      this.setTooltip("Imports neopixel");
      this.setHelpUrl("");
    }
};
Blockly.Blocks['init_neopixel'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("initialise neopixel");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#02AD4D");
      this.setTooltip("initialises neopixel");
      this.setHelpUrl("");
    }
};
Blockly.Blocks['set_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set led number, colour")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("set (number) led (colour)");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['set_all_leds'] = {
    init: function() {
    this.appendDummyInput()
        .appendField("set all led colour")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("set all led colour");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['show_leds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("show the leds set values")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("show the set leds");
  this.setHelpUrl("");
  }
};
