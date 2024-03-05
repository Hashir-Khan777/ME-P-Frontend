/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import images from "../../utils/Images";
import styles from "./style.module.css";

const RelatedRentals = (props: any) => {
    const { relatedProduct } = props;
    return (
        <>
            {relatedProduct.length > 0 && (
                <div className={styles.relatedProductDiv}>
                    <h1>Related Parts</h1>
                    <div className={styles.RelatedProductMapMainDiv}>
                        <div className="flex flex-wrap justify-center mt-12 m-auto max-w-[100%]">

                            {relatedProduct.map((item: any, index: number) => {
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
                                            <div className={styles.cardTextBold}>Rs {item.price}</div>
                                        </div>
                                        <div className={styles.readDetailsCardRow}>
                                            <div className={styles.cardTextBold}>{item.name}</div>
                                            <div className={styles.cardDayText}>per day</div>
                                        </div>
                                        <img className={styles.cardImage} src={item.image[0]} />
                                        <div className={styles.cardCommentText}>{item.comment}</div>
                                        <div
                                            className={styles.readDetailsBtn}
                                        // onClick={() => {
                                        //   handleNavigation(item);
                                        // }}
                                        >
                                            Read Details
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default RelatedRentals