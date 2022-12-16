import React from 'react';

export function ClientLayout ( props ) {
    const { children } = props;
    return (
        <div>
            <h2>Estamos en el componente ClientLayout</h2>
            { children }
            
        </div>
    );
}
