const path = require('path');

module.exports = {
    modules: [
        "node_modules",
        path.resolve(__dirname, '../../../')
    ],
    extensions: ['.js', '.json', '.css', 'less'],
    alias: {
        'rjd': path.resolve(__dirname, '../../../components/')
    }
};