var catGameAuxiliary = '<xml><category name="%{BKY_GAMEAUXILIARY}" colour="%{BKY_GAMEAUXILIARY_HUE}">'+
'  <block type="document_timer">'+
'    <value name="intervals_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+  
'  <block type="document_timer_once">'+
'    <value name="intervals_">'+
'      <block type="math_number">'+
'        <field name="NUM">1000</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+  
'  <block type="document_timer_stop">'+
'  </block>'+  
'  <block type="time_delay">'+
'    <value name="seconds">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+      
'    </value>'+     
'  </block>'+     
'  <block type="text_to_number">'+
'    <value name="value_text_">'+
'    </value>'+    
'  </block>'+  
'  <block type="loop_break">'+      
'  </block>'+  
'  <block type="loop_continue">'+      
'  </block>'+     
'  <block type="function_return">'+
'    <value name="value_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+      
'    </value>'+     
'  </block>'+    
'  <block type="body_set">'+ 
'    <value name="value_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ffffff</field>'+
'      </block>'
'    </value>'+    
'  </block>'+      
'  <block type="mouse_coordinate_get">'+
'  </block>'+
'  <block type="music_create">'+ 
'    <value name="url_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="length_">'+
'      <block type="math_number">'+
'        <field name="NUM">20000</field>'+
'      </block>'+
'    </value>'+
'    <value name="loop_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">TRUE</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="music_delete">'+ 
'  </block>'+   
' </category></xml>';
