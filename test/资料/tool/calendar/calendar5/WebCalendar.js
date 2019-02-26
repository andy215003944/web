//********************************************************************************************************//
//********************************************辅助函数****************************************************//
//********************************************************************************************************//
//父窗体对象
var controlParent = window.parent;
//真正的行数
var reallyDateRows = 0;

var controlID	= "WebCalendar1";
//=============================================================
//得到某年某月共有多少天
//=============================================================
 function HowManyDays(strMonth,strYear)
 {  
	var strDate1=strMonth+"-"+"01"+"-"+strYear
	strMonth=parseInt(strMonth,10)+1
	var strDate2=strMonth +"-"+"01"+"-"+strYear	
	var date1=new Date(strDate1)
	var date2=new Date(strDate2)
	var days=(date2 - date1)/24/60/60/1000
	return days;
}


//============================================================
//清除日历
//============================================================
function WriteNullToCalendar()
{	
	var obj_tblTotalCalendar=document.getElementById(controlID+":tblTotalCalendar");
	if(reallyDateRows==6)
	{
		row = obj_tblTotalCalendar.insertRow();
		for(var j=0;j<=6;j++)
		{
			cell= row.insertCell();
			row.attachEvent('onclick', tdOnclick);
			row.attachEvent('ondblclick', tdOndblclick);
			cell.innerText = "";
			cell.className = (j==0 || j==6)?"WeekEnd":"WeekDay";
		}
	}
	var i, j;
	var td;
	for(i=2; i<obj_tblTotalCalendar.rows.length; i++)
		for(j=0; j<7; j++)
		{
			td = obj_tblTotalCalendar.rows(i).cells(j);
			td.innerText = "";
			td.className = (j==0 || j==6)?"WeekEnd":"WeekDay";
		}
		return true;
}

//=============================================================
//初始化日历
//strWeekday----本月第一天是星期几
//strTotalDays--本月共有几天
//strToday------今天是本月的几号
//=============================================================

function setDaysToCalendar(strWeekday,strTotalDays,strToday)
{
	//============
	//得到一个控件
	//============

	var obj_tblTotalCalendar=document.getElementById(controlID+":tblTotalCalendar");
	
	var i,j,td,count
	count=1
	for(i=2;i<=8;i++)
	{ 
		reallyDateRows = i;
		if(i==2) 
		{
			for(j=0;j<=6;j++)
			{
				td=obj_tblTotalCalendar.rows(i).cells(j);
				if (j>strWeekday || strWeekday==6)
				{
					td.innerText=count;
					if(count==strToday) 
					{
						if(selectDateday!=null)
						{
							if(selectWeekEndflag)
							{
								selectDateday.className = "WeekEnd";
							}
							else
							{
								selectDateday.className = "WeekDay";
							}						
						}
						if(j==0 || j==6)
						{
							selectWeekEndflag = true;
						}
						else
						{
							selectWeekEndflag = false;
						}
						td.className = "SelectDay";
						selectDateday = td;
					}					
					count=count+1;
				}
			}
		}
		else if(count<=strTotalDays) 
		{
			for(j=0;j<=6;j++)
			{
				td=obj_tblTotalCalendar.rows(i).cells(j);
				td.innerText=count;
				if(count==strToday)
				{
					if(selectDateday!=null)
					{
						if(selectWeekEndflag)
						{
							selectDateday.className = "WeekEnd";
						}
						else
						{
							selectDateday.className = "WeekDay";
						}						
					}
					if(j==0 || j==6)
					{
						selectWeekEndflag = true;
					}
					else
					{
						selectWeekEndflag = false;
					}
					td.className = "SelectDay";
					selectDateday = td;
				}				
				count=count+1;        
				if (count>strTotalDays) 
				{
					return true;
				}
			}
		}
	}  
}
var selectDateday = null;
var selectWeekEndflag = false;
//===============================================================
//根据日期输入框中的内容创建日历
//===============================================================
function createDateBox()
{
	var parentstrYear,parentstrMonth,parentstrDate,parentstrDay;
	//controlParent
	parentstrYear	= controlParent.document.getElementById(controlID+":txtYear").value;
	parentstrMonth	= controlParent.document.getElementById(controlID+":txtMonth").value;
	parentstrDay	= controlParent.document.getElementById(controlID+":txtDay").value;
	var dtCurrent=new Date(parentstrYear,parentstrMonth-1,parentstrDay);	
	parentstrDate = dtCurrent.getDate();
	var parentiWeekDate,parentiHowManyDays,parentstrTemp;
	parentiWeekDate=(new Date(parentstrYear,parentstrMonth-1,0)).getDay();
	parentiHowManyDays=HowManyDays(parentstrMonth,parentstrYear);
	WriteNullToCalendar(controlID);
	setDaysToCalendar(parentiWeekDate,parentiHowManyDays,parentstrDate,controlID);
	var obj_tblTotalCalendar=document.getElementById(controlID+":tblTotalCalendar");
	if(reallyDateRows==6)
	{
		obj_tblTotalCalendar.deleteRow(obj_tblTotalCalendar.rows.length-1);
	}	
}

//===========================================================
//得到选择的日期
//===========================================================
function WhichDaySelected()
{
	var obj_tblTotalCalendar=document.getElementById(controlID+":tblTotalCalendar");
	var i,j,td;
	var ls_date;
	for (i=3;i<=8;i++)
		for(j=0;j<=6;j++)
		{
			td = obj_tblTotalCalendar.rows(i).cells(j);
			if(td.Active == true)
			{
				ls_date=td.innerText;
				return ls_date;		   
			}
		}
}  


//==============================================================
//检测输入的是否是数字
//==============================================================
function CheckNum()
{
	if(event.keyCode < 48 || event.keyCode > 57)
	{
		alert("请输入数字");
		return false;
	}
	
	return true;
}

//==============================================================
//日期是否在隐藏状态
//==============================================================
function CalendarIsHidden()
{
	var parentobj_DateBox				= controlParent.document.getElementById(controlID+":DateBox");
	var result							= 0x1;
	if(parentobj_DateBox.style.visibility!="hidden")
	{
		result							= 0x0;
	}
	return result;
}

//==============================================================
//隐藏日期
//==============================================================
function CalendarHidden()
{
	var parentobj_DateBox				= controlParent.document.getElementById(controlID+":DateBox");
	parentobj_DateBox.style.width		= 0;
	parentobj_DateBox.style.height		= 0;
	parentobj_DateBox.style.visibility	= "hidden";
}
//==============================================================
//显示日期
//==============================================================
function CalendarVisible()
{
	var parentobj_DateBox				= controlParent.document.getElementById(controlID+":DateBox");
	var obj_tblTotalCalendar			= document.getElementById(controlID+":tblTotalCalendar");
	parentobj_DateBox.style.visibility	= "visible";	
	parentobj_DateBox.style.width		= "180px";
	parentobj_DateBox.style.height		= obj_tblTotalCalendar.offsetHeight;
}
//********************************************************************************************************//
//********************************************事件函数****************************************************//
//********************************************************************************************************//


//===============================================================
//当按下弹出日历时
//===============================================================
function btn_onclick(control_id)
{
	//============
	//得到一个控件
	//============
	controlID						= control_id;	
	
	if(CalendarIsHidden())
	{				
		createDateBox(controlID);		
		var obj_tblTotalCalendar= document.getElementById(controlID+":tblTotalCalendar");
		var selYear				= document.getElementById(controlID+":selYear");
		var selMonth			= document.getElementById(controlID+":selMonth");
		var parenttxtYear		= controlParent.document.getElementById(controlID+":txtYear");
		var parenttxtMonth		= controlParent.document.getElementById(controlID+":txtMonth");
		selYear.value			= parenttxtYear.value;
		selMonth.selectedIndex	= parenttxtMonth.value-1;
		CalendarVisible();		
	}
	else
	{
		CalendarHidden();
	}
}

//=============================================================
//当日期输入框失去输入焦点时
//=============================================================
function txt_OnBlue()
{
	var strYear,strMonth,strDay;
	strYear			= document.getElementById(controlID+":txtYear").value;
	strMonth		= document.getElementById(controlID+":txtMonth").value;
	strDay			= document.getElementById(controlID+":txtDay").value;
	var dtCurrent	= new Date(strYear,strMonth-1,strDay);

	if(isNaN(strYear))
	{		
		alert("您输入的年份不是数字 ：）！");
		document.getElementById(controlID+":txtYear").focus();
		return;		
	}	

	if(isNaN(strMonth))
	{
		alert("您输入的月份不是数字 ：）！");
		document.getElementById(controlID+":txtMonth").focus();
		return;		
	}

	if(isNaN(strDay))
	{
		alert("您输入的天数不是数字 ：）！");
		document.getElementById(controlID+":txtDay").focus();
		return;		
	}

	if(dtCurrent.getDate() !=strDay)
	{
		alert("您输入的天数不正确！");
		document.getElementById(controlID+":txtDay").focus();
		return;		
	}
	

	if(dtCurrent.getMonth()!=(strMonth-1))
	{
		alert("您输入的月份不正确！");
		document.getElementById(controlID+":txtMonth").focus();
		return;		
	}

	

	if(dtCurrent.getFullYear()!=strYear || strYear<1900)
	{		
		alert("您输入的年份不正确！");
		document.getElementById(controlID+":txtYear").focus();
		return;		
	}	
	
	/*
	var obj_DateBox=document.getElementById(controlID+":DateBox");

	if(obj_DateBox.style.visibility=="visible")
	{
		createDateBox(controlID);		
		document.getElementById(controlID+":selYear").value = document.getElementById(controlID+":txtYear").value;
		document.getElementById(controlID+":selMonth").selectedIndex = document.getElementById(controlID+":txtMonth").value-1;	
	}*/
	
}


//=============================================================
//当选择下拉列表中的月份
//=============================================================
function selOnClick()
{	
	var selMonth			= document.getElementById(controlID+":selMonth");
	
	var parenttxtMonth		= controlParent.document.getElementById(controlID+":txtMonth");
	parenttxtMonth.value	= selMonth.value;
	createDateBox(controlID);
}

//=================================================================
//当日历中的年输入框失去焦点
//=================================================================
function selBlur()
{
	var selYear				= document.getElementById(controlID+":selYear");
	var parenttxtYear		= controlParent.document.getElementById(controlID+":txtYear");
	parenttxtYear.value = selYear.value;
	createDateBox(controlID);
}

//===============================================================
//当按下年份调节按钮（向上）
//===============================================================
function imgUpOnclick()
{
	var selYear				= document.getElementById(controlID+":selYear");
	var parenttxtYear		= controlParent.document.getElementById(controlID+":txtYear");
	selYear.value=++parenttxtYear.value;
	createDateBox(controlID);	
}


//===============================================================
//当按下年份调节按钮（向下）
//===============================================================
function imgDownOnclick()
{
	var selYear				= document.getElementById(controlID+":selYear");
	var parenttxtYear		= controlParent.document.getElementById(controlID+":txtYear");
	selYear.value			= --parenttxtYear.value;
	createDateBox(controlID);
}

//===============================================================
//当点击日历中的日子
//===============================================================
function tdOnclick()
{
	var src		= event.srcElement ;
	if (src.tagName != "TD")
	{
		return false;
	}	
	if (src.innerText!="" && src.innerText!=" ")
	{
		var parentstrDay	= controlParent.document.getElementById(controlID+":txtDay");
		parentstrDay.value	= src.innerText;
		createDateBox(controlID);	

	}

}

//===============================================================
//当双击日历中的日子
//===============================================================
function tdOndblclick()
{
	var src = event.srcElement ;
	if (src.tagName != "TD")
	{
		return false;
	}
	if (src.innerText!="" && src.innerText!=" ")
	{
		var parentstrDay	= controlParent.document.getElementById(controlID+":txtDay");
		parentstrDay.value	= src.innerText;
		createDateBox();	
		CalendarHidden();
	}
}
//===============================================================
//当鼠标移到日历上时发生的事件
//===============================================================
function tableOnmouseover()
{
	
}
	
//===============================================================
//当鼠标移出日历上时发生的事件
//===============================================================
function tableOnmouseout()
{
	
}	

		