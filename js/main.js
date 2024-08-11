  
  //toast for web
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  //toast for mobile
  function copyToClipboard1(element) {
    var $temp1 = $("<input>");
    $("body").append($temp1);
    $temp1.val($(element).text()).select();
    document.execCommand("copy");
    $temp1.remove();

    var y = document.getElementById("snackbar1");
    y.className = "show1";
    setTimeout(function(){ y.className = y.className.replace("show1", ""); }, 3000);
  }

  //onlick for copy button
var coll = document.getElementsByClassName("redeem1");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//card number for web 
if ($("#cardNumber").length) {
  var cardNumber = $('#cardNumber').text();

}


//card number for mobile
if ($("#mcardNumber").length) {
  var cardNum = $('#mcardNumber').text();

}

$(document).ready(function () {
//UTM Link
var url = window.location.href;
var str = url.split(/[?&]/);
for (var i = 0; i < str.length; i++)
{
  if ((str[i].indexOf('eid') != -1) && (i > 0))
  {
      var eGiftId = str[i].substring(4);
  }
  if ((str[i].indexOf('tid') != -1) && (i > 0))
  {
      var tenantId = str[i].substring(4);
  }
}
var productName = $('#productNameName').text();
var hostUrl = "https://www.giftcards.com/?utm_source=activation_spot&utm_medium=";
var gcurl= hostUrl+tenantId+"&utm_campaign="+productName;
var finalLink = gcurl.replace(/\s/g, "_");
$('.footer a').attr('href', finalLink);
 });
