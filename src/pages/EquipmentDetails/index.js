import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.css";
import images from "../../utils/Images";

export default function EquipmentDetails() {
  const location = useLocation();

  const [data, setData] = useState({
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
  });

  const [productImgIndex, setProductImgIndex] = useState(0);
  const [relatedProduct, setRelatedProduct] = useState([
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
      image: [images.f2, images.f1, images.f3],
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
      image: [images.f3, images.f1, images.f2],
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
      image: [images.f3, images.f1, images.f2],
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

  const handleAdd = () => {
    console.log(data?.image.length - 1);
    const length = data?.image.length - 1;
    if (productImgIndex < length) {
      setProductImgIndex(productImgIndex + 1);
    } else {
      setProductImgIndex(0);
    }
  };

  const handleRemove = () => {
    if (productImgIndex > 0) {
      setProductImgIndex(productImgIndex - 1);
    } else {
      setProductImgIndex(data?.image.length - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        Home / Equipments / <span>{data.name}</span>
      </div>
      <div className={styles.detailsDiv}>
        <div className={styles.productImgDiv}>
          <img
            src={images.leftMove}
            className={styles.leftImg}
            onClick={handleRemove}
          />
          <img
            src={data?.image[productImgIndex]}
            className={styles.productImg}
          />
          <img
            src={images.rightMove}
            className={styles.rightImg}
            onClick={handleAdd}
          />
        </div>
        <div className={styles.detailsDivChild}>
          <div className={styles.userDetailsMainDiv}>
            <div className={styles.userDetailsDiv}>
              <img src={data?.userData?.profileImg} />
              <div>
                <h1>{data?.userData?.name}</h1>
                <h2>{`Member since ${data?.userData?.joiningData}`}</h2>
                <h3>{`See Profile >`}</h3>
              </div>
            </div>
            <div className={styles.addToCardBtn}>{data?.userData?.contact}</div>
            <div className={styles.emailBtn}>
              <img src={images.envelope} />
              {data?.userData?.email}
            </div>
          </div>
          <div className={styles.locationDiv}>
            <h1>Location</h1>
            <div className={styles.flexRow2}>
              <img src={images.location2} />
              <span>{data?.location}</span>
            </div>
          </div>
          <div className={styles.productDetailsDiv}>
            <h1>Details</h1>
            <div className={styles.flexRow}>
              <div>
                <h2>
                  Make: <span>{data?.make}</span>
                </h2>
                <h2>
                  Model: <span>{data?.Model}</span>
                </h2>
                <h2>
                  Category: <span>{data?.category}</span>
                </h2>
              </div>
              <div>
                <h3>
                  Condition: <span>{data?.Condition}</span>
                </h3>
                <h3>
                  SKU: <span>{data?.SKU}</span>
                </h3>
                <h3>
                  Year: <span>{data?.Year}</span>
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.add_idDiv}>{`AD ID ${data?._id}`}</div>
        </div>
      </div>
      <div className={styles.priceDiv}>
        <h1>{data?.name}</h1>
        <h2>{`RS ${data?.price}`}</h2>
        <div className={styles.priceDivLocationDiv}>
          <img src={images.location2} />
          <span>{data?.location}</span>
        </div>
      </div>
      <div className={styles.disDiv}>
        <h1>Description</h1>
        <span>{data?.description}</span>
      </div>
      {/* <div className={styles.reviewDiv}>
        <h1>Reviews</h1>
        {data?.review.map((item, index) => {
          const starArray = Array.from({ length: item.star });
          return (
            <div key={index}>
              <div className={styles.reviewNameStarDiv}>
                <span>{item.name}</span>
                {starArray.map((item, index) => {
                  return <img key={index} src={images.ratingStar} />;
                })}
              </div>
              <span>{`"${item?.title}"`}</span> <br />
              {item.images.map((item, index) => {
                return <img key={index} src={item} />;
              })}
            </div>
          );
        })}
      </div> */}
      {relatedProduct.length > 0 && (
        <div className={styles.relatedProductDiv}>
          <h1>Related Parts</h1>
          <div className={styles.RelatedProductMapMainDiv}>
            {relatedProduct.map((item, index) => {
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
      )}
    </div>
  );
}
