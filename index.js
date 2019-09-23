let curColor = 'blue';

$('.peg').click(function() {
		var selectedColor = $(this).attr('class');
		switch (selectedColor) {
			case "peg blue not-selected":
				curColor = 'peg blue';
				break;
			case "peg yellow not-selected":
				curColor = 'peg yellow';
				break;
			case "peg pink not-selected":
				curColor = 'peg pink';
				break;
      case "peg green not-selected":
				curColor = 'peg green';
				break;
      case "peg orange not-selected":
				curColor = 'peg orange';
				break;
		}

$(this).removeClass('not-selected');
		$(this).siblings().addClass('not-selected');
	});

$('.dot').click(function() {
		$(this).toggleClass(curColor);
	});

 $('.power-btn').click(function() {
		$(this).toggleClass('on');
    $('.dot').toggleClass('on');
	});