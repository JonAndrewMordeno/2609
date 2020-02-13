function billingFunction() {
    var shipName = document.getElementById('shippingName').value;
    var shipZip = document.getElementById('shippingZip').value;
    
    if (document.getElementById('same').checked){
        document.getElementById('billingName').value = shipName;
      document.getElementById('billingZip').value = shipZip;
        }
    else
      document.getElementById('billingName').value = " ";
      document.getElementById('billingZip').value = " ";
  }