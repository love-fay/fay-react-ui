export const ieVersion = () => {
    let userAgent = window.navigator.userAgent;
    let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    let isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    let isIEll = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        let reIE = new RegExp("MSIE(\\d+\\.\\d+);");
        reIE.test(userAgent);
        let fIEVersion = parseFloat(RegExp["$1"]);
        switch (fIEVersion) {
            case 7:
            case 8:
            case 9:
            case 10:
                return fIEVersion;
            default:
                return 6;
        }
    }else if(isEdge){
        return 'edge';
    }else  if(isIEll){
        return 11;
    }else{
        return -1; //不是ie浏览器
    }
};