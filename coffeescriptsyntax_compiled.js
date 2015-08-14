if(!lt.util.load.provided_QMARK_('lt.plugins.coffee-script')) {
goog.provide('lt.plugins.coffee_script');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.coffee_script.hello = (function hello(){return cljs.core.println.call(null,"hello");
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.coffee-script","hello","lt.plugins.coffee-script/hello",2655332442),new cljs.core.Keyword(null,"desc","desc",1016984067),"huaoguo: hello",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.coffee_script.hello], null));
}

//# sourceMappingURL=coffeescriptsyntax_compiled.js.map