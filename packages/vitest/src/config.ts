import type { ConfigEnv, UserConfig as ViteUserConfig } from 'vite'
import type { ProjectConfig } from './types'

export interface UserWorkspaceConfig extends ViteUserConfig {
  test?: ProjectConfig
}

// will import vitest declare test in module 'vite'
export { configDefaults, defaultInclude, defaultExclude, coverageConfigDefaults } from './defaults'
export { mergeConfig } from 'vite'

export type { ConfigEnv, ViteUserConfig as UserConfig }
export type UserConfigFn = (env: ConfigEnv) => ViteUserConfig | Promise<ViteUserConfig>
export type UserConfigExport = ViteUserConfig | Promise<ViteUserConfig> | UserConfigFn

export type UserProjectConfigFn = (env: ConfigEnv) => UserWorkspaceConfig | Promise<UserWorkspaceConfig>
export type UserProjectConfigExport = UserWorkspaceConfig | Promise<UserWorkspaceConfig> | UserProjectConfigFn

export function defineConfig(config: UserConfigExport) {
  return config
}

export function defineProject(config: UserProjectConfigExport) {
  return config
}

export function defineWorkspace(config: (string | (UserProjectConfigExport & { extends?: string }))[]) {
  return config
}
