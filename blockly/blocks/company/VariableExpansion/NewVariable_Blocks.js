'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');

//var colorSet=220;
var colorSet='#da6ba3';

Blockly.Blocks.Defination = {
  init: function() {
        var FLIP = [['uint16_t', 'uint16_t'],     //announce menu
                    ['uint32_t', 'uint32_t'],
                    ['double', 'double']];
  this.setColour(colorSet);  //module color
  //this.setColour('#e184a7');  //module color


    this.appendValueInput('VALUE') 
         .setCheck(Number)                          //as string
         .setAlign(Blockly.ALIGN_RIGHT)             //right side
         .appendTitle(Blockly.GLOBAL_DECLARE)
         .appendTitle(new Blockly.FieldTextInput('item'),'NAME')//put a text label
         .appendTitle(Blockly.LKL_AS)
     // .appendField(new Blockly.FieldImage("../../media/Microduino/CoreUSB.png", 60, 90))
         .appendTitle(new Blockly.FieldDropdown(FLIP), 'FLIP')//put a menu label
         .appendTitle(Blockly.LKL_VALUE);
    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setOutput(true);
    //this.setInputsInline(true);
    },
};

Blockly.Blocks.Structure = {
  init: function() {
    this.setColour(colorSet);  //module color
      this.appendDummyInput("")
         .setAlign(Blockly.ALIGN_RIGHT)             //right side
         .appendTitle(Blockly.LKL_DECLARE)
         .appendTitle(new Blockly.FieldTextInput('item'),'Struct_NAME')//put a text label
         .appendTitle(Blockly.Struct)
         .appendTitle(Blockly.Struct_DEF)
         .appendTitle(new Blockly.FieldTextInput('ite_m'),'Struct_DEF');//put a text label
     // .appendField(new Blockly.FieldImage("../../media/Microduino/CoreUSB.png", 60, 90))
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
 //   this.setOutput(true);
    //this.setInputsInline(true);
    },
};

Blockly.Blocks.Var_Definations = {
  init: function() {
        var FLIP = [['uint16_t', 'uint16_t'],     //announce menu
                    ['uint32_t', 'uint32_t'],
                    ['uint8_t','uint8_t'],
                    ['long','long'],
                    ['int','int'],
                    ['char','char'],
                    ['String','String'],
                    ['double', 'double']];
    this.setColour(colorSet);  //module color
    this.appendValueInput('VALUE') 
         .setCheck(Number)                          //as string
         .setAlign(Blockly.ALIGN_RIGHT)             //right side
         .appendTitle(Blockly.LKL_DECLARE_STRUCT)
         .appendTitle(new Blockly.FieldTextInput('item'),'NAME')//put a text label
         .appendTitle(Blockly.LKL_AS)
     // .appendField(new Blockly.FieldImage("../../media/Microduino/CoreUSB.png", 60, 90))
         .appendTitle(new Blockly.FieldDropdown(FLIP), 'FLIP')//put a menu label
         .appendTitle(Blockly.LKL_VALUE);
    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.Struct_Var_Definations = {
  init: function() {
    this.setColour(colorSet);  //module color
      this.appendValueInput("VARI")
         .appendTitle(Blockly.STRUCT_CLASS)
         .appendTitle(new Blockly.FieldTextInput('item'),'Struct_NAME')//put a text label
         .appendTitle(Blockly.Struct_TEMP)
         .appendTitle(new Blockly.FieldTextInput('ite_m'),'Struct_Member')//put a text label
         .appendTitle(Blockly.Struct_IS);
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
 //   this.setOutput(true);
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.IntDefine = {
  init: function() {
    this.setColour(colorSet);

    this.appendValueInput("intValue")
    .appendTitle(Blockly.INT)
    .setCheck(Number)
    .appendField(new Blockly.FieldTextInput("i"), "intName");

    //this.setOutput(true, Number);
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.BooleanDefine = {
  init: function() {
    this.setColour(colorSet);

    this.appendValueInput("booleanValue")
    .appendTitle(Blockly.BOOLEAN)
    .setCheck(Boolean)
    .appendField(new Blockly.FieldTextInput("b"), "booleanName");

    //this.setOutput(true, Number);
    this.setOutput(true, Boolean);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};



Blockly.Blocks.melodyBuzzer = {
  init: function() {

  var melodyFraqance = [[Blockly.low1DO, '262'],
              [Blockly.low2RE, '294'],
              [Blockly.low3MI, '330'],
              [Blockly.low4FA, '349'],
              [Blockly.low5SO, '392'],
              [Blockly.low6LA, '440'],
              [Blockly.low7XI, '494'],
              [Blockly.midlle1DO, '523'],
              [Blockly.midlle2RE, '587'],
              [Blockly.midlle3MI, '659'],
              [Blockly.midlle4FA, '698'],
              [Blockly.midlle5SO, '784'],
              [Blockly.midlle6LA, '880'],
              [Blockly.midlle7XI, '988'],
              [Blockly.high1DO, '1046'],
              [Blockly.high2RE, '1175'],
              [Blockly.high3MI, '1318'],
              [Blockly.high4FA, '1397'],
              [Blockly.high5SO, '1568'],
              [Blockly.high6LA, '1760'],
              [Blockly.high7XI, '1967'],
              ];


    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.BuzzerMelody)
        .appendField(new Blockly.FieldDropdown(melodyFraqance), 'melodyFraqance');

    this.setOutput(true, Number);
  }
};


Blockly.Blocks.rhythmBuzzer = {
  init: function() {

  var rhythmNumber = [[Blockly.halfRhythm, '0.5'],
              [Blockly.oneRhythm, '1'],
              [Blockly.twoRhythm, '2'],
              ];


    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.BuzzerMelody)
        .appendField(new Blockly.FieldDropdown(rhythmNumber), 'rhythmNumber');

    this.setOutput(true, Number);
  }
};




Blockly.Blocks.nrfDataStructDefine = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.nrfDataStructDefine);

    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
 //   this.setOutput(true);
    //this.setInputsInline(true);
    },
};

Blockly.Blocks.nrfDataMemberDefine = {
  init: function() {
        var FLIP = [['uint16_t', 'uint16_t'],     //announce menu
                    ['uint32_t', 'uint32_t'],
                    ['uint8_t','uint8_t'],
                    ['long','long'],
                    ['unsigned long','unsigned long'],
                    ['int','int'],
                    ['char','char'],
                    ['String','String'],
                    ['float', 'float'],
                    ['double', 'double']];
    this.setColour(colorSet);  //module color
    this.appendValueInput('VALUE') 
         .setCheck([Number,String])
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendTitle(Blockly.nrfDataMemberDefine)
         .appendTitle(Blockly.nrfDataMemberType)
         .appendTitle(new Blockly.FieldDropdown(FLIP), 'FLIP')
         .appendTitle(Blockly.nrfDataMemberName)
         .appendTitle(new Blockly.FieldTextInput('item'),'NAME');
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.nrfDataSender = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.nrfDataSender);

    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
 //   this.setOutput(true);
    //this.setInputsInline(true);
    },
};

Blockly.Blocks.nrfDataMemberSender = {
  init: function() {

    this.setColour(colorSet);  //module color
    this.appendValueInput('VALUE') 
         .setCheck([Number,String])
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendTitle(Blockly.nrfDataMemberSender);
    this.setPreviousStatement(true, null);    
    this.setNextStatement(true, null);
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.nrfDataMemberReciver = {
  init: function() {
    this.setColour(colorSet);  //module color
    this.appendDummyInput("")
         .appendTitle(Blockly.nrfDataMemberReciver)
         .appendTitle(new Blockly.FieldTextInput('ite_m'),'Struct_Member');
    // this.setPreviousStatement(true, null);    
    // this.setNextStatement(true, null);
//    this.setTooltip("test");  
   this.setOutput(true);
    //this.setInputsInline(true);
    },
};