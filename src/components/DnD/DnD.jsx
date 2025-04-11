import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { fetchItems, reorderItems } from "../../redux/dnd-reducer";


import s from './Dnd.module.css';

const DnD = () => {

    const dispatch = useDispatch();
    const items = useSelector((state) => (state.dnd.items))


    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);


    const itemCards = items?.map((i, index) => (
        <Draggable draggableId={String(i.id)} key={i.id} index={index}>
            {(provided) => (
                <div className={s.itemWrapper} {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                    {i.title}
                </div>

            )}


        </Draggable>
    ))

    const handleDragDrop = (results) => {
        const { source, destination, type } = results;
        if(!destination) return;
        if(source.droppableId === destination.droppableId && source.index === destination.index) return;

        if(type === 'group') {
            const reorderedItems = [...items];
            const sourceIndex = source.index
            const destinationIndex = destination.index;

            const [removedItem] = reorderedItems.splice(sourceIndex, 1)
            reorderedItems.splice(destinationIndex, 0, removedItem)
            dispatch(reorderItems(reorderedItems));
        }


    }


    return (
        <div className={s.pageWrapper}>

            <DragDropContext onDragEnd={handleDragDrop}>

                <h1>
                    Items
                </h1>

                <Droppable droppableId="gallery-container" direction="vertical" type="group">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}  className={s.galleryWrapper}>
                            {itemCards}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>



            </DragDropContext>

        </div>
    );
}

export default DnD;