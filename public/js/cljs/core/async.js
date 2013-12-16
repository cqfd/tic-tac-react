// Compiled by ClojureScript 0.0-2123
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16080 = (function (f,fn_handler,meta16081){
this.f = f;
this.fn_handler = fn_handler;
this.meta16081 = meta16081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16080.cljs$lang$type = true;
cljs.core.async.t16080.cljs$lang$ctorStr = "cljs.core.async/t16080";
cljs.core.async.t16080.cljs$lang$ctorPrWriter = (function (this__3948__auto__,writer__3949__auto__,opt__3950__auto__){return cljs.core._write.call(null,writer__3949__auto__,"cljs.core.async/t16080");
});
cljs.core.async.t16080.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16082){var self__ = this;
var _16082__$1 = this;return self__.meta16081;
});
cljs.core.async.t16080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16082,meta16081__$1){var self__ = this;
var _16082__$1 = this;return (new cljs.core.async.t16080(self__.f,self__.fn_handler,meta16081__$1));
});
cljs.core.async.__GT_t16080 = (function __GT_t16080(f__$1,fn_handler__$1,meta16081){return (new cljs.core.async.t16080(f__$1,fn_handler__$1,meta16081));
});
}
return (new cljs.core.async.t16080(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16084 = buff;if(G__16084)
{var bit__4030__auto__ = null;if(cljs.core.truth_((function (){var or__3399__auto__ = bit__4030__auto__;if(cljs.core.truth_(or__3399__auto__))
{return or__3399__auto__;
} else
{return G__16084.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16084.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16084);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16084);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_16085 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16085);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_16085);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3387__auto__ = ret;if(cljs.core.truth_(and__3387__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3387__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4227__auto___16086 = n;var x_16087 = 0;while(true){
if((x_16087 < n__4227__auto___16086))
{(a[x_16087] = 0);
{
var G__16088 = (x_16087 + 1);
x_16087 = G__16088;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__16089 = (i + 1);
i = G__16089;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16093 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16093 = (function (flag,alt_flag,meta16094){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16094 = meta16094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16093.cljs$lang$type = true;
cljs.core.async.t16093.cljs$lang$ctorStr = "cljs.core.async/t16093";
cljs.core.async.t16093.cljs$lang$ctorPrWriter = (function (this__3948__auto__,writer__3949__auto__,opt__3950__auto__){return cljs.core._write.call(null,writer__3949__auto__,"cljs.core.async/t16093");
});
cljs.core.async.t16093.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t16093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t16093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16095){var self__ = this;
var _16095__$1 = this;return self__.meta16094;
});
cljs.core.async.t16093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16095,meta16094__$1){var self__ = this;
var _16095__$1 = this;return (new cljs.core.async.t16093(self__.flag,self__.alt_flag,meta16094__$1));
});
cljs.core.async.__GT_t16093 = (function __GT_t16093(flag__$1,alt_flag__$1,meta16094){return (new cljs.core.async.t16093(flag__$1,alt_flag__$1,meta16094));
});
}
return (new cljs.core.async.t16093(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16099 = (function (cb,flag,alt_handler,meta16100){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16100 = meta16100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16099.cljs$lang$type = true;
cljs.core.async.t16099.cljs$lang$ctorStr = "cljs.core.async/t16099";
cljs.core.async.t16099.cljs$lang$ctorPrWriter = (function (this__3948__auto__,writer__3949__auto__,opt__3950__auto__){return cljs.core._write.call(null,writer__3949__auto__,"cljs.core.async/t16099");
});
cljs.core.async.t16099.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16101){var self__ = this;
var _16101__$1 = this;return self__.meta16100;
});
cljs.core.async.t16099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16101,meta16100__$1){var self__ = this;
var _16101__$1 = this;return (new cljs.core.async.t16099(self__.cb,self__.flag,self__.alt_handler,meta16100__$1));
});
cljs.core.async.__GT_t16099 = (function __GT_t16099(cb__$1,flag__$1,alt_handler__$1,meta16100){return (new cljs.core.async.t16099(cb__$1,flag__$1,alt_handler__$1,meta16100));
});
}
return (new cljs.core.async.t16099(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16102_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16102_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3399__auto__ = wport;if(cljs.core.truth_(or__3399__auto__))
{return or__3399__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16103 = (i + 1);
i = G__16103;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3399__auto__ = ret;if(cljs.core.truth_(or__3399__auto__))
{return or__3399__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3387__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3387__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3387__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__16104){var map__16106 = p__16104;var map__16106__$1 = ((cljs.core.seq_QMARK_.call(null,map__16106))?cljs.core.apply.call(null,cljs.core.hash_map,map__16106):map__16106);var opts = map__16106__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16104 = null;if (arguments.length > 1) {
  p__16104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16104);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16107){
var ports = cljs.core.first(arglist__16107);
var p__16104 = cljs.core.rest(arglist__16107);
return alts_BANG___delegate(ports,p__16104);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16115 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16115 = (function (ch,f,map_LT_,meta16116){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16116 = meta16116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16115.cljs$lang$type = true;
cljs.core.async.t16115.cljs$lang$ctorStr = "cljs.core.async/t16115";
cljs.core.async.t16115.cljs$lang$ctorPrWriter = (function (this__3948__auto__,writer__3949__auto__,opt__3950__auto__){return cljs.core._write.call(null,writer__3949__auto__,"cljs.core.async/t16115");
});
cljs.core.async.t16115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t16115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16118 = (function (fn1,_,meta16116,ch,f,map_LT_,meta16119){
this.fn1 = fn1;
this._ = _;
this.meta16116 = meta16116;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16119 = meta16119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16118.cljs$lang$type = true;
cljs.core.async.t16118.cljs$lang$ctorStr = "cljs.core.async/t16118";
cljs.core.async.t16118.cljs$lang$ctorPrWriter = (function (this__3948__auto__,writer__3949__auto__,opt__3950__auto__){return cljs.core._write.call(null,writer__3949__auto__,"cljs.core.async/t16118");
});
cljs.core.async.t16118.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t16118.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t16118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__16108_SHARP_){return f1.call(null,(((p1__16108_SHARP_ == null))?null:self__.f.call(null,p1__16108_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t16118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16120){var self__ = this;
var _16120__$1 = this;return self__.meta16119;
});
cljs.core.async.t16118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16120,meta16119__$1){var self__ = this;
var _16120__$1 = this;return (new cljs.core.async.t16118(self__.fn1,self__._,self__.meta16116,self__.ch,self__.f,self__.map_LT_,meta16119__$1));
});
cljs.core.async.__GT_t16118 = (function __GT_t16118(fn1__$1,___$2,meta16116__$1,ch__$2,f__$2,map_LT___$2,meta16119){return (new cljs.core.async.t16118(fn1__$1,___$2,meta16116__$1,ch__$2,f__$2,map_LT___$2,meta16119));
});
}
return (new cljs.core.async.t16118(fn1,___$1,self__.meta16116,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3387__auto__ = ret;if(cljs.core.truth_(and__3387__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3387__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t16115.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16117){var self__ = this;
var _16117__$1 = this;return self__.meta16116;
});
cljs.core.async.t16115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16117,meta16116__$1){var self__ = this;
var _16117__$1 = this;return (new cljs.core.async.t16115(self__.ch,self__.f,self__.map_LT_,meta16116__$1));
});
cljs.core.async.__GT_t16115 = (function __GT_t16115(ch__$1,f__$1,map_LT___$1,meta16116){return (new cljs.core.async.t16115(ch__$1,f__$1,map_LT___$1,meta16116));
});
}
return (new cljs.core.async.t16115(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16124 = (function (ch,f,map_GT_,meta16125){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16125 = meta16125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16124.cljs$lang$type = true;
cljs.core.async.t16124.cljs$lang$ctorStr = "cljs.core.async/t16124";
cljs.core.async.t16124.cljs$lang$ctorPrWriter = (function (this__3948__auto__,writer__3949__auto__,opt__3950__auto__){return cljs.core._write.call(null,writer__3949__auto__,"cljs.core.async/t16124");
});
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16126){var self__ = this;
var _16126__$1 = this;return self__.meta16125;
});
cljs.core.async.t16124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16126,meta16125__$1){var self__ = this;
var _16126__$1 = this;return (new cljs.core.async.t16124(self__.ch,self__.f,self__.map_GT_,meta16125__$1));
});
cljs.core.async.__GT_t16124 = (function __GT_t16124(ch__$1,f__$1,map_GT___$1,meta16125){return (new cljs.core.async.t16124(ch__$1,f__$1,map_GT___$1,meta16125));
});
}
return (new cljs.core.async.t16124(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16130 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16130 = (function (ch,p,filter_GT_,meta16131){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16131 = meta16131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16130.cljs$lang$type = true;
cljs.core.async.t16130.cljs$lang$ctorStr = "cljs.core.async/t16130";
cljs.core.async.t16130.cljs$lang$ctorPrWriter = (function (this__3948__auto__,writer__3949__auto__,opt__3950__auto__){return cljs.core._write.call(null,writer__3949__auto__,"cljs.core.async/t16130");
});
cljs.core.async.t16130.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t16130.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16130.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16132){var self__ = this;
var _16132__$1 = this;return self__.meta16131;
});
cljs.core.async.t16130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16132,meta16131__$1){var self__ = this;
var _16132__$1 = this;return (new cljs.core.async.t16130(self__.ch,self__.p,self__.filter_GT_,meta16131__$1));
});
cljs.core.async.__GT_t16130 = (function __GT_t16130(ch__$1,p__$1,filter_GT___$1,meta16131){return (new cljs.core.async.t16130(ch__$1,p__$1,filter_GT___$1,meta16131));
});
}
return (new cljs.core.async.t16130(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6636__auto___16215 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_16194){var state_val_16195 = (state_16194[1]);if((state_val_16195 === 1))
{var state_16194__$1 = state_16194;var statearr_16196_16216 = state_16194__$1;(statearr_16196_16216[2] = null);
(statearr_16196_16216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16195 === 2))
{var state_16194__$1 = state_16194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16194__$1,4,ch);
} else
{if((state_val_16195 === 3))
{var inst_16192 = (state_16194[2]);var state_16194__$1 = state_16194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16194__$1,inst_16192);
} else
{if((state_val_16195 === 4))
{var inst_16176 = (state_16194[7]);var inst_16176__$1 = (state_16194[2]);var inst_16177 = (inst_16176__$1 == null);var state_16194__$1 = (function (){var statearr_16197 = state_16194;(statearr_16197[7] = inst_16176__$1);
return statearr_16197;
})();if(cljs.core.truth_(inst_16177))
{var statearr_16198_16217 = state_16194__$1;(statearr_16198_16217[1] = 5);
} else
{var statearr_16199_16218 = state_16194__$1;(statearr_16199_16218[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16195 === 5))
{var inst_16179 = cljs.core.async.close_BANG_.call(null,out);var state_16194__$1 = state_16194;var statearr_16200_16219 = state_16194__$1;(statearr_16200_16219[2] = inst_16179);
(statearr_16200_16219[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16195 === 6))
{var inst_16176 = (state_16194[7]);var inst_16181 = p.call(null,inst_16176);var state_16194__$1 = state_16194;if(cljs.core.truth_(inst_16181))
{var statearr_16201_16220 = state_16194__$1;(statearr_16201_16220[1] = 8);
} else
{var statearr_16202_16221 = state_16194__$1;(statearr_16202_16221[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16195 === 7))
{var inst_16190 = (state_16194[2]);var state_16194__$1 = state_16194;var statearr_16203_16222 = state_16194__$1;(statearr_16203_16222[2] = inst_16190);
(statearr_16203_16222[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16195 === 8))
{var inst_16176 = (state_16194[7]);var state_16194__$1 = state_16194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16194__$1,11,out,inst_16176);
} else
{if((state_val_16195 === 9))
{var state_16194__$1 = state_16194;var statearr_16204_16223 = state_16194__$1;(statearr_16204_16223[2] = null);
(statearr_16204_16223[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16195 === 10))
{var inst_16187 = (state_16194[2]);var state_16194__$1 = (function (){var statearr_16205 = state_16194;(statearr_16205[8] = inst_16187);
return statearr_16205;
})();var statearr_16206_16224 = state_16194__$1;(statearr_16206_16224[2] = null);
(statearr_16206_16224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16195 === 11))
{var inst_16184 = (state_16194[2]);var state_16194__$1 = state_16194;var statearr_16207_16225 = state_16194__$1;(statearr_16207_16225[2] = inst_16184);
(statearr_16207_16225[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_16211 = [null,null,null,null,null,null,null,null,null];(statearr_16211[0] = state_machine__6567__auto__);
(statearr_16211[1] = 1);
return statearr_16211;
});
var state_machine__6567__auto____1 = (function (state_16194){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_16194);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e16212){if((e16212 instanceof Object))
{var ex__6570__auto__ = e16212;var statearr_16213_16226 = state_16194;(statearr_16213_16226[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16227 = state_16194;
state_16194 = G__16227;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_16194){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_16194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_16214 = f__6637__auto__.call(null);(statearr_16214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___16215);
return statearr_16214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6636__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_16379){var state_val_16380 = (state_16379[1]);if((state_val_16380 === 1))
{var state_16379__$1 = state_16379;var statearr_16381_16418 = state_16379__$1;(statearr_16381_16418[2] = null);
(statearr_16381_16418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 2))
{var state_16379__$1 = state_16379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16379__$1,4,in$);
} else
{if((state_val_16380 === 3))
{var inst_16377 = (state_16379[2]);var state_16379__$1 = state_16379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16379__$1,inst_16377);
} else
{if((state_val_16380 === 4))
{var inst_16325 = (state_16379[7]);var inst_16325__$1 = (state_16379[2]);var inst_16326 = (inst_16325__$1 == null);var state_16379__$1 = (function (){var statearr_16382 = state_16379;(statearr_16382[7] = inst_16325__$1);
return statearr_16382;
})();if(cljs.core.truth_(inst_16326))
{var statearr_16383_16419 = state_16379__$1;(statearr_16383_16419[1] = 5);
} else
{var statearr_16384_16420 = state_16379__$1;(statearr_16384_16420[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 5))
{var inst_16328 = cljs.core.async.close_BANG_.call(null,out);var state_16379__$1 = state_16379;var statearr_16385_16421 = state_16379__$1;(statearr_16385_16421[2] = inst_16328);
(statearr_16385_16421[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 6))
{var inst_16325 = (state_16379[7]);var inst_16330 = f.call(null,inst_16325);var inst_16335 = cljs.core.seq.call(null,inst_16330);var inst_16336 = inst_16335;var inst_16337 = null;var inst_16338 = 0;var inst_16339 = 0;var state_16379__$1 = (function (){var statearr_16386 = state_16379;(statearr_16386[8] = inst_16339);
(statearr_16386[9] = inst_16338);
(statearr_16386[10] = inst_16337);
(statearr_16386[11] = inst_16336);
return statearr_16386;
})();var statearr_16387_16422 = state_16379__$1;(statearr_16387_16422[2] = null);
(statearr_16387_16422[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 7))
{var inst_16375 = (state_16379[2]);var state_16379__$1 = state_16379;var statearr_16388_16423 = state_16379__$1;(statearr_16388_16423[2] = inst_16375);
(statearr_16388_16423[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 8))
{var inst_16339 = (state_16379[8]);var inst_16338 = (state_16379[9]);var inst_16341 = (inst_16339 < inst_16338);var inst_16342 = inst_16341;var state_16379__$1 = state_16379;if(cljs.core.truth_(inst_16342))
{var statearr_16389_16424 = state_16379__$1;(statearr_16389_16424[1] = 10);
} else
{var statearr_16390_16425 = state_16379__$1;(statearr_16390_16425[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 9))
{var inst_16372 = (state_16379[2]);var state_16379__$1 = (function (){var statearr_16391 = state_16379;(statearr_16391[12] = inst_16372);
return statearr_16391;
})();var statearr_16392_16426 = state_16379__$1;(statearr_16392_16426[2] = null);
(statearr_16392_16426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 10))
{var inst_16339 = (state_16379[8]);var inst_16337 = (state_16379[10]);var inst_16344 = cljs.core._nth.call(null,inst_16337,inst_16339);var state_16379__$1 = state_16379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16379__$1,13,out,inst_16344);
} else
{if((state_val_16380 === 11))
{var inst_16350 = (state_16379[13]);var inst_16336 = (state_16379[11]);var inst_16350__$1 = cljs.core.seq.call(null,inst_16336);var state_16379__$1 = (function (){var statearr_16396 = state_16379;(statearr_16396[13] = inst_16350__$1);
return statearr_16396;
})();if(inst_16350__$1)
{var statearr_16397_16427 = state_16379__$1;(statearr_16397_16427[1] = 14);
} else
{var statearr_16398_16428 = state_16379__$1;(statearr_16398_16428[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 12))
{var inst_16370 = (state_16379[2]);var state_16379__$1 = state_16379;var statearr_16399_16429 = state_16379__$1;(statearr_16399_16429[2] = inst_16370);
(statearr_16399_16429[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 13))
{var inst_16339 = (state_16379[8]);var inst_16338 = (state_16379[9]);var inst_16337 = (state_16379[10]);var inst_16336 = (state_16379[11]);var inst_16346 = (state_16379[2]);var inst_16347 = (inst_16339 + 1);var tmp16393 = inst_16338;var tmp16394 = inst_16337;var tmp16395 = inst_16336;var inst_16336__$1 = tmp16395;var inst_16337__$1 = tmp16394;var inst_16338__$1 = tmp16393;var inst_16339__$1 = inst_16347;var state_16379__$1 = (function (){var statearr_16400 = state_16379;(statearr_16400[14] = inst_16346);
(statearr_16400[8] = inst_16339__$1);
(statearr_16400[9] = inst_16338__$1);
(statearr_16400[10] = inst_16337__$1);
(statearr_16400[11] = inst_16336__$1);
return statearr_16400;
})();var statearr_16401_16430 = state_16379__$1;(statearr_16401_16430[2] = null);
(statearr_16401_16430[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 14))
{var inst_16350 = (state_16379[13]);var inst_16352 = cljs.core.chunked_seq_QMARK_.call(null,inst_16350);var state_16379__$1 = state_16379;if(inst_16352)
{var statearr_16402_16431 = state_16379__$1;(statearr_16402_16431[1] = 17);
} else
{var statearr_16403_16432 = state_16379__$1;(statearr_16403_16432[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 15))
{var state_16379__$1 = state_16379;var statearr_16404_16433 = state_16379__$1;(statearr_16404_16433[2] = null);
(statearr_16404_16433[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 16))
{var inst_16368 = (state_16379[2]);var state_16379__$1 = state_16379;var statearr_16405_16434 = state_16379__$1;(statearr_16405_16434[2] = inst_16368);
(statearr_16405_16434[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 17))
{var inst_16350 = (state_16379[13]);var inst_16354 = cljs.core.chunk_first.call(null,inst_16350);var inst_16355 = cljs.core.chunk_rest.call(null,inst_16350);var inst_16356 = cljs.core.count.call(null,inst_16354);var inst_16336 = inst_16355;var inst_16337 = inst_16354;var inst_16338 = inst_16356;var inst_16339 = 0;var state_16379__$1 = (function (){var statearr_16406 = state_16379;(statearr_16406[8] = inst_16339);
(statearr_16406[9] = inst_16338);
(statearr_16406[10] = inst_16337);
(statearr_16406[11] = inst_16336);
return statearr_16406;
})();var statearr_16407_16435 = state_16379__$1;(statearr_16407_16435[2] = null);
(statearr_16407_16435[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 18))
{var inst_16350 = (state_16379[13]);var inst_16359 = cljs.core.first.call(null,inst_16350);var state_16379__$1 = state_16379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16379__$1,20,out,inst_16359);
} else
{if((state_val_16380 === 19))
{var inst_16365 = (state_16379[2]);var state_16379__$1 = state_16379;var statearr_16408_16436 = state_16379__$1;(statearr_16408_16436[2] = inst_16365);
(statearr_16408_16436[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16380 === 20))
{var inst_16350 = (state_16379[13]);var inst_16361 = (state_16379[2]);var inst_16362 = cljs.core.next.call(null,inst_16350);var inst_16336 = inst_16362;var inst_16337 = null;var inst_16338 = 0;var inst_16339 = 0;var state_16379__$1 = (function (){var statearr_16409 = state_16379;(statearr_16409[8] = inst_16339);
(statearr_16409[9] = inst_16338);
(statearr_16409[15] = inst_16361);
(statearr_16409[10] = inst_16337);
(statearr_16409[11] = inst_16336);
return statearr_16409;
})();var statearr_16410_16437 = state_16379__$1;(statearr_16410_16437[2] = null);
(statearr_16410_16437[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_16414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16414[0] = state_machine__6567__auto__);
(statearr_16414[1] = 1);
return statearr_16414;
});
var state_machine__6567__auto____1 = (function (state_16379){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_16379);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e16415){if((e16415 instanceof Object))
{var ex__6570__auto__ = e16415;var statearr_16416_16438 = state_16379;(statearr_16416_16438[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16379);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16439 = state_16379;
state_16379 = G__16439;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_16379){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_16379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_16417 = f__6637__auto__.call(null);(statearr_16417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto__);
return statearr_16417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return c__6636__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6636__auto___16520 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_16499){var state_val_16500 = (state_16499[1]);if((state_val_16500 === 1))
{var state_16499__$1 = state_16499;var statearr_16501_16521 = state_16499__$1;(statearr_16501_16521[2] = null);
(statearr_16501_16521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16500 === 2))
{var state_16499__$1 = state_16499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16499__$1,4,from);
} else
{if((state_val_16500 === 3))
{var inst_16497 = (state_16499[2]);var state_16499__$1 = state_16499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16499__$1,inst_16497);
} else
{if((state_val_16500 === 4))
{var inst_16482 = (state_16499[7]);var inst_16482__$1 = (state_16499[2]);var inst_16483 = (inst_16482__$1 == null);var state_16499__$1 = (function (){var statearr_16502 = state_16499;(statearr_16502[7] = inst_16482__$1);
return statearr_16502;
})();if(cljs.core.truth_(inst_16483))
{var statearr_16503_16522 = state_16499__$1;(statearr_16503_16522[1] = 5);
} else
{var statearr_16504_16523 = state_16499__$1;(statearr_16504_16523[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16500 === 5))
{var state_16499__$1 = state_16499;if(cljs.core.truth_(close_QMARK_))
{var statearr_16505_16524 = state_16499__$1;(statearr_16505_16524[1] = 8);
} else
{var statearr_16506_16525 = state_16499__$1;(statearr_16506_16525[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16500 === 6))
{var inst_16482 = (state_16499[7]);var state_16499__$1 = state_16499;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16499__$1,11,to,inst_16482);
} else
{if((state_val_16500 === 7))
{var inst_16495 = (state_16499[2]);var state_16499__$1 = state_16499;var statearr_16507_16526 = state_16499__$1;(statearr_16507_16526[2] = inst_16495);
(statearr_16507_16526[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16500 === 8))
{var inst_16486 = cljs.core.async.close_BANG_.call(null,to);var state_16499__$1 = state_16499;var statearr_16508_16527 = state_16499__$1;(statearr_16508_16527[2] = inst_16486);
(statearr_16508_16527[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16500 === 9))
{var state_16499__$1 = state_16499;var statearr_16509_16528 = state_16499__$1;(statearr_16509_16528[2] = null);
(statearr_16509_16528[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16500 === 10))
{var inst_16489 = (state_16499[2]);var state_16499__$1 = state_16499;var statearr_16510_16529 = state_16499__$1;(statearr_16510_16529[2] = inst_16489);
(statearr_16510_16529[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16500 === 11))
{var inst_16492 = (state_16499[2]);var state_16499__$1 = (function (){var statearr_16511 = state_16499;(statearr_16511[8] = inst_16492);
return statearr_16511;
})();var statearr_16512_16530 = state_16499__$1;(statearr_16512_16530[2] = null);
(statearr_16512_16530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_16516 = [null,null,null,null,null,null,null,null,null];(statearr_16516[0] = state_machine__6567__auto__);
(statearr_16516[1] = 1);
return statearr_16516;
});
var state_machine__6567__auto____1 = (function (state_16499){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_16499);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e16517){if((e16517 instanceof Object))
{var ex__6570__auto__ = e16517;var statearr_16518_16531 = state_16499;(statearr_16518_16531[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16499);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16532 = state_16499;
state_16499 = G__16532;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_16499){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_16499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_16519 = f__6637__auto__.call(null);(statearr_16519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___16520);
return statearr_16519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6636__auto___16619 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_16597){var state_val_16598 = (state_16597[1]);if((state_val_16598 === 1))
{var state_16597__$1 = state_16597;var statearr_16599_16620 = state_16597__$1;(statearr_16599_16620[2] = null);
(statearr_16599_16620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 2))
{var state_16597__$1 = state_16597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16597__$1,4,ch);
} else
{if((state_val_16598 === 3))
{var inst_16595 = (state_16597[2]);var state_16597__$1 = state_16597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16597__$1,inst_16595);
} else
{if((state_val_16598 === 4))
{var inst_16578 = (state_16597[7]);var inst_16578__$1 = (state_16597[2]);var inst_16579 = (inst_16578__$1 == null);var state_16597__$1 = (function (){var statearr_16600 = state_16597;(statearr_16600[7] = inst_16578__$1);
return statearr_16600;
})();if(cljs.core.truth_(inst_16579))
{var statearr_16601_16621 = state_16597__$1;(statearr_16601_16621[1] = 5);
} else
{var statearr_16602_16622 = state_16597__$1;(statearr_16602_16622[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 5))
{var inst_16581 = cljs.core.async.close_BANG_.call(null,tc);var inst_16582 = cljs.core.async.close_BANG_.call(null,fc);var state_16597__$1 = (function (){var statearr_16603 = state_16597;(statearr_16603[8] = inst_16581);
return statearr_16603;
})();var statearr_16604_16623 = state_16597__$1;(statearr_16604_16623[2] = inst_16582);
(statearr_16604_16623[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 6))
{var inst_16578 = (state_16597[7]);var inst_16584 = p.call(null,inst_16578);var state_16597__$1 = state_16597;if(cljs.core.truth_(inst_16584))
{var statearr_16605_16624 = state_16597__$1;(statearr_16605_16624[1] = 9);
} else
{var statearr_16606_16625 = state_16597__$1;(statearr_16606_16625[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 7))
{var inst_16593 = (state_16597[2]);var state_16597__$1 = state_16597;var statearr_16607_16626 = state_16597__$1;(statearr_16607_16626[2] = inst_16593);
(statearr_16607_16626[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 8))
{var inst_16590 = (state_16597[2]);var state_16597__$1 = (function (){var statearr_16608 = state_16597;(statearr_16608[9] = inst_16590);
return statearr_16608;
})();var statearr_16609_16627 = state_16597__$1;(statearr_16609_16627[2] = null);
(statearr_16609_16627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 9))
{var state_16597__$1 = state_16597;var statearr_16610_16628 = state_16597__$1;(statearr_16610_16628[2] = tc);
(statearr_16610_16628[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 10))
{var state_16597__$1 = state_16597;var statearr_16611_16629 = state_16597__$1;(statearr_16611_16629[2] = fc);
(statearr_16611_16629[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 11))
{var inst_16578 = (state_16597[7]);var inst_16588 = (state_16597[2]);var state_16597__$1 = state_16597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16597__$1,8,inst_16588,inst_16578);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_16615 = [null,null,null,null,null,null,null,null,null,null];(statearr_16615[0] = state_machine__6567__auto__);
(statearr_16615[1] = 1);
return statearr_16615;
});
var state_machine__6567__auto____1 = (function (state_16597){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_16597);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e16616){if((e16616 instanceof Object))
{var ex__6570__auto__ = e16616;var statearr_16617_16630 = state_16597;(statearr_16617_16630[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16631 = state_16597;
state_16597 = G__16631;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_16597){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_16597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_16618 = f__6637__auto__.call(null);(statearr_16618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___16619);
return statearr_16618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6636__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_16678){var state_val_16679 = (state_16678[1]);if((state_val_16679 === 7))
{var inst_16674 = (state_16678[2]);var state_16678__$1 = state_16678;var statearr_16680_16696 = state_16678__$1;(statearr_16680_16696[2] = inst_16674);
(statearr_16680_16696[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16679 === 6))
{var inst_16664 = (state_16678[7]);var inst_16667 = (state_16678[8]);var inst_16671 = f.call(null,inst_16664,inst_16667);var inst_16664__$1 = inst_16671;var state_16678__$1 = (function (){var statearr_16681 = state_16678;(statearr_16681[7] = inst_16664__$1);
return statearr_16681;
})();var statearr_16682_16697 = state_16678__$1;(statearr_16682_16697[2] = null);
(statearr_16682_16697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16679 === 5))
{var inst_16664 = (state_16678[7]);var state_16678__$1 = state_16678;var statearr_16683_16698 = state_16678__$1;(statearr_16683_16698[2] = inst_16664);
(statearr_16683_16698[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16679 === 4))
{var inst_16667 = (state_16678[8]);var inst_16667__$1 = (state_16678[2]);var inst_16668 = (inst_16667__$1 == null);var state_16678__$1 = (function (){var statearr_16684 = state_16678;(statearr_16684[8] = inst_16667__$1);
return statearr_16684;
})();if(cljs.core.truth_(inst_16668))
{var statearr_16685_16699 = state_16678__$1;(statearr_16685_16699[1] = 5);
} else
{var statearr_16686_16700 = state_16678__$1;(statearr_16686_16700[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16679 === 3))
{var inst_16676 = (state_16678[2]);var state_16678__$1 = state_16678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16678__$1,inst_16676);
} else
{if((state_val_16679 === 2))
{var state_16678__$1 = state_16678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16678__$1,4,ch);
} else
{if((state_val_16679 === 1))
{var inst_16664 = init;var state_16678__$1 = (function (){var statearr_16687 = state_16678;(statearr_16687[7] = inst_16664);
return statearr_16687;
})();var statearr_16688_16701 = state_16678__$1;(statearr_16688_16701[2] = null);
(statearr_16688_16701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_16692 = [null,null,null,null,null,null,null,null,null];(statearr_16692[0] = state_machine__6567__auto__);
(statearr_16692[1] = 1);
return statearr_16692;
});
var state_machine__6567__auto____1 = (function (state_16678){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_16678);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e16693){if((e16693 instanceof Object))
{var ex__6570__auto__ = e16693;var statearr_16694_16702 = state_16678;(statearr_16694_16702[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16678);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16703 = state_16678;
state_16678 = G__16703;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_16678){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_16678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_16695 = f__6637__auto__.call(null);(statearr_16695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto__);
return statearr_16695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return c__6636__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6636__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_16765){var state_val_16766 = (state_16765[1]);if((state_val_16766 === 1))
{var inst_16745 = cljs.core.seq.call(null,coll);var inst_16746 = inst_16745;var state_16765__$1 = (function (){var statearr_16767 = state_16765;(statearr_16767[7] = inst_16746);
return statearr_16767;
})();var statearr_16768_16786 = state_16765__$1;(statearr_16768_16786[2] = null);
(statearr_16768_16786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16766 === 2))
{var inst_16746 = (state_16765[7]);var state_16765__$1 = state_16765;if(cljs.core.truth_(inst_16746))
{var statearr_16769_16787 = state_16765__$1;(statearr_16769_16787[1] = 4);
} else
{var statearr_16770_16788 = state_16765__$1;(statearr_16770_16788[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16766 === 3))
{var inst_16763 = (state_16765[2]);var state_16765__$1 = state_16765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16765__$1,inst_16763);
} else
{if((state_val_16766 === 4))
{var inst_16746 = (state_16765[7]);var inst_16749 = cljs.core.first.call(null,inst_16746);var state_16765__$1 = state_16765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16765__$1,7,ch,inst_16749);
} else
{if((state_val_16766 === 5))
{var state_16765__$1 = state_16765;if(cljs.core.truth_(close_QMARK_))
{var statearr_16771_16789 = state_16765__$1;(statearr_16771_16789[1] = 8);
} else
{var statearr_16772_16790 = state_16765__$1;(statearr_16772_16790[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16766 === 6))
{var inst_16761 = (state_16765[2]);var state_16765__$1 = state_16765;var statearr_16773_16791 = state_16765__$1;(statearr_16773_16791[2] = inst_16761);
(statearr_16773_16791[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16766 === 7))
{var inst_16746 = (state_16765[7]);var inst_16751 = (state_16765[2]);var inst_16752 = cljs.core.next.call(null,inst_16746);var inst_16746__$1 = inst_16752;var state_16765__$1 = (function (){var statearr_16774 = state_16765;(statearr_16774[8] = inst_16751);
(statearr_16774[7] = inst_16746__$1);
return statearr_16774;
})();var statearr_16775_16792 = state_16765__$1;(statearr_16775_16792[2] = null);
(statearr_16775_16792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16766 === 8))
{var inst_16756 = cljs.core.async.close_BANG_.call(null,ch);var state_16765__$1 = state_16765;var statearr_16776_16793 = state_16765__$1;(statearr_16776_16793[2] = inst_16756);
(statearr_16776_16793[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16766 === 9))
{var state_16765__$1 = state_16765;var statearr_16777_16794 = state_16765__$1;(statearr_16777_16794[2] = null);
(statearr_16777_16794[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16766 === 10))
{var inst_16759 = (state_16765[2]);var state_16765__$1 = state_16765;var statearr_16778_16795 = state_16765__$1;(statearr_16778_16795[2] = inst_16759);
(statearr_16778_16795[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_16782 = [null,null,null,null,null,null,null,null,null];(statearr_16782[0] = state_machine__6567__auto__);
(statearr_16782[1] = 1);
return statearr_16782;
});
var state_machine__6567__auto____1 = (function (state_16765){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_16765);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e16783){if((e16783 instanceof Object))
{var ex__6570__auto__ = e16783;var statearr_16784_16796 = state_16765;(statearr_16784_16796[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16765);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16797 = state_16765;
state_16765 = G__16797;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_16765){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_16765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_16785 = f__6637__auto__.call(null);(statearr_16785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto__);
return statearr_16785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return c__6636__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16799 = {};return obj16799;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3387__auto__ = _;if(and__3387__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3387__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4007__auto__ = (((_ == null))?null:_);return (function (){var or__3399__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16801 = {};return obj16801;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3387__auto__ = m;if(and__3387__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3387__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4007__auto__ = (((m == null))?null:m);return (function (){var or__3399__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3387__auto__ = m;if(and__3387__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3387__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4007__auto__ = (((m == null))?null:m);return (function (){var or__3399__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3387__auto__ = m;if(and__3387__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3387__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4007__auto__ = (((m == null))?null:m);return (function (){var or__3399__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17025 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17025 = (function (cs,ch,mult,meta17026){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17026 = meta17026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17025.cljs$lang$type = true;
cljs.core.async.t17025.cljs$lang$ctorStr = "cljs.core.async/t17025";
cljs.core.async.t17025.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3948__auto__,writer__3949__auto__,opt__3950__auto__){return cljs.core._write.call(null,writer__3949__auto__,"cljs.core.async/t17025");
});})(cs))
;
cljs.core.async.t17025.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17025.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17025.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17025.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17025.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17027){var self__ = this;
var _17027__$1 = this;return self__.meta17026;
});})(cs))
;
cljs.core.async.t17025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17027,meta17026__$1){var self__ = this;
var _17027__$1 = this;return (new cljs.core.async.t17025(self__.cs,self__.ch,self__.mult,meta17026__$1));
});})(cs))
;
cljs.core.async.__GT_t17025 = ((function (cs){
return (function __GT_t17025(cs__$1,ch__$1,mult__$1,meta17026){return (new cljs.core.async.t17025(cs__$1,ch__$1,mult__$1,meta17026));
});})(cs))
;
}
return (new cljs.core.async.t17025(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6636__auto___17248 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_17162){var state_val_17163 = (state_17162[1]);if((state_val_17163 === 32))
{var inst_17106 = (state_17162[7]);var inst_17030 = (state_17162[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17162,31,Object,null,30);var inst_17113 = cljs.core.async.put_BANG_.call(null,inst_17106,inst_17030,done);var state_17162__$1 = state_17162;var statearr_17164_17249 = state_17162__$1;(statearr_17164_17249[2] = inst_17113);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17162__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 1))
{var state_17162__$1 = state_17162;var statearr_17165_17250 = state_17162__$1;(statearr_17165_17250[2] = null);
(statearr_17165_17250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 33))
{var inst_17119 = (state_17162[9]);var inst_17121 = cljs.core.chunked_seq_QMARK_.call(null,inst_17119);var state_17162__$1 = state_17162;if(inst_17121)
{var statearr_17166_17251 = state_17162__$1;(statearr_17166_17251[1] = 36);
} else
{var statearr_17167_17252 = state_17162__$1;(statearr_17167_17252[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 2))
{var state_17162__$1 = state_17162;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17162__$1,4,ch);
} else
{if((state_val_17163 === 34))
{var state_17162__$1 = state_17162;var statearr_17168_17253 = state_17162__$1;(statearr_17168_17253[2] = null);
(statearr_17168_17253[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 3))
{var inst_17160 = (state_17162[2]);var state_17162__$1 = state_17162;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17162__$1,inst_17160);
} else
{if((state_val_17163 === 35))
{var inst_17144 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17169_17254 = state_17162__$1;(statearr_17169_17254[2] = inst_17144);
(statearr_17169_17254[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 4))
{var inst_17030 = (state_17162[8]);var inst_17030__$1 = (state_17162[2]);var inst_17031 = (inst_17030__$1 == null);var state_17162__$1 = (function (){var statearr_17170 = state_17162;(statearr_17170[8] = inst_17030__$1);
return statearr_17170;
})();if(cljs.core.truth_(inst_17031))
{var statearr_17171_17255 = state_17162__$1;(statearr_17171_17255[1] = 5);
} else
{var statearr_17172_17256 = state_17162__$1;(statearr_17172_17256[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 36))
{var inst_17119 = (state_17162[9]);var inst_17123 = cljs.core.chunk_first.call(null,inst_17119);var inst_17124 = cljs.core.chunk_rest.call(null,inst_17119);var inst_17125 = cljs.core.count.call(null,inst_17123);var inst_17098 = inst_17124;var inst_17099 = inst_17123;var inst_17100 = inst_17125;var inst_17101 = 0;var state_17162__$1 = (function (){var statearr_17173 = state_17162;(statearr_17173[10] = inst_17099);
(statearr_17173[11] = inst_17098);
(statearr_17173[12] = inst_17101);
(statearr_17173[13] = inst_17100);
return statearr_17173;
})();var statearr_17174_17257 = state_17162__$1;(statearr_17174_17257[2] = null);
(statearr_17174_17257[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 5))
{var inst_17037 = cljs.core.deref.call(null,cs);var inst_17038 = cljs.core.seq.call(null,inst_17037);var inst_17039 = inst_17038;var inst_17040 = null;var inst_17041 = 0;var inst_17042 = 0;var state_17162__$1 = (function (){var statearr_17175 = state_17162;(statearr_17175[14] = inst_17039);
(statearr_17175[15] = inst_17040);
(statearr_17175[16] = inst_17041);
(statearr_17175[17] = inst_17042);
return statearr_17175;
})();var statearr_17176_17258 = state_17162__$1;(statearr_17176_17258[2] = null);
(statearr_17176_17258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 37))
{var inst_17119 = (state_17162[9]);var inst_17128 = cljs.core.first.call(null,inst_17119);var state_17162__$1 = (function (){var statearr_17177 = state_17162;(statearr_17177[18] = inst_17128);
return statearr_17177;
})();var statearr_17178_17259 = state_17162__$1;(statearr_17178_17259[2] = null);
(statearr_17178_17259[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 6))
{var inst_17090 = (state_17162[19]);var inst_17089 = cljs.core.deref.call(null,cs);var inst_17090__$1 = cljs.core.keys.call(null,inst_17089);var inst_17091 = cljs.core.count.call(null,inst_17090__$1);var inst_17092 = cljs.core.reset_BANG_.call(null,dctr,inst_17091);var inst_17097 = cljs.core.seq.call(null,inst_17090__$1);var inst_17098 = inst_17097;var inst_17099 = null;var inst_17100 = 0;var inst_17101 = 0;var state_17162__$1 = (function (){var statearr_17179 = state_17162;(statearr_17179[20] = inst_17092);
(statearr_17179[19] = inst_17090__$1);
(statearr_17179[10] = inst_17099);
(statearr_17179[11] = inst_17098);
(statearr_17179[12] = inst_17101);
(statearr_17179[13] = inst_17100);
return statearr_17179;
})();var statearr_17180_17260 = state_17162__$1;(statearr_17180_17260[2] = null);
(statearr_17180_17260[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 38))
{var inst_17141 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17181_17261 = state_17162__$1;(statearr_17181_17261[2] = inst_17141);
(statearr_17181_17261[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 7))
{var inst_17158 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17182_17262 = state_17162__$1;(statearr_17182_17262[2] = inst_17158);
(statearr_17182_17262[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 39))
{var inst_17119 = (state_17162[9]);var inst_17137 = (state_17162[2]);var inst_17138 = cljs.core.next.call(null,inst_17119);var inst_17098 = inst_17138;var inst_17099 = null;var inst_17100 = 0;var inst_17101 = 0;var state_17162__$1 = (function (){var statearr_17183 = state_17162;(statearr_17183[21] = inst_17137);
(statearr_17183[10] = inst_17099);
(statearr_17183[11] = inst_17098);
(statearr_17183[12] = inst_17101);
(statearr_17183[13] = inst_17100);
return statearr_17183;
})();var statearr_17184_17263 = state_17162__$1;(statearr_17184_17263[2] = null);
(statearr_17184_17263[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 8))
{var inst_17041 = (state_17162[16]);var inst_17042 = (state_17162[17]);var inst_17044 = (inst_17042 < inst_17041);var inst_17045 = inst_17044;var state_17162__$1 = state_17162;if(cljs.core.truth_(inst_17045))
{var statearr_17185_17264 = state_17162__$1;(statearr_17185_17264[1] = 10);
} else
{var statearr_17186_17265 = state_17162__$1;(statearr_17186_17265[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 40))
{var inst_17128 = (state_17162[18]);var inst_17129 = (state_17162[2]);var inst_17130 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17131 = cljs.core.async.untap_STAR_.call(null,m,inst_17128);var state_17162__$1 = (function (){var statearr_17187 = state_17162;(statearr_17187[22] = inst_17129);
(statearr_17187[23] = inst_17130);
return statearr_17187;
})();var statearr_17188_17266 = state_17162__$1;(statearr_17188_17266[2] = inst_17131);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17162__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 9))
{var inst_17087 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17189_17267 = state_17162__$1;(statearr_17189_17267[2] = inst_17087);
(statearr_17189_17267[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 41))
{var inst_17128 = (state_17162[18]);var inst_17030 = (state_17162[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17162,40,Object,null,39);var inst_17135 = cljs.core.async.put_BANG_.call(null,inst_17128,inst_17030,done);var state_17162__$1 = state_17162;var statearr_17190_17268 = state_17162__$1;(statearr_17190_17268[2] = inst_17135);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17162__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 10))
{var inst_17040 = (state_17162[15]);var inst_17042 = (state_17162[17]);var inst_17048 = cljs.core._nth.call(null,inst_17040,inst_17042);var inst_17049 = cljs.core.nth.call(null,inst_17048,0,null);var inst_17050 = cljs.core.nth.call(null,inst_17048,1,null);var state_17162__$1 = (function (){var statearr_17191 = state_17162;(statearr_17191[24] = inst_17049);
return statearr_17191;
})();if(cljs.core.truth_(inst_17050))
{var statearr_17192_17269 = state_17162__$1;(statearr_17192_17269[1] = 13);
} else
{var statearr_17193_17270 = state_17162__$1;(statearr_17193_17270[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 42))
{var state_17162__$1 = state_17162;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17162__$1,45,dchan);
} else
{if((state_val_17163 === 11))
{var inst_17039 = (state_17162[14]);var inst_17059 = (state_17162[25]);var inst_17059__$1 = cljs.core.seq.call(null,inst_17039);var state_17162__$1 = (function (){var statearr_17194 = state_17162;(statearr_17194[25] = inst_17059__$1);
return statearr_17194;
})();if(inst_17059__$1)
{var statearr_17195_17271 = state_17162__$1;(statearr_17195_17271[1] = 16);
} else
{var statearr_17196_17272 = state_17162__$1;(statearr_17196_17272[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 43))
{var state_17162__$1 = state_17162;var statearr_17197_17273 = state_17162__$1;(statearr_17197_17273[2] = null);
(statearr_17197_17273[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 12))
{var inst_17085 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17198_17274 = state_17162__$1;(statearr_17198_17274[2] = inst_17085);
(statearr_17198_17274[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 44))
{var inst_17155 = (state_17162[2]);var state_17162__$1 = (function (){var statearr_17199 = state_17162;(statearr_17199[26] = inst_17155);
return statearr_17199;
})();var statearr_17200_17275 = state_17162__$1;(statearr_17200_17275[2] = null);
(statearr_17200_17275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 13))
{var inst_17049 = (state_17162[24]);var inst_17052 = cljs.core.async.close_BANG_.call(null,inst_17049);var state_17162__$1 = state_17162;var statearr_17201_17276 = state_17162__$1;(statearr_17201_17276[2] = inst_17052);
(statearr_17201_17276[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 45))
{var inst_17152 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17205_17277 = state_17162__$1;(statearr_17205_17277[2] = inst_17152);
(statearr_17205_17277[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 14))
{var state_17162__$1 = state_17162;var statearr_17206_17278 = state_17162__$1;(statearr_17206_17278[2] = null);
(statearr_17206_17278[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 15))
{var inst_17039 = (state_17162[14]);var inst_17040 = (state_17162[15]);var inst_17041 = (state_17162[16]);var inst_17042 = (state_17162[17]);var inst_17055 = (state_17162[2]);var inst_17056 = (inst_17042 + 1);var tmp17202 = inst_17039;var tmp17203 = inst_17040;var tmp17204 = inst_17041;var inst_17039__$1 = tmp17202;var inst_17040__$1 = tmp17203;var inst_17041__$1 = tmp17204;var inst_17042__$1 = inst_17056;var state_17162__$1 = (function (){var statearr_17207 = state_17162;(statearr_17207[14] = inst_17039__$1);
(statearr_17207[15] = inst_17040__$1);
(statearr_17207[16] = inst_17041__$1);
(statearr_17207[17] = inst_17042__$1);
(statearr_17207[27] = inst_17055);
return statearr_17207;
})();var statearr_17208_17279 = state_17162__$1;(statearr_17208_17279[2] = null);
(statearr_17208_17279[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 16))
{var inst_17059 = (state_17162[25]);var inst_17061 = cljs.core.chunked_seq_QMARK_.call(null,inst_17059);var state_17162__$1 = state_17162;if(inst_17061)
{var statearr_17209_17280 = state_17162__$1;(statearr_17209_17280[1] = 19);
} else
{var statearr_17210_17281 = state_17162__$1;(statearr_17210_17281[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 17))
{var state_17162__$1 = state_17162;var statearr_17211_17282 = state_17162__$1;(statearr_17211_17282[2] = null);
(statearr_17211_17282[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 18))
{var inst_17083 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17212_17283 = state_17162__$1;(statearr_17212_17283[2] = inst_17083);
(statearr_17212_17283[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 19))
{var inst_17059 = (state_17162[25]);var inst_17063 = cljs.core.chunk_first.call(null,inst_17059);var inst_17064 = cljs.core.chunk_rest.call(null,inst_17059);var inst_17065 = cljs.core.count.call(null,inst_17063);var inst_17039 = inst_17064;var inst_17040 = inst_17063;var inst_17041 = inst_17065;var inst_17042 = 0;var state_17162__$1 = (function (){var statearr_17213 = state_17162;(statearr_17213[14] = inst_17039);
(statearr_17213[15] = inst_17040);
(statearr_17213[16] = inst_17041);
(statearr_17213[17] = inst_17042);
return statearr_17213;
})();var statearr_17214_17284 = state_17162__$1;(statearr_17214_17284[2] = null);
(statearr_17214_17284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 20))
{var inst_17059 = (state_17162[25]);var inst_17069 = cljs.core.first.call(null,inst_17059);var inst_17070 = cljs.core.nth.call(null,inst_17069,0,null);var inst_17071 = cljs.core.nth.call(null,inst_17069,1,null);var state_17162__$1 = (function (){var statearr_17215 = state_17162;(statearr_17215[28] = inst_17070);
return statearr_17215;
})();if(cljs.core.truth_(inst_17071))
{var statearr_17216_17285 = state_17162__$1;(statearr_17216_17285[1] = 22);
} else
{var statearr_17217_17286 = state_17162__$1;(statearr_17217_17286[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 21))
{var inst_17080 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17218_17287 = state_17162__$1;(statearr_17218_17287[2] = inst_17080);
(statearr_17218_17287[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 22))
{var inst_17070 = (state_17162[28]);var inst_17073 = cljs.core.async.close_BANG_.call(null,inst_17070);var state_17162__$1 = state_17162;var statearr_17219_17288 = state_17162__$1;(statearr_17219_17288[2] = inst_17073);
(statearr_17219_17288[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 23))
{var state_17162__$1 = state_17162;var statearr_17220_17289 = state_17162__$1;(statearr_17220_17289[2] = null);
(statearr_17220_17289[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 24))
{var inst_17059 = (state_17162[25]);var inst_17076 = (state_17162[2]);var inst_17077 = cljs.core.next.call(null,inst_17059);var inst_17039 = inst_17077;var inst_17040 = null;var inst_17041 = 0;var inst_17042 = 0;var state_17162__$1 = (function (){var statearr_17221 = state_17162;(statearr_17221[14] = inst_17039);
(statearr_17221[29] = inst_17076);
(statearr_17221[15] = inst_17040);
(statearr_17221[16] = inst_17041);
(statearr_17221[17] = inst_17042);
return statearr_17221;
})();var statearr_17222_17290 = state_17162__$1;(statearr_17222_17290[2] = null);
(statearr_17222_17290[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 25))
{var inst_17101 = (state_17162[12]);var inst_17100 = (state_17162[13]);var inst_17103 = (inst_17101 < inst_17100);var inst_17104 = inst_17103;var state_17162__$1 = state_17162;if(cljs.core.truth_(inst_17104))
{var statearr_17223_17291 = state_17162__$1;(statearr_17223_17291[1] = 27);
} else
{var statearr_17224_17292 = state_17162__$1;(statearr_17224_17292[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 26))
{var inst_17090 = (state_17162[19]);var inst_17148 = (state_17162[2]);var inst_17149 = cljs.core.seq.call(null,inst_17090);var state_17162__$1 = (function (){var statearr_17225 = state_17162;(statearr_17225[30] = inst_17148);
return statearr_17225;
})();if(inst_17149)
{var statearr_17226_17293 = state_17162__$1;(statearr_17226_17293[1] = 42);
} else
{var statearr_17227_17294 = state_17162__$1;(statearr_17227_17294[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 27))
{var inst_17099 = (state_17162[10]);var inst_17101 = (state_17162[12]);var inst_17106 = cljs.core._nth.call(null,inst_17099,inst_17101);var state_17162__$1 = (function (){var statearr_17228 = state_17162;(statearr_17228[7] = inst_17106);
return statearr_17228;
})();var statearr_17229_17295 = state_17162__$1;(statearr_17229_17295[2] = null);
(statearr_17229_17295[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 28))
{var inst_17119 = (state_17162[9]);var inst_17098 = (state_17162[11]);var inst_17119__$1 = cljs.core.seq.call(null,inst_17098);var state_17162__$1 = (function (){var statearr_17233 = state_17162;(statearr_17233[9] = inst_17119__$1);
return statearr_17233;
})();if(inst_17119__$1)
{var statearr_17234_17296 = state_17162__$1;(statearr_17234_17296[1] = 33);
} else
{var statearr_17235_17297 = state_17162__$1;(statearr_17235_17297[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 29))
{var inst_17146 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17236_17298 = state_17162__$1;(statearr_17236_17298[2] = inst_17146);
(statearr_17236_17298[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 30))
{var inst_17099 = (state_17162[10]);var inst_17098 = (state_17162[11]);var inst_17101 = (state_17162[12]);var inst_17100 = (state_17162[13]);var inst_17115 = (state_17162[2]);var inst_17116 = (inst_17101 + 1);var tmp17230 = inst_17099;var tmp17231 = inst_17098;var tmp17232 = inst_17100;var inst_17098__$1 = tmp17231;var inst_17099__$1 = tmp17230;var inst_17100__$1 = tmp17232;var inst_17101__$1 = inst_17116;var state_17162__$1 = (function (){var statearr_17237 = state_17162;(statearr_17237[31] = inst_17115);
(statearr_17237[10] = inst_17099__$1);
(statearr_17237[11] = inst_17098__$1);
(statearr_17237[12] = inst_17101__$1);
(statearr_17237[13] = inst_17100__$1);
return statearr_17237;
})();var statearr_17238_17299 = state_17162__$1;(statearr_17238_17299[2] = null);
(statearr_17238_17299[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 31))
{var inst_17106 = (state_17162[7]);var inst_17107 = (state_17162[2]);var inst_17108 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17109 = cljs.core.async.untap_STAR_.call(null,m,inst_17106);var state_17162__$1 = (function (){var statearr_17239 = state_17162;(statearr_17239[32] = inst_17108);
(statearr_17239[33] = inst_17107);
return statearr_17239;
})();var statearr_17240_17300 = state_17162__$1;(statearr_17240_17300[2] = inst_17109);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17162__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_17244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17244[0] = state_machine__6567__auto__);
(statearr_17244[1] = 1);
return statearr_17244;
});
var state_machine__6567__auto____1 = (function (state_17162){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_17162);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e17245){if((e17245 instanceof Object))
{var ex__6570__auto__ = e17245;var statearr_17246_17301 = state_17162;(statearr_17246_17301[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17162);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17245;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17302 = state_17162;
state_17162 = G__17302;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_17162){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_17162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_17247 = f__6637__auto__.call(null);(statearr_17247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___17248);
return statearr_17247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj17304 = {};return obj17304;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3387__auto__ = m;if(and__3387__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3387__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4007__auto__ = (((m == null))?null:m);return (function (){var or__3399__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3387__auto__ = m;if(and__3387__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3387__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4007__auto__ = (((m == null))?null:m);return (function (){var or__3399__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3387__auto__ = m;if(and__3387__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3387__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4007__auto__ = (((m == null))?null:m);return (function (){var or__3399__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3387__auto__ = m;if(and__3387__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3387__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4007__auto__ = (((m == null))?null:m);return (function (){var or__3399__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3387__auto__ = m;if(and__3387__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3387__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4007__auto__ = (((m == null))?null:m);return (function (){var or__3399__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t17414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17414 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17415){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta17415 = meta17415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17414.cljs$lang$type = true;
cljs.core.async.t17414.cljs$lang$ctorStr = "cljs.core.async/t17414";
cljs.core.async.t17414.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3948__auto__,writer__3949__auto__,opt__3950__auto__){return cljs.core._write.call(null,writer__3949__auto__,"cljs.core.async/t17414");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17414.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17414.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17414.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17414.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17414.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17414.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17414.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17416){var self__ = this;
var _17416__$1 = this;return self__.meta17415;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17416,meta17415__$1){var self__ = this;
var _17416__$1 = this;return (new cljs.core.async.t17414(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17415__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17414 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17414(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17415){return (new cljs.core.async.t17414(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17415));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17414(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6636__auto___17523 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_17481){var state_val_17482 = (state_17481[1]);if((state_val_17482 === 1))
{var inst_17420 = (state_17481[7]);var inst_17420__$1 = calc_state.call(null);var inst_17421 = cljs.core.seq_QMARK_.call(null,inst_17420__$1);var state_17481__$1 = (function (){var statearr_17483 = state_17481;(statearr_17483[7] = inst_17420__$1);
return statearr_17483;
})();if(inst_17421)
{var statearr_17484_17524 = state_17481__$1;(statearr_17484_17524[1] = 2);
} else
{var statearr_17485_17525 = state_17481__$1;(statearr_17485_17525[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 2))
{var inst_17420 = (state_17481[7]);var inst_17423 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17420);var state_17481__$1 = state_17481;var statearr_17486_17526 = state_17481__$1;(statearr_17486_17526[2] = inst_17423);
(statearr_17486_17526[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 3))
{var inst_17420 = (state_17481[7]);var state_17481__$1 = state_17481;var statearr_17487_17527 = state_17481__$1;(statearr_17487_17527[2] = inst_17420);
(statearr_17487_17527[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 4))
{var inst_17420 = (state_17481[7]);var inst_17426 = (state_17481[2]);var inst_17427 = cljs.core.get.call(null,inst_17426,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17428 = cljs.core.get.call(null,inst_17426,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17429 = cljs.core.get.call(null,inst_17426,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17430 = inst_17420;var state_17481__$1 = (function (){var statearr_17488 = state_17481;(statearr_17488[8] = inst_17430);
(statearr_17488[9] = inst_17429);
(statearr_17488[10] = inst_17428);
(statearr_17488[11] = inst_17427);
return statearr_17488;
})();var statearr_17489_17528 = state_17481__$1;(statearr_17489_17528[2] = null);
(statearr_17489_17528[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 5))
{var inst_17430 = (state_17481[8]);var inst_17433 = cljs.core.seq_QMARK_.call(null,inst_17430);var state_17481__$1 = state_17481;if(inst_17433)
{var statearr_17490_17529 = state_17481__$1;(statearr_17490_17529[1] = 7);
} else
{var statearr_17491_17530 = state_17481__$1;(statearr_17491_17530[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 6))
{var inst_17479 = (state_17481[2]);var state_17481__$1 = state_17481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17481__$1,inst_17479);
} else
{if((state_val_17482 === 7))
{var inst_17430 = (state_17481[8]);var inst_17435 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17430);var state_17481__$1 = state_17481;var statearr_17492_17531 = state_17481__$1;(statearr_17492_17531[2] = inst_17435);
(statearr_17492_17531[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 8))
{var inst_17430 = (state_17481[8]);var state_17481__$1 = state_17481;var statearr_17493_17532 = state_17481__$1;(statearr_17493_17532[2] = inst_17430);
(statearr_17493_17532[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 9))
{var inst_17438 = (state_17481[12]);var inst_17438__$1 = (state_17481[2]);var inst_17439 = cljs.core.get.call(null,inst_17438__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17440 = cljs.core.get.call(null,inst_17438__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17441 = cljs.core.get.call(null,inst_17438__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17481__$1 = (function (){var statearr_17494 = state_17481;(statearr_17494[13] = inst_17440);
(statearr_17494[12] = inst_17438__$1);
(statearr_17494[14] = inst_17441);
return statearr_17494;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17481__$1,10,inst_17439);
} else
{if((state_val_17482 === 10))
{var inst_17445 = (state_17481[15]);var inst_17446 = (state_17481[16]);var inst_17444 = (state_17481[2]);var inst_17445__$1 = cljs.core.nth.call(null,inst_17444,0,null);var inst_17446__$1 = cljs.core.nth.call(null,inst_17444,1,null);var inst_17447 = (inst_17445__$1 == null);var inst_17448 = cljs.core._EQ_.call(null,inst_17446__$1,change);var inst_17449 = (inst_17447) || (inst_17448);var state_17481__$1 = (function (){var statearr_17495 = state_17481;(statearr_17495[15] = inst_17445__$1);
(statearr_17495[16] = inst_17446__$1);
return statearr_17495;
})();if(cljs.core.truth_(inst_17449))
{var statearr_17496_17533 = state_17481__$1;(statearr_17496_17533[1] = 11);
} else
{var statearr_17497_17534 = state_17481__$1;(statearr_17497_17534[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 11))
{var inst_17445 = (state_17481[15]);var inst_17451 = (inst_17445 == null);var state_17481__$1 = state_17481;if(cljs.core.truth_(inst_17451))
{var statearr_17498_17535 = state_17481__$1;(statearr_17498_17535[1] = 14);
} else
{var statearr_17499_17536 = state_17481__$1;(statearr_17499_17536[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 12))
{var inst_17460 = (state_17481[17]);var inst_17446 = (state_17481[16]);var inst_17441 = (state_17481[14]);var inst_17460__$1 = inst_17441.call(null,inst_17446);var state_17481__$1 = (function (){var statearr_17500 = state_17481;(statearr_17500[17] = inst_17460__$1);
return statearr_17500;
})();if(cljs.core.truth_(inst_17460__$1))
{var statearr_17501_17537 = state_17481__$1;(statearr_17501_17537[1] = 17);
} else
{var statearr_17502_17538 = state_17481__$1;(statearr_17502_17538[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 13))
{var inst_17477 = (state_17481[2]);var state_17481__$1 = state_17481;var statearr_17503_17539 = state_17481__$1;(statearr_17503_17539[2] = inst_17477);
(statearr_17503_17539[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 14))
{var inst_17446 = (state_17481[16]);var inst_17453 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17446);var state_17481__$1 = state_17481;var statearr_17504_17540 = state_17481__$1;(statearr_17504_17540[2] = inst_17453);
(statearr_17504_17540[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 15))
{var state_17481__$1 = state_17481;var statearr_17505_17541 = state_17481__$1;(statearr_17505_17541[2] = null);
(statearr_17505_17541[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 16))
{var inst_17456 = (state_17481[2]);var inst_17457 = calc_state.call(null);var inst_17430 = inst_17457;var state_17481__$1 = (function (){var statearr_17506 = state_17481;(statearr_17506[8] = inst_17430);
(statearr_17506[18] = inst_17456);
return statearr_17506;
})();var statearr_17507_17542 = state_17481__$1;(statearr_17507_17542[2] = null);
(statearr_17507_17542[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 17))
{var inst_17460 = (state_17481[17]);var state_17481__$1 = state_17481;var statearr_17508_17543 = state_17481__$1;(statearr_17508_17543[2] = inst_17460);
(statearr_17508_17543[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 18))
{var inst_17446 = (state_17481[16]);var inst_17440 = (state_17481[13]);var inst_17441 = (state_17481[14]);var inst_17463 = cljs.core.empty_QMARK_.call(null,inst_17441);var inst_17464 = inst_17440.call(null,inst_17446);var inst_17465 = cljs.core.not.call(null,inst_17464);var inst_17466 = (inst_17463) && (inst_17465);var state_17481__$1 = state_17481;var statearr_17509_17544 = state_17481__$1;(statearr_17509_17544[2] = inst_17466);
(statearr_17509_17544[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 19))
{var inst_17468 = (state_17481[2]);var state_17481__$1 = state_17481;if(cljs.core.truth_(inst_17468))
{var statearr_17510_17545 = state_17481__$1;(statearr_17510_17545[1] = 20);
} else
{var statearr_17511_17546 = state_17481__$1;(statearr_17511_17546[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 20))
{var inst_17445 = (state_17481[15]);var state_17481__$1 = state_17481;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17481__$1,23,out,inst_17445);
} else
{if((state_val_17482 === 21))
{var state_17481__$1 = state_17481;var statearr_17512_17547 = state_17481__$1;(statearr_17512_17547[2] = null);
(statearr_17512_17547[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 22))
{var inst_17438 = (state_17481[12]);var inst_17474 = (state_17481[2]);var inst_17430 = inst_17438;var state_17481__$1 = (function (){var statearr_17513 = state_17481;(statearr_17513[19] = inst_17474);
(statearr_17513[8] = inst_17430);
return statearr_17513;
})();var statearr_17514_17548 = state_17481__$1;(statearr_17514_17548[2] = null);
(statearr_17514_17548[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17482 === 23))
{var inst_17471 = (state_17481[2]);var state_17481__$1 = state_17481;var statearr_17515_17549 = state_17481__$1;(statearr_17515_17549[2] = inst_17471);
(statearr_17515_17549[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_17519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17519[0] = state_machine__6567__auto__);
(statearr_17519[1] = 1);
return statearr_17519;
});
var state_machine__6567__auto____1 = (function (state_17481){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_17481);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e17520){if((e17520 instanceof Object))
{var ex__6570__auto__ = e17520;var statearr_17521_17550 = state_17481;(statearr_17521_17550[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17481);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17551 = state_17481;
state_17481 = G__17551;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_17481){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_17481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_17522 = f__6637__auto__.call(null);(statearr_17522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___17523);
return statearr_17522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj17553 = {};return obj17553;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3387__auto__ = p;if(and__3387__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3387__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4007__auto__ = (((p == null))?null:p);return (function (){var or__3399__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3387__auto__ = p;if(and__3387__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3387__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4007__auto__ = (((p == null))?null:p);return (function (){var or__3399__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3387__auto__ = p;if(and__3387__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3387__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4007__auto__ = (((p == null))?null:p);return (function (){var or__3399__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3387__auto__ = p;if(and__3387__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3387__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4007__auto__ = (((p == null))?null:p);return (function (){var or__3399__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4007__auto__)]);if(or__3399__auto__)
{return or__3399__auto__;
} else
{var or__3399__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3399__auto____$1)
{return or__3399__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3399__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3399__auto__))
{return or__3399__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3399__auto__,mults){
return (function (p1__17554_SHARP_){if(cljs.core.truth_(p1__17554_SHARP_.call(null,topic)))
{return p1__17554_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17554_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3399__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17679 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17680){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17680 = meta17680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17679.cljs$lang$type = true;
cljs.core.async.t17679.cljs$lang$ctorStr = "cljs.core.async/t17679";
cljs.core.async.t17679.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3948__auto__,writer__3949__auto__,opt__3950__auto__){return cljs.core._write.call(null,writer__3949__auto__,"cljs.core.async/t17679");
});})(mults,ensure_mult))
;
cljs.core.async.t17679.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17679.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17679.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17679.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17681){var self__ = this;
var _17681__$1 = this;return self__.meta17680;
});})(mults,ensure_mult))
;
cljs.core.async.t17679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17681,meta17680__$1){var self__ = this;
var _17681__$1 = this;return (new cljs.core.async.t17679(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17680__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17679 = ((function (mults,ensure_mult){
return (function __GT_t17679(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17680){return (new cljs.core.async.t17679(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17680));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17679(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6636__auto___17803 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_17755){var state_val_17756 = (state_17755[1]);if((state_val_17756 === 1))
{var state_17755__$1 = state_17755;var statearr_17757_17804 = state_17755__$1;(statearr_17757_17804[2] = null);
(statearr_17757_17804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 2))
{var state_17755__$1 = state_17755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17755__$1,4,ch);
} else
{if((state_val_17756 === 3))
{var inst_17753 = (state_17755[2]);var state_17755__$1 = state_17755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17755__$1,inst_17753);
} else
{if((state_val_17756 === 4))
{var inst_17684 = (state_17755[7]);var inst_17684__$1 = (state_17755[2]);var inst_17685 = (inst_17684__$1 == null);var state_17755__$1 = (function (){var statearr_17758 = state_17755;(statearr_17758[7] = inst_17684__$1);
return statearr_17758;
})();if(cljs.core.truth_(inst_17685))
{var statearr_17759_17805 = state_17755__$1;(statearr_17759_17805[1] = 5);
} else
{var statearr_17760_17806 = state_17755__$1;(statearr_17760_17806[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 5))
{var inst_17691 = cljs.core.deref.call(null,mults);var inst_17692 = cljs.core.vals.call(null,inst_17691);var inst_17693 = cljs.core.seq.call(null,inst_17692);var inst_17694 = inst_17693;var inst_17695 = null;var inst_17696 = 0;var inst_17697 = 0;var state_17755__$1 = (function (){var statearr_17761 = state_17755;(statearr_17761[8] = inst_17696);
(statearr_17761[9] = inst_17697);
(statearr_17761[10] = inst_17695);
(statearr_17761[11] = inst_17694);
return statearr_17761;
})();var statearr_17762_17807 = state_17755__$1;(statearr_17762_17807[2] = null);
(statearr_17762_17807[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 6))
{var inst_17684 = (state_17755[7]);var inst_17732 = (state_17755[12]);var inst_17734 = (state_17755[13]);var inst_17732__$1 = topic_fn.call(null,inst_17684);var inst_17733 = cljs.core.deref.call(null,mults);var inst_17734__$1 = cljs.core.get.call(null,inst_17733,inst_17732__$1);var state_17755__$1 = (function (){var statearr_17763 = state_17755;(statearr_17763[12] = inst_17732__$1);
(statearr_17763[13] = inst_17734__$1);
return statearr_17763;
})();if(cljs.core.truth_(inst_17734__$1))
{var statearr_17764_17808 = state_17755__$1;(statearr_17764_17808[1] = 19);
} else
{var statearr_17765_17809 = state_17755__$1;(statearr_17765_17809[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 7))
{var inst_17751 = (state_17755[2]);var state_17755__$1 = state_17755;var statearr_17766_17810 = state_17755__$1;(statearr_17766_17810[2] = inst_17751);
(statearr_17766_17810[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 8))
{var inst_17696 = (state_17755[8]);var inst_17697 = (state_17755[9]);var inst_17699 = (inst_17697 < inst_17696);var inst_17700 = inst_17699;var state_17755__$1 = state_17755;if(cljs.core.truth_(inst_17700))
{var statearr_17770_17811 = state_17755__$1;(statearr_17770_17811[1] = 10);
} else
{var statearr_17771_17812 = state_17755__$1;(statearr_17771_17812[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 9))
{var inst_17730 = (state_17755[2]);var state_17755__$1 = state_17755;var statearr_17772_17813 = state_17755__$1;(statearr_17772_17813[2] = inst_17730);
(statearr_17772_17813[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 10))
{var inst_17696 = (state_17755[8]);var inst_17697 = (state_17755[9]);var inst_17695 = (state_17755[10]);var inst_17694 = (state_17755[11]);var inst_17702 = cljs.core._nth.call(null,inst_17695,inst_17697);var inst_17703 = cljs.core.async.muxch_STAR_.call(null,inst_17702);var inst_17704 = cljs.core.async.close_BANG_.call(null,inst_17703);var inst_17705 = (inst_17697 + 1);var tmp17767 = inst_17696;var tmp17768 = inst_17695;var tmp17769 = inst_17694;var inst_17694__$1 = tmp17769;var inst_17695__$1 = tmp17768;var inst_17696__$1 = tmp17767;var inst_17697__$1 = inst_17705;var state_17755__$1 = (function (){var statearr_17773 = state_17755;(statearr_17773[14] = inst_17704);
(statearr_17773[8] = inst_17696__$1);
(statearr_17773[9] = inst_17697__$1);
(statearr_17773[10] = inst_17695__$1);
(statearr_17773[11] = inst_17694__$1);
return statearr_17773;
})();var statearr_17774_17814 = state_17755__$1;(statearr_17774_17814[2] = null);
(statearr_17774_17814[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 11))
{var inst_17708 = (state_17755[15]);var inst_17694 = (state_17755[11]);var inst_17708__$1 = cljs.core.seq.call(null,inst_17694);var state_17755__$1 = (function (){var statearr_17775 = state_17755;(statearr_17775[15] = inst_17708__$1);
return statearr_17775;
})();if(inst_17708__$1)
{var statearr_17776_17815 = state_17755__$1;(statearr_17776_17815[1] = 13);
} else
{var statearr_17777_17816 = state_17755__$1;(statearr_17777_17816[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 12))
{var inst_17728 = (state_17755[2]);var state_17755__$1 = state_17755;var statearr_17778_17817 = state_17755__$1;(statearr_17778_17817[2] = inst_17728);
(statearr_17778_17817[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 13))
{var inst_17708 = (state_17755[15]);var inst_17710 = cljs.core.chunked_seq_QMARK_.call(null,inst_17708);var state_17755__$1 = state_17755;if(inst_17710)
{var statearr_17779_17818 = state_17755__$1;(statearr_17779_17818[1] = 16);
} else
{var statearr_17780_17819 = state_17755__$1;(statearr_17780_17819[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 14))
{var state_17755__$1 = state_17755;var statearr_17781_17820 = state_17755__$1;(statearr_17781_17820[2] = null);
(statearr_17781_17820[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 15))
{var inst_17726 = (state_17755[2]);var state_17755__$1 = state_17755;var statearr_17782_17821 = state_17755__$1;(statearr_17782_17821[2] = inst_17726);
(statearr_17782_17821[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 16))
{var inst_17708 = (state_17755[15]);var inst_17712 = cljs.core.chunk_first.call(null,inst_17708);var inst_17713 = cljs.core.chunk_rest.call(null,inst_17708);var inst_17714 = cljs.core.count.call(null,inst_17712);var inst_17694 = inst_17713;var inst_17695 = inst_17712;var inst_17696 = inst_17714;var inst_17697 = 0;var state_17755__$1 = (function (){var statearr_17783 = state_17755;(statearr_17783[8] = inst_17696);
(statearr_17783[9] = inst_17697);
(statearr_17783[10] = inst_17695);
(statearr_17783[11] = inst_17694);
return statearr_17783;
})();var statearr_17784_17822 = state_17755__$1;(statearr_17784_17822[2] = null);
(statearr_17784_17822[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 17))
{var inst_17708 = (state_17755[15]);var inst_17717 = cljs.core.first.call(null,inst_17708);var inst_17718 = cljs.core.async.muxch_STAR_.call(null,inst_17717);var inst_17719 = cljs.core.async.close_BANG_.call(null,inst_17718);var inst_17720 = cljs.core.next.call(null,inst_17708);var inst_17694 = inst_17720;var inst_17695 = null;var inst_17696 = 0;var inst_17697 = 0;var state_17755__$1 = (function (){var statearr_17785 = state_17755;(statearr_17785[8] = inst_17696);
(statearr_17785[9] = inst_17697);
(statearr_17785[10] = inst_17695);
(statearr_17785[11] = inst_17694);
(statearr_17785[16] = inst_17719);
return statearr_17785;
})();var statearr_17786_17823 = state_17755__$1;(statearr_17786_17823[2] = null);
(statearr_17786_17823[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 18))
{var inst_17723 = (state_17755[2]);var state_17755__$1 = state_17755;var statearr_17787_17824 = state_17755__$1;(statearr_17787_17824[2] = inst_17723);
(statearr_17787_17824[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 19))
{var state_17755__$1 = state_17755;var statearr_17788_17825 = state_17755__$1;(statearr_17788_17825[2] = null);
(statearr_17788_17825[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 20))
{var state_17755__$1 = state_17755;var statearr_17789_17826 = state_17755__$1;(statearr_17789_17826[2] = null);
(statearr_17789_17826[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 21))
{var inst_17748 = (state_17755[2]);var state_17755__$1 = (function (){var statearr_17790 = state_17755;(statearr_17790[17] = inst_17748);
return statearr_17790;
})();var statearr_17791_17827 = state_17755__$1;(statearr_17791_17827[2] = null);
(statearr_17791_17827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 22))
{var inst_17745 = (state_17755[2]);var state_17755__$1 = state_17755;var statearr_17792_17828 = state_17755__$1;(statearr_17792_17828[2] = inst_17745);
(statearr_17792_17828[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 23))
{var inst_17732 = (state_17755[12]);var inst_17736 = (state_17755[2]);var inst_17737 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17732);var state_17755__$1 = (function (){var statearr_17793 = state_17755;(statearr_17793[18] = inst_17736);
return statearr_17793;
})();var statearr_17794_17829 = state_17755__$1;(statearr_17794_17829[2] = inst_17737);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17755__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17756 === 24))
{var inst_17684 = (state_17755[7]);var inst_17734 = (state_17755[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17755,23,Object,null,22);var inst_17741 = cljs.core.async.muxch_STAR_.call(null,inst_17734);var state_17755__$1 = state_17755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17755__$1,25,inst_17741,inst_17684);
} else
{if((state_val_17756 === 25))
{var inst_17743 = (state_17755[2]);var state_17755__$1 = state_17755;var statearr_17795_17830 = state_17755__$1;(statearr_17795_17830[2] = inst_17743);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17755__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_17799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17799[0] = state_machine__6567__auto__);
(statearr_17799[1] = 1);
return statearr_17799;
});
var state_machine__6567__auto____1 = (function (state_17755){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_17755);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e17800){if((e17800 instanceof Object))
{var ex__6570__auto__ = e17800;var statearr_17801_17831 = state_17755;(statearr_17801_17831[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17755);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17832 = state_17755;
state_17755 = G__17832;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_17755){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_17755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_17802 = f__6637__auto__.call(null);(statearr_17802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___17803);
return statearr_17802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6636__auto___17969 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_17939){var state_val_17940 = (state_17939[1]);if((state_val_17940 === 1))
{var state_17939__$1 = state_17939;var statearr_17941_17970 = state_17939__$1;(statearr_17941_17970[2] = null);
(statearr_17941_17970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 2))
{var inst_17902 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17903 = 0;var state_17939__$1 = (function (){var statearr_17942 = state_17939;(statearr_17942[7] = inst_17902);
(statearr_17942[8] = inst_17903);
return statearr_17942;
})();var statearr_17943_17971 = state_17939__$1;(statearr_17943_17971[2] = null);
(statearr_17943_17971[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 3))
{var inst_17937 = (state_17939[2]);var state_17939__$1 = state_17939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17939__$1,inst_17937);
} else
{if((state_val_17940 === 4))
{var inst_17903 = (state_17939[8]);var inst_17905 = (inst_17903 < cnt);var state_17939__$1 = state_17939;if(cljs.core.truth_(inst_17905))
{var statearr_17944_17972 = state_17939__$1;(statearr_17944_17972[1] = 6);
} else
{var statearr_17945_17973 = state_17939__$1;(statearr_17945_17973[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 5))
{var inst_17923 = (state_17939[2]);var state_17939__$1 = (function (){var statearr_17946 = state_17939;(statearr_17946[9] = inst_17923);
return statearr_17946;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17939__$1,12,dchan);
} else
{if((state_val_17940 === 6))
{var state_17939__$1 = state_17939;var statearr_17947_17974 = state_17939__$1;(statearr_17947_17974[2] = null);
(statearr_17947_17974[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 7))
{var state_17939__$1 = state_17939;var statearr_17948_17975 = state_17939__$1;(statearr_17948_17975[2] = null);
(statearr_17948_17975[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 8))
{var inst_17921 = (state_17939[2]);var state_17939__$1 = state_17939;var statearr_17949_17976 = state_17939__$1;(statearr_17949_17976[2] = inst_17921);
(statearr_17949_17976[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 9))
{var inst_17903 = (state_17939[8]);var inst_17916 = (state_17939[2]);var inst_17917 = (inst_17903 + 1);var inst_17903__$1 = inst_17917;var state_17939__$1 = (function (){var statearr_17950 = state_17939;(statearr_17950[10] = inst_17916);
(statearr_17950[8] = inst_17903__$1);
return statearr_17950;
})();var statearr_17951_17977 = state_17939__$1;(statearr_17951_17977[2] = null);
(statearr_17951_17977[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 10))
{var inst_17907 = (state_17939[2]);var inst_17908 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17939__$1 = (function (){var statearr_17952 = state_17939;(statearr_17952[11] = inst_17907);
return statearr_17952;
})();var statearr_17953_17978 = state_17939__$1;(statearr_17953_17978[2] = inst_17908);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17939__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 11))
{var inst_17903 = (state_17939[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17939,10,Object,null,9);var inst_17912 = chs__$1.call(null,inst_17903);var inst_17913 = done.call(null,inst_17903);var inst_17914 = cljs.core.async.take_BANG_.call(null,inst_17912,inst_17913);var state_17939__$1 = state_17939;var statearr_17954_17979 = state_17939__$1;(statearr_17954_17979[2] = inst_17914);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17939__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 12))
{var inst_17925 = (state_17939[12]);var inst_17925__$1 = (state_17939[2]);var inst_17926 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17925__$1);var state_17939__$1 = (function (){var statearr_17955 = state_17939;(statearr_17955[12] = inst_17925__$1);
return statearr_17955;
})();if(cljs.core.truth_(inst_17926))
{var statearr_17956_17980 = state_17939__$1;(statearr_17956_17980[1] = 13);
} else
{var statearr_17957_17981 = state_17939__$1;(statearr_17957_17981[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 13))
{var inst_17928 = cljs.core.async.close_BANG_.call(null,out);var state_17939__$1 = state_17939;var statearr_17958_17982 = state_17939__$1;(statearr_17958_17982[2] = inst_17928);
(statearr_17958_17982[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 14))
{var inst_17925 = (state_17939[12]);var inst_17930 = cljs.core.apply.call(null,f,inst_17925);var state_17939__$1 = state_17939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17939__$1,16,out,inst_17930);
} else
{if((state_val_17940 === 15))
{var inst_17935 = (state_17939[2]);var state_17939__$1 = state_17939;var statearr_17959_17983 = state_17939__$1;(statearr_17959_17983[2] = inst_17935);
(statearr_17959_17983[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17940 === 16))
{var inst_17932 = (state_17939[2]);var state_17939__$1 = (function (){var statearr_17960 = state_17939;(statearr_17960[13] = inst_17932);
return statearr_17960;
})();var statearr_17961_17984 = state_17939__$1;(statearr_17961_17984[2] = null);
(statearr_17961_17984[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_17965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17965[0] = state_machine__6567__auto__);
(statearr_17965[1] = 1);
return statearr_17965;
});
var state_machine__6567__auto____1 = (function (state_17939){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_17939);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e17966){if((e17966 instanceof Object))
{var ex__6570__auto__ = e17966;var statearr_17967_17985 = state_17939;(statearr_17967_17985[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17986 = state_17939;
state_17939 = G__17986;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_17939){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_17939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_17968 = f__6637__auto__.call(null);(statearr_17968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___17969);
return statearr_17968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6636__auto___18094 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_18070){var state_val_18071 = (state_18070[1]);if((state_val_18071 === 1))
{var inst_18041 = cljs.core.vec.call(null,chs);var inst_18042 = inst_18041;var state_18070__$1 = (function (){var statearr_18072 = state_18070;(statearr_18072[7] = inst_18042);
return statearr_18072;
})();var statearr_18073_18095 = state_18070__$1;(statearr_18073_18095[2] = null);
(statearr_18073_18095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18071 === 2))
{var inst_18042 = (state_18070[7]);var inst_18044 = cljs.core.count.call(null,inst_18042);var inst_18045 = (inst_18044 > 0);var state_18070__$1 = state_18070;if(cljs.core.truth_(inst_18045))
{var statearr_18074_18096 = state_18070__$1;(statearr_18074_18096[1] = 4);
} else
{var statearr_18075_18097 = state_18070__$1;(statearr_18075_18097[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18071 === 3))
{var inst_18068 = (state_18070[2]);var state_18070__$1 = state_18070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18070__$1,inst_18068);
} else
{if((state_val_18071 === 4))
{var inst_18042 = (state_18070[7]);var state_18070__$1 = state_18070;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18070__$1,7,inst_18042);
} else
{if((state_val_18071 === 5))
{var inst_18064 = cljs.core.async.close_BANG_.call(null,out);var state_18070__$1 = state_18070;var statearr_18076_18098 = state_18070__$1;(statearr_18076_18098[2] = inst_18064);
(statearr_18076_18098[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18071 === 6))
{var inst_18066 = (state_18070[2]);var state_18070__$1 = state_18070;var statearr_18077_18099 = state_18070__$1;(statearr_18077_18099[2] = inst_18066);
(statearr_18077_18099[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18071 === 7))
{var inst_18049 = (state_18070[8]);var inst_18050 = (state_18070[9]);var inst_18049__$1 = (state_18070[2]);var inst_18050__$1 = cljs.core.nth.call(null,inst_18049__$1,0,null);var inst_18051 = cljs.core.nth.call(null,inst_18049__$1,1,null);var inst_18052 = (inst_18050__$1 == null);var state_18070__$1 = (function (){var statearr_18078 = state_18070;(statearr_18078[8] = inst_18049__$1);
(statearr_18078[9] = inst_18050__$1);
(statearr_18078[10] = inst_18051);
return statearr_18078;
})();if(cljs.core.truth_(inst_18052))
{var statearr_18079_18100 = state_18070__$1;(statearr_18079_18100[1] = 8);
} else
{var statearr_18080_18101 = state_18070__$1;(statearr_18080_18101[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18071 === 8))
{var inst_18049 = (state_18070[8]);var inst_18050 = (state_18070[9]);var inst_18051 = (state_18070[10]);var inst_18042 = (state_18070[7]);var inst_18054 = (function (){var c = inst_18051;var v = inst_18050;var vec__18047 = inst_18049;var cs = inst_18042;return ((function (c,v,vec__18047,cs,inst_18049,inst_18050,inst_18051,inst_18042,state_val_18071){
return (function (p1__17987_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17987_SHARP_);
});
;})(c,v,vec__18047,cs,inst_18049,inst_18050,inst_18051,inst_18042,state_val_18071))
})();var inst_18055 = cljs.core.filterv.call(null,inst_18054,inst_18042);var inst_18042__$1 = inst_18055;var state_18070__$1 = (function (){var statearr_18081 = state_18070;(statearr_18081[7] = inst_18042__$1);
return statearr_18081;
})();var statearr_18082_18102 = state_18070__$1;(statearr_18082_18102[2] = null);
(statearr_18082_18102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18071 === 9))
{var inst_18050 = (state_18070[9]);var state_18070__$1 = state_18070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18070__$1,11,out,inst_18050);
} else
{if((state_val_18071 === 10))
{var inst_18062 = (state_18070[2]);var state_18070__$1 = state_18070;var statearr_18084_18103 = state_18070__$1;(statearr_18084_18103[2] = inst_18062);
(statearr_18084_18103[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18071 === 11))
{var inst_18042 = (state_18070[7]);var inst_18059 = (state_18070[2]);var tmp18083 = inst_18042;var inst_18042__$1 = tmp18083;var state_18070__$1 = (function (){var statearr_18085 = state_18070;(statearr_18085[11] = inst_18059);
(statearr_18085[7] = inst_18042__$1);
return statearr_18085;
})();var statearr_18086_18104 = state_18070__$1;(statearr_18086_18104[2] = null);
(statearr_18086_18104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_18090 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18090[0] = state_machine__6567__auto__);
(statearr_18090[1] = 1);
return statearr_18090;
});
var state_machine__6567__auto____1 = (function (state_18070){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_18070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e18091){if((e18091 instanceof Object))
{var ex__6570__auto__ = e18091;var statearr_18092_18105 = state_18070;(statearr_18092_18105[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18070);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18106 = state_18070;
state_18070 = G__18106;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_18070){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_18070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_18093 = f__6637__auto__.call(null);(statearr_18093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___18094);
return statearr_18093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6636__auto___18199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_18176){var state_val_18177 = (state_18176[1]);if((state_val_18177 === 1))
{var inst_18153 = 0;var state_18176__$1 = (function (){var statearr_18178 = state_18176;(statearr_18178[7] = inst_18153);
return statearr_18178;
})();var statearr_18179_18200 = state_18176__$1;(statearr_18179_18200[2] = null);
(statearr_18179_18200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 2))
{var inst_18153 = (state_18176[7]);var inst_18155 = (inst_18153 < n);var state_18176__$1 = state_18176;if(cljs.core.truth_(inst_18155))
{var statearr_18180_18201 = state_18176__$1;(statearr_18180_18201[1] = 4);
} else
{var statearr_18181_18202 = state_18176__$1;(statearr_18181_18202[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 3))
{var inst_18173 = (state_18176[2]);var inst_18174 = cljs.core.async.close_BANG_.call(null,out);var state_18176__$1 = (function (){var statearr_18182 = state_18176;(statearr_18182[8] = inst_18173);
return statearr_18182;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18176__$1,inst_18174);
} else
{if((state_val_18177 === 4))
{var state_18176__$1 = state_18176;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18176__$1,7,ch);
} else
{if((state_val_18177 === 5))
{var state_18176__$1 = state_18176;var statearr_18183_18203 = state_18176__$1;(statearr_18183_18203[2] = null);
(statearr_18183_18203[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 6))
{var inst_18171 = (state_18176[2]);var state_18176__$1 = state_18176;var statearr_18184_18204 = state_18176__$1;(statearr_18184_18204[2] = inst_18171);
(statearr_18184_18204[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 7))
{var inst_18158 = (state_18176[9]);var inst_18158__$1 = (state_18176[2]);var inst_18159 = (inst_18158__$1 == null);var inst_18160 = cljs.core.not.call(null,inst_18159);var state_18176__$1 = (function (){var statearr_18185 = state_18176;(statearr_18185[9] = inst_18158__$1);
return statearr_18185;
})();if(inst_18160)
{var statearr_18186_18205 = state_18176__$1;(statearr_18186_18205[1] = 8);
} else
{var statearr_18187_18206 = state_18176__$1;(statearr_18187_18206[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 8))
{var inst_18158 = (state_18176[9]);var state_18176__$1 = state_18176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18176__$1,11,out,inst_18158);
} else
{if((state_val_18177 === 9))
{var state_18176__$1 = state_18176;var statearr_18188_18207 = state_18176__$1;(statearr_18188_18207[2] = null);
(statearr_18188_18207[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 10))
{var inst_18168 = (state_18176[2]);var state_18176__$1 = state_18176;var statearr_18189_18208 = state_18176__$1;(statearr_18189_18208[2] = inst_18168);
(statearr_18189_18208[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18177 === 11))
{var inst_18153 = (state_18176[7]);var inst_18163 = (state_18176[2]);var inst_18164 = (inst_18153 + 1);var inst_18153__$1 = inst_18164;var state_18176__$1 = (function (){var statearr_18190 = state_18176;(statearr_18190[7] = inst_18153__$1);
(statearr_18190[10] = inst_18163);
return statearr_18190;
})();var statearr_18191_18209 = state_18176__$1;(statearr_18191_18209[2] = null);
(statearr_18191_18209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_18195 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18195[0] = state_machine__6567__auto__);
(statearr_18195[1] = 1);
return statearr_18195;
});
var state_machine__6567__auto____1 = (function (state_18176){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_18176);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e18196){if((e18196 instanceof Object))
{var ex__6570__auto__ = e18196;var statearr_18197_18210 = state_18176;(statearr_18197_18210[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18176);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18211 = state_18176;
state_18176 = G__18211;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_18176){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_18176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_18198 = f__6637__auto__.call(null);(statearr_18198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___18199);
return statearr_18198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6636__auto___18308 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_18283){var state_val_18284 = (state_18283[1]);if((state_val_18284 === 1))
{var inst_18260 = null;var state_18283__$1 = (function (){var statearr_18285 = state_18283;(statearr_18285[7] = inst_18260);
return statearr_18285;
})();var statearr_18286_18309 = state_18283__$1;(statearr_18286_18309[2] = null);
(statearr_18286_18309[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18284 === 2))
{var state_18283__$1 = state_18283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18283__$1,4,ch);
} else
{if((state_val_18284 === 3))
{var inst_18280 = (state_18283[2]);var inst_18281 = cljs.core.async.close_BANG_.call(null,out);var state_18283__$1 = (function (){var statearr_18287 = state_18283;(statearr_18287[8] = inst_18280);
return statearr_18287;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18283__$1,inst_18281);
} else
{if((state_val_18284 === 4))
{var inst_18263 = (state_18283[9]);var inst_18263__$1 = (state_18283[2]);var inst_18264 = (inst_18263__$1 == null);var inst_18265 = cljs.core.not.call(null,inst_18264);var state_18283__$1 = (function (){var statearr_18288 = state_18283;(statearr_18288[9] = inst_18263__$1);
return statearr_18288;
})();if(inst_18265)
{var statearr_18289_18310 = state_18283__$1;(statearr_18289_18310[1] = 5);
} else
{var statearr_18290_18311 = state_18283__$1;(statearr_18290_18311[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18284 === 5))
{var inst_18260 = (state_18283[7]);var inst_18263 = (state_18283[9]);var inst_18267 = cljs.core._EQ_.call(null,inst_18263,inst_18260);var state_18283__$1 = state_18283;if(inst_18267)
{var statearr_18291_18312 = state_18283__$1;(statearr_18291_18312[1] = 8);
} else
{var statearr_18292_18313 = state_18283__$1;(statearr_18292_18313[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18284 === 6))
{var state_18283__$1 = state_18283;var statearr_18294_18314 = state_18283__$1;(statearr_18294_18314[2] = null);
(statearr_18294_18314[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18284 === 7))
{var inst_18278 = (state_18283[2]);var state_18283__$1 = state_18283;var statearr_18295_18315 = state_18283__$1;(statearr_18295_18315[2] = inst_18278);
(statearr_18295_18315[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18284 === 8))
{var inst_18260 = (state_18283[7]);var tmp18293 = inst_18260;var inst_18260__$1 = tmp18293;var state_18283__$1 = (function (){var statearr_18296 = state_18283;(statearr_18296[7] = inst_18260__$1);
return statearr_18296;
})();var statearr_18297_18316 = state_18283__$1;(statearr_18297_18316[2] = null);
(statearr_18297_18316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18284 === 9))
{var inst_18263 = (state_18283[9]);var state_18283__$1 = state_18283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18283__$1,11,out,inst_18263);
} else
{if((state_val_18284 === 10))
{var inst_18275 = (state_18283[2]);var state_18283__$1 = state_18283;var statearr_18298_18317 = state_18283__$1;(statearr_18298_18317[2] = inst_18275);
(statearr_18298_18317[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18284 === 11))
{var inst_18263 = (state_18283[9]);var inst_18272 = (state_18283[2]);var inst_18260 = inst_18263;var state_18283__$1 = (function (){var statearr_18299 = state_18283;(statearr_18299[10] = inst_18272);
(statearr_18299[7] = inst_18260);
return statearr_18299;
})();var statearr_18300_18318 = state_18283__$1;(statearr_18300_18318[2] = null);
(statearr_18300_18318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_18304 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18304[0] = state_machine__6567__auto__);
(statearr_18304[1] = 1);
return statearr_18304;
});
var state_machine__6567__auto____1 = (function (state_18283){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_18283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e18305){if((e18305 instanceof Object))
{var ex__6570__auto__ = e18305;var statearr_18306_18319 = state_18283;(statearr_18306_18319[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18283);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18320 = state_18283;
state_18283 = G__18320;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_18283){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_18283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_18307 = f__6637__auto__.call(null);(statearr_18307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___18308);
return statearr_18307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6636__auto___18455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_18425){var state_val_18426 = (state_18425[1]);if((state_val_18426 === 1))
{var inst_18388 = (new Array(n));var inst_18389 = inst_18388;var inst_18390 = 0;var state_18425__$1 = (function (){var statearr_18427 = state_18425;(statearr_18427[7] = inst_18390);
(statearr_18427[8] = inst_18389);
return statearr_18427;
})();var statearr_18428_18456 = state_18425__$1;(statearr_18428_18456[2] = null);
(statearr_18428_18456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18426 === 2))
{var state_18425__$1 = state_18425;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18425__$1,4,ch);
} else
{if((state_val_18426 === 3))
{var inst_18423 = (state_18425[2]);var state_18425__$1 = state_18425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18425__$1,inst_18423);
} else
{if((state_val_18426 === 4))
{var inst_18393 = (state_18425[9]);var inst_18393__$1 = (state_18425[2]);var inst_18394 = (inst_18393__$1 == null);var inst_18395 = cljs.core.not.call(null,inst_18394);var state_18425__$1 = (function (){var statearr_18429 = state_18425;(statearr_18429[9] = inst_18393__$1);
return statearr_18429;
})();if(inst_18395)
{var statearr_18430_18457 = state_18425__$1;(statearr_18430_18457[1] = 5);
} else
{var statearr_18431_18458 = state_18425__$1;(statearr_18431_18458[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18426 === 5))
{var inst_18393 = (state_18425[9]);var inst_18390 = (state_18425[7]);var inst_18389 = (state_18425[8]);var inst_18398 = (state_18425[10]);var inst_18397 = (inst_18389[inst_18390] = inst_18393);var inst_18398__$1 = (inst_18390 + 1);var inst_18399 = (inst_18398__$1 < n);var state_18425__$1 = (function (){var statearr_18432 = state_18425;(statearr_18432[11] = inst_18397);
(statearr_18432[10] = inst_18398__$1);
return statearr_18432;
})();if(cljs.core.truth_(inst_18399))
{var statearr_18433_18459 = state_18425__$1;(statearr_18433_18459[1] = 8);
} else
{var statearr_18434_18460 = state_18425__$1;(statearr_18434_18460[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18426 === 6))
{var inst_18390 = (state_18425[7]);var inst_18411 = (inst_18390 > 0);var state_18425__$1 = state_18425;if(cljs.core.truth_(inst_18411))
{var statearr_18436_18461 = state_18425__$1;(statearr_18436_18461[1] = 12);
} else
{var statearr_18437_18462 = state_18425__$1;(statearr_18437_18462[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18426 === 7))
{var inst_18421 = (state_18425[2]);var state_18425__$1 = state_18425;var statearr_18438_18463 = state_18425__$1;(statearr_18438_18463[2] = inst_18421);
(statearr_18438_18463[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18426 === 8))
{var inst_18389 = (state_18425[8]);var inst_18398 = (state_18425[10]);var tmp18435 = inst_18389;var inst_18389__$1 = tmp18435;var inst_18390 = inst_18398;var state_18425__$1 = (function (){var statearr_18439 = state_18425;(statearr_18439[7] = inst_18390);
(statearr_18439[8] = inst_18389__$1);
return statearr_18439;
})();var statearr_18440_18464 = state_18425__$1;(statearr_18440_18464[2] = null);
(statearr_18440_18464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18426 === 9))
{var inst_18389 = (state_18425[8]);var inst_18403 = cljs.core.vec.call(null,inst_18389);var state_18425__$1 = state_18425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18425__$1,11,out,inst_18403);
} else
{if((state_val_18426 === 10))
{var inst_18409 = (state_18425[2]);var state_18425__$1 = state_18425;var statearr_18441_18465 = state_18425__$1;(statearr_18441_18465[2] = inst_18409);
(statearr_18441_18465[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18426 === 11))
{var inst_18405 = (state_18425[2]);var inst_18406 = (new Array(n));var inst_18389 = inst_18406;var inst_18390 = 0;var state_18425__$1 = (function (){var statearr_18442 = state_18425;(statearr_18442[7] = inst_18390);
(statearr_18442[12] = inst_18405);
(statearr_18442[8] = inst_18389);
return statearr_18442;
})();var statearr_18443_18466 = state_18425__$1;(statearr_18443_18466[2] = null);
(statearr_18443_18466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18426 === 12))
{var inst_18389 = (state_18425[8]);var inst_18413 = cljs.core.vec.call(null,inst_18389);var state_18425__$1 = state_18425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18425__$1,15,out,inst_18413);
} else
{if((state_val_18426 === 13))
{var state_18425__$1 = state_18425;var statearr_18444_18467 = state_18425__$1;(statearr_18444_18467[2] = null);
(statearr_18444_18467[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18426 === 14))
{var inst_18418 = (state_18425[2]);var inst_18419 = cljs.core.async.close_BANG_.call(null,out);var state_18425__$1 = (function (){var statearr_18445 = state_18425;(statearr_18445[13] = inst_18418);
return statearr_18445;
})();var statearr_18446_18468 = state_18425__$1;(statearr_18446_18468[2] = inst_18419);
(statearr_18446_18468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18426 === 15))
{var inst_18415 = (state_18425[2]);var state_18425__$1 = state_18425;var statearr_18447_18469 = state_18425__$1;(statearr_18447_18469[2] = inst_18415);
(statearr_18447_18469[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_18451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18451[0] = state_machine__6567__auto__);
(statearr_18451[1] = 1);
return statearr_18451;
});
var state_machine__6567__auto____1 = (function (state_18425){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_18425);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e18452){if((e18452 instanceof Object))
{var ex__6570__auto__ = e18452;var statearr_18453_18470 = state_18425;(statearr_18453_18470[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18425);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18471 = state_18425;
state_18425 = G__18471;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_18425){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_18425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_18454 = f__6637__auto__.call(null);(statearr_18454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___18455);
return statearr_18454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6636__auto___18614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6637__auto__ = (function (){var switch__6566__auto__ = (function (state_18584){var state_val_18585 = (state_18584[1]);if((state_val_18585 === 1))
{var inst_18543 = [];var inst_18544 = inst_18543;var inst_18545 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18584__$1 = (function (){var statearr_18586 = state_18584;(statearr_18586[7] = inst_18545);
(statearr_18586[8] = inst_18544);
return statearr_18586;
})();var statearr_18587_18615 = state_18584__$1;(statearr_18587_18615[2] = null);
(statearr_18587_18615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 2))
{var state_18584__$1 = state_18584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18584__$1,4,ch);
} else
{if((state_val_18585 === 3))
{var inst_18582 = (state_18584[2]);var state_18584__$1 = state_18584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18584__$1,inst_18582);
} else
{if((state_val_18585 === 4))
{var inst_18548 = (state_18584[9]);var inst_18548__$1 = (state_18584[2]);var inst_18549 = (inst_18548__$1 == null);var inst_18550 = cljs.core.not.call(null,inst_18549);var state_18584__$1 = (function (){var statearr_18588 = state_18584;(statearr_18588[9] = inst_18548__$1);
return statearr_18588;
})();if(inst_18550)
{var statearr_18589_18616 = state_18584__$1;(statearr_18589_18616[1] = 5);
} else
{var statearr_18590_18617 = state_18584__$1;(statearr_18590_18617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 5))
{var inst_18545 = (state_18584[7]);var inst_18548 = (state_18584[9]);var inst_18552 = (state_18584[10]);var inst_18552__$1 = f.call(null,inst_18548);var inst_18553 = cljs.core._EQ_.call(null,inst_18552__$1,inst_18545);var inst_18554 = cljs.core.keyword_identical_QMARK_.call(null,inst_18545,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18555 = (inst_18553) || (inst_18554);var state_18584__$1 = (function (){var statearr_18591 = state_18584;(statearr_18591[10] = inst_18552__$1);
return statearr_18591;
})();if(cljs.core.truth_(inst_18555))
{var statearr_18592_18618 = state_18584__$1;(statearr_18592_18618[1] = 8);
} else
{var statearr_18593_18619 = state_18584__$1;(statearr_18593_18619[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 6))
{var inst_18544 = (state_18584[8]);var inst_18569 = inst_18544.length;var inst_18570 = (inst_18569 > 0);var state_18584__$1 = state_18584;if(cljs.core.truth_(inst_18570))
{var statearr_18595_18620 = state_18584__$1;(statearr_18595_18620[1] = 12);
} else
{var statearr_18596_18621 = state_18584__$1;(statearr_18596_18621[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 7))
{var inst_18580 = (state_18584[2]);var state_18584__$1 = state_18584;var statearr_18597_18622 = state_18584__$1;(statearr_18597_18622[2] = inst_18580);
(statearr_18597_18622[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 8))
{var inst_18544 = (state_18584[8]);var inst_18548 = (state_18584[9]);var inst_18552 = (state_18584[10]);var inst_18557 = inst_18544.push(inst_18548);var tmp18594 = inst_18544;var inst_18544__$1 = tmp18594;var inst_18545 = inst_18552;var state_18584__$1 = (function (){var statearr_18598 = state_18584;(statearr_18598[7] = inst_18545);
(statearr_18598[8] = inst_18544__$1);
(statearr_18598[11] = inst_18557);
return statearr_18598;
})();var statearr_18599_18623 = state_18584__$1;(statearr_18599_18623[2] = null);
(statearr_18599_18623[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 9))
{var inst_18544 = (state_18584[8]);var inst_18560 = cljs.core.vec.call(null,inst_18544);var state_18584__$1 = state_18584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18584__$1,11,out,inst_18560);
} else
{if((state_val_18585 === 10))
{var inst_18567 = (state_18584[2]);var state_18584__$1 = state_18584;var statearr_18600_18624 = state_18584__$1;(statearr_18600_18624[2] = inst_18567);
(statearr_18600_18624[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 11))
{var inst_18548 = (state_18584[9]);var inst_18552 = (state_18584[10]);var inst_18562 = (state_18584[2]);var inst_18563 = [];var inst_18564 = inst_18563.push(inst_18548);var inst_18544 = inst_18563;var inst_18545 = inst_18552;var state_18584__$1 = (function (){var statearr_18601 = state_18584;(statearr_18601[12] = inst_18562);
(statearr_18601[13] = inst_18564);
(statearr_18601[7] = inst_18545);
(statearr_18601[8] = inst_18544);
return statearr_18601;
})();var statearr_18602_18625 = state_18584__$1;(statearr_18602_18625[2] = null);
(statearr_18602_18625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 12))
{var inst_18544 = (state_18584[8]);var inst_18572 = cljs.core.vec.call(null,inst_18544);var state_18584__$1 = state_18584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18584__$1,15,out,inst_18572);
} else
{if((state_val_18585 === 13))
{var state_18584__$1 = state_18584;var statearr_18603_18626 = state_18584__$1;(statearr_18603_18626[2] = null);
(statearr_18603_18626[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 14))
{var inst_18577 = (state_18584[2]);var inst_18578 = cljs.core.async.close_BANG_.call(null,out);var state_18584__$1 = (function (){var statearr_18604 = state_18584;(statearr_18604[14] = inst_18577);
return statearr_18604;
})();var statearr_18605_18627 = state_18584__$1;(statearr_18605_18627[2] = inst_18578);
(statearr_18605_18627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 15))
{var inst_18574 = (state_18584[2]);var state_18584__$1 = state_18584;var statearr_18606_18628 = state_18584__$1;(statearr_18606_18628[2] = inst_18574);
(statearr_18606_18628[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6566__auto__){
return (function() {
var state_machine__6567__auto__ = null;
var state_machine__6567__auto____0 = (function (){var statearr_18610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18610[0] = state_machine__6567__auto__);
(statearr_18610[1] = 1);
return statearr_18610;
});
var state_machine__6567__auto____1 = (function (state_18584){while(true){
var ret_value__6568__auto__ = (function (){try{while(true){
var result__6569__auto__ = switch__6566__auto__.call(null,state_18584);if(cljs.core.keyword_identical_QMARK_.call(null,result__6569__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6569__auto__;
}
break;
}
}catch (e18611){if((e18611 instanceof Object))
{var ex__6570__auto__ = e18611;var statearr_18612_18629 = state_18584;(statearr_18612_18629[5] = ex__6570__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6568__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18630 = state_18584;
state_18584 = G__18630;
continue;
}
} else
{return ret_value__6568__auto__;
}
break;
}
});
state_machine__6567__auto__ = function(state_18584){
switch(arguments.length){
case 0:
return state_machine__6567__auto____0.call(this);
case 1:
return state_machine__6567__auto____1.call(this,state_18584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6567__auto____0;
state_machine__6567__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6567__auto____1;
return state_machine__6567__auto__;
})()
;})(switch__6566__auto__))
})();var state__6638__auto__ = (function (){var statearr_18613 = f__6637__auto__.call(null);(statearr_18613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6636__auto___18614);
return statearr_18613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6638__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map