const vscode = require('vscode');
const EasyTreeDataProvider = require('./EasyTreeDataProvider');
module.exports = class DocTreeDataProvider extends EasyTreeDataProvider {
  constructor(){
    super([
      {
        type: 'easywebpack',
        label: `Webpack 工程化方案`,
        collapsibleState: vscode.TreeItemCollapsibleState.None,
        command: {
            title: 'easywebpack 前端工程化解决方案',
            command: 'easy-vs-cli.openLink',
            arguments: ['https://www.yuque.com/easy-team/easywebpack']
        },
      },
      {
        type: 'front-end',
        label: `Vue React 工程化方案`,
        collapsibleState: vscode.TreeItemCollapsibleState.None,
        command: {
            title: '前端工程解决方案',
            command: 'easy-vs-cli.openLink',
            arguments: ['https://www.yuque.com/easy-team/frontend']
        },
      },
      {
        type: 'egg-vue',
        label: `Egg + Vue 工程化方案`,
        collapsibleState: vscode.TreeItemCollapsibleState.None,
        command: {
            title: 'Egg + Vue 工程化方案',
            command: 'easy-vs-cli.openLink',
            arguments: ['https://www.yuque.com/easy-team/egg-vue']
        },
      },
      {
        type: 'egg-react',
        label: `Egg + React 工程化方案`,
        collapsibleState: vscode.TreeItemCollapsibleState.None,
        command: {
            title: 'Egg + React 工程化方案',
            command: 'easy-vs-cli.openLink',
            arguments: ['https://www.yuque.com/easy-team/egg-react']
        },
      },
      {
        type: 'github',
        label: `https://github.com/easy-team`,
        collapsibleState: vscode.TreeItemCollapsibleState.None,
        command: {
            title: 'https://github.com/easy-team',
            command: 'easy-vs-cli.openLink',
            arguments: ['https://github.com/easy-team']
        },
      },
    ]);
  }
}