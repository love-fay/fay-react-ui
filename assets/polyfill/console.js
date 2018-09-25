(function () {
    var emptyFn = function () {};
    if(!window.console){window.console = {}}
    var consoleArr = ['log','info','warn','error','dir','time','timeEnd','trace','assert','Console','debug','dirxml','table','group','groupCollapsed','groupEnd','clear','count','markTimeline','profile','profileEnd','timeline','timelineEnd','timeStamp'];
    var consoleLen = consoleArr.length;
    while(consoleLen--){
        if(!window.console[consoleArr[consoleLen]]) window.console[consoleArr[consoleLen]] = emptyFn;
    }
})();