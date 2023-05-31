import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance
} from 'webpack';

import { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const {
    isDev,
    paths
  } = options;

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),

    new ProgressPlugin(),

    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),

    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: 'write-references'
      }
    })
  ];

  const developmentPlugins = [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ];

  const productionPlugins = [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ];

  return isDev
    ? plugins.concat(developmentPlugins)
    : plugins.concat(productionPlugins);
};
