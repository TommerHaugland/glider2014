	$(document).ready(function(){
						$('#toggle').click(function(){
							menu = $('nav ul');
							if(menu.hasClass('togglenone'))
								menu.removeClass('togglenone');
							else
								menu.addClass('togglenone');
						});
					});