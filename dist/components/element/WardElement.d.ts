import React, { CSSProperties } from 'react';
export interface WardElementProperties {
    element: {
        plugin: string;
        properties?: {
            [key: string]: string;
        };
        url: string;
        element?: string;
        type: string;
    };
    style?: CSSProperties;
}
export declare const WardElement: ({ element, style, }: WardElementProperties) => React.JSX.Element | null;
