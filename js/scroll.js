// JavaScript Document
               
	<script>			   
var controller = new ScrollMagic.Controller();
	          
TweenMax.set("#animate2", {left: "-=75%"});
						
var tween = new TimelineMax()
	.to("#animate2", 3, {top: "+=300",left: "+=145%",});
														
							
var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
	.setTween(tween)
	.addIndicators({name: "timeline"}) // add indicators (requires plugin)
	.addTo(controller);

//para las fotos
var tween = new TweenMax.staggerTo([fotos1, fotos2, fotos3, fotos4, fotos5, fotos6], 1, {scale:0.2, opacity:0.3}, 0.25); //para darle un nomre distinto a cada elemento...
	
	var scene = new ScrollMagic.Scene({triggerElement: "#animafotos"})
	.setTween(tween)
	.addTo(controller);										

// set start offset
	TweenMax.set("#animate3", {left: "+=75%"});
// build tween
	var tween = new TimelineMax()
		.to("#animate3", 4, {top: "+=250",left: "-=145%",});
								
	
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger3"})
				.setTween(tween)
				.addIndicators({name: "timeline"}) // add indicators (requires plugin)
				.addTo(controller);


					


						// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);
					
	new ScrollMagic.Scene({triggerElement: "#parallax4"})
					.setTween("#parallax4 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);
					</script>