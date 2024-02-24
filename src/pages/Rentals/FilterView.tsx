/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import FilterSidebar from "./FilterSidebar";
import styles from "./style.module.css";
import images from "../../utils/Images";
import { IoMdClose } from "react-icons/io";
import ProductsGridView from './ProductsGridView';

const FilterView = (props:any) => {
    const {data} = props
  const [showFilter, setShowFilter] = useState(false);
  const [value, setValue] = useState([0, 100]);
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };
    return (
        <>
            <div className={styles.containerTwo}>
                <div className={styles.secondDiv}>
                    {showFilter ? (
                        <>
                            <div className={styles.sidebarMobile}>
                                <IoMdClose
                                    className={styles.closeIcon}
                                    onClick={() => setShowFilter(false)}
                                />
                                <FilterSidebar
                                    images={images}
                                    setShowFilter={setShowFilter}
                                    value={value}
                                    handleChange={handleChange}
                                />
                            </div>
                        </>
                    ) : (
                        <div className={styles.hideFilterDiv}>
                            <img
                                src={images.filter}
                                className={"w-[22px] h-[24px] cursor-pointer"}
                                onClick={() => setShowFilter(true)}
                            />
                            <hr className={styles.hideFilterDivHr} />
                        </div>
                    )}
                    <ProductsGridView data={data} />
                </div>
            </div>
        </>
    )
}

export default FilterView