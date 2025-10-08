// galleryData.js

import t1 from "../../../assets/images/gallery/laminar6n.jpg"
import t11 from "../../../assets/images/gallery/laminar8.jpg"
import t22 from "../../../assets/images/gallery/laminar9.jpg"
import t33 from "../../../assets/images/gallery/laminar2.png"
import t2 from "../../../assets/images/gallery/bio1.jpg"
import t3 from "../../../assets/images/gallery/fume1.jpg"
import t4 from "../../../assets/images/gallery/Air1.jpeg"
import t5 from "../../../assets/images/gallery/Powder1.jpg"
import b1 from "../../../assets/images/gallery/bio2.jpg"
import b2 from "../../../assets/images/gallery/bio3.jpg"
import b3 from "../../../assets/images/gallery/bio4.jpg"
import b4 from "../../../assets/images/gallery/bio5.jpg"
import b5 from  "../../../assets/images/gallery/bio6.jpg"
import f1 from "../../../assets/images/gallery/fume2.jpg"
import f2 from "../../../assets/images/gallery/fume3.png"
import f3 from "../../../assets/images/gallery/fume4.jpg"
import f4 from "../../../assets/images/gallery/fume5.jpg"
import a1 from "../../../assets/images/gallery/Air1.jpeg"
import a2 from "../../../assets/images/gallery/Air2.jpeg"
import p1 from "../../../assets/images/gallery/Powder1.jpg"
import p2 from "../../../assets/images/gallery/Powder2.jpg"
import o11 from "../../../assets/images/gallery/box1.jpg"
import o1 from "../../../assets/images/gallery/box1.jpg"
import o2 from "../../../assets/images/gallery/box2.jpg"
import s11 from "../../../assets/images/gallery/Ste1.jpg"
import s2 from "../../../assets/images/gallery/Ste2.png"
import s1 from "../../../assets/images/gallery/Ste1.jpg"
import m11 from "../../../assets/images/gallery/modular-room1.jpg"
import m1 from "../../../assets/images/gallery/modular-room1.jpg"
import m2 from "../../../assets/images/gallery/modular-room2.jpg"
import { summary } from "framer-motion/client"

export const galleryData = [
  {
    name: "Laminar Airflow",
    summary: "A Laminar Airflow Clean Bench is a self-contained workstation that delivers unidirectional airflow filtered through high-efficiency HEPA filters. The constant flow of clean air at a velocity of 90 ± 20 FPM prevents particle intrusion from the external environment, achieving ISO Class 5 cleanliness (as per ISO 14644-1) and US FED STD 209E standards.",
    thumbnail: t1,
    images: [
      t11,
      t22,
      t33,
    ],
  },
  {
    name: "Biosafety Cabinet",
    summary: "At Clean Air Systems, we design and manufacture advanced Biosafety Cabinets (BSCs) that ensure personnel, product, and environmental protection during sensitive laboratory operations. Engineered for pharmaceutical, biotechnology, research, and healthcare applications, our biosafety cabinets meet international safety and performance standards.",
    thumbnail: t2,
    images: [
      b1,
      b2,
      b3,
      b4,
      b5,
    ],
  },
  {
    name: "Fume Exhaust Hoods",
    summary: "At Clean Air Systems, we manufacture high-quality Fume Exhaust Laboratory Hoods designed to protect laboratory personnel from hazardous fumes, vapors, and gases generated during chemical processes. Our fume hoods ensure a safe working environment by effectively driving out harmful contaminants, making them an essential part of modern laboratories.",
    thumbnail: t3,
    images: [f1, f2, f3, f4],
  },
  {
    name: "Air Shower System",
    summary: "At Clean Air Systems, we manufacture high-performance Cleanroom Air Shower Systems designed to minimize contamination when personnel or materials enter a controlled environment. By using high-velocity air jets, our air showers effectively remove dust, lint, and other particulates from clothing and surfaces before entry into cleanrooms, ensuring process integrity and product safety.",
    thumbnail: t4,
    images: [
      a1,
      a2,
      
    ],
  },
  {
    name: "Powder Dispensing Booth",
    summary: "At Clean Air Systems, we design and manufacture high-performance Powder Dispensing Booths that provide a safe and controlled environment for handling powders, chemicals, and hazardous substances. These booths protect operators, products, and the surrounding environment from cross-contamination during powder dispensing, product sampling, and bag emptying operations.",
    thumbnail: t5,
    images: [
      p1,
      p2,
      
    ],
  },

  {
    name: "Pass Boxes",
    summary: "Clean Air Systems manufactures Static and Dynamic Pass Boxes that are designed to facilitate the safe transfer of materials into and out of cleanrooms without compromising cleanliness levels. By acting as an airlock system, our pass boxes minimize personnel movement, reduce cross-contamination, and maintain controlled environments during material transfer.",
    thumbnail: o11,
    images: [
      o1,
      o2,
      
    ],
  },

   {
    name: "Sterile Storage Cabinet",
    summary: "Clean Air Systems manufactures Sterile Garment Storage Cabinets designed to safely store cleanroom garments such as gowns, coveralls, masks, hoods, and gloves in a contamination-free environment. These cabinets ensure garments remain sterile and ready for use inside critical cleanroom zones.",
    thumbnail: s11,
    images: [
      s1,
      s2,
      
    ],
  },

  {
    name: "Modular Cleanroom",
    summary: "At Clean Air Systems, we design and deliver Modular Cleanrooms that meet ISO Class 5, ISO Class 6, ISO Class 7, and ISO Class 8 requirements. Our cleanroom solutions are engineered to provide contamination-free environments for pharmaceuticals, biotechnology, healthcare, electronics, and food processing industries.",
    thumbnail: m11,
    images: [
      m1,
      m2,
      
    ],
  },
  
];
