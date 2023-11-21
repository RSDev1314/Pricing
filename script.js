var priceCalculator = document.getElementById('quote-calc');
priceCalculator.onchange = calculatesubtotal;
priceCalculator.onchange();
function calculatesubtotal() {
	var beds = Number(document.getElementById('beds').value) || 0;
	var baths = Number(document.getElementById('baths').value) || 0;
	var extras = 0;
	var move = 0;
	var fridge = 0;
	var oven = 0;
	var dishes = 0;
	var laundry = 0;
		if ( $( "#move-col" ).hasClass( "on" ) ) {  move = 85; }
		if ( $( "#fridge-col" ).hasClass( "on" ) ) { fridge = 15; }
		if ( $( "#oven-col" ).hasClass( "on" ) ) { oven = 15; }
		if ( $( "#dish-col" ).hasClass( "on" ) ) { dishes = 15; }
		if ( $( "#laundry-col" ).hasClass( "on" ) ) { laundry = 35; }
	extras = move + fridge + oven + dishes + laundry;
	var discount = 1;
		if ( $( "#col-once-off" ).hasClass( "on" ) ) {
			discount = 1;
		} else if ( $( "#col-weekly" ).hasClass( "on" ) ) {
			discount = 0.75;
		} else if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
			discount = 0.80;
		} else if ( $( "#col-monthly" ).hasClass( "on" ) ) {
			discount = 0.85;
		}
	var subtotal = (beds + (baths * 29) + extras) * discount;
	document.getElementById("total").innerHTML = "$" + subtotal.toFixed(2);
}

$('#move-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("move").src = "Photo/Detailed.svg";
	} else {
		$$.removeClass('on');
		document.getElementById("move").src = "Photo/Detailed.svg";
	}
	calculatesubtotal();
})
$('#fridge-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("fridge").src = "Photo/fridge.png";
	} else {
		$$.removeClass('on');
		document.getElementById("fridge").src = "Photo/fridge.png";
	}
	calculatesubtotal();
})
$('#oven-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("oven").src = "Photo/oven.png";
	} else {
		$$.removeClass('on');
		document.getElementById("oven").src = "Photo/oven.png";
	}
	calculatesubtotal();
})
$('#dish-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("dish").src = "Photo/cabinet.png";
	} else {
		$$.removeClass('on');
		document.getElementById("dish").src = "Photo/cabinet.png";
	}
	calculatesubtotal();
})
$('#laundry-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
		document.getElementById("laundry").src = "Photo/wood.png";
	} else {
		$$.removeClass('on');
		document.getElementById("laundry").src = "Photo/wood.png";
	}
	calculatesubtotal();
})

$('#col-once-off').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('onceOff');
		// run function to remove all other 'ons' from other oftens
		
	}
	calculatesubtotal();
})
$('#col-weekly').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('weekly');
		
	}
	calculatesubtotal();
})
$('#col-fortnightly').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('fortnightly');
		
	} 
	calculatesubtotal();
})
$('#col-monthly').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('monthly');
		
	} 
	calculatesubtotal();
})

function onlyOne(id) {
	switch (id) {
case 'onceOff':
			//discount = 1;
			// weekly
			if ( $( "#col-weekly" ).hasClass( "on" ) ) {
				$( "#col-weekly" ).removeClass( "on" );
				
			}
			// fortnightly
			if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
				$( "#col-fortnightly" ).removeClass( "on" );
				
			}
			// monthly
			if ( $( "#col-monthly" ).hasClass( "on" ) ) {
				$( "#col-monthly" ).removeClass( "on" );
				
			}
			
break;
case 'weekly':
			//discount = 0.5;
			// Once Off
			if ( $( "#col-once-off" ).hasClass( "on" ) ) {
					$( "#col-once-off" ).removeClass( "on" );
					
				}	
			// fortnightly
			if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
					$( "#col-fortnightly" ).removeClass( "on" );
					
				}
			// monthly
			if ( $( "#col-monthly" ).hasClass( "on" ) ) {
					$( "#col-monthly" ).removeClass( "on" );
					
				}
break;
case 'fortnightly':
			//discount = 0.45;
			// once-off
			if ( $( "#col-once-off" ).hasClass( "on" ) ) {
				$( "#col-once-off" ).removeClass( "on" );
				
			}
			// weekly
			if ( $( "#col-weekly" ).hasClass( "on" ) ) {
				$( "#col-weekly" ).removeClass( "on" );
				
			}
			// monthly
			if ( $( "#col-monthly" ).hasClass( "on" ) ) {
				$( "#col-monthly" ).removeClass( "on" );
				
			}
break;
case 'monthly':
			//discount = 0.4;
			// once- off
			if ( $( "#col-once-off" ).hasClass( "on" ) ) {
				$( "#col-once-off" ).removeClass( "on" );
				
			}
			// weekly
			if ( $( "#col-weekly" ).hasClass( "on" ) ) {
				$( "#col-weekly" ).removeClass( "on" );
				
			}
			// fortnightly
			if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
				$( "#col-fortnightly" ).removeClass( "on" );
				
			}
break;
	}
}
