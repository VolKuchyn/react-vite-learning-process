import React, { useState } from "react";

import { closestCorners, DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from "@dnd-kit/sortable";
import Column from "./Column/Column";


const DndKit = () => {

    const [tasks, setTasks] = useState([
        { id: 1, title: "1 add some" },
        { id: 2, title: "2 add safhd" },
        { id: 3, title: "3 add adfhjgmt" },
        { id: 4, title: "3 add adfhjgmt" },
        { id: 5, title: "3 add adfhjgmt" },
        { id: 6, title: "3 add adfhjgmt" },
        { id: 7, title: "3 add adfhjgmt" },
        { id: 8, title: "3 add adfhjgmt" },
        { id: 9, title: "3 add adfhjgmt" },
    ])

    const getTaskPos = (id) => tasks.findIndex(task => task.id === id);

    const handleDragEnd = (e) => {
        const { active, over } = e;
        if (active.id === over.id) return;

        setTasks((tasks) => {
            const originalPos = getTaskPos(active.id)
            const newPos = getTaskPos(over.id);

            return arrayMove(tasks, originalPos, newPos)
        })
    }

    return (
        <div>
            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>

                <Column tasks={tasks} />

            </DndContext>

        </div>
    )
}

export default DndKit;