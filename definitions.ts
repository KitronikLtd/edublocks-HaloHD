Blockly.Blocks['import_neopixel'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("import neoPixel");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#02AD4D");
      this.setTooltip("imports neopixel libary");
      this.setHelpUrl("");
    }
};
Blockly.Blocks['neopixel_init'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("Pixels"), "Pixels")
          .appendField(".Create();");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#02AD4D");
      this.setTooltip("Initialise : neoPixel");
      this.setHelpUrl("");
    }
};
Blockly.Blocks['set_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("Pixels"), "Pixels")
        .appendField(".");
    this.appendValueInput("Pixel")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["red", "red"], ["green", "green"], ["blue", "blue"]]), "Colour") 
        .appendField(".SetL() ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("set (pixel) led (colour)");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['set_all_leds'] = {
    init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("Pixels"), "Pixels")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["red", "red"], ["green", "green"], ["blue", "blue"]]), "Colour")
        .appendField(" = SetAll()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("sets all led (colour)");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['show_leds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("Pixels"), "Pixels")
        .appendField(".")
        .appendField("showLeds()")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("show the set leds");
  this.setHelpUrl("");
  }
};
