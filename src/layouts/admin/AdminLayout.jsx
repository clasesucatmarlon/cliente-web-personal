import React from 'react';

export function AdminLayout ( props ) {
    const { children } = props;
    return (
        <div>
            <h2>Estamos usando adminLayout</h2>
            
            { children }
        </div>
    );
}
