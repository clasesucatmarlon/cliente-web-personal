import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/web';
// import { PageError } from '../pages/web/PageError';

export function WebRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='*' element={<PageError />} /> */}
        </Routes>
    )
}
