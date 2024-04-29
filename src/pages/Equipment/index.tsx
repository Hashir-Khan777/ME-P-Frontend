import React, { useEffect, useState } from "react";
import Header from "../Rentals/Header";
import UserPagination from "../../components/UserPagination";
import styles from "../Rentals/style.module.css";
import { data } from "../Rentals/ProductsData";
import FilterView from "../Rentals/FilterView";
import { IoMdClose } from "react-icons/io";
import FilterSidebar from "../Rentals/FilterSidebar";
import { useNavigate } from "react-router-dom";
import images from "../../utils/Images";
import { useDispatch, useSelector } from "react-redux";
import { getEquipments } from "../../store/actions/equipment.action";
import EquipmentCard from "../../components/Featured Equipments/EqupmentCard";

const Equipment = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);

  const [value, setValue] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const { equipments } = useSelector((state: any) => state.EquipmentReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEquipments());
  }, [dispatch]);

  return (
    <>
      <Header
        title={"Equipment"}
        para={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        }
        subTitle={"HOME > EQUIPMENT"}
      />
      <div className={styles.containerTwo}>
        <div className={styles.secondDiv}>
          {/* {showFilter ? (
              <div className={styles.showFilterDiv}>
                <div className={styles.showFilterDivOne}>
                  <span>Filter</span>
                  <img
                    onClick={() => setShowFilter(false)}
                    src={images.filter}
                    className={styles.hideFilterDivImg}
                  />
                </div>
                <div className={styles.showFilterDivTwo}>
                  <div>Categories</div>
                  <span>All</span>
                  <span>Hydrolic Pumps</span>
                  <span>Engine</span>
                  <span>Filters</span>
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
            ) : (
              <div className={styles.hideFilterDiv}>
                <img
                  src={images.filter}
                  className={styles.hideFilterDivImg}
                  onClick={() => setShowFilter(true)}
                />
                <hr className={styles.hideFilterDivHr} />
              </div>
            )} */}
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
          <div className={styles.secondDivSecond}>
            <div className={styles.searchMainDiv}>
              <div className={styles.searchDiv}>
                <img src={images.search} className={styles.searchImg} />
                <input placeholder="Search" className={styles.searchInput} />
              </div>
              <span>{`Showing ${currentPage}-${currentItems.length} of ${data?.length} results`}</span>
            </div>
            <div className="flex flex-wrap mt-12 max-w-[100%] gap-10 justify-center">
              {equipments.map((item: any) => {
                return <EquipmentCard item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paginationDiv}>
        <UserPagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};
export default Equipment;
