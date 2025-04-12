import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Task from '../Task/Task';

import s from './Column.module.css'

const Column = ({ tasks }) => {
    return (
        <div className={s.column} >
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map((t, index) => (
                    <Task id={t.id} title={t.title} key={t.id}/>
                ))}
            </SortableContext>


        </div>
    )
}

export default Column;