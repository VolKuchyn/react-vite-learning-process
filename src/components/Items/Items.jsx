import React, { use } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, fetchItems } from "../../redux/items-reducer";
import s from './Items.module.css';
import Item from "./Item";


const Items = () => {

    const items = useSelector((state) => state.items);

    const dispatch = useDispatch();


    let pagesPaginatorsCount = Math.ceil(items.length / items.itemsPerPage)
    let pagesPaginators = []
    for (let i = 1; i <= pagesPaginatorsCount; i++) {
        pagesPaginators.push(i);
    }

    const setPaginator = (p) => {
        dispatch(setPage(p));
    }

    useEffect(() => {
        dispatch(fetchItems({ page: items.currentPage, count: items.itemsPerPage }))
    }, [items.currentPage])


    return (
        <div>


            {pagesPaginators.map(p => (
                <div onClick={() => setPaginator(p)} key={p} className={`${s.paginator} ${items.currentPage === p ? s.activePaginator : ''}`}>{p}</div>))
            }

            {items.isLoading && <p>Завантаження...</p>}

            {items.error && <p>Помилка...</p>}


            <div className={s.gallery}>
                {items.items.map(i => (
                    <Item photo={i.images[0]} title={i.title} price={i.price} />
                ))}

            </div>


        </div>
    )
}

export default Items;