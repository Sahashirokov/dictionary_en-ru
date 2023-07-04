module.exports = {
    devServer: {
        proxy: {
            '/addWord': {
                target: 'http://localhost:8080', // Change this to the correct URL of your Node.js server
                ws: true,
                changeOrigin: true
            }
            // Add other proxy configurations here if needed
        }
    }
};