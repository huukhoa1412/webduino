Blockly.JavaScript['ws2812_expansion_1to8'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812_'), Blockly.Variables.NAME_TYPE);
  var change = (block.getFieldValue('change_') == 'TRUE')?"1":"0";
  var code = "";
  for (var i=0;i<=7;i++) {
      var value_color = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC);  
      if (value_color.indexOf("#000000")==-1) {
        if (change==1)
          code += variable_ws2812+".setColor("+i+",'"+"#"+value_color.substr(4,2)+value_color.substr(2,2)+value_color.substr(6,2)+"');\n";
        else
          code += variable_ws2812+".setColor("+i+","+value_color+");\n";
      }
  }
   return code;
};

Blockly.JavaScript['ws2812_expansion_9to16'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812_'), Blockly.Variables.NAME_TYPE);
  var change = (block.getFieldValue('change_') == 'TRUE')?"1":"0";
  var code = "";
  for (var i=8;i<=15;i++) {
      var value_color = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC);  
      if (value_color.indexOf("#000000")==-1) {
        if (change==1)
          code += variable_ws2812+".setColor("+i+",'"+"#"+value_color.substr(4,2)+value_color.substr(2,2)+value_color.substr(6,2)+"');\n";
        else
          code += variable_ws2812+".setColor("+i+","+value_color+");\n";
      }
  }
   return code;
};

Blockly.JavaScript['ws2812_expansion_17to24'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812_'), Blockly.Variables.NAME_TYPE);
  var change = (block.getFieldValue('change_') == 'TRUE')?"1":"0";
  var code = "";
  for (var i=16;i<=23;i++) {
      var value_color = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC);  
      if (value_color.indexOf("#000000")==-1) {
        if (change==1)
          code += variable_ws2812+".setColor("+i+",'"+"#"+value_color.substr(4,2)+value_color.substr(2,2)+value_color.substr(6,2)+"');\n";
        else
          code += variable_ws2812+".setColor("+i+","+value_color+");\n";
      }
  }
   return code;
};