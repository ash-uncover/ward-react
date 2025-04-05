import React from 'react';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ward-dev-tools': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
export interface WardDevToolsProperties {
}
export declare const WardDevTools: ({}: WardDevToolsProperties) => React.JSX.Element;
