/* 
	Moni_ NBA rookies data vis
	mmp 310 
*/

var rookies;
function preload() {
	rookies = loadTable('rookies.csv', 'csv', 'header');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(20);
	textAlign(LEFT, CENTER);
	noStroke();
}

function draw() {
	background(155);
	
	for (let i = 0; i < rookies.getRowCount(); i++) {
		let ast = rookies.getNum(i, 'ASTper');
		let h = map(ast, 0, 8, 0, height);
		let w = 20;
		let x = i * (w + 3); 
		
		fill('purple');
		if (mouseX > x && mouseX < x + w) {
			let player = rookies.getString(i, 'Player').split('\\')[0];
			text(player, 100, 200);
			fill("#89D2DC");
			text(ast, 120, 250);
			fill('red');
			text(ast,x,150);
			fill('green');
		}
		rect(x, height - h, w, h);
	}
}











