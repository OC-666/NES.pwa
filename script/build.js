import { context, build } from 'esbuild'

main()

function main() {
  const [is_dev, is_pro] = (() => {
    const mode = process.argv[2]
    return [mode === 'dev', mode === 'pro']
  })()

  /** @type {import('esbuild').BuildOptions} */
  const options = {
    entryPoints: ['src/main.ts'],
    outdir: 'public/_c',
    bundle: true,
    logLevel: 'debug',
  }

  if (is_dev)
    _serve(options)
  else if (is_pro)
    _build(options)
  else
    throw Error('unknown mode')
}

async function _serve(opts) {
  const ctx = await context(opts)
  await ctx.watch()
  await ctx.serve({
    servedir: 'public',
  })
}
async function _build(opts) {
  await build(opts)
}
