// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const os = require('os');
const path = require('path');
const vscode = require('vscode');
const VueTreeDataProvider = require('./lib/VueTreeDataProvider');
const ReactTreeDataProvider = require('./lib/ReactTreeDataProvider');
const DocTreeDataProvider = require('./lib/DocTreeDataProvider');
const DownLoad = require('./lib/DownLoad');
const downLoad = new DownLoad();
function createCommand(context, name, callback) {
    const command = vscode.commands.registerCommand(name, callback);
    context.subscriptions.push(command);
}
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    vscode.window.showInformationMessage('easy-cli.app.react');
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    createCommand(context, 'easy-vs-cli.openLink', function (url) {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
    });
    createCommand(context, 'easy-vs-cli.init', function (args) {
        vscode.window.showInputBox({
            placeHolder: 'Please input project name',
        }).then(value => {
            if (value) {
                const home = os.homedir();
                const root = path.resolve(home, 'easy');
                const name = value || args;
                downLoad.init(root, name, args).then(project => {
                    vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(project), false);
                });
            }
        });       
    });
    // "commands": [
    //     {
    //         "command": "easy-vs-cli.app.react",
    //         "title": "easy:create react app"
    //     },
    //     {
    //         "command": "easy-vs-cli.app.vue",
    //         "title": "easy:create vue app"
    //     }
    // ],
    // createCommand(context, 'easy-vs-cli.app.react', function () {
    //     vscode.window.showInformationMessage('easy-cli.app.react');
    // });
    // createCommand(context, 'easy-vs-cli.app.vue', function () {
    //     vscode.window.showInformationMessage('easy-cli.app.react');
    // });
    vscode.window.registerTreeDataProvider('easy-vs-cli.vue', new VueTreeDataProvider());
    vscode.window.registerTreeDataProvider('easy-vs-cli.react', new ReactTreeDataProvider());
    vscode.window.registerTreeDataProvider('easy-vs-cli.doc', new DocTreeDataProvider());
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;