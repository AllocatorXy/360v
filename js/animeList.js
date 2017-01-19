function animeClk() 
{
	var oAnimeLi = document.getElementsByClassName('animeList')[0];
	var aDays = oAnimeLi.getElementsByTagName('li');
	var week = new Date().getDay()-1;
	var aDivForm = oAnimeLi.getElementsByTagName('div');

	for (var i = 0; i < aDays.length; i++) 
	{
		aDays[i].index = i;
		aDivForm[i].index = aDays[i].index;
		aDays[i].onclick = function () 
		{
			// 导航栏点击事件
			for (var j = 0; j < aDays.length; j++) 
			{
				setMov(aDays[j],{width:32});
				aDays[j].className = 'liRst';
				aDays[j].id = '';
				aDivForm[j].className = '';
			}
			setMov(this,{width:40});
			this.id = 'liClk';
			// 切换列表
			aDivForm[this.index].className = 'show';
		}
	}

	if (week == -1) 
	{
		aDays[6].id = 'liClk';
		aDivForm[6].className = 'show';
	}
	else{
		aDays[week].id = 'liClk';
		aDivForm[week].className = 'show';
		aDays[week].style.width = 40 + 'px';
	}
}
animeClk() ;