if (typeof (pdfbuttonlabel) == 'undefined') {
  pdfbuttonlabel = 'Save Web Page as PDF';
}

if (typeof (pdfbuttonstyle) == 'undefined') {
  pdfbuttonstyle = 'button';
}

if (typeof (pdfbuttontitle) == 'undefined') {
  pdfbuttontitle = 'Save Web Page as PDF';
}

var Web2PDFStyles =
  '.save_as_pdf { background: url(https://www.web2pdfconvert.com/images/save-as-pdf-blank.gif) no-repeat; border-style: none 0px; display: inline-block; height: 26px; text-align: center; width: 128px; }' +
  ' .save_as_pdf a { color: #000000; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: bold; height: 20px; line-height: 1.4em; padding-left: 17px; padding-top: 6px; text-decoration: none; width: 115px; }' +
  ' .save_as_pdf a:hover { color: #000000; text-decoration: none; }' +
  ' .save_as_pdf a:link { color: #000000; text-decoration: none; }';

Web2PDFAddCss(Web2PDFStyles);

var Web2PDFJSCode = "";

if (pdfbuttonstyle == 'link') {
  Web2PDFJSCode += '<a href="javascript:savePageAsPDF()" title="' + pdfbuttontitle + '">' + pdfbuttonlabel + '</a>';
} else if (pdfbuttonstyle == 'custimg') {
  Web2PDFJSCode += '<a href="javascript:savePageAsPDF()" title="' + pdfbuttontitle + '"><img align="absmiddle" alt="' + pdfbuttontitle + '" border="0" src="' + custimg + '" /></a>';
} else {
  Web2PDFJSCode += '<span class="save_as_pdf"><a href="javascript:savePageAsPDF()" title="' + pdfbuttontitle + '">' + pdfbuttonlabel + '</a></span>';
};

var newcontent = document.createElement('span');

newcontent.id = 'syndicated-content';
newcontent.innerHTML = Web2PDFJSCode;

var scr = document.getElementById('Web2PDF');

scr.parentNode.insertBefore(newcontent, scr);

if (title == null) {
  var title = escape(document.title);
}

function savePageAsPDF() {
  var pUrl = "http://www.web2pdfconvert.com/engine?curl=" + escape(document.location.href) + "&title=" + title + "&ref=imagebutton";

  window.open(pUrl);
}

function Web2PDFAddCss(css) {
  var head = document.getElementsByTagName('head')[0];
  var styleElement = document.createElement('style');

  styleElement.setAttribute('type', 'text/css');

  if (styleElement.styleSheet) { // IE
    styleElement.styleSheet.cssText = css;
  } else { // the world
    styleElement.appendChild(document.createTextNode(css));
  }

  head.appendChild(styleElement);
}
