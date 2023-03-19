//Config
import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

// Public routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.notfound,
        component: () => <h2>Notfound</h2>,
        layout: null,
    },
];
// Private routes
const privateRoutes = [
    {
        path: config.routes.upload,
        component: Upload,
    },
];

export { publicRoutes, privateRoutes };
