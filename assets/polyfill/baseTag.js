(function () {
    var pathname = window.location.pathname;
    var href = window.location.href;
    var base = (pathname === '' || pathname === '/') ? href : href.split(pathname)[0];
    document.getElementsByTagName("base")[0].setAttribute("href", base);
})();