'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const templateFiles = [
  'build',
  'config',
  'src',
  '.babelrc',
  '.editorconfig',
  '.eslintignore',
  '.eslintrc.js',
  '.gitignore',
  '.postcssrc.js',
  'README.md'
];

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the cat's pajamas ${chalk.red(
          'react-webpack-4-generator'
        )} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'please input project name (react_app)',
        default: 'react_app'
      },
      {
        type: 'input',
        name: 'description',
        message: 'please input project description (react_app)',
        default: 'react_app'
      },
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const { projectName, description } = this.props;
    this.log(this.props);

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        projectName,
        description
      }
    );
    this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('index.html'), {
      projectName,
      description
    });
    templateFiles.forEach(item => {
      this.fs.copy(this.templatePath(item), this.destinationPath(item));
    });
  }

  install() {
    this.installDependencies();
  }
};
