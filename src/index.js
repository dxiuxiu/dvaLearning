import dva from 'dva';
import createLoading from 'dva-loading'

import './index.css';

import routerConfig from './router'

import todoList from './models/todoList'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading())

// 3. Model app.model(model)*n
// app.model(require('./models/example').default);
app.model(todoList)



// 4. Router
app.router(routerConfig);

// 5. Start
app.start('#root');
