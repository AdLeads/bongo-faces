module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bongo-faces/'
    : '/',
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
