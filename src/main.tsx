import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'
import { store } from '@/store'
import './index.scss'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)