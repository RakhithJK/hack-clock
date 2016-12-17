'use strict';

goog.provide('Blockly.Blocks.audio');

goog.require('Blockly.Blocks');

function findAudioCategory(toolbox) {
  var categories = toolbox.getElementsByTagName('category');
  for(var i = 0; i < categories.length; i++) {
    var category = categories[i];
    if(category.attributes['name'].nodeValue == 'Audio')
      return category;
  }

  return null;
}

function addAudioBlock(audioCategory, audioFile) {
  var blockElement = document.createElement("block");
  blockElement.setAttribute("type", audioFile);
  audioCategory.appendChild(blockElement);
}

function createAudioBlock(audioFile) {
  Blockly.Blocks[audioFile] = {
    init: function() {
      this.appendDummyInput().appendField(audioFile);
      this.setOutput(true, "String");
      this.setColour(60);
      this.setTooltip('Sound File to Play');
      this.setHelpUrl('http://hackclock.deckerego.net/');
    }
  };
}

function loadAudioTools(workspace, toolbox, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio/list", true);

  request.onload = function(evt) {
    var response = JSON.parse(request.responseText);
    var audioCategory = findAudioCategory(toolbox);

    for(var i=0; i < response.length; i++) {
      createAudioBlock(response[i]);
      addAudioBlock(audioCategory, response[i]);
    }

    workspace.updateToolbox(toolbox);
    callback();
  }

  request.send();
}
