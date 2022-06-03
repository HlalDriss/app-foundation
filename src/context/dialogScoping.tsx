import React from 'react';

export interface SettingInterface {
    mainBaId?: string;
}

const dialogScoping = React.createContext<SettingInterface>({});

export default dialogScoping
