$(function() {

	var controller = new ScrollMagic.Controller({triggerHook: 'onLeave'});

	// build scene
	var scene = new ScrollMagic.Scene({
			triggerElement: "#this-nimble", 
			offset: 480})
		.setTween("#icons-layer-1", {opacity: 1}) // trigger a TweenMax.to tween
		.addTo(controller);
			
	/* Band animations */
	scene = new ScrollMagic.Scene({triggerElement: "#meet-band", duration: 600})
			.setTween("#meetyourband", {opacity: 1.0}) // trigger a TweenMax.to tween
			.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#meet-band", offset: 280})
			.setPin("#meet-band") 
			.addTo(controller);

	/* OS Animations */

	new ScrollMagic.Scene({triggerElement: "#meet-os", duration: 600})
			.setTween("#meetyouros", {opacity: 1.0}) // trigger a TweenMax.to tween
			.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#meet-os", offset: 280})
			.setPin("#meet-os") 
			.addTo(controller);		

	new ScrollMagic.Scene({triggerElement: "#meet-team", duration: 400})
			.setTween("#meetourteam", {opacity: 1.0}) // trigger a TweenMax.to tween
			.addTo(controller);
});