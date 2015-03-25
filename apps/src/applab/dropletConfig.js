module.exports.blocks = [
  {'func': 'onEvent', 'category': 'UI controls', 'params': ['"id"', '"click"', "function(event) {\n  \n}"] },
  {'func': 'button', 'category': 'UI controls', 'params': ['"id"', '"text"'] },
  {'func': 'textInput', 'category': 'UI controls', 'params': ['"id"', '"text"'] },
  {'func': 'textLabel', 'category': 'UI controls', 'params': ['"id"', '"text"', '"forId"'] },
  {'func': 'dropdown', 'category': 'UI controls', 'params': ['"id"', '"option1"', '"etc"'] },
  {'func': 'getText', 'category': 'UI controls', 'params': ['"id"'], 'type': 'value' },
  {'func': 'setText', 'category': 'UI controls', 'params': ['"id"', '"text"'] },
  {'func': 'checkbox', 'category': 'UI controls', 'params': ['"id"', "false"] },
  {'func': 'radioButton', 'category': 'UI controls', 'params': ['"id"', "false", '"group"'] },
  {'func': 'getChecked', 'category': 'UI controls', 'params': ['"id"'], 'type': 'value' },
  {'func': 'setChecked', 'category': 'UI controls', 'params': ['"id"', "true"] },
  {'func': 'image', 'category': 'UI controls', 'params': ['"id"', '"http://code.org/images/logo.png"'] },
  {'func': 'getImageURL', 'category': 'UI controls', 'params': ['"id"'], 'type': 'value' },
  {'func': 'setImageURL', 'category': 'UI controls', 'params': ['"id"', '"http://code.org/images/logo.png"'] },
  {'func': 'playSound', 'category': 'UI controls', 'params': ['"http://soundbible.com/mp3/neck_snap-Vladimir-719669812.mp3"'] },
  {'func': 'showElement', 'category': 'UI controls', 'params': ['"id"'] },
  {'func': 'hideElement', 'category': 'UI controls', 'params': ['"id"'] },
  {'func': 'deleteElement', 'category': 'UI controls', 'params': ['"id"'] },
  {'func': 'setPosition', 'category': 'UI controls', 'params': ['"id"', "0", "0", "100", "100"] },
  {'func': 'write', 'category': 'UI controls', 'params': ['"html"'] },
  {'func': 'getXPosition', 'category': 'UI controls', 'params': ['"id"'], 'type': 'value' },
  {'func': 'getYPosition', 'category': 'UI controls', 'params': ['"id"'], 'type': 'value' },

  {'func': 'createCanvas', 'category': 'Canvas', 'params': ['"id"', "320", "480"] },
  {'func': 'setActiveCanvas', 'category': 'Canvas', 'params': ['"id"'] },
  {'func': 'line', 'category': 'Canvas', 'params': ["0", "0", "160", "240"] },
  {'func': 'circle', 'category': 'Canvas', 'params': ["160", "240", "100"] },
  {'func': 'rect', 'category': 'Canvas', 'params': ["80", "120", "160", "240"] },
  {'func': 'setStrokeWidth', 'category': 'Canvas', 'params': ["3"] },
  {'func': 'setStrokeColor', 'category': 'Canvas', 'params': ['"red"'] },
  {'func': 'setFillColor', 'category': 'Canvas', 'params': ['"yellow"'] },
  {'func': 'drawImage', 'category': 'Canvas', 'params': ['"imageId"', "0", "0"] },
  {'func': 'getImageData', 'category': 'Canvas', 'params': ["0", "0", "320", "480"], 'type': 'value' },
  {'func': 'putImageData', 'category': 'Canvas', 'params': ["imageData", "0", "0"] },
  {'func': 'clearCanvas', 'category': 'Canvas', },
  {'func': 'getRed', 'category': 'Canvas', 'params': ["imageData", "0", "0"], 'type': 'value', 'dontAlias': true, 'dontMarshal': true },
  {'func': 'getGreen', 'category': 'Canvas', 'params': ["imageData", "0", "0"], 'type': 'value', 'dontAlias': true, 'dontMarshal': true },
  {'func': 'getBlue', 'category': 'Canvas', 'params': ["imageData", "0", "0"], 'type': 'value', 'dontAlias': true, 'dontMarshal': true },
  {'func': 'getAlpha', 'category': 'Canvas', 'params': ["imageData", "0", "0"], 'type': 'value', 'dontAlias': true, 'dontMarshal': true },
  {'func': 'setRed', 'category': 'Canvas', 'params': ["imageData", "0", "0", "255"], 'dontAlias': true, 'dontMarshal': true },
  {'func': 'setGreen', 'category': 'Canvas', 'params': ["imageData", "0", "0", "255"], 'dontAlias': true, 'dontMarshal': true },
  {'func': 'setBlue', 'category': 'Canvas', 'params': ["imageData", "0", "0", "255"], 'dontAlias': true, 'dontMarshal': true },
  {'func': 'setAlpha', 'category': 'Canvas', 'params': ["imageData", "0", "0", "255"], 'dontAlias': true, 'dontMarshal': true },
  {'func': 'setRGBA', 'category': 'Canvas', 'params': ["imageData", "0", "0", "255", "255", "255", "255"], 'dontAlias': true, 'dontMarshal': true },

  {'func': 'startWebRequest', 'title': 'Request data from the internet and execute code when the request is complete', 'category': 'Data', 'params': ['"http://api.openweathermap.org/data/2.5/weather?q=London,uk"', "function(status, type, content) {\n  \n}"] },
  {'func': 'setKeyValue', 'title': 'Saves the value associated with the key to the remote data store.', 'category': 'Data', 'params': ['"key"', '"value"', "function () {\n  \n}"] },
  {'func': 'getKeyValue', 'title': 'Reads the value associated with the key from the remote data store.', 'category': 'Data', 'params': ['"key"', "function (value) {\n  \n}"] },
  {'func': 'createRecord', 'title': 'createRecord(table, record, onSuccess); Creates a new record in the specified table.', 'category': 'Data', 'params': ['"mytable"', "{name:'Alice'}", "function() {\n  \n}"] },
  {'func': 'readRecords', 'title': 'readRecords(table, searchParams, onSuccess); Reads all records whose properties match those on the searchParams object.', 'category': 'Data', 'params': ['"mytable"', "{}", "function(records) {\n  for (var i =0; i < records.length; i++) {\n    textLabel('id', records[i].id + ': ' + records[i].name);\n  }\n}"] },
  {'func': 'updateRecord', 'title': 'updateRecord(table, record, onSuccess); Updates a record, identified by record.id.', 'category': 'Data', 'params': ['"mytable"', "{id:1, name:'Bob'}", "function() {\n  \n}"] },
  {'func': 'deleteRecord', 'title': 'deleteRecord(table, record, onSuccess); Deletes a record, identified by record.id.', 'category': 'Data', 'params': ['"mytable"', "{id:1}", "function() {\n  \n}"] },
  {'func': 'getUserId', 'title': 'getUserId(); Gets a unique identifier for the current user of this app.', 'category': 'Data', 'params': [] },

  {'func': 'moveForward', 'category': 'Turtle', 'params': ["25"] },
  {'func': 'moveBackward', 'category': 'Turtle', 'params': ["25"] },
  {'func': 'move', 'category': 'Turtle', 'params': ["25", "25"] },
  {'func': 'moveTo', 'category': 'Turtle', 'params': ["0", "0"] },
  {'func': 'dot', 'category': 'Turtle', 'params': ["5"] },
  {'func': 'turnRight', 'category': 'Turtle', 'params': ["90"] },
  {'func': 'turnLeft', 'category': 'Turtle', 'params': ["90"] },
  {'func': 'turnTo', 'category': 'Turtle', 'params': ["0"] },
  {'func': 'arcRight', 'category': 'Turtle', 'params': ["90", "25"] },
  {'func': 'arcLeft', 'category': 'Turtle', 'params': ["90", "25"] },
  {'func': 'getX', 'category': 'Turtle', 'type': 'value' },
  {'func': 'getY', 'category': 'Turtle', 'type': 'value' },
  {'func': 'getDirection', 'category': 'Turtle', 'type': 'value' },
  {'func': 'penUp', 'category': 'Turtle' },
  {'func': 'penDown', 'category': 'Turtle' },
  {'func': 'penWidth', 'category': 'Turtle', 'params': ["3"] },
  {'func': 'penColor', 'category': 'Turtle', 'params': ['"red"'] },
  {'func': 'show', 'category': 'Turtle' },
  {'func': 'hide', 'category': 'Turtle' },
  {'func': 'speed', 'category': 'Turtle', 'params': ["50"] },

  {'func': 'setTimeout', 'category': 'Control', 'params': ["function() {\n  \n}", "1000"] },
  {'func': 'clearTimeout', 'category': 'Control', 'params': ["0"] },
  {'func': 'setInterval', 'category': 'Control', 'params': ["function() {\n  \n}", "1000"] },
  {'func': 'clearInterval', 'category': 'Control', 'params': ["0"] },

  {'func': 'console.log', 'category': 'Variables', 'params': ['"Message"'], 'dontAlias': true },

  {'func': 'imageUploadButton', 'category': 'Advanced', 'params': ['"id"', '"text"'] },
  {'func': 'container', 'category': 'Advanced', 'params': ['"id"', '"html"'] },
  {'func': 'innerHTML', 'category': 'Advanced', 'params': ['"id"', '"html"'] },
  {'func': 'setParent', 'category': 'Advanced', 'params': ['"id"', '"parentId"'] },
  {'func': 'setStyle', 'category': 'Advanced', 'params': ['"id"', '"color:red;"'] },
  {'func': 'getAttribute', 'category': 'Advanced', 'params': ['"id"', '"scrollHeight"'], 'type': 'value' },
  {'func': 'setAttribute', 'category': 'Advanced', 'params': ['"id"', '"scrollHeight"', "200"]},
];

module.exports.categories = {
  'UI controls': {
    'color': 'yellow',
    'rgb': '#FFD54F',
    'blocks': []
  },
  'Canvas': {
    'color': 'red',
    'rgb': '#F87477',
    'blocks': []
  },
  'Data': {
    'color': 'lightgreen',
    'rgb': '#D3E965',
    'blocks': []
  },
  'Turtle': {
    'color': 'cyan',
    'rgb': '#00D2E2',
    'blocks': []
  },
  'Advanced': {
    'color': 'blue',
    'rgb': '#19C3E1',
    'blocks': []
  },
};
