// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: 'react-native-dotenv',
      path: path.join(path.resolve('./env'), '.env'),
      blocklist: null,
      allowlist: null,
      safe: true,
      allowUndefined: true
    }],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx'
        ],
        alias: {
          '@': './src'
        }
      }
    ]
  ]
};
