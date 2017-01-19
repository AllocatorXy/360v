function lineColor() 
{
	var aTopList = document.getElementsByClassName('top2-10');
	var aLine = [];
	for (var i = 0; i < aTopList.length; i++) 
	{
		aLine = aTopList[i].getElementsByClassName('clearFix');
		for (var j = 1; j < aLine.length; j+=2) 
		{
			aLine[j].style.backgroundColor = '#eee';
		}
		for (var k = 0; k < aLine.length; k++) 
		{
			aLine[k].lColor = getStyle(aLine[k],'backgroundColor');
			aLine[k].onmouseover = function () 
			{
				this.style.backgroundColor = '#ccc';
			}
			aLine[k].onmouseout = function () 
			{
				this.style.backgroundColor = this.lColor;
			}
		}
	}
}
lineColor();