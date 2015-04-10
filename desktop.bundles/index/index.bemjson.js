({
    block : 'page',
    title : 'BEMHTML playground',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [
        { elem : 'js', url : '_index.js' },
        { elem : 'js', url : 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.1.9/ace.js' }
    ],
    mods : { theme : 'islands' },
    content : {
        block: 'demo',
        content: [
            {
                elem: 'top',
                content: [
                    {
                        block: 'editor',
                        mix: [{ block: 'demo', elem: 'bemjson' }],
                        code: [
                            "({",
                            "    block: 'button',",
                            "    text: 'button'",
                            "});"
                        ].join('\n')
                    },
                    {
                        block: 'editor',
                        mix: [{ block: 'demo', elem: 'bemhtml' }],
                        code: [
                            "block('button')(",
                            "    tag()('button'),",
                            "    content()({ elem: 'text', content: this.ctx.text })",
                            ");"
                        ].join('\n')
                    }
                ]
            },
            {
                elem: 'bottom',
                content: {
                    block: 'editor',
                    js: {
                        readOnly: true,
                        showInvisibles: true,
                        mode: 'ace/mode/html'
                    },
                    mix: [{ block: 'demo', elem: 'html' }],
                    code: ''
                }
            }
        ]
    }
})
