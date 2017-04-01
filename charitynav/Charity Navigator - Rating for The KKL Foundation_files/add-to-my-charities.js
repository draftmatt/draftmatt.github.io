$(document).on('click',".addtomycharities",function(e){checkForFallback();e.preventDefault();e.stopPropagation();var target$=$(e.currentTarget);var promisevote=$.ajax({type:"POST",url:"/my/charities/addchar.cfm",data:{ein:target$.data("ein"),name:target$.data("charity_name"),after:window.location.pathname+location.search},cache:false,headers:{"cache-control":"no-cache"}}).done(function(data){$(".addtomycharitiesModal").find('.amcmodal-text').html(data);}).fail(function(data){$(".addtomycharitiesModal").find('.amcmodal-text').html('<p>There was a problem processing your request. Please try again later.</p>');});$(this).next('.addtomycharitiesModal').fadeIn("slow");});$(".vote-charity").click(function(e){checkForFallback();e.preventDefault();e.stopPropagation();var target$=$(e.currentTarget);var promisevote=$.ajax({type:"POST",url:"/my/charities/votechar.cfm",data:{ein:target$.data("ein"),after:window.location.pathname+location.search},cache:false,headers:{"cache-control":"no-cache"}}).done(function(data){$(".votecharityModal").find('.amcmodal-text').html(data);}).fail(function(data){$(".votecharityModal").find('.amcmodal-text').html('<p>There was a problem processing your request. Please try again later.</p>');});$(this).next('.votecharityModal').fadeIn("slow");});$(document).on('click',".addtomycharitiesModal .close-accordian-div",function(){$('.addtomycharitiesModal').fadeOut("slow");});$(".votecharityModal .close-accordian-div").click(function(){$('.votecharityModal').fadeOut("slow");if($('.votecharityModal').find('h3').text()=="Your vote has been counted!"){setTimeout(function(){$('.voteBtn').html('<p>Thank you for voting!</p><p class="voteCount">Total Votes:'+(parseInt($('.voteCount').text().replace('Total Votes: ',''))+1)+'</p>');$('.voteBtn').css('width','221.05px');},1000);}});$(document).on('click',".addtomycharitiesModal .stayonthispage, .addtomycharitiesModal .loginorregister",function(){$('.addtomycharitiesModal').fadeOut("slow");});$('body').click(function(event){if($(event.target).is(".addtomycharitiesModal")){$('.addtomycharitiesModal').fadeOut("slow");}});$('body').click(function(event){if($(event.target).is(".votecharityModal")){$('.votecharityModal').fadeOut("slow");if($('.votecharityModal').find('h3').text()=="Your vote has been counted!"){setTimeout(function(){$('.voteBtn').html('<p>Thank you for voting!</p><p class="voteCount">Total Votes:'+(parseInt($('.voteCount').text().replace('Total Votes: ',''))+1)+'</p>');$('.voteBtn').css('width','221.05px');},1000);}}});$(document).on('submit','form.add-to-my-charities-form',function(e){var target$=$(e.currentTarget);var form$=target$.closest("form");var closesttd=form$.closest('.highlight-matches');var formData=form$.serialize();e.preventDefault();e.stopPropagation();form$.hide();var promise=$.ajax({type:"POST",url:"/my/charities/addchar.cfm",data:formData,cache:false,headers:{"cache-control":"no-cache"}}).done(function(data){$(".addtomycharitiesModal").find('.amcmodal-text').html(data);if($('.emptyheart').length){closesttd.find('.emptyheart').hide();closesttd.find('.redheart').show();}}).fail(function(data){$(".addtomycharitiesModal").find('.amcmodal-text').html('<p>There was a problem processing your request. Please try again later.</p>');});});$(document).on('click','.addtomycharities-nomodal',function(e){e.preventDefault();e.stopPropagation();var target$=$(e.currentTarget);var closesttd=target$.closest('.highlight-matches');if(closesttd.find('.emptyheart').length){ga('send','event','heart-search-results','add','attempt');var posturl="/my/charities/addchar.cfm";var postdata={ein:target$.data("ein"),name:target$.data("charity_name"),MyCharGroupID:$('input.mycharmaingroup').val()};}else if(closesttd.find('.redheart').length){ga('send','event','heart-search-results','remove','attempt');var posturl="/my/charities/removeCharity.cfm";var postdata={theEIN:target$.data("ein")};}
var promise=$.ajax({type:"POST",url:posturl,data:postdata,cache:false,headers:{"cache-control":"no-cache"}}).done(function(data){if(closesttd.find('.emptyheart').length){ga('send','event','heart-search-results','add','success');closesttd.find('.emptyheart').removeClass('emptyheart').addClass('redheart');closesttd.find('.tooltiptext').text('Remove from my charities');}else if(closesttd.find('.redheart').length){ga('send','event','heart-search-results','remove','success');closesttd.find('.redheart').removeClass('redheart').addClass('emptyheart');closesttd.find('.tooltiptext').text('Save to My Charities');}}).fail(function(data){closesttd.find('.emptyheart, .redheart').append('There was a problem processing your request. Please try again later.');});})
$('.deleteRow').click(function(){$(".addtomycharitiesModal").find('.amcmodal-text').html('<div class="windowBox"><h2>Remove Charity?</h2><p>Are you sure you want to remove this charity?</p><button class="btn removeyes">Yes</button><input type="hidden" class="ein" value="'+$(this).attr('id').replace('myChar_','')+'"/></div>');$(".addtomycharitiesModal").fadeIn();});$(document).on('click','.removeyes',function(){var EIN=$.trim($(this).next('input.ein').val());var promise=$.ajax({type:"POST",url:"/my/charities/removeCharity.cfm",data:{theEIN:EIN},cache:false,headers:{"cache-control":"no-cache"}}).done(function(data){$(".addtomycharitiesModal").fadeOut();$('.my-charities-table tr').each(function(){if($.trim($(this).find('a.deleteRow').attr('id'))=="myChar_"+EIN){$(this).hide('slow');}})}).fail(function(data){$(".addtomycharitiesModal").find('.amcmodal-text').html('<p>There was a problem processing your request. Please try again later.</p>');});})
$('.deletevote').click(function(){$(".addtomycharitiesModal").find('.amcmodal-text').html('<div class="windowBox"><h2>Delete Vote?</h2><p>Are you sure you want to delete your vote?</p><button class="btn deleteyes">Yes</button><input type="hidden" class="ein" value="'+$(this).attr('id').replace('Cancel_','')+'"/></div>');$(".addtomycharitiesModal").fadeIn();});$(document).on('click','.deleteyes',function(){var EIN=$.trim($(this).next('input.ein').val());var promise=$.ajax({type:"POST",url:"/my/charities/removeVote.cfm",data:{theEIN:EIN},cache:false,headers:{"cache-control":"no-cache"}}).done(function(data){$(".addtomycharitiesModal").fadeOut();$('#VoteMessage_'+EIN+" p").text('Your vote has been deleted.');}).fail(function(data){$(".addtomycharitiesModal").find('.amcmodal-text').html('<p>There was a problem processing your request. Please try again later.</p>');});})