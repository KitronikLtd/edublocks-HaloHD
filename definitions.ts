Blockly.Blocks['import_move_motor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from KitronikMOVEMotor import *");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#02AD4D");
      this.setTooltip("Imports Kitronik :MOVE Motor library");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['move_motor_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(" = MoveMotor()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("Initialise Kitronik :MOVE Motor");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['move_motor_direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["left", "LeftMotor"], ["right", "RightMotor"]]), "motor_side")
        .appendField(" motor(")
        .appendField(new Blockly.FieldDropdown([["foward", "foward"], ["backward", "backward"]]), "motor_direction")
        .appendField(",");
    this.appendValueInput("motor_speed")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("Drive the :MOVE's left motor");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['move_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("buggy"), "buggy")
        .appendField(".stop motors()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#02AD4D");
  this.setTooltip("Stop the :MOVE's motors");
  this.setHelpUrl("");
  }
};
