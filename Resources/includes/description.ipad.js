var win = Ti.UI.currentWindow;

			win.orientationModes = [
			Ti.UI.PORTRAIT,
			Ti.UI.UPSIDE_PORTRAIT,
			Ti.UI.LANDSCAPE_LEFT,
			Ti.UI.LANDSCAPE_RIGHT
			];
			
var back = Ti.UI.createButton({
    title: "Tillbaka",
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

back.addEventListener("click", function() {
    Ti.UI.currentWindow.close();
});

Ti.UI.currentWindow.setLeftNavButton(back);

var infoView = Ti.UI.createView({
	top:'30dp',
	width:'500dp',
	height:'80dp',
	backgroundColor:'#fff7c5',
	
});
win.add(infoView);

var infoLabel = Ti.UI.createLabel({
	top:'35dp',
	width:'480dp',
	height:'70dp',
	text:'Jämför era anteckningar med "vinkännarnas" beskrivningar. Kan ni gissa vilket vin som är vilket? Vilket land det kommer ifrån? Inte helt lätt, men vem bryr sig hur många rätt det blir, huvudsaken är ni haft roligt!',
	font:{fontFamily:'arial', fontSize:'14sp'}
});
win.add(infoLabel);

var wines = [];
var curr = 0;

var wines = [];
var curr = 0;

function addToData(myImage, myHeader, myText){
	


var row = Ti.UI.createTableViewRow({
	width:'500dp',
	height:'200dp',
	backgroundColor:'#fff',
	borderWidth:'2dp',
	borderColor:'maroon',
	
});
tableView.add(row);

var imageView = Ti.UI.createImageView({
	left:0,
	top:'20dp',
	image:myImage,
	
	
});
row.add(imageView);

var headLabel = Ti.UI.createLabel({
	top:'10dp',
	left:'100dp',
	text:myHeader,
	font:{fontFamily:'papyrus', fontSize:'14sp'},
	color:'maroon'
	
});
row.add(headLabel);

var textLabel = Ti.UI.createLabel({
	top:'45dp',
	left:'100dp',
	right:'30dp',
	text:myText,
	font:{fontFamily:'arial', fontSize:'11sp'},

});
row.add(textLabel);

wines[curr] = row;
curr++;
}
var tableView = Ti.UI.createTableView({
	width:'500dp',
	height:'100%',
	top:'110dp',
	
	
	
});
win.add(tableView);


addToData('images/bollinger.jpg', 'Bollinger Champagne', 'Ursprung: Champagne\nBubblor: Ivriga, mycket små bubblor med lång hållbarhet, Champagnemetoden.\nFärg: Guldig\nPris: 395 kr\nDoft: Utvecklad doft med rostad ton, inslag av gula plommon, kex, nougat och citrus.\nSötma: 1\nSmak: Torrt, utvecklat, friskt, smakrikt vin med inslag av moget äpple, rostat bröd, grapefrukt och nougat. Tydlig eftersmak.');
addToData('images/asti.jpg', 'Asti Martini', 'Ursprung: Spumante från Italien\nBubblor: Små, rikliga och pigga, Charmatmetoden\nFärg: Ljust, ljust gul\nPris: 75 kr\nDoft: Mycket aromatisk doft med tydlig muskatkaraktär och ton av citrus och fläder.\nSötma: 9\nSmak: Söt, aromatisk smak med inslag av citrus och fläder.');
addToData('images/chapel.jpg', 'Chapel Hill', 'Ursprung: Pezsgö från Ungern\nBubblor: Stora och långsamma, läskedrycksmetoden.\nFärg: Nästan genomskinlig\nPris: 65 kr\nDoft: Cideraktig med inslag av gula äpplen och citrus.\nSötma: 2\nSmak: Torr med inslag av citrus, äpplen och päron. Påminner starkt om cider. Alkoholsmaken tränger igenom.');
addToData('images/boschendal.jpg', 'Boschendal', 'Ursprung: Från Sydafrika\nBubblor: Medelsmå och rikligt. Bättre sprutt i bubblorna än i crémanten som är framställd enligt samma metod, Champagnemetoden.\nFärg: Flädergul med gröna undertoner\nPris: 98 kr\nDoft: Jäst med inslag av röda äpplen, aprikos, smörkola och kex.\nSötma: 1\nSmak: Fruktig smak med inslag av jäst, äpplen, aprikos, kex och citrus. Mycket frisk.');
addToData('images/louis.jpg', 'Louis Bouillot', 'Ursprung: Crémant från Frankrike\nBubblor: Medelsmå, men inte så rikligt. Ok hållbarhet, Champagnemetoden.\nFärg: Ljust guldig med röda toner\nPris: 109 kr\nDoft: Fruktig doft med inslag av päron, bröd och citrus.\nSötma: 1\nSmak: Torr, fruktig smak med inslag av päron, gula äpplen, kex och grapefrukt.');
addToData('images/prosecco.jpg', 'Prosecco la Robinia', 'Ursprung: Prosecco från Italien\nBubblor: Medelstora med ok hållbarhet, Charmatmetoden.\nFärg: Flädergul med gröna undertoner\nPris: 85 kr\nDoft: Mycket diskret med inslag av äpple, mandarin och gräs.\nSötma: 4\nSmak: Diskret smak med inslag av äpple, tuttifrutti och mandel. Trots benämningen Extra Dry är vinet nästan halvtorrt.');


tableView.data = wines;





