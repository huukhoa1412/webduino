Blockly.Blocks['coco_ssd_object'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OBJECT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["airplane","airplane"],
		["apple","apple"],
		["backpack","backpack"],
		["banana","banana"],
		["baseball bat","baseball bat"],
		["baseball glove","baseball glove"],
		["bear","bear"],
		["bed","bed"],
		["bench","bench"],
		["bicycle","bicycle"],
		["bird","bird"],
		["boat","boat"],
		["book","book"],
		["bottle","bottle"],
		["bowl","bowl"],
		["broccoli","broccoli"],
		["bus","bus"],
		["cake","cake"],
		["car","car"],
		["carrot","carrot"],
		["cat","cat"],
		["cell phone","cell phone"],
		["chair","chair"],
		["clock","clock"],
		["couch","couch"],
		["cow","cow"],
		["cup","cup"],
		["dining table","dining table"],
		["dog","dog"],
		["donut","donut"],
		["elephant","elephant"],
		["fire hydrant","fire hydrant"],
		["fork","fork"],
		["frisbee","frisbee"],
		["giraffe","giraffe"],
		["hair drier","hair drier"],
		["handbag","handbag"],
		["horse","horse"],
		["hot dog","hot dog"],
		["keyboard","keyboard"],
		["kite","kite"],
		["knife","knife"],
		["laptop","laptop"],
		["microwave","microwave"],
		["motorcycle","motorcycle"],
		["mouse","mouse"],
		["orange","orange"],
		["oven","oven"],
		["parking meter","parking meter"],
		["person","person"],
		["pizza","pizza"],
		["potted plant","potted plant"],
		["refrigerator","refrigerator"],
		["remote","remote"],
		["sandwich","sandwich"],
		["scissors","scissors"],
		["sheep","sheep"],
		["sink","sink"],
		["skateboard","skateboard"],
		["skis","skis"],
		["snowboard","snowboard"],
		["spoon","spoon"],
		["sports ball","sports ball"],
		["stop sign","stop sign"],
		["suitcase","suitcase"],
		["surfboard","surfboard"],
		["teddy bear","teddy bear"],
		["tennis racket","tennis racket"],
		["tie","tie"],
		["toaster","toaster"],
		["toilet","toilet"],
		["toothbrush","toothbrush"],
		["traffic light","traffic light"],
		["train","train"],
		["truck","truck"],
		["tv","tv"],
		["umbrella","umbrella"],
		["vase","vase"],
		["wine glass","wine glass"],
		["zebra","zebra"]
  ]), "object_");    
  this.appendValueInput("index_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_INDEX_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  this.getField('object_').setValue("person");
  }
};

Blockly.Blocks['coco_ssd_object_number'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OBJECT_NUMBER_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["airplane","airplane"],
		["apple","apple"],
		["backpack","backpack"],
		["banana","banana"],
		["baseball bat","baseball bat"],
		["baseball glove","baseball glove"],
		["bear","bear"],
		["bed","bed"],
		["bench","bench"],
		["bicycle","bicycle"],
		["bird","bird"],
		["boat","boat"],
		["book","book"],
		["bottle","bottle"],
		["bowl","bowl"],
		["broccoli","broccoli"],
		["bus","bus"],
		["cake","cake"],
		["car","car"],
		["carrot","carrot"],
		["cat","cat"],
		["cell phone","cell phone"],
		["chair","chair"],
		["clock","clock"],
		["couch","couch"],
		["cow","cow"],
		["cup","cup"],
		["dining table","dining table"],
		["dog","dog"],
		["donut","donut"],
		["elephant","elephant"],
		["fire hydrant","fire hydrant"],
		["fork","fork"],
		["frisbee","frisbee"],
		["giraffe","giraffe"],
		["hair drier","hair drier"],
		["handbag","handbag"],
		["horse","horse"],
		["hot dog","hot dog"],
		["keyboard","keyboard"],
		["kite","kite"],
		["knife","knife"],
		["laptop","laptop"],
		["microwave","microwave"],
		["motorcycle","motorcycle"],
		["mouse","mouse"],
		["orange","orange"],
		["oven","oven"],
		["parking meter","parking meter"],
		["person","person"],
		["pizza","pizza"],
		["potted plant","potted plant"],
		["refrigerator","refrigerator"],
		["remote","remote"],
		["sandwich","sandwich"],
		["scissors","scissors"],
		["sheep","sheep"],
		["sink","sink"],
		["skateboard","skateboard"],
		["skis","skis"],
		["snowboard","snowboard"],
		["spoon","spoon"],
		["sports ball","sports ball"],
		["stop sign","stop sign"],
		["suitcase","suitcase"],
		["surfboard","surfboard"],
		["teddy bear","teddy bear"],
		["tennis racket","tennis racket"],
		["tie","tie"],
		["toaster","toaster"],
		["toilet","toilet"],
		["toothbrush","toothbrush"],
		["traffic light","traffic light"],
		["train","train"],
		["truck","truck"],
		["tv","tv"],
		["umbrella","umbrella"],
		["vase","vase"],
		["wine glass","wine glass"],
		["zebra","zebra"]
  ]), "object_");    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  this.getField('object_').setValue("person");
  }
};

Blockly.Blocks['coco_ssd_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_HEIGHT_SHOW);	 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["show","block"],
		["hide","none"]	  
  ]), "result_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_FRAME_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["show","1"],
		["hide","0"]	  
  ]), "frame_");	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["yes","1"],
		["no","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_");	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
