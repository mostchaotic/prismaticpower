import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Sustainability",
    paragraph:
      `We are committed to reducing carbon footprints and
      combating climate change. Our solar solutions help businesses lower their
      reliance on fossil fuels, contributing to a cleaner planet. `,
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Quality Assurance",
    paragraph:
      `Prismatic Power uses only the highest quality solar
      panels, inverters, and components. Our rigorous quality control processes
      ensure the longevity and reliability of every system we install`,
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Customer-Centric Approach",
    paragraph:
      `We prioritize our clients' satisfaction above
      all else. Our dedicated customer support team is ready to assist you at every
      stage, from initial consultation to post-installation maintenance.`,
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
