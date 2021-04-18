var slideIndex1 = 1;
		showDivs1(slideIndex1);
		
		function plusDivs1(n) {
		  showDivs1(slideIndex1 += n);
		}
		var slideIndex2 = 1;
		showDivs2(slideIndex2);
		
		function plusDivs2(n) {
		  showDivs2(slideIndex2 += n);
		}
		var slideIndex3 = 1;
		showDivs3(slideIndex3);
		
		function plusDivs3(n) {
		  showDivs3(slideIndex3 += n);
		}




		
		function showDivs1(n) {
		  var i;
		  var x1 = document.getElementsByClassName("mySlides1");
		  if (n > x1.length) {slideIndex1 = 1}
		  if (n < 1) {slideIndex1 = x1.length}
		  for (i = 0; i < x1.length; i++) {
			 x1[i].style.display = "none";  
		  }
		  x1[slideIndex1-1].style.display = "block";  
		  
		}
		function showDivs3(n) {
		  var i;
		
		  var x3 = document.getElementsByClassName("mySlides3");
		  if (n > x3.length) {slideIndex3 = 1}
		  if (n < 1) {slideIndex3 = x3.length}
		  for (i = 0; i < x3.length; i++) {
			 x3[i].style.display = "none";  
		  }
		  x3[slideIndex3-1].style.display = "block";   
		  
		}
		function showDivs2(n) {
		  var i;
		  
		  var x2 = document.getElementsByClassName("mySlides2");
		  if (n > x2.length) {slideIndex2 = 1}
		  if (n < 1) {slideIndex2= x2.length}
		  for (i = 0; i < x2.length; i++) {
			 x2[i].style.display = "none";  
		  }
		  x2[slideIndex2-1].style.display = "block"; 
		  
		  
		}
	