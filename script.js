//complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}
	getArea(){
		return this._width * this._height;
	}
}

class Square extends Rectangle {
	getPerimeter(){
		return 4 * this._width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
