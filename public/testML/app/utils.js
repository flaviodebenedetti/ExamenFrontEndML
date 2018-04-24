//formatea con separador de mil y decimales
function currencyFormatInt(amount){
	var valor = amount.toFixed(2);
	valor = addSeparatorsNF(valor, '.', ',', '.');
  	return valor;
}

function addSeparatorsNF(nStr, inD, outD, sep){
	nStr += '';
	var dpos = nStr.indexOf(inD);
	var nStrEnd = '';
	if (dpos != -1) {
		nStrEnd = outD + nStr.substring(dpos + 1, nStr.length);
		nStr = nStr.substring(0, dpos);
	}
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(nStr)) {
		nStr = nStr.replace(rgx, '$1' + sep + '$2');
	}
	return nStr + nStrEnd;
}

function showSpinner(){
	$("div.loader").css("display", "table");
	$("p.loaderText").html("Cargando...");
	$("body").css("overflow", "hidden");
}

function hideSpinner(){
	$("div.loader").css("display", "none");
	$("body").css("overflow", "");
}