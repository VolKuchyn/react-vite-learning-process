import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchItemById } from "../../../redux/itemPage-reducer";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import s from './ItemPage.module.css';


const ItemPage = (props) => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const item = useSelector((state) => (state.itemPage))

    useEffect(() => {
        dispatch(fetchItemById({ id: id }))
    }, [id])

    return (
        <div>
            {item.isLoading && <p>Is Loading</p>}
            {item.item && item.item.images && item.item.images.length > 0 && (
                <Swiper
                    className={s.mySlider}
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    navigation={
                        {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }
                    }
                    loop={true}
                    pagination={
                        {
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                >
                    {item.item.images.map((image, index) => (
                        <SwiperSlide key={index} className={s.slide}>
                            <img src={image} alt={`Item image ${index}`} className={s.itemImage} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <div className={s.navWrapper}>
                <div className={s.navigation}>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>




            {item.item && (
                <>
                    <p>{item.item.title}</p>
                    <p>{item.item.price}$</p>
                    <p>{item.item.description}</p>
                </>
            )}
        </div>
    )
}

export default ItemPage;