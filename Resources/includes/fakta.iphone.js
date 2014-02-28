var win = Ti.UI.currentWindow;
win.backgroundColor ='#fff';
win.orientationModes = [
			Ti.UI.PORTRAIT,
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

var myData = [];
var curr = 0;

function addToData(myImage){
	
	

	var imageView = Ti.UI.createWebView({
		width:'100%',
		backgroundColor:'#fff',
		url:myImage,
		scalesToFitPage:true,
		maxZoomScale:2.0,
		
	

	});

	
	myData[curr] = imageView;
	curr++;
};

var scrollView = Ti.UI.createScrollableView({
	showPagingControl:true,
	showVerticalScrollIndicator: true,
	width:'100%',
	top:'50dp',
	right:0,
	bottom:0,
	left:0,
	

	


});
win.add(scrollView);


	
addToData('champagne_iphone.html');
addToData('historia_iphone.html');
addToData('mousserande_iphone.html');


scrollView.views = myData;

