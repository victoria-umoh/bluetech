import path from 'path';
import { fileURLToPath } from 'url';
import streamHttp from 'stream-http';
import httpsBrowserify from 'https-browserify';
import osBrowserify from 'os-browserify/browser';
import streamBrowserify from 'stream-browserify';
import cryptoBrowserify from 'crypto-browserify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    fallback: {
      http: streamHttp,
      https: httpsBrowserify,
      os: osBrowserify,
      stream: streamBrowserify,
      crypto: cryptoBrowserify
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
};
