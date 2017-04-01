function goCalc(formname)
{if(document.forms[formname].inputIncome.value!="")
{var income=document.forms[formname].inputIncome.value;var percentage=document.forms[formname].inputPercentage.value;var cost;var savings;income=income.replace(/\$/g,'');income=income.replace(/,/g,'');savings=Math.round(parseInt(income)*parseInt(percentage))*0.01;cost=Math.round(parseInt(income)*(100-parseInt(percentage)))*0.01;document.forms[formname].inputMoney.value=outputMoney(savings);document.forms[formname].inputCost.value=outputMoney(cost);}}
function outputMoney(number){return outputDollars(Math.floor(number-0)+'')+outputCents(number-0);}
function outputDollars(number){if(number.length<=3)
return(number==''?'0':number);else{var mod=number.length%3;var output=(mod==0?'':(number.substring(0,mod)));for(i=0;i<Math.floor(number.length/3);i++){if((mod==0)&&(i==0))
output+=number.substring(mod+3*i,mod+3*i+3);else
output+=','+number.substring(mod+3*i,mod+3*i+3);}
return(output);}}
function outputCents(amount){amount=Math.round(((amount)-Math.floor(amount))*100);return(amount<10?'.0'+amount:'.'+amount);}
function popupWindow(popupURL,popupOptionList)
{var popupWidth=600;var popupHeight=400;var popupScrollbars="no";var popupResizable="no";var popupCentered="no";var popupPosition="";var popupLocation="yes";if(popupOptionList)
{var popupOptions=popupOptionList.split(",");var popupIndex=0;if(!isNaN(popupOptions[0]))
{popupWidth=popupOptions[0];popupHeight=popupOptions[1];popupIndex=0;}
while(popupIndex<popupOptions.length)
{switch(popupOptions[popupIndex])
{case"scrollbars":popupScrollbars="yes";break;case"resizable":popupResizable="yes";break;case"centered":popupCentered="yes";break;case"location":popupLocation="no";break;}
popupIndex++;}}
if(popupCentered=="yes")
{var popupLeft=Math.floor((screen.width-popupWidth)/2);var popupTop=Math.floor((screen.height-popupHeight)/2);popupPosition="screenx="+popupLeft+",screeny="+popupTop+",left="+popupLeft+",top="+popupTop+",";}
window.open(popupURL,"",popupPosition+"width="+popupWidth+",height="+popupHeight+",hotkeys=no"+",scrollbars="+popupScrollbars+",resizable="+popupResizable+",location="+popupLocation);}
function openBrWindow(theURL,winName,features){var myWindow=window.open(theURL,winName,features);if(myWindow){myWindow.focus();}else{ga('send','Event','Popup Blocked',winName,theURL);}}
var hotspots=document.getElementsByName('hotspot');var toggles=document.getElementsByName('toggle');function visibilitytoggle()
{for(var i=0;i<hotspots.length;i++)
{hotspots[i].someProperty=i;hotspots[i].onclick=function(){toggle(this.someProperty)};}
for(var i=0;i<toggles.length;i++)
{toggles[i].style.display='none';}}
function toggle(i)
{if(toggles[i].style.display=='none')
{toggles[i].style.display=''}
else
toggles[i].style.display='none'}
function showall()
{for(var i=0;i<toggles.length;i++)
{toggles[i].style.display='';}}
function toggleall()
{for(var i=0;i<toggles.length;i++)
{if(toggles[i].style.display=='none')
{toggles[i].style.display=''}
else
toggles[i].style.display='none'}}
function hideall()
{for(var i=0;i<toggles.length;i++)
{toggles[i].style.display='none';}}
function clicker(){return clickeranyID('ol_displayboxwrap');}
function clickerany(name){var thediv=document.getElementsByName(name);for(var i=0;i<name.length;i++)
{if(thediv[i].style.display=="none"){thediv[i].style.display="";}else{thediv[i].style.display="none";}}
return false;}
function clickeranyID(id){var thediv=document.getElementById(id);if(thediv.style.display=="none"){thediv.style.display="";}else{thediv.style.display="none";}
return false;}
function checkForm(formname,fldlist){var formObj=document.forms[formname];var fields=fldlist.split("||");for(i=0;i<fields.length;i++){var fieldUp=fields[i].split(",");var thisField=fieldUp[0].split(".");switch(thisField[1]){case"select":if(formObj[thisField[0]].options[formObj[thisField[0]].selectedIndex].value==""){alert("The "+fieldUp[1]+" is required.");if(fieldUp[2]=="1"){formObj[thisField[0]].focus();}
return false;}
break;case"email":if(!(/^[^@%*<> ]+@[^@%*<> ]{1,255}\.[^@%*<> ]{2,5}/.test(trim(formObj[thisField[0]].value)))){alert("The "+fieldUp[1]+" is an invalid email address.");if(fieldUp[2]=="1"){formObj[thisField[0]].focus();}
return false;}
break;case"radio":var isIt=false;for(j=0;j<formObj[thisField[0]].length;j++){if(formObj[thisField[0]][j].checked){isIt=true;}}
if(!(isIt)){alert("The "+fieldUp[1]+" is required.");if(fieldUp[2]=="1"){formObj[thisField[0]][0].focus();}
return false;}
break;case"checkbox":var isIt=false;if(formObj[thisField[0]].checked){isIt=true;}
if(!(isIt)){alert("The "+fieldUp[1]+" is required.");if(fieldUp[2]=="1"){formObj[thisField[0]].focus();}
return false;}
break;case"numeric":if(isNaN(formObj[thisField[0]].value)){alert("The "+fieldUp[1]+" must be numeric.");if(fieldUp[2]=="1"){formObj[thisField[0]].focus();}
return false;}
break;default:if(formObj[thisField[0]].value==""){alert("The "+fieldUp[1]+" is required.");if(fieldUp[2]=="1"){formObj[thisField[0]].focus();}
return false;}
break;}}
return true;}
function checkLength(size,title,field){if(field.value.length>size){alert("The "+title+" can be a maximum of "+size+" characters long.");field.value=field.value.substring(0,size)}}
var pageSubmitted=false;function frmSubmit(formname){if(!(pageSubmitted)){pageSubmitted=true;document.forms[formname].submit();}}
function echeck(str){var at="@"
var dot="."
var lat=str.indexOf(at)
var lstr=str.length
var ldot=str.indexOf(dot)
if(str.indexOf(at)==-1){alert("Invalid E-mail ID")
return false}
if(str.indexOf(at)==-1||str.indexOf(at)==0||str.indexOf(at)==lstr){alert("Invalid E-mail ID")
return false}
if(str.indexOf(dot)==-1||str.indexOf(dot)==0||str.indexOf(dot)==lstr){alert("Invalid E-mail ID")
return false}
if(str.indexOf(at,(lat+1))!=-1){alert("Invalid E-mail ID")
return false}
if(str.substring(lat-1,lat)==dot||str.substring(lat+1,lat+2)==dot){alert("Invalid E-mail ID")
return false}
if(str.indexOf(dot,(lat+2))==-1){alert("Invalid E-mail ID")
return false}
if(str.indexOf(" ")!=-1){alert("Invalid E-mail ID")
return false}
return true}
function MM_jumpMenu(targ,selObj,restore){eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");if(restore)selObj.selectedIndex=0;}
function writeCookie(name,value,hours)
{var expire="";if(hours!=null)
{expire=new Date((new Date()).getTime()+hours*3600000);expire="; expires="+expire.toGMTString();}
document.cookie=name+"="+escape(value)+expire;}
function readCookie(name)
{var cookieValue="";var search=name+"=";if(document.cookie.length>0)
{offset=document.cookie.indexOf(search);if(offset!=-1)
{offset+=search.length;end=document.cookie.indexOf(";",offset);if(end==-1)end=document.cookie.length;cookieValue=unescape(document.cookie.substring(offset,end))}}
return cookieValue;}
function trim(stringToTrim){return stringToTrim.replace(/^\s+|\s+$/g,"");}
function validateAmount(amount){if(amount.value.match(/^[0-9]+(\.([0-9]+))?$/)){return true;}else{alert('You must enter a valid donation.');amount.focus();return false;}}
function outGoing(){links=document.getElementsByTagName("a");count=links.length;var i=0;for(i=0;i<count.length;i++){document.getElementsByTagName("a").item(i).onclick="alert('Please note: You are being redirected to an independent report that is not affiliated with Charity Navigator.');";}}
function calcOverallScore()
{var finScore=parseFloat(document.getElementById('inFinancial').value);var atScore=parseFloat(document.getElementById('inAT').value);var calc=100-Math.sqrt((Math.pow((100-finScore),2)+Math.pow((100-atScore),2))/2);calc2=calc;calc=Math.floor(calc*100)/100;if(isNaN(calc))
document.getElementById('outOverall').value='';else
document.getElementById('outOverall').value=calc;}
function isEmpty(inputStr){if(null==inputStr||""==inputStr){return true;}
return false;}
function checkOtherAmt(formname){var formObj=document.forms[formname];formObj.donation_group[3].checked=true;}
function getCheckedValue(radioObj){if(!radioObj)
return"";var radioLength=radioObj.length;if(radioLength==undefined)
if(radioObj.checked)
return radioObj.value;else
return"";for(var i=0;i<radioLength;i++){if(radioObj[i].checked){return radioObj[i].value;}}
return"";}
function setCheckedValue(radioObj,newValue){if(!radioObj)
return;var radioLength=radioObj.length;if(radioLength==undefined){radioObj.checked=(radioObj.value==newValue.toString());return;}
for(var i=0;i<radioLength;i++){radioObj[i].checked=false;if(radioObj[i].value==newValue.toString()){radioObj[i].checked=true;}}}
function toDecimal(number){var number=number.toString(),dollars=number.split('.')[0],cents=(number.split('.')[1]||'')+'00';dollars=dollars.split('').reverse().join('').replace(/(\d{3}(?!$))/g,'$1,').split('').reverse().join('');return dollars+'.'+cents.slice(0,2);}
function roundToTwo(value){return(Math.round(value*100)/100);}
function findSelection(field){var test=document.getElementsByName(field);var sizes=test.length;for(i=0;i<sizes;i++){if(test[i].checked==true){return test[i].value;}}}
function calcPageTotals(donations,fees){var feeoption=findSelection("cc_fee_option");var total=0;if(feeoption!="Deduct"){total=donations+fees;}else{total=donations;}
document.getElementById("NFGFees").value=toDecimal(fees);if($('#GrandTotal').val().indexOf('/mo')>=0){document.getElementById("GrandTotal").value="$"+toDecimal(total)+"/mo";}else{document.getElementById("GrandTotal").value="$"+toDecimal(total);}
var spanRecurring=document.getElementById("recurringTotal");if(spanRecurring){spanRecurring.innerHTML=toDecimal(total);}
return true;}
function makeWin(x,y,z,n){ColdFusion.Window.create(n,'CN Watchlist','/search/news/pop.cfm?orgid='+z,{x:x+60,y:y,height:125,width:250,closable:false});}
function removeElement(id){var thediv=document.getElementById(id);thediv.innerHTML="Your vote has been removed.";}
function removeVoteConfirm(EIN){$("#dialog-confirm").dialog("option","buttons",[{text:"Yes",click:function(){$(this).dialog("close");$('#'+EIN).html('Your vote has been deleted.');$.post("/my/charities/removeVote.cfm",{theEIN:EIN});}},{text:"Cancel",click:function(){$(this).dialog("close");}}]);$("#dialog-confirm").dialog("open");}
function removeCharityConfirm(EIN){$("#dialog-confirm2").dialog("option","buttons",[{text:"Yes",click:function(){$(this).dialog("close");$.post("/my/charities/removeCharity.cfm",{theEIN:EIN});$('#'+EIN).closest("tr").hide('slow');}},{text:"Cancel",click:function(){$(this).dialog("close");}}]);$("#dialog-confirm2").dialog("open");}
function AddMyCharity(EIN){$("#dialog-add").dialog("option","buttons",[{text:"Yes",click:function(){$(this).dialog("close");$.post("/my/charities/addchar.cfm",{EIN:EIN});}},{text:"Close",click:function(){$(this).dialog("close");}}]);$("#dialog-add").dialog("open");}
function popupWithFallback(event,w,h,url){var forceFallback=(window.location.search.indexOf("forceFallback")>-1);var target=event.currentTarget;var left=(screen.width/2)-(w/2);var top=(screen.height/2)-(h/2);var targetIsA=false;if(target&&target.tagName.toLowerCase()==="a"){targetIsA=true;url=target.href;}
var popup=null;if(forceFallback!==false){whoops();}
var popup=window.open(url,"cn-popup",'width='+w+', height='+h+', top='+top+', left='+left);if(!popup){if(targetIsA){return true;}else{window.location=url;}}
return false;}
function checkForFallback(){var forceFallback=(window.location.search.indexOf("forceFallback")>-1);if(forceFallback!==false){whoops();}}
function checkPopup(event,noRefresh){var target=event.currentTarget;if(noRefresh===undefined||noRefresh===null){noRefresh=false;}
if(window.opener){if(target.href===window.opener.location.toString()){if(noRefresh===false){window.opener.location.reload(true);}}else{window.opener.location=target.href;}
window.close();return false;}
return true;}
function getParameterByName(name,url){if(!url){url=window.location.href;}
name=name.replace(/[\[\]]/g,"\\$&");var regex=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)"),results=regex.exec(url);if(!results)return null;if(!results[2])return'';return decodeURIComponent(results[2].replace(/\+/g," "));}
function scrollView(id,pixels){return id.each(function(){$('html, body').animate({scrollTop:($(id).offset().top)-pixels},1000);});}