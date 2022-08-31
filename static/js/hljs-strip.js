// strips beginning and ending whitespace
document.querySelectorAll("pre code").forEach(function (element, i) {
    // console.log(element.childNodes);
    let txt = element.childNodes[0].textContent.replace(/^\s*/, "");
    element.childNodes[0].textContent = txt;

    let end = element.childNodes.length - 1;
    txt = element.childNodes[end].textContent.replace(/\s*$/, "");
    element.childNodes[end].textContent = txt;
});