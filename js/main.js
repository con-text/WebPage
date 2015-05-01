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

	// Move the board from the watch to the center and scale
	new ScrollMagic.Scene({triggerElement: "#meet-band", duration: 1000, offset: 400})
			.setTween("#pcb", {left: 670}) // trigger a TweenMax.to tween
			.addTo(controller);
			
	new ScrollMagic.Scene({triggerElement: "#meet-band", duration: 1000, offset: 450})
			.setTween("#pcb", {scale: 3.5}) // trigger a TweenMax.to tween
			.addTo(controller);
	
	// Move the back face too		
	new ScrollMagic.Scene({triggerElement: "#meet-band", duration: 1000, offset: 400})
		.setTween("#pcb-bottom", {left: 670}) // trigger a TweenMax.to tween
		.addTo(controller);
	
	new ScrollMagic.Scene({triggerElement: "#meet-band", duration: 1000, offset: 1200})
		.setTween('#pcb', {transform: 'translateX( -100% ) rotateY( -180deg ) scale(3.5)'})
		.addTo(controller);
	
	new ScrollMagic.Scene({triggerElement: "#meet-band", duration: 1000, offset: 1200})
		.setTween('#pcb-bottom', {transform: 'translateX( -100% ) scale(3.5)'})
		.addTo(controller);
	
	// Now flip both
	
	
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