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
        this.textElement = `<text x='150' y='125' font-size='60' text-anchor='middle' fill=${this.color}>`;
      }
}

(async function() {
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
    // ...
  })();