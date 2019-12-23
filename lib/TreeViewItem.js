const vscode = require('vscode');
module.exports = class TreeViewItem extends vscode.TreeItem {
  constructor(options) {
    super(
      options.label,
      options.collapsibleState || vscode.TreeItemCollapsibleState.None,
    );
    this.options = options;
    this.label = options.label;
    this.tooltip = options.tooltip;
    this.command = options.command;
    this.iconPath = options.iconPath;
    this.contextValue = options.type;
  }
};
