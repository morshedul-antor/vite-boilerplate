import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { HomePage, DashboardPage, ErrorPage } from '../pages'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />

            <Route path="/*" element={''}>
                <Route path="dashboard" element={<DashboardPage />} />
            </Route>
        </Route>,
    ),
)
