const shell = require('shelljs');
const inquirer = require('inquirer');
inquirer.prompt([
  {
    name: 'type',
    type: 'list',
    message: '请选择本次修改的类型:',
    choices: [
      'fix',
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'perf',
      'refactor',
      'revert',
      'style',
      'test',
      'ui'
    ],
    default: 0
  },
  {
    name: 'scope',
    type: 'input',
    message: '请输入本次修改的范围:',
    default: '*'
  },
  {
    name: 'subject',
    type: 'input',
    message: '本次修改简单描述为:',
    default: '暂无'
  },
  {
    name: 'body',
    type: 'input',
    message: '本次修改详细描述为:',
    default: ''
  },
  {
    name: 'hasBreakChanges',
    type: 'list',
    message: '本次修改是否包含 break changes:',
    choices: [
      '是',
      '否'
    ],
    default: 1
  },
  {
    name: 'breakChanges',
    type: 'input',
    message: '本次修改包的 break changes:',
    when: answers => answers.hasBreakChanges === '是',
    default: '暂无'
  },
  {
    name: 'issues',
    type: 'input',
    message: '本次修改的相关的 issues:',
    default: ''
  }
]).then(({ type, scope, subject, body, hasBreakChanges, breakChanges, issues }) => {
  const m = `
${type}(${scope}): ${subject}

${body || ''}

${hasBreakChanges === '是' ? breakChanges : ''}
${issues || ''}
`;

  shell.exec('git add .');
  shell.exec(`git commit -m '${m}'`);
  shell.exec('git push');
});
