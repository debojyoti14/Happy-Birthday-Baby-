$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			vw = $(window).width()/2;
			var isMobile = $(window).width() < 768; 
			var gap = isMobile ? 50 : 100; 
			var centerOffset = 50; 

			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw - (gap * 3) - centerOffset},500);
			$('#b22').animate({top:240, left: vw - (gap * 2) - centerOffset},500);
			$('#b33').animate({top:240, left: vw - gap - centerOffset},500);
			$('#b44').animate({top:240, left: vw - centerOffset},500);
			$('#b55').animate({top:240, left: vw + gap - centerOffset},500);
			$('#b66').animate({top:240, left: vw + (gap * 2) - centerOffset},500);
			$('#b77').animate({top:240, left: vw + (gap * 3) - centerOffset},500);
		});

	$('.u-body').fadeOut('fast');

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}
	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	/* 1. Cake Button: Freezes balloons (with mobile logic), forces cake to render, shows flame */
	$('#cake_fadein').click(function(){
		vw = $(window).width()/2;
		
		var isMobile = $(window).width() < 768; // Detects phone screen
		var gap = isMobile ? 50 : 100; // 50px gap on mobile, 100px on PC
		var centerOffset = 50; 

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		$('#b6').attr('id','b66');
		$('#b7').attr('id','b77');
		
		$('#b11').animate({top:240, left: vw - (gap * 3) - centerOffset},500);
		$('#b22').animate({top:240, left: vw - (gap * 2) - centerOffset},500);
		$('#b33').animate({top:240, left: vw - gap - centerOffset},500);
		$('#b44').animate({top:240, left: vw - centerOffset},500);
		$('#b55').animate({top:240, left: vw + gap - centerOffset},500);
		$('#b66').animate({top:240, left: vw + (gap * 2) - centerOffset},500);
		$('#b77').animate({top:240, left: vw + (gap * 3) - centerOffset},500);
		
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);

		// Force the cake layout to bypass any hidden CSS rules
		$('.cake-cover').css('display', 'block'); 
		$('.cake').css('display', 'block').hide().fadeIn('slow');
		$('.fuego').css('display', 'block').hide().fadeIn('slow'); 

		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	/* 2. Candle Button: Blows out the candles */
	$('#light_candle').click(function(){
		$('.fuego').fadeOut('slow'); // Extinguishes flame
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	/* 3. Wish Message Button: Triggers Fireworks! */	
	$('#wish_message').click(function(){
		
		// --- FIREWORKS EFFECT START ---
		var duration = 3 * 1000; // 3 seconds of continuous fireworks
		var end = Date.now() + duration;

		(function frame() {
			// Left side burst
			confetti({
				particleCount: 5,
				angle: 60,
				spread: 55,
				origin: { x: 0, y: 0.8 },
				zIndex: 99999,
				colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#ffffff']
			});
			// Right side burst
			confetti({
				particleCount: 5,
				angle: 120,
				spread: 55,
				origin: { x: 1, y: 0.8 },
				zIndex: 99999,
				colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#ffffff']
			});

			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		}());
		// --- FIREWORKS EFFECT END ---

		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	/* 4. Story Button: Clears fireworks instantly and shows the final message loop */
	$('#story').click(function(){
		// Instantly clear and stop any running fireworks
		try {
			confetti.reset();
		} catch (e) {
			console.log("Confetti reset handled.");
		}

		$(this).fadeOut('slow');
		
		// Fade out the cake, and dynamically collapse the empty space it left behind!
		$('.cake').fadeOut('fast').promise().done(function(){
			
			// --- NEW: Collapse the cake box so the text jumps up below the banner ---
			$('.cake-cover').css({
				'min-height': '0px',
				'margin-top': '0px',
				'height': '0px'
			});
			
			// Bring the message text container up into focus smoothly
			$('.message').css('margin-top', '20px').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('#b11,#b22,#b33,#b44,#b55,#b66,#b77').fadeOut('slow').delay(1000);
					
					// Collapse the message box entirely to leave no empty space
					$('.message').removeClass('message_at_end').css({
						'display': 'none',
						'height': '0px',
						'margin': '0px'
					});
					
					// --- FORCE CHANGER: Pull the final picture template straight up ---
					$('.u-body').css({
						'margin-top': '20px',  /* Places it perfectly tight under the banner */
						'position': 'relative',
						'top': '0px'
					}).fadeIn(5000);
					// -----------------------------------------------------------------
				});
			}
			else{
				msgLoop(i);
			}			

		});
		}
		
		msgLoop(0);
		
		
	});
	
});