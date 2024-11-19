import { AiFillStar } from 'react-icons/ai';

type ShoesType = {
  img: string;
  title: string;
  star: JSX.Element;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
}

export const shoes: ShoesType[] = [
  {
    img: "https://m.media-amazon.com/images/I/61gWIlhX9PL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140.00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers"
  },
  {
    img: "https://m.media-amazon.com/images/I/71JmV9aOUUL._AC_UX575_.jpg",
    title: "Nike Air Max 270",
    star: <AiFillStar className="rating-star" />,
    reviews: "(456 reviews)",
    prevPrice: "$160.00",
    newPrice: "130",
    company: "Nike",
    color: "black",
    category: "sneakers"
  },
  {
    img: "https://m.media-amazon.com/images/I/71-DyJnuOZL._AC_UX575_.jpg",
    title: "Adidas Ultraboost",
    star: <AiFillStar className="rating-star" />,
    reviews: "(289 reviews)",
    prevPrice: "$180.00",
    newPrice: "150",
    company: "Adidas",
    color: "gray",
    category: "running"
  },
  {
    img: "https://m.media-amazon.com/images/I/71LWw6LzQKL._AC_UX575_.jpg",
    title: "Puma RS-X",
    star: <AiFillStar className="rating-star" />,
    reviews: "(212 reviews)",
    prevPrice: "$130.00",
    newPrice: "110",
    company: "Puma",
    color: "red",
    category: "casual"
  },
  {
    img: "https://m.media-amazon.com/images/I/61TJxFkzY-L._AC_UX575_.jpg",
    title: "New Balance 990v5",
    star: <AiFillStar className="rating-star" />,
    reviews: "(345 reviews)",
    prevPrice: "$185.00",
    newPrice: "170",
    company: "New Balance",
    color: "gray",
    category: "running"
  },
  {
    img: "https://m.media-amazon.com/images/I/61GjHjUjmVL._AC_UX575_.jpg",
    title: "Converse Chuck Taylor",
    star: <AiFillStar className="rating-star" />,
    reviews: "(167 reviews)",
    prevPrice: "$60.00",
    newPrice: "50",
    company: "Converse",
    color: "white",
    category: "casual"
  },
  {
    img: "https://m.media-amazon.com/images/I/61Xn7YTqWNL._AC_UX575_.jpg",
    title: "Vans Old Skool",
    star: <AiFillStar className="rating-star" />,
    reviews: "(234 reviews)",
    prevPrice: "$70.00",
    newPrice: "60",
    company: "Vans",
    color: "black",
    category: "casual"
  },
  {
    img: "https://m.media-amazon.com/images/I/71zG9EWnRgL._AC_UX575_.jpg",
    title: "Reebok Classic Leather",
    star: <AiFillStar className="rating-star" />,
    reviews: "(189 reviews)",
    prevPrice: "$80.00",
    newPrice: "70",
    company: "Reebok",
    color: "white",
    category: "casual"
  },
  {
    img: "https://m.media-amazon.com/images/I/61YvCECaHhL._AC_UX575_.jpg",
    title: "Under Armour Charged Assert",
    star: <AiFillStar className="rating-star" />,
    reviews: "(276 reviews)",
    prevPrice: "$100.00",
    newPrice: "85",
    company: "Under Armour",
    color: "black",
    category: "running"
  },
  {
    img: "https://m.media-amazon.com/images/I/71PVT-ZMDTL._AC_UX575_.jpg",
    title: "ASICS Gel-Nimbus 23",
    star: <AiFillStar className="rating-star" />,
    reviews: "(401 reviews)",
    prevPrice: "$160.00",
    newPrice: "140",
    company: "ASICS",
    color: "blue",
    category: "running"
  },
  {
    img: "https://m.media-amazon.com/images/I/61jL-AyBo0L._AC_UX575_.jpg",
    title: "Brooks Ghost 14",
    star: <AiFillStar className="rating-star" />,
    reviews: "(312 reviews)",
    prevPrice: "$130.00",
    newPrice: "115",
    company: "Brooks",
    color: "gray",
    category: "running"
  },
  {
    img: "https://m.media-amazon.com/images/I/71qXVzCLVEL._AC_UX575_.jpg",
    title: "Skechers Go Walk",
    star: <AiFillStar className="rating-star" />,
    reviews: "(198 reviews)",
    prevPrice: "$80.00",
    newPrice: "65",
    company: "Skechers",
    color: "black",
    category: "walking"
  },
  {
    img: "https://m.media-amazon.com/images/I/61VRIz4E5HL._AC_UX575_.jpg",
    title: "Jordan 1 Mid",
    star: <AiFillStar className="rating-star" />,
    reviews: "(512 reviews)",
    prevPrice: "$170.00",
    newPrice: "150",
    company: "Nike",
    color: "red",
    category: "basketball"
  },
  {
    img: "https://m.media-amazon.com/images/I/61dCa7PapSL._AC_UX575_.jpg",
    title: "Adidas Stan Smith",
    star: <AiFillStar className="rating-star" />,
    reviews: "(245 reviews)",
    prevPrice: "$90.00",
    newPrice: "75",
    company: "Adidas",
    color: "white",
    category: "casual"
  },
  {
    img: "https://m.media-amazon.com/images/I/71YmtXbOfyL._AC_UX575_.jpg",
    title: "Nike Air Force 1",
    star: <AiFillStar className="rating-star" />,
    reviews: "(678 reviews)",
    prevPrice: "$110.00",
    newPrice: "95",
    company: "Nike",
    color: "white",
    category: "casual"
  },
  {
    img: "https://m.media-amazon.com/images/I/61B1WD1TKWL._AC_UX575_.jpg",
    title: "Puma Suede Classic",
    star: <AiFillStar className="rating-star" />,
    reviews: "(156 reviews)",
    prevPrice: "$75.00",
    newPrice: "65",
    company: "Puma",
    color: "blue",
    category: "casual"
  },
  {
    img: "https://m.media-amazon.com/images/I/71V3eSoUoJL._AC_UX575_.jpg",
    title: "New Balance 574",
    star: <AiFillStar className="rating-star" />,
    reviews: "(287 reviews)",
    prevPrice: "$100.00",
    newPrice: "85",
    company: "New Balance",
    color: "gray",
    category: "casual"
  },
  {
    img: "https://m.media-amazon.com/images/I/61TJaNTvWyL._AC_UX575_.jpg",
    title: "HOKA ONE ONE Clifton 8",
    star: <AiFillStar className="rating-star" />,
    reviews: "(334 reviews)",
    prevPrice: "$140.00",
    newPrice: "120",
    company: "HOKA",
    color: "white",
    category: "running"
  },
  {
    img: "https://m.media-amazon.com/images/I/61GJlATQDzL._AC_UX575_.jpg",
    title: "Merrell Moab 2",
    star: <AiFillStar className="rating-star" />,
    reviews: "(201 reviews)",
    prevPrice: "$110.00",
    newPrice: "95",
    company: "Merrell",
    color: "brown",
    category: "hiking"
  },
  {
    img: "https://m.media-amazon.com/images/I/71fhqnosm4L._AC_UX575_.jpg",
    title: "Crocs Classic Clog",
    star: <AiFillStar className="rating-star" />,
    reviews: "(412 reviews)",
    prevPrice: "$50.00",
    newPrice: "40",
    company: "Crocs",
    color: "black",
    category: "casual"
  }
];
