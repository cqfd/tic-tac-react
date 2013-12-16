// Compiled by ClojureScript 0.0-2123
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('React');
om.core.refresh_queued = false;
om.core.root = (function root(value,f,target){var state = (((value instanceof cljs.core.Atom))?value:cljs.core.atom.call(null,value));var rootf = ((function (state){
return (function (){om.core.refresh_queued = false;
return React.renderComponent.call(null,(new om.dom.Pure({"value": cljs.core.deref.call(null,state)},f.call(null,cljs.core.with_meta.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("om.core","state","om.core/state",3158836371),state,new cljs.core.Keyword("om.core","path","om.core/path",2667619423),cljs.core.PersistentVector.EMPTY], null))))),target);
});})(state))
;cljs.core.add_watch.call(null,state,new cljs.core.Keyword("om.core","root","om.core/root",2668054562),(function (_,___$1,___$2,___$3){if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(rootf);
} else
{return setTimeout(rootf,16);
}
}
}));
return rootf.call(null);
});
om.core.render = (function() {
var render = null;
var render__2 = (function (f,data){return render.call(null,f,data,null);
});
var render__3 = (function (f,data,sorm){if((sorm == null))
{return (new om.dom.Pure({"value": data},f.call(null,data)));
} else
{if(cljs.core.sequential_QMARK_.call(null,sorm))
{var data_SINGLEQUOTE_ = cljs.core.get_in.call(null,data,sorm);var mdata_SINGLEQUOTE_ = cljs.core.with_meta.call(null,data_SINGLEQUOTE_,cljs.core.update_in.call(null,cljs.core.meta.call(null,data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.core","path","om.core/path",2667619423)], null),cljs.core.into,sorm));return (new om.dom.Pure({"value": data_SINGLEQUOTE_},f.call(null,mdata_SINGLEQUOTE_)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var map__15935 = sorm;var map__15935__$1 = ((cljs.core.seq_QMARK_.call(null,map__15935))?cljs.core.apply.call(null,cljs.core.hash_map,map__15935):map__15935);var opts = cljs.core.get.call(null,map__15935__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var key = cljs.core.get.call(null,map__15935__$1,new cljs.core.Keyword(null,"key","key",1014010321));var path = cljs.core.get.call(null,map__15935__$1,new cljs.core.Keyword(null,"path","path",1017337751));var dataf = cljs.core.get.call(null,sorm,new cljs.core.Keyword(null,"fn","fn",1013907514));var data_SINGLEQUOTE_ = cljs.core.get_in.call(null,data,path);var data_SINGLEQUOTE___$1 = ((!((dataf == null)))?dataf.call(null,data_SINGLEQUOTE_):data_SINGLEQUOTE_);var rkey = cljs.core.get.call(null,data_SINGLEQUOTE___$1,key);var mdata_SINGLEQUOTE_ = cljs.core.with_meta.call(null,data_SINGLEQUOTE___$1,cljs.core.update_in.call(null,cljs.core.meta.call(null,data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.core","path","om.core/path",2667619423)], null),cljs.core.into,path));return (new om.dom.Pure({"key": rkey, "value": data_SINGLEQUOTE___$1},(((opts == null))?f.call(null,mdata_SINGLEQUOTE_):f.call(null,mdata_SINGLEQUOTE_,opts))));
} else
{return null;
}
}
}
});
render = function(f,data,sorm){
switch(arguments.length){
case 2:
return render__2.call(this,f,data);
case 3:
return render__3.call(this,f,data,sorm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render.cljs$core$IFn$_invoke$arity$2 = render__2;
render.cljs$core$IFn$_invoke$arity$3 = render__3;
return render;
})()
;
om.core.replace_BANG_ = (function() {
var replace_BANG_ = null;
var replace_BANG___2 = (function (data,v){var m = cljs.core.meta.call(null,data);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.assoc_in,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),v);
});
var replace_BANG___3 = (function (data,ks,v){var m = cljs.core.meta.call(null,data);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.assoc_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),v);
});
replace_BANG_ = function(data,ks,v){
switch(arguments.length){
case 2:
return replace_BANG___2.call(this,data,ks);
case 3:
return replace_BANG___3.call(this,data,ks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_BANG_.cljs$core$IFn$_invoke$arity$2 = replace_BANG___2;
replace_BANG_.cljs$core$IFn$_invoke$arity$3 = replace_BANG___3;
return replace_BANG_;
})()
;
/**
* @param {...*} var_args
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___3 = (function (data,ks,f){var m = cljs.core.meta.call(null,data);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f);
});
var update_BANG___4 = (function (data,ks,f,a){var m = cljs.core.meta.call(null,data);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a);
});
var update_BANG___5 = (function (data,ks,f,a,b){var m = cljs.core.meta.call(null,data);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b);
});
var update_BANG___6 = (function (data,ks,f,a,b,c){var m = cljs.core.meta.call(null,data);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b,c);
});
var update_BANG___7 = (function (data,ks,f,a,b,c,d){var m = cljs.core.meta.call(null,data);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b,c,d);
});
var update_BANG___8 = (function() { 
var G__15936__delegate = function (data,ks,f,a,b,c,d,args){var m = cljs.core.meta.call(null,data);return cljs.core.apply.call(null,cljs.core.swap_BANG_,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b,c,d,args);
};
var G__15936 = function (data,ks,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 7) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__15936__delegate.call(this,data,ks,f,a,b,c,d,args);};
G__15936.cljs$lang$maxFixedArity = 7;
G__15936.cljs$lang$applyTo = (function (arglist__15937){
var data = cljs.core.first(arglist__15937);
arglist__15937 = cljs.core.next(arglist__15937);
var ks = cljs.core.first(arglist__15937);
arglist__15937 = cljs.core.next(arglist__15937);
var f = cljs.core.first(arglist__15937);
arglist__15937 = cljs.core.next(arglist__15937);
var a = cljs.core.first(arglist__15937);
arglist__15937 = cljs.core.next(arglist__15937);
var b = cljs.core.first(arglist__15937);
arglist__15937 = cljs.core.next(arglist__15937);
var c = cljs.core.first(arglist__15937);
arglist__15937 = cljs.core.next(arglist__15937);
var d = cljs.core.first(arglist__15937);
var args = cljs.core.rest(arglist__15937);
return G__15936__delegate(data,ks,f,a,b,c,d,args);
});
G__15936.cljs$core$IFn$_invoke$arity$variadic = G__15936__delegate;
return G__15936;
})()
;
update_BANG_ = function(data,ks,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_BANG___3.call(this,data,ks,f);
case 4:
return update_BANG___4.call(this,data,ks,f,a);
case 5:
return update_BANG___5.call(this,data,ks,f,a,b);
case 6:
return update_BANG___6.call(this,data,ks,f,a,b,c);
case 7:
return update_BANG___7.call(this,data,ks,f,a,b,c,d);
default:
return update_BANG___8.cljs$core$IFn$_invoke$arity$variadic(data,ks,f,a,b,c,d, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$lang$maxFixedArity = 7;
update_BANG_.cljs$lang$applyTo = update_BANG___8.cljs$lang$applyTo;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
update_BANG_.cljs$core$IFn$_invoke$arity$5 = update_BANG___5;
update_BANG_.cljs$core$IFn$_invoke$arity$6 = update_BANG___6;
update_BANG_.cljs$core$IFn$_invoke$arity$7 = update_BANG___7;
update_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_BANG___8.cljs$core$IFn$_invoke$arity$variadic;
return update_BANG_;
})()
;

//# sourceMappingURL=core.js.map