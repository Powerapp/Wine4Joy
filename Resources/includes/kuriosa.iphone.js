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


var myData = [];
var curr = 0;

function addToData(myImage){
	
	

	var imageView = Ti.UI.createWebView({
		top:0,
		width:'100%',
		backgroundColor:'#fff',
		url:myImage,
	});


myData[curr] = imageView;
curr++;

};

var scrollView = Ti.UI.createScrollableView({
	showPagingControl:true,
	top:'40dp',


});
win.add(scrollView);


	
addToData('kuriosa_iphone_p1.html');
addToData('kuriosa_iphone_p2.html');
addToData('kuriosa_iphone_p3.html');
addToData('kuriosa_iphone_p4.html');
addToData('kuriosa_iphone_p5.html');

scrollView.views = myData;


