import * as vscode from 'vscode';

const PROVIDER_ID = 'readai.mcp';
const MCP_URL = 'https://api.read.ai/mcp';

export function activate(context: vscode.ExtensionContext): void {
  const version = String(context.extension.packageJSON.version ?? '0.0.0');

  context.subscriptions.push(
    vscode.lm.registerMcpServerDefinitionProvider(PROVIDER_ID, {
      provideMcpServerDefinitions: async () => {
        return [
          new vscode.McpHttpServerDefinition(
            'Read AI',
            vscode.Uri.parse(MCP_URL),
            {},
            version,
          ),
        ];
      },
      resolveMcpServerDefinition: async (server: vscode.McpServerDefinition) => {
        // OAuth is handled by VS Code against the remote MCP (DCR).
        return server;
      },
    }),
  );
}
