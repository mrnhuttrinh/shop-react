import App from './components/App';
import Main from './components/Main';
import About from './components/About';
import Inbox from './components/Inbox';
import Message from './components/Message';
import Products from './components/Products';
import NotFound from './components/NotFound';

export default {
    path: '/',
    component: App,
    indexRoute: {
        component: Main 
    },
    childRoutes: [
        {
            path: 'about',
            component: About 
        }, {
            path: 'inbox',
            component: Inbox,
            childRoutes: [{
                path: 'messages(/:id)',
                onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
            }]
        },{
            component: Inbox,
            childRoutes: [{
                path: 'messages(/:id)',
                component: Message
            }]
        }, {
            component: Products,
            path: 'products'
        }, {
            component: NotFound,
            path: '*'
        }
    ]
}