import Platform from "@/entities/Platform";
import pcImg from "../assets/categories/computer.svg";
import xboxImg from "../assets/categories/xbox.svg";
import psImg from "../assets/categories/playstation.svg";

const platforms: Platform[] = [
  {
    id: 1,
    name: "PC",
    image: pcImg,
  },
  {
    id: 2,
    name: "Xbox",
    image: xboxImg,
  },
  {
    id: 3,
    name: "PlayStation",
    image: psImg,
  },
];

export default platforms;
