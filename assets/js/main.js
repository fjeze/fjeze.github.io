/*
	Lens by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check;

}
var main = (function($) { var _ = {

	/**
	 * Settings.
	 * @var {object}
	 */
	settings: {

		// Preload all images.
			preload: false,

		// Slide duration (must match "duration.slide" in _vars.scss).
			slideDuration: 500,

		// Layout duration (must match "duration.layout" in _vars.scss).
			layoutDuration: 750,

		// Thumbnails per "row" (must match "misc.thumbnails-per-row" in _vars.scss).
			thumbnailsPerRow: 2,

		// Side of main wrapper (must match "misc.main-side" in _vars.scss).
			mainSide: 'right'

	},

	/**
	 * Window.
	 * @var {jQuery}
	 */
	$window: null,

	/**
	 * Body.
	 * @var {jQuery}
	 */
	$body: null,

	/**
	 * Main wrapper.
	 * @var {jQuery}
	 */
	$main: null,

	/**
	 * Thumbnails.
	 * @var {jQuery}
	 */
	$thumbnails: null,

	/**
	 * Viewer.
	 * @var {jQuery}
	 */
	$viewer: null,

	/**
	 * Toggle.
	 * @var {jQuery}
	 */
	$toggle: null,

	/**
	 * Nav (next).
	 * @var {jQuery}
	 */
	$navNext: null,

	/**
	 * Nav (previous).
	 * @var {jQuery}
	 */
	$navPrevious: null,

	/**
	 * Slides.
	 * @var {array}
	 */
	slides: [],

	/**
	 * Current slide index.
	 * @var {integer}
	 */
	current: null,

	/**
	 * Lock state.
	 * @var {bool}
	 */
	locked: false,

	/**
	 * Keyboard shortcuts.
	 * @var {object}
	 */
	keys: {

		// Escape: Toggle main wrapper.
			27: function() {
				_.toggle();
			},

		// Up: Move up.
			38: function() {
				_.up();
			},

		// Down: Move down.
			40: function() {
				_.down();
			},

		// Space: Next.
			32: function() {
				_.next();
			},

		// Right Arrow: Next.
			39: function() {
				_.next();
			},

		// Left Arrow: Previous.
			37: function() {
				_.previous();
			}

	},

	/**
	 * Initialize properties.
	 */
	initProperties: function() {

		// Window, body.
			_.$window = $(window);
			_.$body = $('body');

		// Thumbnails.
			_.$thumbnails = $('#thumbnails');

		// Viewer.
			_.$viewer = $(
				'<div id="viewer">' +
					'<div class="inner">' +

						'<div class="nav-next"></div>' +
						'<div class="nav-previous"></div>' +
						'<div class="toggle"></div>' +
					'</div>' +
					// '<section id="main-profile"><header><span class="avatar"><img src="images/profile-pic1.jpg" alt="" /></span><h1>Vincent van Wingerden</h1><p>Geek</p></header></section>'+

				'</div>'
			).appendTo(_.$body);

		// Nav.
			_.$navNext = _.$viewer.find('.nav-next');
			_.$navPrevious = _.$viewer.find('.nav-previous');

		// Main wrapper.
			_.$main = $('#main');

		// Toggle.
			$('<div class="toggle"></div>')
				.appendTo(_.$main);

			_.$toggle = $('.toggle');

		// IE<9: Fix viewer width (no calc support).
			if (skel.vars.IEVersion < 9)
				_.$window
					.on('resize', function() {
						window.setTimeout(function() {
							_.$viewer.css('width', _.$window.width() - _.$main.width());
						}, 100);
					})
					.trigger('resize');

	},

	/**
	 * Initialize events.
	 */
	initEvents: function() {

		// Window.

			// Remove is-loading-* classes on load.
				_.$window.on('load', function() {

					_.$body.removeClass('is-loading-0');

					window.setTimeout(function() {
						_.$body.removeClass('is-loading-1');
					}, 100);

					window.setTimeout(function() {
						_.$body.removeClass('is-loading-2');
					}, 100 + Math.max(_.settings.layoutDuration - 150, 0));

				});

			// Disable animations/transitions on resize.
				var resizeTimeout;

				_.$window.on('resize', function() {

					_.$body.addClass('is-loading-0');
					window.clearTimeout(resizeTimeout);

					resizeTimeout = window.setTimeout(function() {
						_.$body.removeClass('is-loading-0');
					}, 100);

				});

		// Viewer.

			// Hide main wrapper on tap (<= medium only).
				_.$viewer.on('touchend', function() {

					if (skel.breakpoint('medium').active)
						_.hide();

				});

			// Touch gestures.
				_.$viewer
					.on('touchstart', function(event) {

						// Record start position.
							_.$viewer.touchPosX = event.originalEvent.touches[0].pageX;
							_.$viewer.touchPosY = event.originalEvent.touches[0].pageY;

					})
					.on('touchmove', function(event) {

						// No start position recorded? Bail.
							if (_.$viewer.touchPosX === null
							||	_.$viewer.touchPosY === null)
								return;

						// Calculate stuff.
							var	diffX = _.$viewer.touchPosX - event.originalEvent.touches[0].pageX,
								diffY = _.$viewer.touchPosY - event.originalEvent.touches[0].pageY;
								boundary = 20,
								delta = 50;

						// Swipe left (next).
							if ( (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta) )
								_.next();

						// Swipe right (previous).
							else if ( (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta)) )
								_.previous();

						// Overscroll fix.
							var	th = _.$viewer.outerHeight(),
								ts = (_.$viewer.get(0).scrollHeight - _.$viewer.scrollTop());

							if ((_.$viewer.scrollTop() <= 0 && diffY < 0)
							|| (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

								event.preventDefault();
								event.stopPropagation();

							}

					});

		// Main.

			// Touch gestures.
				_.$main
					.on('touchstart', function(event) {

						// Bail on xsmall.
							if (skel.breakpoint('xsmall').active)
								return;

						// Record start position.
							_.$main.touchPosX = event.originalEvent.touches[0].pageX;
							_.$main.touchPosY = event.originalEvent.touches[0].pageY;

					})
					.on('touchmove', function(event) {

						// Bail on xsmall.
							if (skel.breakpoint('xsmall').active)
								return;

						// No start position recorded? Bail.
							if (_.$main.touchPosX === null
							||	_.$main.touchPosY === null)
								return;

						// Calculate stuff.
							var	diffX = _.$main.touchPosX - event.originalEvent.touches[0].pageX,
								diffY = _.$main.touchPosY - event.originalEvent.touches[0].pageY;
								boundary = 20,
								delta = 50,
								result = false;

						// Swipe to close.
							switch (_.settings.mainSide) {

								case 'left':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
									break;

								case 'right':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
									break;

								default:
									break;

							}

							if (result)
								_.hide();

						// Overscroll fix.
							var	th = _.$main.outerHeight(),
								ts = (_.$main.get(0).scrollHeight - _.$main.scrollTop());

							if ((_.$main.scrollTop() <= 0 && diffY < 0)
							|| (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

								event.preventDefault();
								event.stopPropagation();

							}

					});
		// Toggle.
			_.$toggle.on('click', function() {
				_.toggle();
			});

			// Prevent event from bubbling up to "hide event on tap" event.
				_.$toggle.on('touchend', function(event) {
					event.stopPropagation();
				});

		// Nav.
			_.$navNext.on('click', function() {
				_.next();
			});

			_.$navPrevious.on('click', function() {
				_.previous();
			});

      $('.interest .dotted').click(function () {
        if($('.interest-content').css('display')== "none"){
          $('.interest-content').slideDown()
        }else{
            $('.interest-content').slideUp()
        }
      })

      $('.work .dotted').click(function () {
        if($('.work-table').css('display')== "none"){
          $('.work-table').fadeIn()
        }else{
          console.log('fade');
            $('.work-table').fadeOut()
        }
      })

		// Keyboard shortcuts.

			// Ignore shortcuts within form elements.
				_.$body.on('keydown', 'input,select,textarea', function(event) {
					event.stopPropagation();
				});

			_.$window.on('keydown', function(event) {

				// Ignore if xsmall is active.
					if (skel.breakpoint('xsmall').active)
						return;

				// Check keycode.
					if (event.keyCode in _.keys) {

						// Stop other events.
							event.stopPropagation();
							event.preventDefault();

						// Call shortcut.
							(_.keys[event.keyCode])();

					}

			});

	},

	/**
	 * Initialize viewer.
	 */
	initViewer: function() {

		// Bind thumbnail click event.
			_.$thumbnails
				.on('click', '.thumbnail', function(event) {

					var $this = $(this);

					// Stop other events.
						event.preventDefault();
						event.stopPropagation();

					// Locked? Blur.
						if (_.locked)
							$this.blur();

					// Switch to this thumbnail's slide.
						_.switchTo($this.data('index'));

				});

		// Create slides from thumbnails.
			_.$thumbnails.children()
				.each(function() {

					var	$this = $(this),
						$thumbnail = $this.children('.thumbnail'),
						s;

					// Slide object.
						s = {
							$parent: $this,
							$slide: null,
							$slideImage: null,
							$slideCaption: null,
							url: $thumbnail.attr('href'),
							loaded: false
						};

					// Parent.
						$this.attr('tabIndex', '-1');

					// Slide.

						// Create elements.
	 						s.$slide = $('<div class="slide"><div class="caption"></div><div class="image"></div></div>');

	 					// Image.
 							s.$slideImage = s.$slide.children('.image');

 							// Set background stuff.
	 							s.$slideImage
		 							.css('background-image', '')
		 							.css('background-position', ($thumbnail.data('position') || 'center'));

						// Caption.
							s.$slideCaption = s.$slide.find('.caption');

							// Move everything *except* the thumbnail itself to the caption.
								$this.children().not($thumbnail)
									.appendTo(s.$slideCaption);

					// Preload?
						if (_.settings.preload) {

							// Force image to download.
								var $img = $('<img src="' + s.url + '" />');

							// Set slide's background image to it.
								s.$slideImage
									.css('background-image', 'url(' + s.url + ')');

							// Mark slide as loaded.
								s.$slide.addClass('loaded');
								s.loaded = true;

						}

					// Add to slides array.
						_.slides.push(s);

					// Set thumbnail's index.
						$thumbnail.data('index', _.slides.length - 1);

				});

	},

	/**
	 * Initialize stuff.
	 */
	init: function() {

		//if it is a mobile device do not load the main profile
		if(mobilecheck() == true){
			console.log('mobile');
			$('#main-profile').css('visibility','hidden')
		}

		// IE<10: Zero out transition delays.
			if (skel.vars.IEVersion < 10) {

				_.settings.slideDuration = 0;
				_.settings.layoutDuration = 0;

			}

		// Skel.
			skel.breakpoints({
				xlarge: '(max-width: 1680px)',
				large: '(max-width: 1280px)',
				medium: '(max-width: 980px)',
				small: '(max-width: 736px)',
				xsmall: '(max-width: 480px)'
			});

		// Everything else.
			_.initProperties();
			_.initViewer();
			_.initEvents();

		// Initial slide.
			window.setTimeout(function() {

				// Show first slide if xsmall isn't active or it just deactivated.
					skel.on('-xsmall !xsmall', function() {

						if (_.current === null)
							_.switchTo(0, true);

					});

			}, 0);

	},

	/**
	 * Switch to a specific slide.
	 * @param {integer} index Index.
	 */
	switchTo: function(index, noHide) {

		// Already at index and xsmall isn't active? Bail.
			if (_.current == index
			&&	!skel.breakpoint('xsmall').active)
				return;

		// Locked? Bail.
			if (_.locked)
				return;

		// Lock.
			_.locked = true;

		// Hide main wrapper if medium is active.
			if (!noHide
			&&	skel.breakpoint('medium').active
			&&	skel.vars.IEVersion > 8)
				_.hide();

		// Get slides.
			var	oldSlide = (_.current !== null ? _.slides[_.current] : null),
				newSlide = _.slides[index];

		// Update current.
			_.current = index;

		// Deactivate old slide (if there is one).
			if (oldSlide) {

				// Thumbnail.
					oldSlide.$parent
						.removeClass('active');

				// Slide.
					oldSlide.$slide.removeClass('active');

			}

		// Activate new slide.

			// Thumbnail.
				newSlide.$parent
					.addClass('active')
					.focus();

			// Slide.
				var f = function() {

					// Old slide exists? Detach it.
						if (oldSlide)
							oldSlide.$slide.detach();

					// Attach new slide.
						newSlide.$slide.appendTo(_.$viewer);

					// New slide not yet loaded?
						if (!newSlide.loaded) {

							window.setTimeout(function() {

								// Mark as loading.
									newSlide.$slide.addClass('loading');

								// Wait for it to load.
									$('<img src="' + newSlide.url + '" />').on('load', function() {
									//window.setTimeout(function() {

										// Set background image.
											newSlide.$slideImage
												.css('background-image', 'url(' + newSlide.url + ')');

										// Mark as loaded.
											newSlide.loaded = true;
											newSlide.$slide.removeClass('loading');

										// Mark as active.
											newSlide.$slide.addClass('active');

										// Unlock.
											window.setTimeout(function() {
												_.locked = false;
											}, 100);

									//}, 1000);
									});

							}, 100);

						}

					// Otherwise ...
						else {

							window.setTimeout(function() {

								// Mark as active.
									newSlide.$slide.addClass('active');

								// Unlock.
									window.setTimeout(function() {
										_.locked = false;
									}, 100);

							}, 100);

						}

				};

				// No old slide? Switch immediately.
					if (!oldSlide)
						(f)();

				// Otherwise, wait for old slide to disappear first.
					else
						window.setTimeout(f, _.settings.slideDuration);

	},

	/**
	 * Switches to the next slide.
	 */
	next: function() {

		// Calculate new index.
			var i, c = _.current, l = _.slides.length;

			if (c >= l - 1)
				i = 0;
			else
				i = c + 1;

		// Switch.
			_.switchTo(i);

	},

	/**
	 * Switches to the previous slide.
	 */
	previous: function() {

		// Calculate new index.
			var i, c = _.current, l = _.slides.length;

			if (c <= 0)
				i = l - 1;
			else
				i = c - 1;

		// Switch.
			_.switchTo(i);

	},

	/**
	 * Switches to slide "above" current.
	 */
	up: function() {

		// Fullscreen? Bail.
			if (_.$body.hasClass('fullscreen'))
				return;

		// Calculate new index.
			var i, c = _.current, l = _.slides.length, tpr = _.settings.thumbnailsPerRow;

			if (c <= (tpr - 1))
				i = l - (tpr - 1 - c) - 1;
			else
				i = c - tpr;

		// Switch.
			_.switchTo(i);

	},

	/**
	 * Switches to slide "below" current.
	 */
	down: function() {

		// Fullscreen? Bail.
			if (_.$body.hasClass('fullscreen'))
				return;

		// Calculate new index.
			var i, c = _.current, l = _.slides.length, tpr = _.settings.thumbnailsPerRow;

			if (c >= l - tpr)
				i = c - l + tpr;
			else
				i = c + tpr;

		// Switch.
			_.switchTo(i);

	},

	/**
	 * Shows the main wrapper.
	 */
	show: function() {

		// Already visible? Bail.
			if (!_.$body.hasClass('fullscreen'))
				return;

		// Show main wrapper.
			_.$body.removeClass('fullscreen');
			$('#main-profile').css('visibility','hidden')
		// Focus.
			_.$main.focus();

	},

	/**
	 * Hides the main wrapper.
	 */
	hide: function() {

		// Already hidden? Bail.
			if (_.$body.hasClass('fullscreen'))
				return;

		// Hide main wrapper.
			_.$body.addClass('fullscreen');
			$('#main-profile').css('visibility','visible')

		// Blur.
			_.$main.blur();

	},

	/**
	 * Toggles main wrapper.
	 */
	toggle: function() {

		if (_.$body.hasClass('fullscreen'))
			_.show();
		else
			_.hide();

	},

}; return _; })(jQuery); main.init();
