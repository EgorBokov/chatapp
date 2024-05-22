import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { TasksController } from '@/components/organisms/TasksController'

export const App = () => {
    return (
        <MainLayout>
            <TasksController />
        </MainLayout>
    )
}