/**
 * Created by avark00 on 11/5/14.
 * modified by tcart00 on 1/7/15.
 */



asJq(document).ready(function () {

    var cardNumber = asJq('#barcodeData').text().trim();

    var barType = asJq('#barcodeFormat').text().trim();

    if (barType == "CA128")

        barType = "code128";

    barType = barType.toLowerCase();

    if (cardNumber.length && barType.length) {

        var barOutput = "bmp";

        var barWidth = 2;

        if (asJq("#barWidth").length) {

            barWidth = asJq('#barWidth').text(); // allows template to define barcode pixel width if needed

        }

        var barHeight = 70;

        if (asJq.browser.msie) {

            if (asJq.browser.version < 10) {

                barOutput = "css";

                barWidth = 1;

                barHeight = 60;

            }

        }

        if (asJq("#barCode").length) {

            if (barType == "code128") {

                // C128 Barcode generator

                asJq("#barCode").barcode(cardNumber, barType, { barWidth: barWidth, barHeight: barHeight, fontSize: 0, output: barOutput });

            } else if (barType == "qrcode") {

                // QR code generator

                asJq("#barCode").empty().qrcode({ width: 100, height: 100, text: cardNumber });

            } else if (barType == "pdf417") {
                var barcode = new Barcode(Barcode.PDF417, cardNumber, { errorCorrectionLevel: 5 });
                var content = asJq("<img />").attr('src', barcode.createImageData(5))
                    .attr('alt', 'PDF417 Barcode')
                    .attr('title', barcode.contents);

                asJq("#barCode").replaceWith(content);
            }
        }

    }

});
// Script to show or hide various elements in page based on query parameter

(function () {
    var gw;
    var gs;
    var gcm;
    var print;
    var focusredeem;
    var reminderbanner;
    var url = window.location.href.toLowerCase();
    var str = url.split('&');
    for (i = 0; i < str.length; i++) {
        if ((str[i].indexOf('gw') != -1) && (i > 0)) {  // any item in the array has gw and not the first in the array
            gw = str[i].substring(3);
        }
        if ((str[i].indexOf('gs') != -1) && (i > 0)) {  // any item in the array has gs and not the first in the array
            gs = str[i].substring(3);
        }
        if ((str[i].indexOf('gcm') != -1) && (i > 0)) {  // any item in the array has gcm and not the first in the array
            gcm = str[i].substring(4);
        }
        if ((str[i].indexOf('print') != -1) && (i > 0)) {  // any item in the array has print and not the first in the array
            print = str[i].substring(6);
        }
        if ((str[i].indexOf('focusredeem') != -1) && (i > 0)) {  // any item in the array has focusRedeem and not the first in the array
            focusredeem = str[i].substring(12);
        }
        if ((str[i].indexOf('reminderbanner') != -1) && (i > 0)) {  // any item in the array has reminderbanner and not the first in the array
            reminderbanner = str[i].substring(15);
        }
    }
    if (gw == 'n') {
        document.write('<style type="text/css">#trackImg,.gowallet-callout-container{display:none !important;}</style>');
    }
    if (gs == 'n') {
        document.write('<style type="text/css">#bhn_ubutton,#ie_bhn_ubutton,.mSaveBtn{display:none !important;}</style>');
    }
    if (gcm == 'n') {
        asJq( ".gcmFooter,.mGCMFooter" ).empty().css("margin-top","30px");
    }
    if (print == 'n') {
        document.write('<style type="text/css">.boilerplate #header-container .printGiftCard,.boilerplate #main #mPrint,.boilerplate .printBtn,#header-top img#printPage,#header-top img#printPageMobile,a.vgc-button,#printbutton,a#print,.remove-print .text a, .dPrint-remove-print a,.printEgift,#print-button1,.dPrint,#walletPrint{display:none !important;}</style>');
    }
    if (focusredeem == 'y') {
        if (document.getElementById('focusRedeem')) {
            var el = document.getElementById('focusRedeem');
            el.scrollIntoView(true);
        } else if (document.getElementById('barCode')) {
            var el = document.getElementById('barCode');
            el.scrollIntoView(true);
        }
    }
    if (reminderbanner == 'n') {

        asJq('meta[name="apple-itunes-app"]').remove();

        asJq('meta[name="google-play-app"]').remove();

    }
}());


var _prum = [['id', '53ebca0cabe53d222a66f4eb'],
    ['mark', 'firstbyte', (new Date()).getTime()]];
(function() {
	if (asJq('#isUSTenant').length && asJq('#isUSTenant').text().trim()=="true"){
		 var s = document.getElementsByTagName('script')[0]
	        , p = document.createElement('script');
	    p.async = 'async';
	    p.src = '//rum-static.pingdom.net/prum.min.js';
	    s.parentNode.insertBefore(p, s);
	}
})();