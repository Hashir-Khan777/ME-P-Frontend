/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import styles from "./style.module.css";
import images from "../../utils/Images";
import { useNavigate } from "react-router-dom";
import { data } from './FeatureEquipmentData';
const FeatureEquipmentProducts = (props: any) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const handleNavigation = (item: any) => {
        const relatedProduct = data
            .filter((obj: any) => obj.name === item.name)
            .slice(0, 4);
        navigate(`details/${item._id}`, {
            state: {
                data: item,
                relatedProduct,
            },
        });
    };

    return (
        <>
            <div className={styles.secondDivSecond}>
                <div className={styles.mapMainDiv}>
                    {data.map((item: any, index: number) => {
                        return (
                            <div key={index} className={styles.readDetailsCard}>
                                <div className={styles.readDetailsCardRow}>
                                    <div className={styles.readDetailsCardRowRight}>
                                        <img
                                            className={styles.cardLocationImg}
                                            src={images.location}
                                        />
                                        <div className={styles.cardLocationText}>
                                            {item.location}
                                        </div>
                                    </div>
                                    <div className={styles.cardTextBold}>
                                        Rs {item.price}
                                    </div>
                                </div>
                                <div className={styles.readDetailsCardRow}>
                                    <div className={styles.cardTextBold}>{item.name}</div>
                                    <div className={styles.cardDayText}>per day</div>
                                </div>
                                <img className={styles.cardImage} src={item.image[0]} />
                                {/* <div className={styles.cardCommentText}>
                                    {item.comment}
                                </div> */}
                                <div className='flex flex-row justify-around'>
                                    <div>
                                        <p className='text-[#fcb63a] text-[11px] font-semibold'>WEIGHT</p>
                                        <p className='text-[#000] text-[11px] font-semibold'>5,842 Ibs</p>
                                    </div>
                                    <img
                                        className='w-[0.5px]'
                                        src={images.line}
                                        alt="line"
                                    />
                                    <div>
                                        <p className='text-[#fcb63a] text-[11px] font-semibold'>WEIGHT</p>
                                        <p className='text-[#000] text-[11px] font-semibold'>5,842 Ibs</p>
                                    </div>
                                    <img
                                        className='w-[0.5px]'
                                        src={images.line}
                                        alt="line"
                                    />
                                    <div>
                                        <p className='text-[#fcb63a] text-[11px] font-semibold'>WEIGHT</p>
                                        <p className='text-[#000] text-[11px] font-semibold'>5,842 Ibs</p>
                                    </div>


                                </div>
                                <div
                                    className={styles.readDetailsBtn}
                                    onClick={() => {
                                        handleNavigation(item);
                                    }}
                                >
                                    EXPLORE
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default FeatureEquipmentProducts