const hash = require('object-hash');

function ManifestJsonPlugin(manifest) {
  this.manifest = JSON.stringify(manifest, null, 2);
  this.fileHash = hash.MD5(manifest);
}

ManifestJsonPlugin.prototype.apply = function(compiler) {
  const filename = 'manifest.' + this.fileHash + '.json';
  const fileContent = this.manifest.toString();

  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
      htmlPluginData.html = htmlPluginData.html.replace(
        /(<\/head>)/i,
        `<link rel="manifest" href="/${filename}"></head>`
      );
      callback(null, htmlPluginData);
    });
  });

  compiler.plugin('emit', function(compilation, callback) {
    compilation.assets[filename] = {
      source: function() {
        return fileContent;
      },
      size: function() {
        return fileContent.length;
      }
    };
    callback();
  });

};

module.exports = ManifestJsonPlugin;