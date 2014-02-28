var win = Ti.UI.currentWindow;
			win.backgroundColor='#fff';
			win.navBarHidden = true;
			win.orientationModes = [
			Ti.UI.PORTRAIT
			];



var backBtn = Ti.UI.createButton({
		top:'20dp',
		left:'5dp',
		width:'20dp',
		height:'20dp',
		backgroundImage:'/images/back_arrow.png',
	});
	win.add(backBtn);
	
	backBtn.addEventListener('click', function(e){
		win.close();
		
	});



var view1 = Ti.UI.createScrollView({
	width:'280dp',
	backgroundColor:'#fff',
	
});

var headLabel1 = Ti.UI.createLabel({
	top:'20dp',
	left:0,
	text:'Använd dina sinnen.',
	color:'#8a1504',
	font:{fontFamily:'papyrus', fontSize:'20sp',}
	
});
view1.add(headLabel1);

var textLabel1 = Ti.UI.createLabel({
	top:'60dp',
	text:'Vid vinprovning gäller det att man öppnar sina sinnen och låter sig guidas av dessa fantastiska hjälpmedel som de flesta av oss är födda med. Man brukar säga att vi använder alla fem sinnen när vi provar vin. Tre av dem är kanske mer självklara än andra.\n\nSyn för att avgöra färg och utseende på vinet.\n\nLukt för att avgöra vinets doft.\n\nSmak för att avgöra vinets smak/arom.\n\nKänsel, kanske inte det första man tänker på, men det hör ihop med vår smakkänsla. Vi ”känner” på ett vin om det kanske är strävt, surt, bubbligt osv.\n\nTill slut har vi hörseln. Jodå, hörseln använder vi också. Genom kommunikationen som uppstår mellan er som provar.\n\nFölj provningen steg för steg och antecka era iakttagelser under tiden. Jämför sedan med våra beskrivningar av vinerna och försök gissa vilket vin som är vilket.',
	font:{fontFamily:'arial', fontSize:'12sp'},

});
view1.add(textLabel1);

var view2 = Ti.UI.createScrollView({
	width:'280dp',
	backgroundColor:'#fff',
	
	
});

var headLabel2 = Ti.UI.createLabel({
	top:'20dp',
	left:0,
	text:'Ögat/utseende',
	color:'#8a1504',
	font:{fontFamily:'papyrus', fontSize:'20sp',}
	
});
view2.add(headLabel2);

var textLabel2 = Ti.UI.createLabel({
	top:'60dp',
	text:'Genom att titta på vinet kan man dra många slutsatser. Först avgör man vilken färg vinet har. Nu provar ni endast vita bubbliga viner, men även dessa kan variera i färg. Är vinet ljusgult, nästan helt genomskinligt, flädergult eller guldigt? Har det gröna eller kanske röda undertoner. Försök sätt ord på vinets nyans.\n\nVinets färg kan vara en indikator på ålder och antyda på smak. Enligt regel är ett ljusare vitt vin yngre och ett mörkare äldre alltså en indikator på hur länge vinet har lagrats. Ett ljusare vin kan också antyda på ett kallare växtklimat. Bubbliga viner görs oftast där klimatet är lite kyligare eftersom det är gynnsamt för jäsningen. Nu finns det alltid undantag, men ljusare viner antyder oftast på att vinet är friskare och torrare i smaken. \n\nGenom att studera bubblorna kan du få en hint om hur vinet är framställt (se nedan för de vanligaste metoderna). Är bubblorna stora och flyktiga eller små med lång hållbarhet?\n\nLäskedrycksmetoden(kolsyremetoden): Kolsyra tillsätts ett stilla vin. Bubblorna är större, färre och försvinner förhållandevis snabbt. Billigare, enklare mousserande viner framställs genom denna metod.\n\nCharmatmetoden: Vinet blandas i en trycktank av rostfritt stål tillsammans med socker och jäst. När sockret omvandlats till alkohol och koldioxid, filtreras jästen bort och vinet tappas på flaska. Bubblorna är finare och mer hållbara än vid kolsyremetoden och jäsningens längd påverkar vinets kvalitet. Metoden är framförallt vanlig i Italien, i synnerhet Asti- och Proseccoviner och billiga varianter av tyska Sekt framställs enligt denna metod.\n\nChampagnemetoden(Méthode champenoise, Méthode classique, eller fermented in this bottle): Vinet jäser en första gång på fat och en andra gång i flaska. Den andra jäsningen resulterar i ett naturligt kolsyrat vin. Bubblorna är små, många och har en längre hållbarhet. Champagne, Crémant, Cava, bättre varianter av Sekt är exempel på mousserande viner framställda enligt den traditionella metoden.',
	font:{fontFamily:'arial', fontSize:'12sp'},

	
});
view2.add(textLabel2);


var view3 = Ti.UI.createScrollView({
	width:'280dp',
	backgroundColor:'#fff',
	
});

var headLabel3 = Ti.UI.createLabel({
	top:'20dp',
	left:0,
	text:'Näsan/doften',
	color:'#8a1504',
	font:{fontFamily:'papyrus', fontSize:'20sp',}
	
});
view3.add(headLabel3);

var textLabel3 = Ti.UI.createLabel({
	top:'60dp',
	text:'När ni betraktat vinet är det dags att dofta. Nu är det viktigt att ni öppnar era sinnen och går på känsla och minnesbilder. Det hjälper er att bedöma vad vinet doftar. Många gånger blir det lättare om man blundar.\n\nDet kan vara gröna äpplen, jäst, smörkola eller till och med våt hund. Vinet kan vara defekt och har oftast då en "unken" lukt. I de allra flesta fall doftar äldre viner mer och mognare. När det kommer till bubbel hittar man friskare, fruktigare dofter som äpple, krusbär, päron, men även torkad frukt som aprikos och fikon. Ofta kan man skönja blommiga inslag som roser violer, jasmin osv.\n\nSkriv ner de dofter du tycker dig kunna urskilja och ta med dofterna i minnet när du ska smaka vinet.\n\nUpplever du att doft och smak stämmer överens är vinet "balanserat".',
	font:{fontFamily:'arial', fontSize:'12sp'},

	
});
view3.add(textLabel3);


var view4 = Ti.UI.createScrollView({
	width:'280dp',
	backgroundColor:'#fff',

	
});

var headLabel4 = Ti.UI.createLabel({
	top:'20dp',
	left:0,
	text:'Munnen/smaken',
	color:'#8a1504',
	font:{fontFamily:'papyrus', fontSize:'20sp',}
	
});
view4.add(headLabel4);

var textLabel4 = Ti.UI.createLabel({
	top:'60dp',
	text:'När du doftat klart är det äntligen dags att smaka på dessa ljuvliga bubblor. Här avgör man om doften stämmer med smaken. Ta en stor klunk och gurgla runt i gommen ordentligt. Använd även här sinnen och minnen för att avgöra smaken eller bouqueten som man så fint kallar det på vinspråk.\n\nBeskriv hur bubblorna känns i munnen. Beroende på hur det mousserande vinet är framställt får bubblorna olika Mokaraktär. Läs mer om det under rubriken "utseende". Är bubblorna många, mindre och intensiva eller större, färre och mindre hållbara.\n\nBedöm sötman i vinet. Allt från 1 (helt torr) till 12 (mycket söt) förekommer. usserande viner räknas som halvtorra om de hamnar mellan 5-8.\n\nDet är först nu man kan avgöra om vinet är "balanserat", dvs om utseende, doft och smak stämmer överens med varandra. Jämför era anteckningar från de olika sinnena. Fanns doften av citrus även i smaken?\n\nProva sedan vinerna tillsammans med de "smakprover" ni har. Det är intressant hur vinet kan ändra karaktär beroende av vilka smaker det kombineras med.\nObservera t ex att "hettan" i kryddstarka saker blir mindre tillsammans med ett sötare vin.',
	font:{fontFamily:'arial', fontSize:'12sp'},

	
});
view4.add(textLabel4);

var view5 = Ti.UI.createScrollView({
	width:'280dp',
	backgroundColor:'#fff',

	
});

var headLabel5 = Ti.UI.createLabel({
	top:'20dp',
	left:0,
	text:'Sammanfattning',
	color:'#8a1504',
	font:{fontFamily:'papyrus', fontSize:'20sp',}
	
});
view5.add(headLabel5);

var textLabel5 = Ti.UI.createLabel({
	top:'60dp',
	text:'Nu är ni klara med provningen och vi hoppas ni haft ivriga diskussioner om vinernas doft och smak. Det är helt naturligt att ni uppfattar viner på olika sätt då associationer är högst personliga, men det är roligt att jämföra sina egna upplevelser med "vinkännarnas".\n\nFörsök, med hjälp av det ni kommit fram till, gissa vilket vin som är vilket. Gå till fliken "Vinerna" och testa era nyvunna kunskaper. Kan ni gissa vilken som är Champagne? Vilket vin är sötast? Vilket är billigast/dyrast?',
	font:{fontFamily:'arial', fontSize:'12sp'},
	
});
view5.add(textLabel5);


var scrollableView = Ti.UI.createScrollableView({
	width:'100%',
	height:'100%',
	top:'40dp',
	left:0,
 	views:[view1,view2,view3, view4, view5],
  	showPagingControl:true
});

win.add(scrollableView);

