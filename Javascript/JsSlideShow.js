function showImg(n) {
    "use strict";
    
    var i;
    var x =document.getElementsByClassName("Slides");
    
    if (n > x.length){
        slideIndex=1
    };
    
    if (n < 1){
        slideIndex = x.length
    };
    
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none"; 
    }
    
    x[slideIndex-1].style.display = "block";
    x[sLideIndex+1].style.display = "block";
}

var slideIndex = 1;
showImg(slideIndex);

//**************Navigation arrows
function arrows(n) {
    showImg(slideIndex += n);
}


//***********Add up cost of comics
function checkTotal() {
    document.listForm.total.value = '';
    var sum = parseFloat(0);
		
    for (i=0;i<document.listForm.choice.length;i++) {
		  if (document.listForm.choice[i].checked) {
		  	sum = sum + parseFloat(document.listForm.choice[i].value);
		  }
		}
		document.listForm.total.value = parseFloat(sum).toFixed(2);
}

//**************Googlemap api
function createMap() {
    var mapOptions = {
        center: new google.maps.LatLng(37.402, -122.078),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("Gmaps"), mapOptions);
}

