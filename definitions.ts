Blockly.Blocks['import_halo_hd'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("from KitronikHaloHD import *");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Imports Kitronik HaloHD library");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_init'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(" = HaloHD()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Initialise Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_set_led'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".LED[");
    this.appendValueInput("led_number")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("] = (");
    this.appendValueInput("led_red")
      .setCheck(null);
    this.appendValueInput("led_green")
      .setCheck(null);
    this.appendValueInput("led_blue")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(") ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Set an LED colour on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_set_leds'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".LEDs = (");
    this.appendValueInput("led_red")
      .setCheck(null);
    this.appendValueInput("led_green")
      .setCheck(null);
    this.appendValueInput("led_blue")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(") ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Set all the LEDs colour on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_show_leds'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".showLEDs()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Update the LEDs colours on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};
