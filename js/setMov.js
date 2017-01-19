function setMov(obj, json, fnEnd) 
{
	clearInterval(obj.timer);

	obj.timer = setInterval(function () 
	{
		var flag = true; 

		for(var attr in json)
		{
			var realAttr = 0;
			if (attr == 'opacity') // 透明度需要特别处理
			{
				realAttr = Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{
				realAttr = parseInt(getStyle(obj,attr));
			}

			var speed = (json[attr]-realAttr)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);

			if (realAttr!=json[attr]) //当还有值没有到达目标点时
			{
				flag = false;
			}
			
			if (attr == 'opacity') 
			{
				obj.style.filter = 'alpha(opacity:'+(realAttr+speed)+')'; //ie
				obj.style.opacity = (realAttr+speed)/100; //webkit etc
			}
			else
			{
				obj.style[attr] = realAttr+speed+'px';
			}
		}
		if (flag) //所有值都到达目标点后
		{
			clearInterval(obj.timer);
			if (fnEnd) 
			{
				fnEnd();
			}
		}
	}, 15);
}
function getStyle(obj,name) 
{
	
	if (obj.currentStyle) 
	{
		//IE低版本
		return obj.currentStyle[name];
	}
	else 
	{
		//FF等浏览器
		return getComputedStyle(obj,null)[name]; 
		//getComputedStyle函数中，第二个参数无用，任意设置
	}
}