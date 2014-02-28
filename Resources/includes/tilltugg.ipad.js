var win = Ti.UI.currentWindow;
	win.backgroundColor ='#fff';
	win.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT,

	];
	


function handleOrientation(orientation){
	if(orientation == 0 || orientation == 5){

	}else if (Ti.Gesture.isLandscape(orientation)) {
	scrollView.left='400dp';
	infoView.top='25dp';
	infoView.left='50dp';
	infoView.height='110dp';
	infoView.width='300dp';
	infoViewLabel.left='60dp';
	infoViewLabel.top='35dp';
	infoViewLabel.height='90dp';
	infoViewLabel.width='280dp'; 




	} else {
	scrollView.left='134dp';
    infoView.top='50dp';
	infoView.left='134dp';
	infoView.height='70dp';
	infoView.width='500dp';
	infoViewLabel.left='144dp';
	infoViewLabel.top='60dp';
	infoViewLabel.height='50dp';
	infoViewLabel.width='480dp'; 
	}
}

Ti.Gesture.addEventListener('orientationchange', function (ev) {
  handleOrientation(ev.orientation);
  
});

//knapp tillbaka
var back = Ti.UI.createButton({
    title: "Meny",
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
back.addEventListener("click", function() {
    Ti.UI.currentWindow.close();

});

win.setLeftNavButton(back);


var infoView = Ti.UI.createView({
	top:'50dp',
	left:'134dp',
	height:'70dp',
	width:'500dp',
	backgroundColor:'#fff7c5',
});
win.add(infoView);

var infoViewLabel=Ti.UI.createLabel({
	top:'60dp',
	left:'144dp',
	height:'50dp',
	width:'470dp',
	text:'Den här delen är inget som ingår i provningen, men goda mumsbitar att avnjuta till det bubbel som finns kvar är aldrig fel. Perfekt till quizet. Recepten beräknas räcka till 6 personer.',
	font:{fontFamily:'arial', fontSize:'14sp'},
});
win.add(infoViewLabel);

var myData = [];
var curr = 0;

function addToData(page){

	var view = Ti.UI.createWebView({
		url:page,
		
});

myData[curr] = view;
curr++;

};
var scrollView = Ti.UI.createScrollableView({
	views:myData,
	showPagingControl:true,
	width:'500dp',
    height:'650dp',
	
	
});


win.add(scrollView);

addToData('tilltugg_p1.html');
addToData('tilltugg_p2.html');
addToData('tilltugg_p3.html');

scrollView.views = myData;

handleOrientation();

