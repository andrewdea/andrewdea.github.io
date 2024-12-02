// Compiled by ClojureScript 1.10.520 {}
goog.provide('my_sketch.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
my_sketch.core.setup = (function my_sketch$core$setup(){
quil.core.smooth.call(null);

quil.core.background.call(null,(20));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

var num = (4);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),num,new cljs.core.Keyword(null,"start","start",-355208981),quil.core.millis.call(null),new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457),cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043),false], null);
});
my_sketch.core.within_plus_circle_QMARK_ = (function my_sketch$core$within_plus_circle_QMARK_(){
return (((quil.core.mouse_x.call(null) > (325))) && ((quil.core.mouse_x.call(null) < (395))) && ((quil.core.mouse_y.call(null) > (515))) && ((quil.core.mouse_y.call(null) < (585))));
});
my_sketch.core.within_minus_circle_QMARK_ = (function my_sketch$core$within_minus_circle_QMARK_(){
return (((quil.core.mouse_x.call(null) > (105))) && ((quil.core.mouse_x.call(null) < (175))) && ((quil.core.mouse_y.call(null) > (515))) && ((quil.core.mouse_y.call(null) < (585))));
});
my_sketch.core.within_text_box_QMARK_ = (function my_sketch$core$within_text_box_QMARK_(){
return (((quil.core.mouse_x.call(null) > (175))) && ((quil.core.mouse_x.call(null) < (275))) && ((quil.core.mouse_y.call(null) > (450))) && ((quil.core.mouse_y.call(null) < (650))));
});
my_sketch.core.check_time = (function my_sketch$core$check_time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2359 = arguments.length;
var i__4731__auto___2360 = (0);
while(true){
if((i__4731__auto___2360 < len__4730__auto___2359)){
args__4736__auto__.push((arguments[i__4731__auto___2360]));

var G__2361 = (i__4731__auto___2360 + (1));
i__4731__auto___2360 = G__2361;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return my_sketch.core.check_time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

my_sketch.core.check_time.cljs$core$IFn$_invoke$arity$variadic = (function (start,p__2356){
var map__2357 = p__2356;
var map__2357__$1 = (((((!((map__2357 == null))))?(((((map__2357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2357):map__2357);
var wait = cljs.core.get.call(null,map__2357__$1,new cljs.core.Keyword(null,"wait","wait",-260664777),(100));
return ((quil.core.millis.call(null) - start) > wait);
});

my_sketch.core.check_time.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
my_sketch.core.check_time.cljs$lang$applyTo = (function (seq2354){
var G__2355 = cljs.core.first.call(null,seq2354);
var seq2354__$1 = cljs.core.next.call(null,seq2354);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2355,seq2354__$1);
});

my_sketch.core.check_keyboard = (function my_sketch$core$check_keyboard(p__2362){
var map__2363 = p__2362;
var map__2363__$1 = (((((!((map__2363 == null))))?(((((map__2363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2363):map__2363);
var state = map__2363__$1;
var num = cljs.core.get.call(null,map__2363__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var displayed_num = cljs.core.get.call(null,map__2363__$1,new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457));
var start = cljs.core.get.call(null,map__2363__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var awaiting_input = cljs.core.get.call(null,map__2363__$1,new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043));
if(cljs.core.truth_((function (){var and__4120__auto__ = awaiting_input;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = quil.core.key_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__4120__auto____$1)){
return my_sketch.core.check_time.call(null,start,new cljs.core.Keyword(null,"gap","gap",80255254),(200));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var key = quil.core.raw_key.call(null);
var parsed = (cljs.core.truth_(cljs.core.re_matches.call(null,/\d*/,displayed_num))?parseInt(displayed_num):num);
if(cljs.core._EQ_.call(null,"\r",key)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),parsed,new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457),(cljs.core.truth_(cljs.core.re_matches.call(null,/\d*/,displayed_num))?displayed_num:cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)),new cljs.core.Keyword(null,"start","start",-355208981),quil.core.millis.call(null),new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043),false], null);
} else {
if(cljs.core._EQ_.call(null,"Backspace",key)){
if(cljs.core._EQ_.call(null,"...",displayed_num)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),num,new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457),cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),new cljs.core.Keyword(null,"start","start",-355208981),quil.core.millis.call(null),new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043),false], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),num,new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457),(((displayed_num.length > (1)))?cljs.core.subs.call(null,displayed_num,(0),(displayed_num.length - (1))):"..."),new cljs.core.Keyword(null,"start","start",-355208981),quil.core.millis.call(null),new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043),awaiting_input], null);
}
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d*/,key))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),num,new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_matches.call(null,/\d*/,displayed_num))?displayed_num:"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),new cljs.core.Keyword(null,"start","start",-355208981),quil.core.millis.call(null),new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043),awaiting_input], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),num,new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457),cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043),false], null);

}
}
}
} else {
return state;
}
});
my_sketch.core.update_state = (function my_sketch$core$update_state(p__2365){
var map__2366 = p__2365;
var map__2366__$1 = (((((!((map__2366 == null))))?(((((map__2366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2366):map__2366);
var state = map__2366__$1;
var num = cljs.core.get.call(null,map__2366__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var start = cljs.core.get.call(null,map__2366__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__4120__auto__ = quil.core.mouse_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__4120__auto__)){
return my_sketch.core.check_time.call(null,start);
} else {
return and__4120__auto__;
}
})())){
if(my_sketch.core.within_plus_circle_QMARK_.call(null)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),((1) + num),new cljs.core.Keyword(null,"start","start",-355208981),quil.core.millis.call(null),new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) + num)),new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043),false], null);
} else {
if(my_sketch.core.within_minus_circle_QMARK_.call(null)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),(((num > (0)))?(num - (1)):num),new cljs.core.Keyword(null,"start","start",-355208981),quil.core.millis.call(null),new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((num > (0)))?(num - (1)):num)),new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043),false], null);
} else {
if(my_sketch.core.within_text_box_QMARK_.call(null)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),num,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457),"...",new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043),true], null);
} else {
return state;

}
}
}
} else {
return my_sketch.core.check_keyboard.call(null,state);
}
});
my_sketch.core.draw_circle_with_text = (function my_sketch$core$draw_circle_with_text(x,y,radius,text){
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(139)], null));

quil.core.ellipse.call(null,x,y,radius,radius);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return quil.core.text.call(null,text,x,y);
});
my_sketch.core.circles_around = (function my_sketch$core$circles_around(num,outer_radius){
console.log("At line number: 164; num : ",num);

var radius = (70);
var seq__2368 = cljs.core.seq.call(null,cljs.core.range.call(null,num));
var chunk__2369 = null;
var count__2370 = (0);
var i__2371 = (0);
while(true){
if((i__2371 < count__2370)){
var i = cljs.core._nth.call(null,chunk__2369,i__2371);
var angle_2372 = ((Math.PI / (-2)) + (i * (((2) * Math.PI) / num)));
var x_2373 = ((250) + (outer_radius * Math.cos(angle_2372)));
var y_2374 = ((250) + (outer_radius * Math.sin(angle_2372)));
var circle_color_value_2375 = ((((Math.PI / (2)) + angle_2372) * ((255) / Math.PI)) / (2));
var text_2376 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) + i));
quil.core.stroke.call(null,(255));

quil.core.fill.call(null,circle_color_value_2375,(255),(255));

quil.core.ellipse.call(null,x_2373,y_2374,radius,radius);

quil.core.fill.call(null,(0),(0),(0));

quil.core.text_size.call(null,(20));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text.call(null,text_2376,x_2373,y_2374);


var G__2377 = seq__2368;
var G__2378 = chunk__2369;
var G__2379 = count__2370;
var G__2380 = (i__2371 + (1));
seq__2368 = G__2377;
chunk__2369 = G__2378;
count__2370 = G__2379;
i__2371 = G__2380;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2368);
if(temp__5735__auto__){
var seq__2368__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2368__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__2368__$1);
var G__2381 = cljs.core.chunk_rest.call(null,seq__2368__$1);
var G__2382 = c__4550__auto__;
var G__2383 = cljs.core.count.call(null,c__4550__auto__);
var G__2384 = (0);
seq__2368 = G__2381;
chunk__2369 = G__2382;
count__2370 = G__2383;
i__2371 = G__2384;
continue;
} else {
var i = cljs.core.first.call(null,seq__2368__$1);
var angle_2385 = ((Math.PI / (-2)) + (i * (((2) * Math.PI) / num)));
var x_2386 = ((250) + (outer_radius * Math.cos(angle_2385)));
var y_2387 = ((250) + (outer_radius * Math.sin(angle_2385)));
var circle_color_value_2388 = ((((Math.PI / (2)) + angle_2385) * ((255) / Math.PI)) / (2));
var text_2389 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) + i));
quil.core.stroke.call(null,(255));

quil.core.fill.call(null,circle_color_value_2388,(255),(255));

quil.core.ellipse.call(null,x_2386,y_2387,radius,radius);

quil.core.fill.call(null,(0),(0),(0));

quil.core.text_size.call(null,(20));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text.call(null,text_2389,x_2386,y_2387);


var G__2390 = cljs.core.next.call(null,seq__2368__$1);
var G__2391 = null;
var G__2392 = (0);
var G__2393 = (0);
seq__2368 = G__2390;
chunk__2369 = G__2391;
count__2370 = G__2392;
i__2371 = G__2393;
continue;
}
} else {
return null;
}
}
break;
}
});
my_sketch.core.box_with_num = (function my_sketch$core$box_with_num(displayed_num,awaiting_input){
if(cljs.core.truth_(awaiting_input)){
quil.core.fill.call(null,(0),(0),(255));
} else {
quil.core.fill.call(null,(0),(0),(200));
}

quil.core.rect.call(null,(175),(500),(150),(100),(20));

quil.core.text_size.call(null,(20));

cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text.call(null,displayed_num,(250),(550));

if(cljs.core.truth_((function (){var and__4120__auto__ = quil.core.mouse_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__4120__auto__)){
return my_sketch.core.within_plus_circle_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
quil.core.fill.call(null,(0),(0),(200));
} else {
quil.core.fill.call(null,(0),(0),(180));
}

quil.core.ellipse.call(null,(360),(550),(70),(70));

quil.core.fill.call(null,(0),(0),(0));

quil.core.text_size.call(null,(20));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text.call(null,"+",(360),(550));

if(cljs.core.truth_((function (){var and__4120__auto__ = quil.core.mouse_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__4120__auto__)){
return my_sketch.core.within_minus_circle_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
quil.core.fill.call(null,(0),(0),(200));
} else {
quil.core.fill.call(null,(0),(0),(180));
}

quil.core.ellipse.call(null,(140),(550),(70),(70));

cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

quil.core.text_size.call(null,(20));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return quil.core.text.call(null,"-",(140),(550));
});
my_sketch.core.draw_state = (function my_sketch$core$draw_state(p__2394){
var map__2395 = p__2394;
var map__2395__$1 = (((((!((map__2395 == null))))?(((((map__2395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2395):map__2395);
var num = cljs.core.get.call(null,map__2395__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var displayed_num = cljs.core.get.call(null,map__2395__$1,new cljs.core.Keyword(null,"displayed-num","displayed-num",958522457));
var awaiting_input = cljs.core.get.call(null,map__2395__$1,new cljs.core.Keyword(null,"awaiting-input","awaiting-input",1380899043));
quil.core.background.call(null,(180),(100),(100));

quil.core.fill.call(null,(0),(0),(255));

quil.core.ellipse.call(null,(250),(250),(500),(500));

my_sketch.core.circles_around.call(null,num,(200));

return my_sketch.core.box_with_num.call(null,displayed_num,awaiting_input);
});
my_sketch.core.run_sketch = (function my_sketch$core$run_sketch(){
my_sketch.core.my_sketch = (function my_sketch$core$run_sketch_$_my_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"my-sketch",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,my_sketch.core.update_state))?(function() { 
var G__2397__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.update_state,args);
};
var G__2397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2398__i = 0, G__2398__a = new Array(arguments.length -  0);
while (G__2398__i < G__2398__a.length) {G__2398__a[G__2398__i] = arguments[G__2398__i + 0]; ++G__2398__i;}
  args = new cljs.core.IndexedSeq(G__2398__a,0,null);
} 
return G__2397__delegate.call(this,args);};
G__2397.cljs$lang$maxFixedArity = 0;
G__2397.cljs$lang$applyTo = (function (arglist__2399){
var args = cljs.core.seq(arglist__2399);
return G__2397__delegate(args);
});
G__2397.cljs$core$IFn$_invoke$arity$variadic = G__2397__delegate;
return G__2397;
})()
:my_sketch.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(700)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,my_sketch.core.setup))?(function() { 
var G__2400__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.setup,args);
};
var G__2400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2401__i = 0, G__2401__a = new Array(arguments.length -  0);
while (G__2401__i < G__2401__a.length) {G__2401__a[G__2401__i] = arguments[G__2401__i + 0]; ++G__2401__i;}
  args = new cljs.core.IndexedSeq(G__2401__a,0,null);
} 
return G__2400__delegate.call(this,args);};
G__2400.cljs$lang$maxFixedArity = 0;
G__2400.cljs$lang$applyTo = (function (arglist__2402){
var args = cljs.core.seq(arglist__2402);
return G__2400__delegate(args);
});
G__2400.cljs$core$IFn$_invoke$arity$variadic = G__2400__delegate;
return G__2400;
})()
:my_sketch.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,my_sketch.core.draw_state))?(function() { 
var G__2403__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.draw_state,args);
};
var G__2403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2404__i = 0, G__2404__a = new Array(arguments.length -  0);
while (G__2404__i < G__2404__a.length) {G__2404__a[G__2404__i] = arguments[G__2404__i + 0]; ++G__2404__i;}
  args = new cljs.core.IndexedSeq(G__2404__a,0,null);
} 
return G__2403__delegate.call(this,args);};
G__2403.cljs$lang$maxFixedArity = 0;
G__2403.cljs$lang$applyTo = (function (arglist__2405){
var args = cljs.core.seq(arglist__2405);
return G__2403__delegate(args);
});
G__2403.cljs$core$IFn$_invoke$arity$variadic = G__2403__delegate;
return G__2403;
})()
:my_sketch.core.draw_state));
});
goog.exportSymbol('my_sketch.core.my_sketch', my_sketch.core.my_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1394__1395__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__1394__1395__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),my_sketch.core.my_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"my-sketch"], null));
}
});
goog.exportSymbol('my_sketch.core.run_sketch', my_sketch.core.run_sketch);

//# sourceMappingURL=core.js.map
