module.exports = {
  // ... other webpack configurations
  module: {
    rules: [
      // ... other rules
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  }
}
