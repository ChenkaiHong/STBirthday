/**
 * Created by avark00 on 12/11/14.
 */
 var rearrange = function(){
    var sideTabs = asJq('#sideTabs');
    if ( asJq(window).width() < 770 )
    {
        asJq('body').prepend(sideTabs);
    }
    if ( asJq(window).width() >= 770) {
        asJq('#sidetabsAnchor').prepend(sideTabs);
    }
}
asJq(document).ready(function () {
    asJq(window).load(function () {rearrange();});
    asJq(window).resize(function(){
        rearrange();
    });
    asJq("#saveToWallet,#saveToWalletMobile").click(function () {
        asJq(".walletsClosed").hide();
        if (asJq(window).width() > 770) {
            asJq("#walletsTab").css("right", "-=128");
            asJq(".walletsOpen").show();
            asJq("#walletsTab").animate({
                right: "+=128"
            });
        } else {
            asJq(".walletsOpen").show();
            var walletHeight = asJq("#walletsTab").height();
            var walletTravel = (walletHeight - 45);
            var moveUp = ("+=" + walletTravel);
            var moveDown = ("-=" + walletTravel);
            asJq("#walletsTab").css("bottom", walletTravel);
            asJq("#walletsTab").animate({
                bottom: moveDown
            });
        }
    });
    asJq("#closeWallet,#closeWalletMobile").click(function () {
        if (asJq(window).width() > 770) {
            asJq("#walletsTab").animate({
                right: "-=128"
            }, {
                complete: function () {
                    asJq(".walletsClosed").show();
                    asJq(".walletsOpen").hide();
                    asJq("#walletsTab").css("right", "+=128");
                }
            });
        } else {
            var walletHeight = asJq("#walletsTab").height();
            var walletTravel = (walletHeight - 45);
            var moveUp = ("+=" + walletTravel);
            var moveDown = ("-=" + walletTravel);
            asJq("#walletsTab").animate({
                bottom: moveUp
            }, {
                complete: function () {
                    asJq(".walletsClosed").show();
                    asJq(".walletsOpen").hide();
                    asJq("#walletsTab").css("bottom", moveDown);
                }
            });
        }
    });
    asJq(".stButton").click(function () {
        if (asJq(window).width() > 770) {
            asJq("#walletsTab").animate({
                right: "-=128"
            }, {
                complete: function () {
                    asJq(".walletsClosed").show();
                    asJq(".walletsOpen").hide();
                    asJq("#walletsTab").css("right", "+=128");
                }
            });
        } else {
            var walletHeight = asJq("#walletsTab").height();
            var walletTravel = (walletHeight - 45);
            var moveUp = ("+=" + walletTravel);
            var moveDown = ("-=" + walletTravel);
            asJq("#walletsTab").animate({
                bottom: moveUp
            }, {
                complete: function () {
                    asJq(".walletsClosed").hide();
                    asJq(".walletsOpen").hide();
                    asJq("#walletsTab").css("bottom", moveDown);
                    asJq(".walletsSuccess").show();
                }
            });
        }
    });
});