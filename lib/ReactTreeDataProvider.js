const vscode = require('vscode');
const EasyTreeDataProvider = require('./EasyTreeDataProvider');
module.exports = class ReactTreeDataProvider extends EasyTreeDataProvider {
  constructor() {
    super([{
      type: 'react',
      label: `React + Webpack 单页面应用`,
      command: {
          title: 'React + Webpack 纯前端单页面应用',
          command: 'easy-vs-cli.init',
          arguments: ['easywebpack-react-boilerplate']
      },
    },{
      type: 'react',
      label: `AntD + Webpack 单页面应用`,
      command: {
          title: 'React + AntD + Webpack 纯前端单页面应用',
          command: 'easy-vs-cli.init',
          arguments: ['easywebpack-react-antd-boilerplate']
      },
    },{
      type: 'react',
      label: `Egg + React 单页面应用`,
      command: {
          title: 'Egg + React 单页面前端渲染应用',
          command: 'easy-vs-cli.init',
          arguments: ['egg-react-webpack-spa-boilerplate']
      },
    },{
      type: 'react',
      label: `Egg + AntD 单页面应用`,
      command: {
          title: 'Egg + AntD 单页面应用',
          command: 'easy-vs-cli.init',
          arguments: ['egg-react-webpack-antd-boilerplate']
      },
    },{
      type: 'react',
      label: `Egg + React 多页面应用`,
      command: {
          title: 'Egg + React 多页面服务端渲染应用',
          command: 'easy-vs-cli.init',
          arguments: ['egg-react-webpack-mpa-boilerplate']
      },
    },{
      type: 'react',
      label: `Egg + React + TypeScript 应用`,
      command: {
          title: 'Egg + React + TypeScript 服务端渲染应用',
          command: 'easy-vs-cli.init',
          arguments: ['egg-react-typescript-boilerplate']
      },
    }]);
  }
}