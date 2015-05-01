$(function() {

	var controller = new ScrollMagic.Controller({triggerHook: 'onLeave'});

	// build scene

	/* Band animations */
	var scene = new ScrollMagic.Scene({triggerElement: "#meet-band", duration: 600})
			.setTween("#meetyourband", {opacity: 1.0}) // trigger a TweenMax.to tween
			.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#meet-band", offset: 280})
			.setPin("#meet-band") 
			.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#meet-band", duration: 1000, offset: 200})
			.setTween("#pcb", {left: 660}) // trigger a TweenMax.to tween
			.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#meet-band", duration: 600, offset: 300})
			.setTween("#pcb", {scale: 3.5}) // trigger a TweenMax.to tween
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