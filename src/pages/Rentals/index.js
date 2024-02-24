/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import images from "../../utils/Images";
import styles from "./style.module.css";
import { Slider } from "@mui/material";
import UserPagination from "../../components/UserPagination";
import { useNavigate } from "react-router-dom";
import FilterSidebar from "./FilterSidebar";
import { IoMdClose } from "react-icons/io";
import Header from "./Header";
import ProductsGridView from "./ProductsGridView";
import FilterView from "./FilterView";
const Rentals = () => {
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState([
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
  ]);
  const [value, setValue] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(value);
  return (
    <>
      <div className={styles.container}>
        <Header
          title={"Rentals"}
          para={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          }
          subTitle={"HOME > RENTALS"}
        />
        <FilterView data={data} />
        <div className={styles.paginationDiv}>
          <UserPagination
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};
export default Rentals;
