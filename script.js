// find the last code block displayed
var codetextBlock = document.querySelectorAll('code[class^="CodeSnippet"]');
var lastcodetextBlock = codetextBlock[codetextBlock.length - 1];

// get the code from the block in text form
// and remove any mermaid text at start
var codeText = lastcodetextBlock.innerText.replace("mermaid", "");
console.dirxml(codeText);

// base64 encode the text so we can use in url to display diagram
var b64Text = btoa(codeText);
var mainUrl = "https://mermaid.ink/img/"
var fullUrl = mainUrl + b64Text;
console.log(fullUrl);

// open new window to show diagram
window.open(fullUrl, '_blank');

