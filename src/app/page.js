"use client"

import TaskCard from "@/components/TaskCard"
import { useTasks } from "@/context/TasksContext"

export default function Page() {
  const { tasks } = useTasks()

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
