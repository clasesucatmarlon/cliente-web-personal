import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Auth, Users, Blog, Courses, Menu, Newsletter } from '../pages/admin'
import { AdminLayout } from '../layouts';

const user = { "username": "marlon"}; 
// const user = null; 

export function AdminRouter() {

    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        )
    }

    return (
        <Routes>
            {
                (!user) ? 
                (
                    <Route path='/admin/*' element={loadLayout(AdminLayout, Auth)} />
                ) :
                (
                    <>
                        {
                            ["/admin", "/admin/blog"].map( (item) => (
                                <Route key={item} path={item} element={loadLayout(AdminLayout, Blog)} />
                            ))
                        }
                        <Route path='/admin/users' element={loadLayout(AdminLayout, Users)} />
                        <Route path='/admin/courses' element={loadLayout(AdminLayout, Courses)} />
                        <Route path='/admin/menu' element={loadLayout(AdminLayout, Menu)} />
                        <Route path='/admin/newsletter' element={loadLayout(AdminLayout, Newsletter)} />
                    </>
                )
            }
            
        </Routes>
    )
}