/* eslint-disable no-process-env */
import React, { Suspense, useEffect, useState } from 'react';

import { loadAppConf } from 'config/appConfig';
import { initializeI18n } from 'config/i18n';
import useFetch from 'foundation/hooks/useFetch';

const InitializeApplication = ({ children }: any) => {
    const [mounted, setMounted]: any = useState(false);
    const { fetch } = useFetch({ cacheTime: Infinity });
    useEffect(() => {
        // Initialize Session from AppConf
        // eslint-disable-next-line no-restricted-globals
        const baseUrl = location.origin + process.env.PUBLIC_URL;
        const endpoints = [
            `${baseUrl}/appConfReact.json`,
            `${baseUrl}/businessConf.json`,
            `${baseUrl}/themes/themes.json`,
            `${baseUrl}/locales/nameSpaces.json`
        ];
        // Initialize the application with configuration file
        // Once this configuration file is completed loaded we can render App components
        Promise.all(endpoints.map((endpoint) => fetch(endpoint))).then(
            ([{ data: config }, { data: businessConfig }, { data: themes }, { data: nameSpaces }]) => {
                const json = { ...config, themes, businessConfig };
                // Load the configuration object which will be used everywhere in the app
                console.log(loadAppConf(json))
                loadAppConf(json);
                
                // Load i18n
                initializeI18n(nameSpaces);
                setMounted(true);
            }
        );
    }, []);

    if (!mounted) return null;
    return <Suspense fallback={null}>{children}</Suspense>;
};

export default React.memo(InitializeApplication);
