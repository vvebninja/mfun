import antfu from '@antfu/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default antfu(
  {
    react: true,
    typescript: {
      overrides: {
        'ts/consistent-type-definitions': ['error', 'type'],
      },
    },
  },

  ...pluginQuery.configs['flat/recommended'],
)
