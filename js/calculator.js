$(document).ready(function(){
	
	var numberA = "";
    var numberB = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");

    $("#numbers > a").click(function(){
		numberA += $(this).text();
		totaldiv.text(numberA);
		testNumLength(numberA);
    });

    $("#operators > a").not("#equals").click(function(){
		operator = $(this).text();
		numberB = numberA;
		numberA = "";
		totaldiv.text("0");
    });

    $("#equals").click(function(){
		if (operator === "+"){
			numberA = (parseInt(numberA, 10) + parseInt(numberB,10)).toString(10);
		} else if (operator === "-"){
			numberA = (parseInt(numberB, 10) - parseInt(numberA,10)).toString(10);
		} else if (operator === "/"){
			numberA = (parseInt(numberB, 10) / parseInt(numberA,10)).toString(10);
		} else if (operator === "*"){
			numberA = (parseInt(numberB, 10) * parseInt(numberA,10)).toString(10);
		}
		totaldiv.text(numberA);
		testNumLength(numberA);
		numberA = "";
		numberB = "";
    });

});