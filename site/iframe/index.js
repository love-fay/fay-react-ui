export const createDemoIframe = (src) => {
    let iframe = document.createElement('iframe');
    iframe.style.border = '0';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = src;
    return iframe;
};

export const appendIframeById = (src, id) => {
    const iframe = createDemoIframe(src);
    document.getElementById(id).appendChild(iframe);
    window.setInterval(function(){reinitIframe(iframe)}, 200);
};

function reinitIframe(iframe){
    let bHeight = iframe.contentWindow.document.getElementById('app').scrollHeight;
    let h1 = outDomHeight(iframe, 'ant-select-tree-dropdown');
    let h2 = outDomHeight(iframe, 'ant-cascader-menus')+20;
    let hh = Math.max(h1, h2);
    iframe.height = bHeight + hh;
}

function outDomHeight(iframe, className){
    let a = iframe.contentWindow.document.body.getElementsByClassName(className);
    let hh = 0;
    for(let b of a){
        hh += b.scrollHeight;
    }
    return hh;
}