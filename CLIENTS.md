# Read AI MCP — client configs

Hosted server: `https://api.read.ai/mcp` (Streamable HTTP, OAuth). Same backend as Claude and ChatGPT.

### Cline (`cline_mcp_settings.json`)

```json
{
  "mcpServers": {
    "read-ai": {
      "type": "streamableHttp",
      "url": "https://api.read.ai/mcp",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

### Windsurf Cascade (`~/.codeium/windsurf/mcp_config.json`)

```json
{
  "mcpServers": {
    "read-ai": {
      "serverUrl": "https://api.read.ai/mcp"
    }
  }
}
```

### VS Code (user / workspace MCP settings)

```json
{
  "servers": {
    "read-ai": {
      "type": "http",
      "url": "https://api.read.ai/mcp"
    }
  }
}
```
