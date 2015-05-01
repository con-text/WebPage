$(function() {

	var controller = new ScrollMagic.Controller({triggerHook: 'onLeave'});
	var entryController = new ScrollMagic.Controller({triggerHook: 'onEnter'});
		
	/* Landing page animations */
	new ScrollMagic.Scene({triggerElement: "#this-nimble", duration: 1000})
		.setTween("#icons-layer-1", {opacity: 0.2}) // trigger a TweenMax.to tween
		.setTween("#icons-layer-2", {opacity: 1}) // trigger a TweenMax.to tween
		.addTo(controller);
			
	/* Band animations */
	new ScrollMagic.Scene({triggerElement: "#meet-band", duration: 600})
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

	/* Team animations */
	new ScrollMagic.Scene({triggerElement: "#meet-team", duration: 400})
			.setTween("#meetourteam", {opacity: 1.0}) // trigger a TweenMax.to tween
			.addTo(controller);
});