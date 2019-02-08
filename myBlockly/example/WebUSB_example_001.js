var WebUSB_example_001 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="+Oog~D)0D,I*Y5(g]2r1">TimerWEBUSB</variable><variable type="" id="ij_ZS;5L7fPB{t3^~CEl">data</variable></variables><block type="comment" id="]5j0xEJ-@8+o-%23xuRK~h" x="57" y="97"><value name="text"><block type="text" id="+8wKc9=pzPjb7qq=h]Nf"><field name="TEXT">Arduino Leonardo Fireware</field></block></value><next><block type="comment" id="CNog*dPy0Y7n`rrJ={HF"><value name="text"><block type="text" id="6zB.-a%23PY/Ynm*v$u_}^"><field name="TEXT">https://github.com/fustyles/Arduino/blob/master/WebUSB_Leonardo_MyFirmata.ino</field></block></value><next><block type="comment" id="..tEVhfgO1,S1g]y0Q0c"><value name="text"><block type="text" id="AkfG[2R^?CjWhTS4%s_R"><field name="TEXT">If you want to stop the code, please reload the page. </field></block></value><next><block type="document_timer" id="mi/z6I4OGW!r-?w:dktl"><field name="fuTimer_" id="+Oog~D)0D,I*Y5(g]2r1" variabletype="">TimerWEBUSB</field><value name="intervals_"><block type="math_number" id=";yP~x1l8Ovs6JfUe6u0C"><field name="NUM">10</field></block></value><statement name="do_"><block type="variables_set" id="3^35KjD6wU1n8qiP7qFf"><field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field><value name="VALUE"><block type="webusb_getresponse" id="KE3ci[=9F6s6fOnlqASf"></block></value><next><block type="controls_if" id="w#PldeVhD4}wuNwLI}}}"><value name="IF0"><block type="logic_compare" id="6Ss]O[X@fZ!pd~[B.ral"><field name="OP">NEQ</field><value name="A"><block type="variables_get" id=":xZEh2=]2it3WG]8r;ym"><field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field></block></value><value name="B"><block type="text" id="jxnQM7BA/It;K|aWaDE`"><field name="TEXT"></field></block></value></block></value><statement name="DO0"><block type="showtext" id="fO[pC%zv`CBIJ{3E%B|)"><value name="size"><block type="math_number" id="C3r2G47F`|]Y^5U_LQrF"><field name="NUM">20</field></block></value><value name="color"><block type="colour_picker" id="LH),$UkA{,~_+(%#UKHa"><field name="COLOUR">#ff0000</field></block></value><value name="text"><block type="lists_getIndex" id="(4x;7EOa1!.R[P.h/Wyc"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get" id="qGT!IB:nGLY7kQ2TDx6P"><field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field></block></value><value name="AT"><block type="math_number" id="6%^yF4Z8^I9w*uw^V_{="><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></statement><next><block type="controls_repeat_ext" id="EqpLPXg~0UjXG|{YjeaJ"><value name="TIMES"><block type="math_number" id="?i=?%W!-a~Vq}fGsxl5*"><field name="NUM">10</field></block></value><statement name="DO"><block type="webusb_system" id=")M-2Kzn3bS7+xojld]Ev"><field name="cmd">digitalwrite</field><value name="P1"><block type="math_number" id="8cwF3n21Xk$=%23T(mDBdG"><field name="NUM">13</field></block></value><value name="P2"><block type="math_number" id="J18n68ook)M[.d4izV,u"><field name="NUM">1</field></block></value><next><block type="time_delay" id="=[POtxz.z1Au%h{+SV?q"><value name="seconds"><block type="math_number" id="hpYA2X0{K7RAn-ugxGR0"><field name="NUM">1</field></block></value><next><block type="webusb_system" id="?3?`pB`0F`KPAz6!23~|"><field name="cmd">digitalwrite</field><value name="P1"><block type="math_number" id="4C@np{%23RX83^R)7ajIS6"><field name="NUM">13</field></block></value><value name="P2"><block type="math_number" id="y:c`oke,/HA6w9AoRu-:"><field name="NUM">0</field></block></value><next><block type="time_delay" id="0n7:jP*~NSv-]^zN.hwJ"><value name="seconds"><block type="math_number" id="=x7mfz];%23_-m/,Oi}{i3"><field name="NUM">1</field></block></value></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></xml>';
