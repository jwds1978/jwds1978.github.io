function savePageAsPDF() {
  var a = "https://www.web2pdfconvert.com/engine?curl=" + escape(document.location.href) + "&title=" + title + "&ref=imagebutton";

  window.open(a)
}

function Web2PDFAddCss(a) {
  var b = document.getElementsByTagName("head")[0],
    c = document.createElement("style");

  c.setAttribute("type", "text/css"), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a)), b.appendChild(c)
}

"undefined" == typeof pdfbuttonlabel && (pdfbuttonlabel = "Save Web Page as PDF"), "undefined" == typeof pdfbuttonstyle && (pdfbuttonstyle = "button"), "undefined" == typeof pdfbuttontitle && (pdfbuttontitle = "Save Web Page as PDF");

var Web2PDFStyles = ".save_as_pdf { background: url(https://www.web2pdfconvert.com/images/save-as-pdf-blank.gif) no-repeat; border-style: none 0px; display: inline-block; height: 26px; text-align: center; width: 128px; } .save_as_pdf a { color: #000000; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: bold; height: 20px; line-height: 1.4em; padding-left: 17px; padding-top: 6px; text-decoration: none; width: 115px; } .save_as_pdf a:hover { color: #000000; text-decoration: none; } .save_as_pdf a:link { color: #000000; text-decoration: none; }";

Web2PDFAddCss(Web2PDFStyles);

var Web2PDFJSCode = "";

Web2PDFJSCode += "link" == pdfbuttonstyle ? '<a href="javascript:savePageAsPDF()" target="_blank" title="' + pdfbuttontitle + '">' + pdfbuttonlabel + "</a>" : "custimg" == pdfbuttonstyle ? '<a href="javascript:savePageAsPDF()" target="_blank" title="' + pdfbuttontitle + '"><img alt="' + pdfbuttontitle + '" src="' + custimg + '" style="border: 0px; vertical-align: middle;" /></a>' : '<span class="save_as_pdf"><a href="javascript:savePageAsPDF()" target="_blank" title="' + pdfbuttontitle + '">' + pdfbuttonlabel + "</a></span>";

var newcontent = document.createElement("span");

newcontent.id = "syndicated-content", newcontent.innerHTML = Web2PDFJSCode;

var scr = document.getElementById("Web2PDF");

if (scr.parentNode.insertBefore(newcontent, scr), null == title) var title = escape(document.title);
