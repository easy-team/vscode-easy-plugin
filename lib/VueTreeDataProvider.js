const EasyTreeDataProvider = require('./EasyTreeDataProvider');
module.exports = class VueTreeDataProvider extends EasyTreeDataProvider {
  constructor() {
    super([{
      type: 'vue',
      label: `Vue + Webpack 纯前端单页面应用`,
      command: {
          title: 'Vue + Webpack 纯前端单页面应用',
          command: 'easy-vs-cli.init',
          arguments: ['easywebpack-vue-boilerplate']
      },
    },{
      type: 'vue',
      label: `Egg + Vue + Element 单页面前端渲染应用`,
      command: {
          title: 'Egg + Vue + Element 单页面前端渲染应用',
          command: 'easy-vs-cli.init',
          arguments: ['egg-vue-element-admin-boilerplate']
      },
    },{
      type: 'vue',
      label: `Egg + Vue + Element 单页面服务端渲染应用`,
      command: {
          title: 'Egg + Vue + Element 单页面服务端渲染应用',
          command: 'easy-vs-cli.init',
          arguments: ['egg-vue-webpack-spa-boilerplate']
      },
    },{
      type: 'vue',
      label: `Egg + Vue 多页面服务端渲染应用`,
      command: {
          title: 'Egg + Vue 多页面服务端渲染应用',
          command: 'easy-vs-cli.init',
          arguments: ['egg-vue-webpack-mpa-boilerplate']
      },
    },{
      type: 'vue',
      label: `Egg + Vue + TypeScript 服务端渲染应用`,
      command: {
          title: 'Egg + Vue + TypeScript 服务端渲染应用',
          command: 'easy-vs-cli.init',
          arguments: ['egg-vue-typescript-boilerplate']
      },
    }]);
  }
}