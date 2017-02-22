var pdfbuttontitle = 'Save web page to PDF free with www.web2pdfconvert.com';

if (typeof (pdfbuttonlabel) == 'undefined') {
  pdfbuttonlabel = 'Save page as PDF';
}

if (typeof (pdfbuttonstyle) == 'undefined') {
  pdfbuttonstyle = 'button';
}

var Web2PDFStyles =
  '.save_as_pdf {display:inline-block; width:128px;	height:26px;	background: url(http://www.web2pdfconvert.com/images/save-as-pdf-blank.gif) no-repeat; border-style:none 0px;text-align:center;}' +
  '.save_as_pdf a  {	display:inline-block; 	width:115px;	height:20px; line-height:1.4em;   padding-left:17px;    padding-top:6px;	color:#000000;	text-decoration:none;	font-size:11px;	font-weight:bold;	font-family:Arial, Helvetica, sans-serif;	}' +
  '.save_as_pdf a:hover  {	text-decoration:none; color:#000000;	}' +
  '.save_as_pdf a:link  {	text-decoration:none; color:#000000;	}';

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
