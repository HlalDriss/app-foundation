/* eslint-disable @typescript-eslint/no-var-requires */
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;
module.exports = {
    devServer: {
        port: 3001,
        historyApiFallback: {
            index: '/index.html'        }
    },
    webpack: {
        configure: {
            output: {
                publicPath: 'http://localhost:3001/'            },
            plugins: [
                new ModuleFederation({
                    name: 'foundation',
                    filename: 'remoteEntry.js',
                    remotes: {
                        main: 'dxc_gt_ui_react_standard@http://localhost:3000/remoteEntry.js',
                        config: 'config@http://localhost:3002/remoteEntry.js',
                        foundation: 'foundation@http://localhost:3001/remoteEntry.js'
                                       },
                    exposes: {
                         './Header': './src/Header',
                        './Link':'./src/components/Link/Link' , 
                        './SectionBarTitle':'./src/components/SectionBarTitle/SectionBarTitle' , 
                        './InputBase':'./src/components/InputBase/InputBase' ,
                        './ErrorFallback':'./src/components/ErrorFallback/ErrorFallback',
                          './Button':'./src/components/Button/Button' ,
                          './Grid':'./src/components/Grid/Grid'  ,
                          './BindTextField':'./src/components/BindTextField/BindTextField'  ,
                          // src\hooks\useFetch.tsx
                          './hooks/useFetch':'./src/hooks/useFetch.tsx',
                          './hooks/useQueryResponse':'./src/hooks/useQueryResponse.tsx',
                          './hooks/useQueryFunctions':'./src/hooks/useQueryFunctions.tsx',
                          './hooks/useStepTransactions':'./src/hooks/useStepTransactions.tsx',
                          './containers/InitializeApplication': './src/containers/InitializeApplication/InitializeApplication.tsx'
                            
                    },
                    shared: {
                        ...deps,
                        react: {
                            singleton: true,
                            requiredVersion: deps['react']
                        },
                        'react-dom': {
                            singleton: true,
                            requiredVersion: deps['react-dom']
                        },
                        '@mui/styles': {
                            singleton: true,
                            requiredVersion: deps['@mui/styles']
                        },
                        '@mui/material': {
                            singleton: true,
                            requiredVersion:deps['@mui/material']
                        },
                        'react-redux': {
                            singleton: true,
                            requiredVersion:deps['react-redux'],
                            
                        },
                        'react-query': {
                            singleton: true,
                            requiredVersion:deps['react-query'],
                            
                        },
                        "@reduxjs/toolkit": {
                            singleton: true, // Sharing styles package as singleton
                            requiredVersion:deps['@reduxjs/toolkit'],
                            
                          },
                          "react-i18next": {
                            singleton: true, // Sharing styles package as singleton
                          },
                          "i18next": {
                            singleton: true, // Sharing styles package as singleton
                          },
                          "date-fns": {
                            singleton: true, // Sharing styles package as singleton
                            requiredVersion:deps['date-fns']
                          },
                          "axios": {
                            singleton: true, // Sharing styles package as singleton
                            requiredVersion:deps['axios']
                          },
                          
                    }
                })
            ]
        }
    }
};