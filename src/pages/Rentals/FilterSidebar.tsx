/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from "./style.module.css";
import { Slider } from "@mui/material";
import { IoMdClose } from "react-icons/io";

const FilterSidebar = (props: any) => {
    const { images, value, handleChange, setShowFilter } = props;

    return (
        <>
            <div className="sidebarMobile">
                <div className={styles.showFilterDiv}>
                    <div className={styles.showFilterDivOne}>
                        <span>Filter</span>
                        <img
                            onClick={() => setShowFilter(false)}
                            src={images.filter}
                            className={"w-[18px] h-[20px] cursor-pointer relative"}
                        />
                    </div>
                    <div className={styles.showFilterDivTwo}>
                        <div>Categories</div>
                        <span className="pb-4 text-[12px]">Excavators</span>
                        <span className="pb-4 text-[12px]"> Dozers</span>
                        <span className="pb-4 text-[12px]">Cranes</span>
                        <span className="pb-4 text-[12px]">Loaders</span>
                        <span className="pb-4 text-[12px]">
                            Asphalt, Pavers & Concrete
                        </span>
                        <span className="pb-4 text-[12px]">Roller Compactor</span>
                        <span className="pb-4 text-[12px]">Dredger</span>
                    </div>
                    <div className={styles.showFilterDivThree}>
                        <div>Price</div>
                        <Slider
                            getAriaLabel={() => "Temperature range"}
                            valueLabelDisplay="auto"
                            sx={{ color: "#FFBA3F" }}
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.showFilterDivFour}>
                        <div>70</div>
                        <div>600</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterSidebar