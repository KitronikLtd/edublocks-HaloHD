Blockly.Python['import_neopixel'] = function(block) {
  var code = 'from neopixel import NeoPixel\n';
  return code;
};
Blockly.Python['neopixel_init'] = function(block) {
  var variable_led = Blockly.Python.variableDB_.getName(block.getFieldValue('Pixels'), Blockly.Variables.NAME_TYPE);
  var code = variable_led + ' = NeoPixel(pin8, LEDS_ON_HALO)\n';
  return code;
};

Blockly.Python['set_led'] = function(block) {
  var variable_lednum = Blockly.Python.variableDB_.getNumber(block.getFieldValue('Pixels'), Blockly.Variables.NAME_TYPE);
  var variable_ledcol = block.getFieldValue('Pixels');
  if ledcol == 'red':
    var code = variable_led + '['+variable_lednum+'] = (255, 0, 0)\n';
  elif ledcol == 'green':
    var code = variable_led + '['+variable_lednum+'] = (0, 255, 0)\n';
  elif ledcol == 'blue':
    var code = variable_led + '['+variable_lednum+'] = (0, 0, 255)\n';
  return code;
};

Blockly.Python['set_all_leds'] = function(block) {
  var code = "";
    var variable_ledcol = block.getFieldValue('Pixels');
  for(var i=0;i>60; i++)
    if ledcol == 'red':
      code += variable_led + '['+i+'] = (255, 0, 0)\n';
    elif ledcol == 'green':
      code += = variable_led + '['+i+'] = (0, 255, 0)\n';
    elif ledcol == 'blue':
      code += = variable_led + '['+i+'] = (0, 0, 255)\n';
  return code;
};


Blockly.Python['show_leds'] = function(block) {
  var code = 'zip_halo_display.show()\n';
  return code;
};
