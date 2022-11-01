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
      .appendField(".setLED[");
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
      .appendField(")");
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
      .appendField(".setLEDs = (");
    this.appendValueInput("led_red")
      .setCheck(null);
    this.appendValueInput("led_green")
      .setCheck(null);
    this.appendValueInput("led_blue")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(")");
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

Blockly.Blocks['halo_hd_clear_leds'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".clearLEDs()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Clear the LEDs colours on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_read_sound_level'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".readSoundLevel()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Clear the LEDs colours on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_play_sound'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".playSound(");
    this.appendValueInput("buzzer_sound")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Clear the LEDs colours on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_stop_sound'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".stopSound()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Clear the LEDs colours on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_read_time'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".readTime()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Clear the LEDs colours on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_set_time'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".setTime(");
    this.appendValueInput("time_hours")
      .setCheck(null);
    this.appendValueInput("time_minutes")
      .setCheck(null);
    this.appendValueInput("time_seconds")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Clear the LEDs colours on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_read_hours'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".readHours()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Clear the LEDs colours on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_read_minutes'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".readMinutes()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Clear the LEDs colours on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['halo_hd_read_seconds'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("halo"), "halo")
      .appendField(".readSeconds()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
    this.setTooltip("Clear the LEDs colours on the Kitronik HaloHD");
    this.setHelpUrl("");
  }
};
