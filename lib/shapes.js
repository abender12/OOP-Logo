// Create a class for shape with the ability to choose color
class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
// Create a class that inherits properties as shape class for circle shape
  class Circle extends Shape {
    render() {
      return `<circle cx='50%' cy='50%' r='100' height='100%' fill='${this.color}'>`;
    }
  }
 // Create a class that inherits properties as shape class for square shape
  class Square extends Shape {
    render() {
      return `<rect cx='50%' height='200' width='200' fill='${this.color}'>`;
    }
  }
  // Create a class that inherits properties as shape class for triangle shape
  class Triangle extends Shape {
    render() {
      return `<polygon height='100%' width='100%' points='0,200 300,200 150,0' fill='${this.color}'>`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };