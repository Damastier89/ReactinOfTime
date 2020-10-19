let startTime = new Date().getTime();

function getRandomColor() {
    let letters = "0123456789ABCDEF".split('');
    let color = "#";
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector('.shape').onclick = function() {
	let shape = document.querySelector('.shape');
	shape.style.display = 'none';
    let finishTime = new Date().getTime();
    let reactionTime = (finishTime - startTime) / 1000 ;
    document.querySelector('.reactionTime').innerHTML = reactionTime + ' seconds.';
    setTimeout(shapeVisible , Math.random() * 2000);
};

let shapeVisible = function() {
	let shape = document.querySelector('.shape');
    let top = Math.random() * 500;
	let left = Math.random() * 700;
	let width = Math.random() * 350 + 50;
    shape.style.top = top + 'px';
	shape.style.left = left + 'px';
	shape.style.width = width + 'px';

	if (Math.random() < 0.3) {
		shape.style.borderRadius = '50%';
        shape.style.backgroundColor = getRandomColor();
        shape.style.borderBottom = '0';
	} else if (Math.random() >= 0.3 && Math.random() <= 0.7){
		shape.style.borderRadius = '0';
        shape.style.backgroundColor = getRandomColor();
        shape.style.borderBottom = '0';
	} else if (Math.random() > 0.7){
		shape.style.borderRadius = '0';
		shape.style.left = '0';
		shape.style.width = '0';
		shape.style.borderLeft = '50px solid transparent';
		shape.style.borderRight = '50px solid transparent';
		shape.style.borderBottom = '100px solid' + getRandomColor();
		shape.style.backgroundColor = 'transparent';
	}

    document.querySelector('.shape').style.display = 'block';
    startTime = new Date().getTime();
};

setTimeout(shapeVisible , Math.random() * 3000);

