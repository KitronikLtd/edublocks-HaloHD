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
