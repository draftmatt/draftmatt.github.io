var charityNav=$.extend(charityNav,{validate:function(form$){var valid={overall:false};valid.Name=this.validateName(this.name$);valid.CC=this.validateField(this.cardNumber$,"cc");valid.Exp=this.validateField(this.exp$,"exp");valid.CVC=this.validateField(this.cvc$,"cvc",this.cardNumber$);valid.Address=this.validateAddress(this.address$)
valid.City=this.validateCity(this.city$);valid.State=true;if(this.state$&&this.state$.length>0){valid.State=this.validateState(this.state$);}else{valid.StateSkipped=true;}
valid.Zip=true;if(this.zip$&&this.zip$.length>0){valid.Zip=this.validateZip(this.zip$);}else{valid.ZipSkipped=true;}
valid.overall=valid.Name&&valid.CC&&valid.Exp&&valid.CVC&&valid.Address&&valid.City&&valid.State&&valid.Zip;return valid;},setup:function(fields){var fields=fields||{};if(!fields.cardNumber){fields.cardNumber="input.cc-num";}
if(!fields.exp){fields.exp="input.cc-exp";}
if(!fields.cvc){fields.cvc="input.cc-cvc";}
if(!fields.name){fields.name="input.name-on-card";}
if(!fields.address){fields.address="input.address";}
if(!fields.city){fields.city="input.city";}
if(!fields.state){fields.state="input.state";}
if(!fields.zip){fields.cartNumber="input.zip";}
if(!fields.amount){fields.amount="input[name='donation_group']";}
if(!fields.otherAmount){fields.otherAmount=$("input[name='other_amt']");}
this.cardNumber$=$(fields.cardNumber);this.exp$=$(fields.exp);this.cvc$=$(fields.cvc);this.name$=$(fields.name);this.address$=$(fields.address);this.city$=$(fields.city);this.state$=$(fields.state);this.zip$=$(fields.zip);this.amount$=$(fields.amount);this.otherAmount$=$(fields.otherAmount);this.cardNumber$.payment('formatCardNumber');this.exp$.payment('formatCardExpiry');this.cvc$.payment('formatCardCVC');this.cardNumber$.focusout(function(){charityNav.validateField($(this),"cc");});this.exp$.focusout(function(){charityNav.validateField($(this),"exp");});this.cvc$.focusout(function(){charityNav.validateField($(this),"cvc",charityNav.cardNumber$);});this.name$.focusout(function(){charityNav.validateName($(this));});this.address$.focusout(function(){charityNav.validateAddress($(this));});this.city$.focusout(function(){charityNav.validateCity($(this));});this.state$.focusout(function(){charityNav.validateState($(this));});this.zip$.focusout(function(){charityNav.validateZip($(this));});if(this.otherAmount$.length>0){this.otherAmount$.focusout(function(){var valid=charityNav.amount$.filter(":checked").val()==="other"
if(valid){var num=parseInt(charityNav.otherAmount$.val());valid=!Number.isNaN(num);if(valid){valid=num>=10;}}else{valid=true;}
if(!valid){charityNav.otherAmount$.addClass("invalid");}else{charityNav.otherAmount$.removeClass("invalid");}});}
if(this.amount$.length>0){this.amount$.change(function(){if(charityNav.amount$.filter(":checked").val()!=="other"){charityNav.otherAmount$.removeClass("invalid");charityNav.otherAmount$.val("");}});}},checkOtherAmt:function(formName){var form$=$("#"+formName);var donationAmountRadios=form$.find("input:radio[name='donation_group']");donationAmountRadios.removeProp("checked");donationAmountRadios.filter("[value='other']").prop("checked",true);var otherAmt$=form$.find("input[name='other_amt']");if(otherAmt$.val()==="0"){otherAmt$.val("");}},validateAddress:function(address$){return this.validateField(address$,"min-length",5);},validateName:function(name$){return this.validateField(name$,"min-length",3);},validateCity:function(city$){return charityNav.validateField(city$,"min-length",2);},validateState:function(state$){return charityNav.validateField(state$,"min-length",2);},validateZip:function(zip$){var valid=false;if(charityNav.validateField(zip$,"min-length",5)){valid=charityNav.validateField(zip$,"integer");}
return valid;},validateField:function(field$,type,secondaryField){var valid=false;var fieldValue=field$.val();switch(type){case"cc":valid=$.payment.validateCardNumber(fieldValue);break;case"exp":expParts=$.payment.cardExpiryVal(fieldValue);valid=$.payment.validateCardExpiry(expParts.month,expParts.year);charityNav.expParts=expParts;break;case"cvc":var cardNumber=secondaryField.val();if(cardNumber){var cardType=$.payment.cardType(cardNumber);valid=$.payment.validateCardCVC(fieldValue,cardType);}
break;case"integer":var value=field$.val();var number=parseInt(value);valid=!isNaN(number);break;case"min-length":var value=field$.val();valid=$.trim(value).length>=secondaryField;break;default:throw Error("Unknown type passed to validateField: "+type);}
this.setValid(valid,field$);return valid;},setValid:function(valid,input$){if(valid){input$.removeClass("invalid");}else{input$.addClass("invalid");}}});