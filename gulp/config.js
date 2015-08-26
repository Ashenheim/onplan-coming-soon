/* ====================================
    Configuration file
==================================== */
var nib = require('nib');

var $p = {
    bower: "./bower_components/",
    build: {
        index : "build/",
        style : "build/assets/css/",
        js    : "build/assets/js/",
    },
    source: {
        style  : "_source/stylus/",
        js     : "_source/js/",
    }
}


module.exports = {
    /* ------------------------------
        BrowserSync
    ------------------------------ */
    html: {
        src: [
            '*.html',
            '**/*.html'
        ]
    },
    /* ------------------------------
        Stylus
    ------------------------------ */
    stylus: {
        src: [ $p.source.style + 'style.styl'],
        dest: $p.build.style,
        watch: [
            $p.source.style + '*.styl',
            $p.source.style + '**/*.styl'
        ],
        settings: {
            use: [ nib() ]
        }
    },
    /* ------------------------------
        Deploy
    ------------------------------ */
    deploy: {
        src: $p.build.index + '**/*'
    },
    /* ------------------------------
        BrowserSync
    ------------------------------ */
    browsersync: {
        server: {
            baseDir: $p.build.index
        },
        host: "localhost",
        online: true,
        open: false,
        notify: {
            styles: [
                'color: rgb(255, 255, 255)',
                'position: fixed',
                'z-index: 999999',
                'bottom: 0px',
                'left: 0px',
                'font-size: 1em',
                'background: rgba(0, 0, 0, 0.8)',
                'font-family: arial, sans-serif',
                'padding: 10px',
                'box-shadow: 0 0 5px rgba(0,0,0,.3)'
            ]
        }
    }
}
