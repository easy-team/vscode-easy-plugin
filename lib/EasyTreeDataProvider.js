const TreeViewItem = require('./TreeViewItem');
module.exports = class EasyTreeDataProvider {
  constructor(treeItems = []) {
    this.treeItems = treeItems;
  }

  addTreeItem(option) {
    this.treeItems.push(option);
  }

  async getChildren() {
    return this.treeItems.map(option => {
      return new TreeViewItem(option);
    });
  }

  async getTreeItem(element) {
    return element;
  }
};
