var GameAuxiliary_example_002 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="$j+B!JXpMARkf{?ItX{Z">mouse_x</variable><variable type="" id="*j3.i89.pphCDX4Quvs1">origin_dx</variable><variable type="" id="(xB1(t%f`$yVtz#_XYn^">mouse_y</variable><variable type="" id=";q,Lc.UMmwlYC}r?z/z+">origin_dy</variable></variables><block type="comment" id="dN)ux2Z0JFraoKupCf:O" x="20" y="-101"><value name="text"><block type="text" id="K@2?~F!W~L$,pv}CpoZI"><field name="TEXT">You can drag the image on mouse position.</field></block></value><next><block type="showtext" id="H37!F~O4XaQHxkSI*u7G"><value name="size"><block type="math_number" id="SZV{uG[M:@c9!FKwMO73"><field name="NUM">20</field></block></value><value name="color"><block type="colour_picker" id="zQ,9tKl(f~^^fr/]AUzR"><field name="COLOUR">#ff0000</field></block></value><value name="text"><block type="text" id="(pK@;vq]|vR*f+^}!@R5"><field name="TEXT">Drag the image.</field></block></value><next><block type="setwindow" id="5@XAGL,{j9H|bT@1_ikd"><field name="overflow">auto</field><value name="left"><block type="math_number" id=";Lca#AM|/N.A*G%TX1Vx"><field name="NUM">300</field></block></value><value name="top"><block type="math_number" id="xdX|K7P+k;BGVZ~SmAa+"><field name="NUM">100</field></block></value><value name="width"><block type="math_number" id="f/A4g]^R57b)m!]TA`;V"><field name="NUM">500</field></block></value><value name="height"><block type="math_number" id="0:3(wdg+_Ug,05C.3uc_"><field name="NUM">400</field></block></value><next><block type="mouse_coordinate_get_start" id="r+4K9swP4O-pR?,g5;o#"><next><block type="image_create" id="sbm0}5?7$fxQkt7uz[~P"><value name="id_"><block type="text" id="x9%,wF8e9)1s7}dDcRj?"><field name="TEXT"></field></block></value><value name="url_"><block type="text" id="SQCA4kKD{dEp*pf:@Ym1"><field name="TEXT">https://pic.pimg.tw/yide168/1512182509-918346.png</field></block></value><value name="width_"><block type="math_number" id="3)PA%5:J,ge~?J;%BXn3"><field name="NUM">100</field></block></value><value name="height_"><block type="math_number" id="*=)PmH1vJ3z:0P.g[^%9"><field name="NUM">100</field></block></value><value name="left_"><block type="math_number" id="ZklGCZZ@~{TjpuaN33Ht"><field name="NUM">200</field></block></value><value name="top_"><block type="math_number" id="!.s!YlE:%q|@B6o?bc9l"><field name="NUM">150</field></block></value><value name="zindex_"><block type="math_number" id="9L,_5U+p#Z=Sv(=wrsH~"><field name="NUM">0</field></block></value><value name="display_"><block type="logic_boolean" id="Wg1$ask-|T$,YTJ[Q|Yn"><field name="BOOL">TRUE</field></block></value><next><block type="document_timer_novar" id="4dfu}WIi(v8K!=`/s((}"><value name="intervals_"><block type="math_number" id="H$.4^oSM920/lt{_4acU"><field name="NUM">10</field></block></value><next><block type="element_event" id="QZ%m5M7MQ9E)_#fmS]e^"><field name="element">window</field><field name="event">mousemove</field><value name="id_"><block type="text" id="?F7)?ulHE{j6XW6U=?et"><field name="TEXT"></field></block></value><statement name="statement"><block type="variables_set" id="#3}5X`hw+ZYL;$5O]me`"><field name="VAR" id="$j+B!JXpMARkf{?ItX{Z" variabletype="">mouse_x</field><value name="VALUE"><block type="mouse_coordinate_get" id="I5_W#cQfCdh?D|XOjW~o"><field name="property_">X</field></block></value><next><block type="variables_set" id="zNCOD.LN;3j[ote-EE/="><field name="VAR" id="(xB1(t%f`$yVtz#_XYn^" variabletype="">mouse_y</field><value name="VALUE"><block type="mouse_coordinate_get" id="nU{:LdDx(J~|)33#i+a-"><field name="property_">Y</field></block></value></block></next></block></statement><next><block type="element_event" id="gUKxX:5GO;FhHa[)NewD"><field name="element">image</field><field name="event">dragstart</field><value name="id_"><block type="text" id="Jw+O0h6ks#fxXkMpP{gn"><field name="TEXT"></field></block></value><statement name="statement"><block type="variables_set" id="s_kV8Cas59]@l#xnp6zU"><field name="VAR" id="*j3.i89.pphCDX4Quvs1" variabletype="">origin_dx</field><value name="VALUE"><block type="math_arithmetic" id="$T$CXBhY~~j5S?IRb$gG"><field name="OP">MINUS</field><value name="A"><block type="variables_get" id="Skb)KPPEE*n9[81(a_AG"><field name="VAR" id="$j+B!JXpMARkf{?ItX{Z" variabletype="">mouse_x</field></block></value><value name="B"><block type="image_get" id="a-YLJ;*hJ{44{.U7{(5n"><field name="property_">left</field><value name="id_"><block type="text" id="/Wb9?g:VZANIZl,F1yHc"><field name="TEXT"></field></block></value></block></value></block></value><next><block type="variables_set" id="W]`S-)4}]IXVoGAltRPp"><field name="VAR" id=";q,Lc.UMmwlYC}r?z/z+" variabletype="">origin_dy</field><value name="VALUE"><block type="math_arithmetic" id="J~{aswVXA`c)Y#q-@8t@"><field name="OP">MINUS</field><value name="A"><block type="variables_get" id="{xIHbF8cWv$b^$e5on*1"><field name="VAR" id="(xB1(t%f`$yVtz#_XYn^" variabletype="">mouse_y</field></block></value><value name="B"><block type="image_get" id="jf84Y)@N@DH#K.F+$;TK"><field name="property_">top</field><value name="id_"><block type="text" id="SI)*#^cV=@nEpf]SA[[$"><field name="TEXT"></field></block></value></block></value></block></value></block></next></block></statement><next><block type="element_event" id="z2D2IZ/46#.M:i]k}P9A"><field name="element">image</field><field name="event">dragend</field><value name="id_"><block type="text" id="D%l0+C`!:Ch~Y1/^t+Ae"><field name="TEXT"></field></block></value><statement name="statement"><block type="time_delay" id="J~o:yx*1,qQGN)r]nM6T"><value name="seconds"><block type="math_number" id="ck7uQqL^N,*A.iG7i[@="><field name="NUM">0.1</field></block></value><next><block type="move_to_coordinate" id="1p8[5uY#p(6pr]hFFMYM"><value name="id_"><block type="text" id="G@`FDi+X-q#QX:0*/stS"><field name="TEXT"></field></block></value><value name="left_"><block type="math_arithmetic" id="mNFfO^|LU8Mq2,7YV*V6"><field name="OP">MINUS</field><value name="A"><block type="mouse_coordinate_get" id="yXjQM#l1+|Ou}cUt/77o"><field name="property_">X</field></block></value><value name="B"><block type="variables_get" id="KKFRh#RXfxOip`*$@CFM"><field name="VAR" id="*j3.i89.pphCDX4Quvs1" variabletype="">origin_dx</field></block></value></block></value><value name="top_"><block type="math_arithmetic" id="o8*IZxM(6^3aG4X5~@H)"><field name="OP">MINUS</field><value name="A"><block type="mouse_coordinate_get" id="+PtHbbbXFj11v|Zwatbl"><field name="property_">Y</field></block></value><value name="B"><block type="variables_get" id="+G9uF9)OH^9R#P?3DW*P"><field name="VAR" id=";q,Lc.UMmwlYC}r?z/z+" variabletype="">origin_dy</field></block></value></block></value></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';
