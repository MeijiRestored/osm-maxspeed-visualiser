function layerdef(type){
		if (type == "highways"){
			map.addLayers([
		make_layer(QURL + "?data=(way[highway][maxspeed=none](bbox);node(w););out+skel;", "black",name="#l#max=NONE", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='130'](bbox);node(w););out+skel;", "#e000ff",name="#l#max=130", 3, false ,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='120'](bbox);node(w););out+skel;", "#8000ff",name="#l#max=120", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='110'](bbox);node(w););out+skel;", "#0000ff",name="#l#max=110", 3, true,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='100'](bbox);node(w););out+skel;", "#0080ff",name="#l#max=100", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='90'](bbox);node(w););out+skel;", "#00a0ff",name="#l#max=90", 3, true,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='80'](bbox);node(w););out+skel;", "#00ffc0",name="#l#max=80", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='70'](bbox);node(w););out+skel;", "#00ff00",name="#l#max=70", 3, true,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='60'](bbox);node(w););out+skel;", "#40ff00",name="#l#max=60", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='50'](bbox);node(w););out+skel;", "#a0ff00",name="#l#max=50", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='45'](bbox);node(w););out+skel;", "#e0ff00",name="#l#max=45", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='40'](bbox);node(w););out+skel;", "#ffff00",name="#l#max=40", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='30'](bbox);node(w););out+skel;", "#ff9500",name="#l#max=30", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='20'](bbox);node(w););out+skel;", "#ff4d00",name="#l#max=20", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='15'](bbox);node(w););out+skel;", "#ff0000",name="#l#max=15", 3, false,"@1.0"),
		make_layer(QURL + "?data=(way[highway][maxspeed='10'](bbox);node(w););out+skel;", "#b30000",name="#l#max=10", 3, false,"@1.0"),

		
		make_layer(QURL + "?data=(way[highway][maxspeed](bbox);node(w););out+skel;", "#FFEF00",name="#l#maxspeed present", 2, false,"@1.0"),			
		make_layer(QURL + "?data=(way[highway~'^motorway|^trunk|^primary|^secondary|^tertiary|residential|living_street|unclassified'][maxspeed!~'.']['maxspeed:forward'!~'.']['maxspeed:backward'!~'.'](bbox);node(w););out+skel;", "black",name="#d#maxspeed missing<hr>maxspeed forward / backward", 2, false,"6 10"),	

		make_layer(QURL + "?data=(way[highway~'^motorway|^trunk|^primary|^secondary|^tertiary|residential|living_street|unclassified']['maxspeed:forward'](bbox);node(w););out+skel;", "red",name="#d#maxspeed:forward", 2, false,"6 10"),	
		make_layer(QURL + "?data=(way[highway~'^motorway|^trunk|^primary|^secondary|^tertiary|residential|living_street|unclassified']['maxspeed:backward'](bbox);node(w););out+skel;", "red",name="#d#maxspeed:backward<hr>Conditional maxspeed", 2, false,"6 10"),	

		//maxspeed:conditional
		make_layer(QURL + "?data=(way[highway]['maxspeed:conditional'](bbox);node(w););out+skel;","black",name="#dl#Conditional=    (ALL)", 2, false,"6 10"),
		make_layer(QURL + "?data=(way[highway]['maxspeed:conditional'~'^130'](bbox);node(w););out+skel;","blue",name="#dl#Conditional=130", 2, false,"2 8"), 
		make_layer(QURL + "?data=(way[highway]['maxspeed:conditional'~'^120'](bbox);node(w););out+skel;","red",name="#dl#Conditional=120", 2, false,"2 8"), 
		make_layer(QURL + "?data=(way[highway]['maxspeed:conditional'~'^110'](bbox);node(w););out+skel;","pink",name="#dl#Conditional=110", 2, false,"2 8"), 
		make_layer(QURL + "?data=(way[highway]['maxspeed:conditional'~'^100'](bbox);node(w););out+skel;","#F08C2F",name="#dl#Conditional=100", 2, false,"2 8")  
			]);
	}	
}