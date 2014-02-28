var win = Ti.UI.currentWindow;
	win.backgroundColor ='#fff';
	
	win.orientationModes = [
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT,
	];

//knapp tillbaka
var back = Ti.UI.createButton({
    title: "Meny",
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
back.addEventListener("click", function() {
    Ti.UI.currentWindow.close();
});

Ti.UI.currentWindow.setLeftNavButton(back);

var myData = [];
var curr = 0;

function addToData(myImage){
	
	

	var imageView = Ti.UI.createWebView({
		height:'700dp',
		width:'700dp',
		backgroundColor:'#fff',
		url:myImage,
	});


myData[curr] = imageView;
curr++;

};

var scrollView = Ti.UI.createScrollableView({
	showPagingControl:true,
	height:'700dp',
	width:'700dp',

});
win.add(scrollView);


	
addToData('kuriosa_p1.html');
addToData('kuriosa_p2.html');
addToData('kuriosa_p3.html');
addToData('kuriosa_p4.html');
addToData('kuriosa_p5.html');

scrollView.views = myData;



