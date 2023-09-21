module.exports = {
    trailingSlash: true,
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      })
      return config
    },
  }
    