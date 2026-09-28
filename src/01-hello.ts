type Status = 'todo' | 'in-progress' | 'done'

type Task = {
    id: number
    title: string
    status: Status
    done: boolean
}

const task: Task = {
    id: 1,
    title: 'Learn TypeScript',
    status: 'in-progress',
    done: false
}