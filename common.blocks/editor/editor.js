modules.define('editor', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('editor', {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    var editor = ace.edit(this.elem('textarea').get(0));
                    editor.setTheme('ace/theme/solarized_light');
                    editor.setShowInvisibles(this.params.showInvisibles);
                    editor.setReadOnly(this.params.readOnly);
                    editor.setFontSize(this.params.fontSize);
                    editor.getSession().setMode('ace/mode/javascript');
                }
            }
        },
        getDefaultParams : function() {
            return {
                fontSize: '14px'
            };
        }
    }, {

    }));

});
