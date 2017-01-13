goog.provide('Blockly.Python.clock');

goog.require('Blockly.Python');

Blockly.Python['clock'] = function(block) {
  Blockly.Python.definitions_['import_clock'] = 'from hackclock.runapp.Libs.Clock import Clock';
  Blockly.Python.definitions_['init_clock'] = 'clock = Clock()';
  return ['clock', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['current_hour'] = function(block) {
  Blockly.Python.definitions_['import_datetime'] = 'from datetime import datetime';
  return ['datetime.now().hour', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['current_minute'] = function(block) {
  Blockly.Python.definitions_['import_datetime'] = 'from datetime import datetime';
  return ['datetime.now().minute', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['is_weekend'] = function(block) {
  Blockly.Python.definitions_['import_datetime'] = 'from datetime import datetime';
  return ['datetime.now().weekday() in (5, 6)', Blockly.Python.ORDER_NONE];
};

Blockly.Python['clock_tick'] = function(block) {
  var value_clock = Blockly.Python.valueToCode(block, 'clock', Blockly.Python.ORDER_ATOMIC);
  var target_on_tick_function = block.getInputTargetBlock('on_tick_function');
  var name_on_tick_function = '';
  if (target_on_tick_function) {
    var label_on_tick_function = target_on_tick_function.getFieldValue('NAME');
    name_on_tick_function = Blockly.Python.variableDB_.getName(label_on_tick_function, Blockly.Procedures.NAME_TYPE);
  }
  return value_clock + '.onTick(' + name_on_tick_function + ')\n';
};

Blockly.Python['clock_run_at'] = function(block) {
  var value_hour = Blockly.Python.valueToCode(block, 'hour', Blockly.Python.ORDER_ATOMIC);
  var value_minute = Blockly.Python.valueToCode(block, 'minute', Blockly.Python.ORDER_ATOMIC);
  var value_clock = Blockly.Python.valueToCode(block, 'clock', Blockly.Python.ORDER_ATOMIC);
  var target_at_time_function = block.getInputTargetBlock('at_time_function');
  var name_at_time_function = '';
  if (target_at_time_function) {
    var label_at_time_function = target_at_time_function.getFieldValue('NAME');
    name_at_time_function = Blockly.Python.variableDB_.getName(label_at_time_function, Blockly.Procedures.NAME_TYPE);
  }
  return value_clock + '.atTime(' + value_hour + ", " + value_minute + ", " + name_at_time_function + ')\n';
};

Blockly.Python['clock_wait'] = function(block) {
  var value_clock = Blockly.Python.valueToCode(block, 'clock', Blockly.Python.ORDER_ATOMIC);
  var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
  return value_clock + '.waitAbout(' + value_seconds + ')\n';
};
