/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);


class DOM{
	getDOM(ele){
	  return document.querySelector(ele)
	}
  }
  
  let dom = new DOM()
  
  class SearchYuGiOh{
	getCard(){
	  fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
	  .then(res=>res.json())
	  .then(data=>{
		let value = dom.getDOM('input').value.trim().toLowerCase()
		data.data.forEach(ele=>{
		  console.log(ele.name)
		 if(ele.name.toLowerCase()===value){
		  dom.getDOM('.cardName').innerText = ele.name
		  dom.getDOM('.cardEffect').innerText = ele.desc
		  dom.getDOM('.card').src = ele.card_images[0].image_url
		}
		})
		})
	  }
  }
  
  let search = new SearchYuGiOh()
  
	dom.getDOM('#submit').addEventListener('click',search.getCard)
  
  
	class OpenNav{
	 navSlide(){
		document.getElementById("sidebar").style.width = "20%";
		document.getElementById("close").style.display = "block";
		document.getElementById("open").style.display = "none";
		document.querySelector('.sideContent').style.display = 'flex';
	  }
	}
  
	class CloseNav{
	  navSlide() {
		document.getElementById("sidebar").style.width = "0";
		document.getElementById("close").style.display = "none";
		document.getElementById("open").style.display = "block";
		document.querySelector('.sideContent').style.display = 'none';
	  }
	}
  
	let openNav = new OpenNav()
	let closeNav = new CloseNav()
  
	document.querySelector('#close').addEventListener('click',closeNav.navSlide)
	document.querySelector('#open').addEventListener('click',openNav.navSlide)
  
	