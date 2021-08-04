function makeModuleNameMapper(srcPath, jsconfigPath) {
  // Get paths from jsconfig
  const { paths } = require(jsconfigPath).compilerOptions

  const aliases = {}

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '/(.*)')
    const path = paths[item][0].replace('/*', '/$1')
    aliases[key] = srcPath + '/' + path
  })
  return aliases
}

const JS_CONFIG_PATH = './jsconfig.json'
const SRC_PATH = '<rootDir>/src'

module.exports = {
  roots: [SRC_PATH],
  moduleNameMapper: makeModuleNameMapper(SRC_PATH, JS_CONFIG_PATH),
  testEnvironment: 'jsdom',
}
