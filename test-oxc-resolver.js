const { ResolverFactory } = require('oxc-resolver');
const path = require('node:path');

const resolver = new ResolverFactory({
  alias: {
    '~': [path.resolve(__dirname, 'src')],
  },
});

const resolution = resolver.sync(process.cwd(), '~/a');

console.log('resolution', resolution);
