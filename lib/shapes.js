// Create a class for shape with the ability to choose color
class Shape {
    constructor() {
        this.color = '';
    }

    chooseColor(color) {
        this.color = (color);
    }
}
// Extend shape properties to circle shape
class Circle extends Shape {
    render() {
        return `<circle cx='50%' cy='50%' r='100' height='100%' fill='${this.color}'>`;
    }
}
// Extend shape properties to square shape
class Square extends Shape {
    render() {
        return `<rect cx='50%' height='200' width='200' fill='${this.color}'>`;
    }
}
// Extend shape properties to triangle shape
class Triangle extends Shape {
    render() {
        return `<polygon height='100%' width='100%' points='0,200 300,200 150,0' fill='${this.color}'>`;
    }
};
// Export the module
module.exports = {Circle, Square, Triangle};