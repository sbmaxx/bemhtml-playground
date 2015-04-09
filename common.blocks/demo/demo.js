modules.define('demo', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('demo', {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    console.log('hello from demo')
                }
            }
        }
    }, {

    }));

});
