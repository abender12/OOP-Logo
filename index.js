const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Create a class for svg software to choose text and shape
class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='300' height='200'> ${this.shapeElement}${this.textElement}</svg>`;
  }

  setTextEl(text, color) {
    this.textElement = `<text x='150' y='125' font-size='60' text-anchor='middle' fill=${color}>`;
  }
}

(async function () {
  // Questions for the user to answer in order to create the logo
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 characters to display text on your logo',
    },
    {
      type: 'input',
      name: 'color-text',
      message: 'What color would you like your text to be? Color or hexadecimal number.',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like your logo to be?',
      choices: ['Circle', 'Square', 'Triangle'],
    },
  ];

  const answers = await inquirer.prompt(questions);

  // Process the answers and create the logo
  const logo = new Svg();

  // Set the text element
  logo.setTextEl(answers.text, answers['color-text']);

  // Create the shape element based on the user's choice
  switch (answers.shape) {
    case 'Circle':
      const circle = new Circle();
      circle.setColor('green');
      logo.shapeElement = circle.render();
      break;
    case 'Square':
      const square = new Square();
      square.setColor('blue');
      logo.shapeElement = square.render();
      break;
    case 'Triangle':
      const triangle = new Triangle();
      triangle.setColor('red');
      logo.shapeElement = triangle.render();
      break;
  }

  // Render the logo
  const logoSVG = logo.render();

  // Save the logo to a file
  fs.writeFile('logo.svg', logoSVG, (err) => {
    if (err) {
      console.error('Error saving logo:', err);
    } else {
      console.log('Logo saved successfully!');
    }
  });
})();