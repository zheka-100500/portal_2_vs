const vscode = require('vscode');

function activate(context)
{
    console.log('[P2VSCRIPTS] Ready!');
}

function deactivate()
{
    console.log('[P2VSCRIPTS] Goodbye!');
}

module.exports = {
    activate,
    deactivate
}