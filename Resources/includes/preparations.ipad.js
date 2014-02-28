var win = Ti.UI.currentWindow;

			win.orientationModes = [
			Ti.UI.PORTRAIT,
			Ti.UI.UPSIDE_PORTRAIT,
			Ti.UI.LANDSCAPE_LEFT,
			Ti.UI.LANDSCAPE_RIGHT
			];
	

//knapp tillbaka
var back = Ti.UI.createButton({
    title: "Tillbaka",
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
back.addEventListener("click", function() {
    Ti.UI.currentWindow.close();
});

Ti.UI.currentWindow.setLeftNavButton(back);

var view = Ti.UI.createScrollView({
	width:'550dp',
	height:'620dp',
	backgroundColor:'#fff7c5',



		
});
win.add(view);

var text = Ti.UI.createLabel({
	text:'Glasens form har stor betydelse för hur vinets doft och bubblor transporteras upp till ytan. I ett smalt glas får bubblorna längre hållbarhet och dofterna koncentreras kring en mindra yta. Nu föreslår vi inte att ni ska springa ut och köpa svindyra glas, men formen kan vara bra att tänka på. Låna av varandra eller gå ihop och köp glas ni kan använda vid framtida provningar. Ni behöver ett glas per vin och person (dela glas med varandra fungerar ju också).\n\nUnder fliken vinschema hittar ni ett "formulär" att använda under provningen. Skriv ut det eller gör ett eget om ni vill.\n\nDuka även med vattenglas, mycket vatten och spottkoppar. Inte för att vi förespråkar att bubblorna ska spottats ut, men det kan vara någon som kör bil eller är gravid.\n\nVanligt vitt bröd som hjälper till att neutralisera smaklökarna mellan de olika vinerna.\n\nKlä in bubbelflaskorna i folie eller liknande. Det är mer intressant att göra en blindprovning eftersom ni då inte påverkas av vad som står på flaskorna. Numrera flaskorna.\n\nBra belysning och pennor att anteckna med.\n\nSmaktest i form av något salt, sött, beskt, surt och kryddstarkt. Några förslag är parmesanost, chilikorv, citron, choklad, skalad räka, brända mandlar, vinbär, mögelost, sparris, pepparkaka, saltlakrits, färsk tomat, russin, oliver, prosciutto skinka.\n\nVill ni ha något mer matigt prova: Sushi med wasabi eller löjrom och Créme fraiche på surdegsbröd.',
	width:'500dp',
	font:{fontFamily:'Arial', fontSize:'15sp'},
	
	
});
view.add(text);
	