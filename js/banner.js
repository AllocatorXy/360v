window.onload = function () 
{
	var oBanner = document.getElementsByClassName('banner')[0];
	var aBannerPics = oBanner.getElementsByClassName('pics');
	var oUlMain = oBanner.getElementsByClassName('main')[0];
	var aCover = oBanner.getElementsByClassName('cover');
	var curIndex = 0;
	var autoPlay = null;

	for (var i = 0; i < aBannerPics.length; i++) 
	{
		aBannerPics[i].index = i;
		aBannerPics[i].style.left = (aBannerPics[i].index-1)*1920+'px';
	}
	for (var i = 0; i < aCover.length; i++) 
	{
		aCover[i].index = i;
		aCover[i].onclick = thumbClk;
		aCover[i].onmouseover = thumbOver;
		aCover[i].onmouseout = thumbOut;
	}
	setMov(aCover[0],{opacity:0});

	/*thumbClick*/
	function thumbClk() 
	{
		curIndex = this.index;
		// oBanner.getElementsByClassName('title')[0].innerHTML = "这里是第"+(curIndex+1)+"张图";
	
		var oFrame = oBanner.getElementsByClassName('frame')[0];
		
		for (var i = 0; i < aCover.length; i++) 
		{
			setMov(aCover[i],{opacity:60});
		}
		setMov(aCover[curIndex],{opacity:0});
		setMov(oFrame,{left:curIndex*112});
		setMov(oUlMain,{left:-1920*curIndex});
	}

	/*thumbHover*/
	function thumbOver() 
	{
		setMov(aCover[this.index],{opacity:0});
	}
	function thumbOut() 
	{
		if (this.index!=curIndex) 
		{
			setMov(aCover[this.index],{opacity:60});
		}
		else {
			return 0;
		}
	}

	/*autoPlay*/
	autoPlay = setInterval(function () 
	{
		curIndex++;
		if (curIndex==9) 
		{
			curIndex = 0;
			oUlMain.style.left = 1920+'px';
		}
		var oFrame = oBanner.getElementsByClassName('frame')[0];
		
		for (var i = 0; i < aCover.length; i++) 
		{
			setMov(aCover[i],{opacity:60});
		}
		setMov(aCover[curIndex],{opacity:0});
		setMov(oFrame,{left:curIndex*112});
		setMov(oUlMain,{left:-1920*curIndex});
	}, 5000)

	oBanner.getElementsByClassName('show')[0].onmouseover = function () 
	{
		clearInterval(autoPlay);
	}
	oBanner.getElementsByClassName('show')[0].onmouseout = function () 
	{
		autoPlay = setInterval(function () 
		{
			curIndex++;
			if (curIndex==9) 
			{
				curIndex = 0;
				oUlMain.style.left = 1920+'px';
			}
			var oFrame = oBanner.getElementsByClassName('frame')[0];
			
			for (var i = 0; i < aCover.length; i++) 
			{
				setMov(aCover[i],{opacity:60});
			}
			setMov(aCover[curIndex],{opacity:0});
			setMov(oFrame,{left:curIndex*112});
			setMov(oUlMain,{left:-1920*curIndex});
		}, 5000)
	}


}