const {Circle, Square, Triangle} = require('./shapes')

// Circle shape test
describe('circle', () => {
    test('should display a circle', () => {
        const shape = new Circle();
        var color = ('blue');
        shape.chooseColor(color);
        expect(shape.render()).toEqual(`<circle cx='50%' cy='50%' r='100' height='100%' fill='${this.color}'>`);
    });
});

// Square shape test
describe('square', () => {
    test('should display a square', () => {
        const shape = new Circle();
        var color = ('red');
        shape.chooseColor(color);
        expect(shape.render()).toEqual(`<rect cx='50%' height='200' width='200' fill='${this.color}'>`);
    });
});

// Triangle shape test
describe('triangle', () => {
    test('should display a triangle', () => {
        const shape = new Circle();
        var color = ('purple');
        shape.chooseColor(color);
        expect(shape.render()).toEqual(`<polygon height='100%' width='100%' points='0,200 300,200 150,0' fill='${this.color}'>`);
    });
});