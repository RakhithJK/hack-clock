'use strict';

goog.provide('Blockly.Blocks.display');

goog.require('Blockly.Blocks');

Blockly.Blocks['led_display'] = {
  init: function() {
    this.jsonInit({
      "type": "block_type",
      "message0": "LED Display",
      "output": 'Display',
      "colour": 60,
      "tooltip": "A seven-segment LCD display for the clock",
      "helpUrl": "http://hackclock.deckerego.net/"
    });

    var thisBlock = this;

    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          'A seven-segment LCD display for the clock';
    });
  }
};

Blockly.Blocks['set_display_minutes'] = {
  init: function() {
    this.jsonInit({
      "type": "set_display_minutes",
      "message0": "Set %1 minutes to %2",
      "args0": [
        {
          "type": "input_value",
          "name": "display",
          "check": "Display"
        },
        {
          "type": "input_value",
          "name": "minutes",
          "check": "Number",
          "align": "CENTRE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 255,
      "tooltip": "Set minutes digits on the display",
      "helpUrl": "http://hackclock.deckerego.net/"
    });

    var thisBlock = this;

    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          'Set the minutes indicator on your display';
    });
  }
};

Blockly.Blocks['set_display_hours'] = {
  init: function() {
    this.jsonInit({
      "type": "set_display_hours",
      "message0": "Set Hours %1 %2",
      "args0": [
        {
          "type": "input_value",
          "name": "display",
          "check": "Display"
        },
        {
          "type": "input_value",
          "name": "hours",
          "check": "Number",
          "align": "CENTRE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 255,
      "tooltip": "Set hours digits on the display",
      "helpUrl": "http://hackclock.deckerego.net/"
    });

    var thisBlock = this;

    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          'Set the hour indicator on your display';
    });
  }
};

Blockly.Blocks['set_colon'] = {
  init: function() {
    this.jsonInit({
      "type": "set_colon",
      "message0": "Enable %1 Hours Separator %2",
      "args0": [
        {
          "type": "input_value",
          "name": "display",
          "check": "Display"
        },
        {
          "type": "input_value",
          "name": "enabled",
          "check": "Boolean",
          "align": "CENTRE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 255,
      "tooltip": "Set the colon delimiter on the display",
      "helpUrl": "http://hackclock.deckerego.net/"
    });

    var thisBlock = this;

    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          'Set the colon delimiter on the display';
    });
  }
};

Blockly.Blocks['is_evening'] = {
  init: function() {
    this.jsonInit({
      "type": "is_evening",
      "message0": "Enable %1 Evening Indicator %2",
      "args0": [
        {
          "type": "input_value",
          "name": "display",
          "check": "Display"
        },
        {
          "type": "input_value",
          "name": "enabled",
          "check": "Boolean",
          "align": "CENTRE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 255,
      "tooltip": "Set evening indicator on the display",
      "helpUrl": "http://hackclock.deckerego.net/"
    });

    var thisBlock = this;

    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          'Set evening indicator on the display';
    });
  }
};

Blockly.Blocks['set_display_brightness'] = {
  init: function() {
    this.jsonInit({
      "type": "set_display_brightness",
      "message0": "Set Brightness %1 %2",
      "args0": [
        {
          "type": "input_value",
          "name": "display",
          "check": "Display"
        },
        {
          "type": "field_dropdown",
          "name": "brightness",
          "options": [
            ["Super Bright", "15"],
            ["Bright", "13"],
            ["Less Bright", "11"],
            ["Normal", "9"],
            ["Slightly Dimmed", "7"],
            ["Dim", "5"],
            ["Really Dim", "3"],
            ["Off", "0"]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 255,
      "tooltip": "Set the brightness of the display",
      "helpUrl": "http://hackclock.deckerego.net/"
    });

    var thisBlock = this;

    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          'Set the brightness of your display';
    });
  }
};
