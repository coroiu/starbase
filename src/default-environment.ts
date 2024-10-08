export const defaultEnvironment = {
  config: {
    /**
     * The parallelizer to use for running multiple commands at once.
     * - "built-in": Run commands in parallel using Node.js child processes
     * - "tmux": Run commands in parallel using tmux
     * - "tmux-iterm": Run commands in parallel using tmux, with iTerm-integration (-CC flag)
     *   For more information, see: https://gitlab.com/gnachman/iterm2/-/wikis/TmuxIntegration
     */
    parallelizer: "built-in" as "built-in" | "tmux" | "tmux-iterm",
    /**
     * Whether to use the local SDK repository for building the clients. If true the NPM package
     * will be linked to the local SDK repository, otherwise the SDK will be installed from NPM.
     *
     * Changing this value will require running `npm run install-deps` to take effect.
     */
    useLocalSdk: false,
  },
  repositories: {
    clients: {
      localPath: "repositories/clients",
      gitUri: "git@github.com:bitwarden/clients.git",
    },
    sdk: {
      localPath: "repositories/sdk",
      gitUri: "git@github.com:bitwarden/sdk.git",
    },
    server: {
      localPath: "repositories/server",
      gitUri: "git@github.com:bitwarden/server.git",
    },
  },
  shell: {
    profile: "src/shell/profile.sh",
    // Additional shell profile to load, can't use "~" for home directory for some reason
    customProfile: undefined as string | undefined,
    passthroughVariables: process.env as Record<string, string>,
  },
};
