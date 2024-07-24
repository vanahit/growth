import {defineConfig, PluginOption} from 'vite';
import react from '@vitejs/plugin-react';
import {visualizer} from 'rollup-plugin-visualizer';
import terser from "@rollup/plugin-terser";
import viteTsconfigPaths from 'vite-tsconfig-paths';

// Manual chunks configuration
const manualChunks = {
    react: ['react', 'react-dom'],
    'react-router': ['react-router-dom', 'react-router'],
     redux: ['redux'],
    'redux-toolkit': ['@reduxjs/toolkit'],
    'styled-components': ['styled-components'],
    'transition-group': ['react-transition-group'],

};

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        include: ['linked-dep'],
        esbuildOptions: {
            loader: {
                '.ts': 'tsx',
                '.js': 'jsx',
            },
            treeShaking: true,
        },
        exclude: [],
    },
    server: {
        port: 3002,
        open: true, // This will open directly in your browser
    },
    build: {
        outDir: 'build',
        sourcemap: true,
        commonjsOptions: {
            include: [/linked-dep/, /node_modules/],
        },
        rollupOptions: {
            output: {
                manualChunks
            },
        },
    },
    plugins: [
        react(),
        viteTsconfigPaths(),
        terser({
            compress: {
                drop_console: true, // Remove console logs
                drop_debugger: true, // Remove debugger statements
            },
        }),
        visualizer({
            template: 'treemap', // or 'sunburst'
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: 'analyse.html', // will be saved in the project's root
        }) as PluginOption,

    ],

});
