# HubSpot Serverless Functions Project

This project contains serverless functions for HubSpot deployment.

## Structure
- `hsproject.json` - Project configuration
- `src/app/app.json` - App configuration  
- `src/serverless.functions/` - Serverless functions (note the .functions suffix!)
  - `serverless.json` - Function endpoints configuration
  - `hello-world.js` - Main function

## Deployment
This project is deployed via GitHub integration to HubSpot.

## Function URL
After deployment, the function will be available at:
`https://content.benchmarkminerals.com/_hcms/api/hello-world`

## Key Requirements (from HubSpot Support)
1. Functions folder MUST end with `.functions` suffix
2. serverless.json must use new schema (no runtime/version fields)
3. Platform version 2025.2 with explicit components declaration