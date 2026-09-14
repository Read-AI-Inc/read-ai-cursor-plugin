# Maintainer notes (internal)

Not for end users. Publishing / outreach paths for the hosted MCP at `https://api.read.ai/mcp`.

## Marketplace / registry submissions

| Channel | Notes |
| --- | --- |
| Cursor / Grok Bot | Public plugin wrapper + [marketplace publish](https://cursor.com/marketplace/publish) |
| Replit Agent | [Add to Replit](https://replit.com/integrations?mcp=eyJkaXNwbGF5TmFtZSI6IlJlYWQgQUkiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hcGkucmVhZC5haS9tY3AifQ==) (`mcp=` is public base64 of displayName + baseUrl) |
| VS Code | `vscode:mcp/install?...` deeplink and/or Marketplace extension |
| Cline | [mcp-marketplace submission](https://github.com/cline/mcp-marketplace/issues/new?template=mcp-server-submission.yml) |
| Windsurf | Manual config in `CLIENTS.md`; curated store needs Codeium outreach |
| Official MCP Registry | `server.json` → `mcp-publisher` |

## Publish to the official MCP Registry

```bash
# from this repo
curl -L "https://github.com/modelcontextprotocol/registry/releases/latest/download/mcp-publisher_linux_amd64.tar.gz" | tar xz
./mcp-publisher login github
./mcp-publisher publish
```

`server.json` uses registry schema `2025-12-11` (current `CurrentSchemaURL` in modelcontextprotocol/registry). The `2026-07-28` URL on modelcontextprotocol.io is the **protocol** JSON Schema, not `server.json`.
