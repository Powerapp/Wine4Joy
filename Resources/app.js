Titanium.UI.setBackgroundColor('#000');

 // Let the splash screen run longer
setTimeout(function() 
{    win.open();
}, 3000);


var win = Titanium.UI.createWindow({ 
	url: 'intro.js',
    backgroundColor:'#000',
   fullscreen:true,
});

win.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});


		


