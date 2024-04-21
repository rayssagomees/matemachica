const brandName = `Matemachica`;
const copyright = `Todos os direitos reservados.`;

addFavicon('/public/cute-hamster.png');
addThemeColor('#d64d76');

// favicon -------------------------------------------------------------------->
function addFavicon(url) {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}

// theme color -------------------------------------------------------------------->
function addThemeColor(color) {
    var metaTag = document.createElement('meta');
    metaTag.name = 'theme-color';
    metaTag.content = color;
    document.getElementsByTagName('head')[0].appendChild(metaTag);
}

// index style -------------------------------------------------------------------->
function addCSSLink(href) {
    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = href;
    document.head.appendChild(cssLink);
}

document.addEventListener("DOMContentLoaded", function() {
    addCSSLink('/src/style/index.css');
});

// math expressions -------------------------------------------------------------------->
function loadMathJax() {
    var mathJaxScript = document.createElement('script');
    mathJaxScript.id = 'MathJax-script';
    mathJaxScript.async = true;
    mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    document.head.appendChild(mathJaxScript);
}

document.addEventListener("DOMContentLoaded", function() {
    loadMathJax();
});

// page components -------------------------------------------------------------------->
function addScriptsToBody(scripts) {
    for (var i = 0; i < scripts.length; i++) {
        var scriptElement = document.createElement('script');
        scriptElement.src = scripts[i];
        document.body.appendChild(scriptElement);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    addScriptsToBody([
        'src/components/header.js',
        'src/components/footer.js'
    ]);
});
