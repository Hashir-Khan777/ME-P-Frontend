/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import images from "../../utils/Images";

const RentalCards = (props:any) => {
  const navigate = useNavigate();

    const {data} = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const handleNavigation = (item:any) => {
    const relatedProduct = data
      .filter((obj:any) => obj.name === item.name)
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
            <div className="w-full flex flex-row items-end justify-between">
                <div className="w-[25%] bg-[#F6F6F6] flex flex-row items-center rounded-[10px]">
                  <img src={images.search} className="w-5 h-5 absolute ml-4" />
                  <input placeholder="Search" className={styles.searchInput} />
                </div>
                <span>{`Showing ${currentPage}-${currentItems.length} of ${data?.length} results`}</span>
              </div>
              <div className="flex flex-wrap justify-between mt-8">
                {currentItems.map((item:any, index:number) => {
                  return (
                    <div
                      key={index}
                      className="w-[16rem] h-[22rem] bg-white rounded-lg shadow-md p-4 mb-8">
                      <div className="flex justify-between">
                        <div className='flex flex-row'>
                          <img className="w-3 h-3" src={images.location} />
                          <span className="text-[10px] text-gray-500 ml-1">
                            {item.location}
                          </span>
                        </div>
                        <div className="font-bold text-black text-[10px]">
                          Rs {item.price}
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="font-bold text-[12px]">{item.name}</div>
                        <div className="text-gray-500 text-[10px]">per day</div>
                      </div>
                      <img className="w-[20rem] h-[10rem] mt-2" src={item.image[0]} />
                      <div className="text-gray-600 mt-2 text-[10px]">{item.comment}</div>
                      <div
                        className="bg-yellow text-white font-semibold rounded-md text-center mt-4 py-2 cursor-pointer text-[12px]"
                        onClick={() => handleNavigation(item)}
                      >
                        Read Details
                      </div>
                    </div>
                  );
                })}
              </div>
    </>
  )
}

export default RentalCards