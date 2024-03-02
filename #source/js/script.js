const scrollStep = 500;
if (window.attachEvent) {
	window.attachEvent('onload', addScroll);
	window.attachEvent('onresize', addScroll);
} else if (window.addEventListener) {
	window.addEventListener('load', addScroll, true);
	window.addEventListener('resize', addScroll, true);
	window.addEventListener('load', hideScrollsOnEndPosition, true);
	window.addEventListener('resize', hideScrollsOnEndPosition, true);
}

function addScroll() {
	let scrollContainer = document.querySelector(".testimonials__row");
	let columnsArray = document.querySelectorAll(".testimonials__column");
	let row = document.querySelector(".testimonials__row");
	let scrollRight = document.querySelector(".scroll__right");
	let scrollLeft = document.querySelector(".scroll__left");
	if (window.innerWidth < 700) {
		scrollRight.addEventListener("click", ()=>{
			//right
			scrollContainer.style.scrollBehavior = "smooth";
			scrollContainer.scrollLeft += scrollStep;

			let lastColumn = columnsArray[columnsArray.length -1];
			let rightXLast = lastColumn.getBoundingClientRect().right;
			let rightXRow = row.getBoundingClientRect().right;

			if ((Math.abs(rightXRow + scrollStep ) - Math.abs(rightXLast)) > 5) {
				scrollRight.style.display = 'none';
				scrollLeft.style.display = 'block';
			} 
		}, true);
		scrollLeft.addEventListener("click", ()=>{
			//left
			scrollContainer.style.scrollBehavior = "smooth";
			scrollContainer.scrollLeft -= scrollStep;

			let firstColumn = columnsArray[0];
			let leftXFirst = firstColumn.getBoundingClientRect().left;
			let leftXRow = row.getBoundingClientRect().left;

			if ((Math.abs(leftXRow - scrollStep) - Math.abs(leftXFirst)) > 5) {
				scrollLeft.style.display = 'none';
				scrollRight.style.display = 'block';
			} 

		});
	} else {
		 console.log(window.innerWidth);
		 if (scrollRight != null && window.innerWidth > 700) {
		 	scrollRight.style.display = 'none';
		 }
		 if (scrollLeft != null && window.innerWidth > 700) {
		 	scrollLeft.style.display = 'none';
		 }
	}
}

function hideScrollsOnEndPosition() {
	if (window.innerWidth < 700) {
		let row = document.querySelector(".testimonials__row");
		let columns = document.querySelectorAll(".testimonials__column");
		hideScroll(columns, row, true);
		hideScroll(columns, row, false);
	}
}

function hideScroll(columns, row, isLeft) {
	if (isLeft) {
		let scrollLeft = document.querySelector(".scroll__left");
		let firstColumn = columns[0];
		let firstColumnLeftCoord = firstColumn.getBoundingClientRect().left;
		let rowLeftCoord = row.getBoundingClientRect().left;

		if (rowLeftCoord - firstColumnLeftCoord < 5) {
			scrollLeft.style.display = 'none';
			firstColumn.style.marginLeft = "5px";
		}
	} else {
		let scrollRight = document.querySelector(".scroll__right");
		let lastColumn = columns[columns.length -1];
		let lastColumnRightCoord = lastColumn.getBoundingClientRect().right;
		let rowRightCoord = row.getBoundingClientRect().right;

		if (lastColumnRightCoord - rowRightCoord < 5) {
			scrollRight.style.display = 'none';
			lastColumn.style.marginRight = "5px";
		}
	}
}

function hideScrollsAgain() {
	console.log('yeey: ' + window.innerWidth);
	let scrollRight = document.querySelector(".scroll__right");
	let scrollLeft = document.querySelector(".scroll__left");
	if (window.innerWidth > 700) {
		if (scrollRight != null) {
			scrollRight.style.display = 'none';
		}
		if (scrollLeft != null ) {
			scrollLeft.style.display = 'none';
		}
	}
}