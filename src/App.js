import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './components/Layout';
import { privateRoutes, publicRoutes } from './routes';

const RoutesPublic = () => {
    return publicRoutes.map((route, index) => {
        const Page = route.component;
        let Layout = DefaultLayout;
        if (route.layout) {
            Layout = route.layout;
        } else if (route.layout === null) {
            Layout = Fragment;
        }
        return (
            <Route
                key={index}
                path={route.path}
                element={
                    <Layout>
                        <Page />
                    </Layout>
                }
            />
        );
    });
};

const RoutesPrivate = () => {
    return privateRoutes.map((route, index) => {
        const Page = route.component;
        let Layout = DefaultLayout;
        let isLoggedIn = Boolean(localStorage.getItem('token'));
        if (route.layout) {
            Layout = route.layout;
        } else if (route.layout === null) {
            Layout = Fragment;
        }
        return (
            <Route
                key={index}
                path={route.path}
                element={
                    !isLoggedIn ? (
                        <Navigate replace to="/login" />
                    ) : (
                        <Layout>
                            <Page />
                        </Layout>
                    )
                }
            />
        );
    });
};

function App() {
    return (
        <div className="App">
            <Routes>
                {RoutesPublic()}
                {RoutesPrivate()}
            </Routes>
        </div>
    );
}

export default App;
