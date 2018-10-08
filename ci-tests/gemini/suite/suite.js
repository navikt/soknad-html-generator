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
        .setUrl('/test/getHtml/enkel')
        .setCaptureElements('body')
        .capture('generert-enkel-html')
        .setUrl('/test/getHtml/komplett')
        .setCaptureElements('body')
        .capture('generert-komplett-html')
        .setUrl('/test/getHtml/ekstrem')
        .setCaptureElements('body')
        .capture('generert-ekstrem-html')
});
