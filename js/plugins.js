// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.24 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"Un montón de","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.18 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.04 Alter the save menu for a more aesthetic layout\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"10","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"Cargar","Save Command":"Guardar","Delete Command":"Borrar","---Help Window---":"","Select Help":"Selecciona una ranura de guardado.","Load Help":"Carga los datos de esta partida.","Save Help":"Guarda los avances de tu partida en esta ranura de guardado.","Delete Help":"Borra los datos de esta ranura de guardado.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"Esta partida guardada pertenece a otra partida.","Empty Game Text":"Vacío","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"empty, playtime, save count, gold count","Data Column 2":"location, variable 1, variable 2, variable 3","Data Column 3":"empty, variable 4, variable 5, variable 6","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Tiempo Juego:","Save Count":"Nº Guardados:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"¿De verdad quieres cargar esta partida?","Save Confirmation":"true","Save Text":"¿Guardar aquí?","Delete Confirmation":"true","Delete Text":"¿Borrar esta partida guardada?","Confirm Yes":"Sí","Confirm No":"No"}},
{"name":"-----------------------","status":false,"description":"","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.44 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"stb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"5","Command Window Rows":"5","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"Usuario","Ally Help Text":"Aliado","Allies Help Text":"Aliados","Enemy Help Text":"Enemigo","Enemies Help Text":"Enemigos","All Help Text":"Todos los %1","Random Help Text":"%2 %1 al azar","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_BattleSysSTB","status":true,"description":"v1.01 (Requires YEP_BattleEngineCore.js) Add STB (Standard\nTurn Battle) into your game using this plugin!","parameters":{"---General---":"","Action Speed":"agi","Delay Status Adjust":"true","---Escape---":"","Escape Ratio":"0.125 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.025","---Turn Order---":"","Show Turn Window":"false","Turn Window X":"Graphics.boxWidth - width","Turn Window Y":"this.fittingHeight(2)","Turn Window Width":"200","Turn Window Height":"Graphics.boxHeight - statusHeight - this.fittingHeight(2)","Current Battler Color":"6","Actor Battler Color":"4","Enemy Battler Color":"2"}},
{"name":"YEP_X_TurnOrderDisplay","status":true,"description":"v1.02 Displays the turn order for turn-based battle systems\nand allows for various display options.","parameters":{"---Default---":"","Show Turn Order":"true","---Settings---":"","Icon Size":"32","Position X":"right","Position Y":"54","Turn Direction":"left","Performed Spacing":"true","---Allies---":"","Ally Border Color":"4","Ally Back Color":"22","Ally Icon":"0","---Enemies---":"","Enemy Border Color":"2","Enemy Back Color":"19","Enemy Icon":"0","Enemy SV Battlers":"false"}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.06 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Resultados del combate","Battle Drops Text":"Botín","---EXP Window---":"","Font Size":"28","Level Up Text":"SUBE DE NIVEL!","Max Level Text":"NV. MÁXIMO","Show Skills Learned":"false","Gained EXP Text":"EXP ganada","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_X_AftermathLevelUp","status":true,"description":"v1.00 (Requires YEP_VictoryAftermath.js) Adds a level up\nportion to the Victory Aftermath sequences.","parameters":{"---General---":"","Level Up Title":"¡%1 ha subido al Nivel %2!","Enable Aftermath":"true","Font Size":"28","---Skill Learn---":"","Skill Text Singular":"Habilidad aprendida","Skill Text Plural":"Habilidades aprendidas","Skill List Width":"200"}},
{"name":"-----------------------","status":false,"description":"","parameters":{}},
{"name":"YEP_ItemCore","status":true,"description":"v1.27 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"Cura %1","Add State":"+Estado","Add Buff":"+Buff","Remove State":"-Estado","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Usar %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_ItemSynthesis","status":true,"description":"v1.08 Players can now craft their own items in-game\nthrough an item synthesis system.","parameters":{"---General---":"","Synthesis Command":"Synthesis","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Command Window---":"","Item Command":"Craft Item","Weapon Command":"Craft Weapon","Armor Command":"Craft Armor","Finish Command":"Finish","Text Alignment":"center","---Status Window---":"","Collected Recipes":"Collected Recipes","Crafted Items":"Crafted Items","Crafted Weapons":"Crafted Weapons","Crafted Armors":"Crafted Armors","---List Window---":"","Equipped Recipes":"true","Mask Unknown":"true","Mask Text":"?","Mask Italic":"true","Mask Help Text":"This item has not been synthesized yet.","Ingredients Text":"Ingredients","Amount Text":"Quantity","Quantity Text Size":"20","---Sound---":"","Default SE":"Twine","Default Volume":"100","Default Pitch":"100","Default Pan":"0"}},
{"name":"-----------------------","status":false,"description":"","parameters":{}},
{"name":"YEP_SkillCore","status":true,"description":"v1.11a Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"-----------------------","status":false,"description":"","parameters":{}},
{"name":"YEP_EquipCore","status":true,"description":"v1.16 Allows for the equipment system to be more flexible to\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"Volver","Remove Text":"Quitar","Remove Icon":"16","Empty Text":"<Nada>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"-----------------------","status":false,"description":"","parameters":{}},
{"name":"YEP_StatusMenuCore","status":true,"description":"v1.02 Changes the Status menu for your characters into\na hub that displays more character information.","parameters":{"---Settings---":"","Command Order":"General Parameters Elements States Attributes Custom Cancel","Command Window Width":"240","Command Window Rows":"4","Command Alignment":"center","---General---":"","General Command":"General","Parameters Text":"Atributos","Experience Text":"Experiencia","Total Format":"EXP Total %1. Al siguiente NV %2.","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","---Parameters---":"","Parameters Command":"Atributos","Graph Text":"Grafo Atributos","ATK Color":"#ed1c24 #f26c4f","DEF Color":"#f7941d #fdc689","MAT Color":"#605ca8 #bd8cbf","MDF Color":"#448ccb #a6caf4","AGI Color":"#39b54a #82ca9c","LUK Color":"#fff568 #fffac3","---Resist Colors---":"","Above 300%":"10","200% to 300%":"20","150% to 200%":"14","120% to 150%":"6","100% to 120%":"0","80% to 100%":"24","50% to 80%":"29","1% to 50%":"23","Exactly 0%":"31","Below 0%":"27","---Elements---":"","Elements Command":"Elementos","Elements Decimal":"2","Element Column 1":"1","Element Column 2":"2 3 4 5 6 7 8 9","Element Column 3":"","Element Column 4":"","---State---":"","States Command":"Estados","States Decimal":"2","States Column 1":"1 4 5 6","States Column 2":"7 8 9 10","States Column 3":"","States Column 4":"","---Attributes---":"","Attributes Command":"Atr. Secundarios","Attribute Font Size":"20","Attribute Decimal":"0","Attributes Column 1":"exr hit eva cri cev mev mrf cnt","Attributes Column 2":"mcr tcr pdr mdr fdr grd rec pha","Attributes Column 3":"hrg mrg trg tgr","Attributes Column 4":"","hit Name":"Hit Rate","eva Name":"Evasion Rate","cri Name":"Critical Hit Rate","cev Name":"Critical Evasion Rate","mev Name":"Magic Evasion Rate","mrf Name":"Magic Reflect Rate","cnt Name":"Counter Rate","hrg Name":"HP Regen Rate","mrg Name":"MP Regen Rate","trg Name":"TP Regen Rate","tgr Name":"Aggro Rate","grd Name":"Guard Effect","rec Name":"Recovery Effect","pha Name":"Pharmacology Effect","mcr Name":"MP Cost Rate","tcr Name":"TP Charge Rate","pdr Name":"Physical Damage Rate","mdr Name":"Magical Damage Rate","fdr Name":"Floor Damage Rate","exr Name":"Experience Rate"}},
{"name":"-----------------------","status":false,"description":"","parameters":{}},
{"name":"YEP_PartySystem","status":true,"description":"v1.12 Replaces the default 'Formation' command with a new\nmenu for players to easily change party formations.","parameters":{"---General---":"","Max Battle Members":"5","Show Battle Command":"true","Enable Battle Command":"true","Battle Cooldown":"1","Maximum Followers":"5","EXP Distribution":"false","---Menu---":"","Help Window":"false","Text Alignment":"center","Change Command":"Cambiar","Remove Command":"Quitar","Revert Command":"Revertir","Finish Command":"Terminar","---Selection---":"","Empty Text":"- Nadie -","Actor Face":"true","Actor Sprite":"true","---List---":"","Remove Icon":"16","Show Sprite":"true","Sprite Y Buffer":"16","In Party Text Color":"6","---Locking---":"","Lock First Actor":"false","Locked Icon":"195","Required Icon":"205","---Detail Window---":"","Enable Detail Window":"true","List Width":"300","Actor Parameters":"Parameters","Actor Equipment":"Equipment"}},
{"name":"YEP_WeaponUnleash","status":true,"description":"v1.04a Replace the Attack command or give it the option of\nhave a skill randomly occur when using it!","parameters":{}}
];
