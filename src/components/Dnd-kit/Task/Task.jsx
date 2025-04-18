import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import s from './Task.module.css'

const Task = ({ id, title }) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }


    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className={s.task}>
            <input type="checkbox" className={s.checkbox} />
            {title}
        </div>
    )
}

export default Task