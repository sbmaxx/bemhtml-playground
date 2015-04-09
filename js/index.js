function BEMHTMLController($scope) {

    $scope.compiledHtml = function() {
        $scope.error = '';
        var json,
            BEMHTML;
        try {
            json = eval('(' + $scope.data.inputBemjson + ')');
        } catch (e) {
            return 'BEMJSON parse error:\n' + e.stack;
        }
        try {
            eval(window.compile($scope.data.inputMatchers));
            BEMHTML = this.BEMHTML;
        } catch (e) {
            console.log('failed compile');
            console.log(e.message);
            console.log(e.stack);
            return 'BEMHTML Compile error:\n' + e.message + '\n' + e.stack;
        }
        var res = '';
        try {
            res = BEMHTML.apply(json).replace(/>/g, '>\n').replace(/([^>\n])</g, '$1\n<');
        } catch (e) {
            return 'Execution error:\n' + e.stack;
        }
        return res;
    };

    $scope.loadSettings = function(settings) {
        $scope.data = angular.fromJson(settings);
        $scope.data.inputBemjson = $scope.data.inputBemjson || '{ block: \'button\', text: \'button\' }';
        $scope.data.inputMatchers = $scope.data.inputMatchers ||
            ["block('button')(",
                "    tag()('button'),",
                "    js()(true),",
                "    attrs()({role : 'button' }),",
                "    content()({ elem: 'text', content: this.ctx.text })",
            ");"].join('\n');
    };
    $scope.loadSettings(localStorage['bemhtml-config-settings'] || '{}');
    window.setInterval(function() {
        localStorage['bemhtml-config-settings'] = angular.toJson($scope.data);
    }, 1000);
}
