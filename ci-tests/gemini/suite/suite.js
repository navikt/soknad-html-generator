function disableHover(window) {
    const styleEl = window.document.createElement('style');
    styleEl.setAttribute('id', 'disable-hover');
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;
    styleSheet.insertRule('* { pointer-events: none }', 0);
}

function enableHover(window) {
    window.document.querySelector('#disable-hover').outerHTML = '';
}

gemini.suite('soknad-html-generator', suite => {
    suite
        .setUrl('/api/generateHtml')
        .setCaptureElements('body')
        .capture('yolo')
});
