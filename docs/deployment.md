# Website deployment

Live website: https://valerii-kovalenko.pages.dev

Cloudflare dashboard: https://dash.cloudflare.com/b8f4ec089aaa32c3f451ae12ada9c5e4/workers-and-pages

Choose **Compute → Workers & Pages → valerii-kovalenko**. This is a Pages Direct Upload project. It does not need the Cloudflare GitHub App.

## Update flow

1. Create a branch, make the change and open a pull request against `main`.
2. GitHub Actions installs locked dependencies with Node.js 22, runs tests and lint, builds all pages, and runs HTTP smoke checks in local Wrangler.
3. Merge the passing change to `main`.
4. Once the credentials below are configured, the same workflow uploads the verified `out` directory to the existing Cloudflare Pages project. Failed checks prevent deployment. Pull requests never deploy or receive the Cloudflare token.

Actions: https://github.com/vallkee09/ValidKey/actions

Manual redeployment is available through **Actions → Validate and deploy website → Run workflow**, using the `main` branch.

## One-time deployment credentials

The Cloudflare MCP OAuth connection belongs to the local assistant session. GitHub Actions needs its own credential.

1. Create a Cloudflare API token named `ValidKey GitHub Actions`, restricted to this Cloudflare account, with **Account → Cloudflare Pages → Edit**. Do not add DNS, billing, token-management or unrelated permissions. Choose an expiration date suitable for the maintenance schedule.
2. Save it directly in https://github.com/vallkee09/ValidKey/settings/secrets/actions as a repository secret named `CLOUDFLARE_API_TOKEN`. Never paste it into source code, issues, pull requests, logs or chat.
3. In https://github.com/vallkee09/ValidKey/settings/variables/actions add `CLOUDFLARE_DEPLOY_ENABLED` with value `true`.
4. Run the workflow on `main` and verify the deployment and website.

The account ID is an identifier, not a credential; the workflow contains the target account explicitly. The token is supplied only to the deployment step. The workflow uses read-only GitHub permissions and pinned GitHub Action revisions.

Official guide: https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/

## Indexing and domains

The current launch remains public but `noindex`, with `robots.txt` disallowing crawling. `SITE_URL` is set to the live HTTPS origin; `SITE_INDEXABLE` stays `false` in the workflow until the owner approves indexing. The smoke checks currently enforce this policy and must be updated when indexing is enabled.

A custom domain is optional. Built-in Pages Git integration cannot be added to this Direct Upload project; GitHub Actions provides automatic updates without replacing the project or URL.

## Rollback

Cloudflare keeps deployment history under the project's **Deployments** page. An approved rollback can restore a previous successful production deployment. Reverting the corresponding Git commit and merging the revert keeps repository history consistent with production.
