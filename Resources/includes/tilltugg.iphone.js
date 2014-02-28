var win = Ti.UI.currentWindow;
	win.backgroundColor ='#fff';
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



var infoViewLabel=Ti.UI.createLabel({
	top:'50dp',
	left:'10',
	height:'50dp',
	right:'10dp',
	text:'Den här delen är inget som ingår i provningen, men goda mumsbitar att avnjuta till det bubbel som finns kvar är aldrig fel. Perfekt till quizet. Recepten beräknas räcka till 6 personer.',
	font:{fontFamily:'arial', fontSize:'10sp'},
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
	width:'100%',
	top:'80dp',

	
	
});


win.add(scrollView);

addToData('tilltugg_iphone_p1.html');
addToData('tilltugg_iphone_p2.html');
addToData('tilltugg_iphone_p3.html');

scrollView.views = myData;



