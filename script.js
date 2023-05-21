//complete this code
class Rectangle {
constructor(width,height){
this._width = width;
this._height=height;
}
get width(){
return this._width;
}
get height(){
return this._height;
}
getArea(){
// let Area = width() * height();
let Area = this._width * this._height;
return Area;
}
}

class Square extends Rectangle {
constructor(side) {
super(side, side);
}
getPerimeter(){
let perimeter = 4 * this._width;
return perimeter;
}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;