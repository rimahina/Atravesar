
	   
var controller = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

//primer avión
	          
TweenMax.set("#avion", {left: "-=40%", top: "+=30", opacity:0});				
var tween = new TweenMax.to("#avion", 3, {top: "+=300",left: "+=80%",opacity:1,ease:Circ.easeOut});	
																			
var scene = new ScrollMagic.Scene({triggerElement: "#lanzaavion1"})
	.setTween(tween)
	.addTo(controller);

//para las fotos
	TweenMax.staggerTo([fotos1, fotos2, fotos3, fotos4, fotos5, fotos6], 1, {scale:0.1, opacity:0.1}, 0);
	var tween = new TweenMax.staggerTo([fotos1, fotos2, fotos3, fotos4, fotos5, fotos6], 1, {scale:1, opacity:1}, 0.25); //para darle un nomre distinto a cada elemento...
	
	var scene = new ScrollMagic.Scene({triggerElement: "#animafotos"})
	.setTween(tween)
	.addTo(controller);										

//primer avión
	          
TweenMax.set("#avion2", {left: "+=40%", top: "-=30", opacity:0});				
var tween = new TweenMax.to("#avion2", 3, {top: "-=300",left: "-=80%", opacity:1,ease:Circ.easeOut});	
																			
var scene = new ScrollMagic.Scene({triggerElement: "#lanzaavion2"})
	.setTween(tween)
	.addTo(controller);
	
	
//ultima foto

TweenMax.set("#final", {opacity:0});				
var tween = new TweenMax.to("#final", 3, {opacity:1,ease:Circ.easeOut});	
																			
var scene = new ScrollMagic.Scene({triggerElement: "#ultimafoto"})
	.setTween(tween)
	.addTo(controller);
	
//Fotos borrosas
	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "100%", ease: Linear.easeNone})
					.addTo(controller2);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "100%", ease: Linear.easeNone})
					.addTo(controller2);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
					.addTo(controller2);
					
	new ScrollMagic.Scene({triggerElement: "#parallax4"})
					.setTween("#parallax4 > div", {y: "100%", ease: Linear.easeNone})
					.addTo(controller2);
