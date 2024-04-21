const brandName = `Matemachica`;
const copyright = `Todos os direitos reservados.`;

addFavicon('/public/cute-hamster.png');

// favicon
function addFavicon(url) {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}