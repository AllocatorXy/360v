function msgPicOver() 
{
	var aMsgPic = document.getElementsByClassName('msgPic');
	for (var i = 0; i < aMsgPic.length; i++) 
	{
		aMsgPic[i].onmouseover = function ()
		{
			setMov(this,{opacity:60});
		}
		aMsgPic[i].onmouseout = function () 
		{
			setMov(this,{opacity:100});
		}
	}
}
msgPicOver();

function anchorHover() 
{
	var aAnchor = document.getElementsByTagName('a');
	for (var i = 0; i < aAnchor.length; i++) {
		aAnchor[i].onmouseover = function () {
			this.fColor = getStyle(this,'color');
			this.style.color = '#22ac38';
		}
		aAnchor[i].onmouseout = function () {
			this.style.color = this.fColor;
		}
	}
}
anchorHover();