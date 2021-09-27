//AUTOCONTRASTE
function reply_click(clicked_id){
    var className = $("body").attr("class")
    if(className != clicked_id){
    $("body").removeClass();
    }
    $("body" ).toggleClass(clicked_id);
}

//TAMANHO DA FONTE
function fonte(tam_fonte){
	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));
	var body = $("body");
	const fonteNormal = parseInt(body.css('font-size'));
	if (tam_fonte == 'a' && fonte<20) {
		fonte = fonte+2;
	}
	if (tam_fonte == 'd' && fonte>=16){
		fonte = fonte-2;
	}
	if (tam_fonte == 'n'){
		fonte = fonteNormal;
	}
	elemento.css("fontSize", fonte);
}

//ZOOM
var x = 0;
function zoom(zoom_page){
	var elemento = $(".acessibilidade");
	var zoom = parseInt(elemento.css('zoom'));
	var body = $("body");
	const zoomNormal = parseInt(body.css('zoom'));
	if (zoom_page == 'g') {
        if(x<3){
        x++;
		zoom = 2*zoom;
        }
	}
	if (zoom_page == 'h'){
        if(x > 0){
		zoom = zoom/2;
        x--;
        }
	}
	if (zoom_page == 'n'){
		zoom = zoomNormal;
	}
	elemento.css("zoom", zoom);
}