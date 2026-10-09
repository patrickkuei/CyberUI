// The templates `npx cyberui-2045 templates` lists and `create` can fork.
//
// A short hard-coded list on purpose: the CLI ships with the package, so a
// template added later is not here until the next release. The repository is
// the source of truth for the current list, and the `templates` command says so.
//
// `create` only accepts a `name` from this list (it ends up in a shell command
// on Windows, see template-commands.js), so add a template here by hand.

export const TEMPLATES_REPO = 'https://github.com/patrickkuei/cyberui-templates';
// The `user/repo` form `tiged` takes.
export const TEMPLATES_REPO_SLUG = 'patrickkuei/cyberui-templates';

export const TEMPLATES = [
  {
    name: 'monitoring',
    title: 'AI Product Monitoring',
    description:
      'Request volume, latency percentiles, error rate and a live alerts feed for an AI API.',
    preview: 'https://patrickkuei.github.io/cyberui-templates/live/monitoring/',
  },
  {
    name: 'agent-panel',
    title: 'Agent Control Panel',
    description:
      'A conversation, task queue, live status and reasoning trace for an AI assistant, with a human approval step.',
    preview: 'https://patrickkuei.github.io/cyberui-templates/live/agent-panel/',
  },
];
