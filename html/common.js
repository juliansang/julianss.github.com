
function setCookie(name, value, iDay)
{
	if (iDay)
	{
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=name+'='+value+'; expires='+oDate;
	}
	else
	{
		document.cookie=name+'='+value;
	}
}

function getCookie(name)
{
	var arr=document.cookie.split('; ');
	for (var i=0; i<arr.length; i++)
	{
		var aTmp=arr[i].split('=');
		if (aTmp[0] == name)
		{
			return aTmp[1];
		}
	}
	
	return undefined;
}

function removeCookie(name)
{
	setCookie(name, '', -1);
}








