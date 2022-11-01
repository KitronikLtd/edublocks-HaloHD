Blockly.Python['import_halo_hd'] = function(block) {
  var code = 'from KitronikHaloHD import *\n';
  return code;
};

Blockly.Python['halo_hd_init'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var code = variable_halo + ' = HaloHD()\n';
  return code;
};

Blockly.Python['halo_hd_set_led'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
  var value_led_red = Blockly.Python.valueToCode(block, 'led_red', Blockly.Python.ORDER_ATOMIC);
  var value_led_green = Blockly.Python.valueToCode(block, 'led_green', Blockly.Python.ORDER_ATOMIC);
  var value_led_blue = Blockly.Python.valueToCode(block, 'led_blue', Blockly.Python.ORDER_ATOMIC);
  var colour = '(' + value_led_red + ', ' + value_led_green + ', ' + value_led_blue + ')';
  var code = variable_halo + '.setLED(' + value_led_number + ', ' + colour + ')\n';
  return code;
};

Blockly.Python['halo_hd_set_leds'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var value_led_red = Blockly.Python.valueToCode(block, 'led_red', Blockly.Python.ORDER_ATOMIC);
  var value_led_green = Blockly.Python.valueToCode(block, 'led_green', Blockly.Python.ORDER_ATOMIC);
  var value_led_blue = Blockly.Python.valueToCode(block, 'led_blue', Blockly.Python.ORDER_ATOMIC);
  var colour = '(' + value_led_red + ', ' + value_led_green + ', ' + value_led_blue + ')';
  var code = variable_halo + '.setLEDs(' + colour + ')\n';
  return code;
};

Blockly.Python['halo_hd_show_leds'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var code = variable_halo + '.showLEDs()\n';
  return code;
};

Blockly.Python['halo_hd_clear_leds'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var code = variable_halo + '.clearLEDs()\n';
  return code;
};

Blockly.Python['halo_hd_read_sound_level'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var code = variable_halo + '.readSoundLevel()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['halo_hd_play_sound'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var value_buzzer_sound = Blockly.Python.valueToCode(block, 'buzzer_sound', Blockly.Python.ORDER_ATOMIC);
  var code = variable_halo + '.playSound(' + value_buzzer_sound + ')\n';
  return code;
};

Blockly.Python['halo_hd_stop_sound'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var code = variable_halo + '.stopSound()\n';
  return code;
};

Blockly.Python['halo_hd_read_time'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var code = variable_halo + '.readTime()\n';
  return code;
};

Blockly.Python['halo_hd_set_time'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var value_time_hours = Blockly.Python.valueToCode(block, 'time_hours', Blockly.Python.ORDER_ATOMIC);
  var value_time_minutes = Blockly.Python.valueToCode(block, 'time_minutes', Blockly.Python.ORDER_ATOMIC);
  var value_time_seconds = Blockly.Python.valueToCode(block, 'time_seconds', Blockly.Python.ORDER_ATOMIC);
  var time = value_time_hours + ', ' + value_time_minutes + ', ' + value_time_seconds;
  var code = variable_halo + '.setTime(' + time + ')\n';
  return code;
};

Blockly.Python['halo_hd_read_hours'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var code = variable_halo + '.readHours()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['halo_hd_read_minutes'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var code = variable_halo + '.readMinutes()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['halo_hd_read_seconds'] = function(block) {
  var variable_halo = Blockly.Python.variableDB_.getName(block.getFieldValue('halo'), Blockly.Variables.NAME_TYPE);
  var code = variable_halo + '.readSeconds()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
