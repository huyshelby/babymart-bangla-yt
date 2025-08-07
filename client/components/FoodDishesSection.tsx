"use client";

import ImageWithFallback from "./ImageWithFallback";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import BalancedLayout from "./BalancedLayout";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define TypeScript interface for image properties
interface FoodImage {
  src: string;
  fallbackSrc: string;
  alt: string;
  id?: string; // Add id property to interface
}

export const FoodDishesSection = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useMediaQuery("(max-width: 768px)");

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Images with descriptive alt text
  const images: FoodImage[] = [
    {
      src: "/images/monamthuc/anh1.jpg",
      fallbackSrc: "https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+1",
      alt: "Bò Né",
    },
    {
      src: "/images/monamthuc/anh2.jpg",
      fallbackSrc: "https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+2",
      alt: "Bánh Mì Bò Kho",
    },
    {
      src: "/images/monamthuc/anh3.jpg",
      fallbackSrc: "https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+3",
      alt: "Bò Bít Tết",
    },
    {
      src: "/images/monamthuc/anh4.jpg",
      fallbackSrc: "https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+4",
      alt: "Món ăn từ Bò Né Hạnh",
    },
  ].map((img, index) => ({ ...img, id: `food-image-${index}` })); // Add stable id for each image

  // Enhanced image card with better quality and subtle effects
  const renderImageCard = (image: FoodImage, index: number) => (
    <div className="relative overflow-hidden rounded-2xl shadow-lg group h-80 md:h-96 w-full">
      {/* Enhanced overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

      {/* Better image quality with enhanced rendering */}
      <ImageWithFallback
        src={image.src}
        fallbackSrc={image.fallbackSrc}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-110 brightness-105 contrast-105"
        priority={index < 2} // Prioritize loading for first two images
        quality={90} // Higher quality images
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6 z-20"></div>
    </div>
  );

  return (
    <section className="py-16 relative" id="am-thuc">
      {/* Background with pattern and gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/noise.svg')",
          backgroundSize: "200px",
          opacity: 0.03,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f7f7] to-[#FAF9F6] z-0"></div>

      {/* Kitchen utensils decorative elements - Added chef hat icon */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#27AE60]/50 to-transparent"></div>
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#27AE60]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      </div>

      {/* Additional decoration elements */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#27AE60]/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#27AE60]/5 blur-3xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 flex items-center justify-center opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full text-[#27AE60]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
        </svg>
      </div>

      <BalancedLayout className="relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center px-4 py-1.5 bg-[#27AE60]/10 rounded-full">
            {/* Chef hat icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#27AE60] mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <span className="!text-2xl font-medium text-[#27AE60] uppercase tracking-wider">
              Ẩm thực đặc sắc
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-[#27AE60]">ẨM THỰC PHONG PHÚ</span>
          </h2>
          <p className=" !text-2xl !text-[#27AE60] max-w-2xl mx-auto text-lg">
            Các món ẩm thực được chế biến từ thực phẩm do Công ty CP Bò Né Hạnh
            cung cấp tại các nhà hàng, quán ăn được khách hàng yêu thích
          </p>

          {/* Enhanced divider with spoon icon */}
          <div className="flex justify-center items-center mt-8 space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#27AE60]"></div>
            <div className="w-8 h-8 rounded-full bg-[#27AE60]/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#27AE60]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
              </svg>
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#27AE60]"></div>
          </div>
        </motion.div>

        {/* New layout inspired by the provided image - 2x2 grid for desktop with staggered arrangement */}
        <motion.div
          ref={galleryRef}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Desktop: Staggered Image Grid with 2 rows */}
          {!isMobile && (
            <div className="relative grid grid-cols-12 gap-6">
              {/* Top row - shifted right */}
              <div className="col-span-2 relative">
                {/* Chef icon decoration in top-left empty space - smaller, more elegant icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 bg-[#27AE60]/5 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* More elegant chef icon */}
                      <svg
                        fill="#55dd65"
                        width="105px"
                        height="105px"
                        viewBox="-12 -12 144.00 144.00"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="matrix(1, 0, 0, 1, 0, 0)rotate(-45)"
                        stroke="#55dd65"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="#CCCCCC"
                          strokeWidth="0.72"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            id="_0402-chef"
                            data-name="0402-chef"
                            d="M342.475,800.109c-.16-.1-.34-.4-.486-.487-.184-.115-.512-.1-.726-.242-.385-.26-.655-.726-.969-.968-.474-.365-.808-.614-1.211-.968a32.419,32.419,0,0,1-2.909-2.909c-.339-.39-.6-.736-.969-1.211a25.23,25.23,0,0,1-1.939-2.908,30.81,30.81,0,0,1-3.877-12.844,80.449,80.449,0,0,1,1.453-15.268c-.239-.329-.849-.289-1.459-.249s-1.2.079-1.449-.234c-1.2.148-1.55-.549-2.423-.727a.661.661,0,0,0-.485-.727c-.784-2.568.315-5.117.969-7.029.85-.523.961-1.784,1.939-2.18.47-.9,1.6-1.15,2.423-1.7a4.981,4.981,0,0,1,3.15.727c-.027-.861-.895-.88-.725-1.938a8.384,8.384,0,0,1,1.938-3.634c-.163-1.375.436-1.987.485-3.151.664-.871,1.087-1.982,1.7-2.908.868-.6,1.742-1.316,1.211-2.665.749.058.41,1.206,1.454.969.711-.207-.316-.612,0-1.21-.248-.321-.239-.9-.484-1.213a12.293,12.293,0,0,0-.728-2.424,41.583,41.583,0,0,0-1.453-5.09c-.581-3.7-2.163-6.4-2.182-10.661.526-.847,1-1.751,2.666-1.454,1.346,1,1.609,3.076,1.939,5.089a5.209,5.209,0,0,1,.726,2.666c.675.455.468,1.794.97,2.423.98,3.623,2.039,7.17,3.15,10.664,6.856-3.243,15.459-4.737,25.929-4.363a67.628,67.628,0,0,1,14.539,2.665c.875-.175.255-1.846.728-2.423a22.951,22.951,0,0,1,.483-2.424c.306-1.632.637-3.24.969-4.847.439-1.5.722-3.155,1.212-4.6.464-1.476.767-3.112,2.908-2.909,1.818.244,1.552,2.7.968,4.119s-.7,3.335-1.21,4.846c-.217,1.8-.779,3.26-.97,5.089a10.891,10.891,0,0,0-.484,2.666c-.851.765.852,1.174,0,1.939.3.249.543.122.83-.007a1.1,1.1,0,0,1,1.11.007c.937,1.082,1.816,2.222,2.665,3.392a11.839,11.839,0,0,0,1.212,1.939,10.158,10.158,0,0,0,.725,2.18c.067.875-.446,1.167-.484,1.94a9.4,9.4,0,0,1,.484,4.12c.02.335.421.289.823.243a1.687,1.687,0,0,1,.632,0,.631.631,0,0,1,.535.138.662.662,0,0,0,.677.1,30.594,30.594,0,0,1,3.152,2.183,4.587,4.587,0,0,0,.968,1.694,14.935,14.935,0,0,1,.242,3.151c-.285.041-.2.442-.242.727a8.3,8.3,0,0,1-2.908,2.423,78.5,78.5,0,0,1,1.454,17.448c-1,9.013-5.059,14.974-9.935,20.114a34.855,34.855,0,0,1-20.6,9.208q-1.349.049-2.664.048C357.59,806.457,348.943,804.222,342.475,800.109Zm-1.212-54.524a24.308,24.308,0,0,0-.728,2.664,8.532,8.532,0,0,0-.967,2.424c-.567,1.776-1.013,3.672-1.7,5.331-.985,3.621-2.314,6.894-2.908,10.9-.084,2.906-.378,5.6-.243,8.724.508,3.613,1.074,7.167,2.423,9.936.9,1.123,1.445,2.6,2.425,3.634.779,1.452,1.8,2.528,2.422,3.877,1.517.907,2.735,2.114,4.363,2.909a25.774,25.774,0,0,0,2.424,1.212c.751.54,1.893.691,2.665,1.211a55.223,55.223,0,0,0,12.359,2.421h7.027a34.485,34.485,0,0,0,11.147-3.632c1.546-1.361,3.235-2.581,4.846-3.877a35.04,35.04,0,0,0,6.786-9.937c1.821-3.75,2.383-8.762,2.666-14.055a39.261,39.261,0,0,0-2.182-12.6,51.47,51.47,0,0,0-2.182-5.088c-.286-.925-.887-1.537-1.21-2.426-.307-.984-1.18-1.4-1.454-2.422a10.641,10.641,0,0,1-3.15-1.211,14.846,14.846,0,0,1-2.424-6.787c-4-.688-7.708-1.661-12.358-1.7a2.827,2.827,0,0,1-3.15.243,8.259,8.259,0,0,1-3.636,1.939c-1.4.184-1.694-.729-2.665-.969-2.192,1.767-3.03,4.886-7.027,4.845-1.764-.013-1.446-2.107-2.908-2.421.085.328-.2.284-.485.241s-.572-.086-.485.243c-.494.071-.475.655-.969.727-.349.7-1.165.936-1.7,1.453a12.172,12.172,0,0,1-4.119,2.424,2.366,2.366,0,0,1-1.62-.154,2.446,2.446,0,0,0-.83-.237A.77.77,0,0,0,341.263,745.585Zm-11.148,7.025a8.989,8.989,0,0,0-2.422,6.059,3.887,3.887,0,0,0,2.108.244,9.7,9.7,0,0,1,1.284,0,48.711,48.711,0,0,1,1.7-6.3,2.047,2.047,0,0,0-1.2-.393A3.585,3.585,0,0,0,330.115,752.611Zm66.641.243c.319.652.65,1.289.969,1.939s.355,1.582,1.211,1.7c.655-.3.808-.795.727-1.7-.013-.16.011-.324,0-.485a4.908,4.908,0,0,0-2.908-2.18C396.661,752.472,396.465,752.536,396.756,752.854Zm-5.816-8.966a2.7,2.7,0,0,0,1.939-1.211c-.643-.488-.588-1.676-1.453-1.939C391.431,741.954,390.624,742.359,390.94,743.888Zm-46.042-3.15a14.406,14.406,0,0,1-.727,1.7,7.669,7.669,0,0,0,3.393-2.423C346.465,740.042,345.9,740.6,344.9,740.738Zm46.042-.97c-.232,1.006.725.049,0,0,.079-.344.02-.458-.064-.458C390.714,739.309,390.462,739.735,390.94,739.768Zm-37.8,53.069c-1.173-1.25-2.832-2.011-2.908-4.361-.176-.661.482-.488.485-.97,1.789-.012,1.946,1.609,3.15,2.182,1.179.437,1.948,1.285,3.393,1.455,2.083,1.147,5.2,1.264,8,1.695h5.815a24.121,24.121,0,0,0,2.666-.726,10.163,10.163,0,0,0,3.393-2.424c1.066-.6,1.927-2.53,3.392-1.938.362,3.35-1.625,4.352-2.908,6.057-1.247.289-1.639,1.432-3.15,1.454-.75.7-2.385.523-3.393.971q-1.036.033-2.039.033C362.588,796.265,357.189,795.225,353.137,792.837Zm7.269-12.116a1.836,1.836,0,0,1,.486-1.7c.2-.046.241-.243.484-.242.553.02,1.136.011,1.718,0,2.2-.031,4.409-.064,5.068,1.452.21.938-.593.862-.728,1.454-.082.23-.4.224-.721.217-.34-.007-.68-.013-.732.266-.389,0-.781.008-1.167.008C362.858,782.182,361.036,782.048,360.406,780.721Zm-8-3.15c-.056-.24-.353-.238-.651-.235a2.812,2.812,0,0,1-.319-.009c-1.467-.781-3.015-2.267-2.181-4.6.551-.571.724.3.968.727.428.218.708.586,1.212.728.282-.041.43.053.485.242h2.422c2.094-.9,3.143-2.836,5.089-3.878h2.182c.577.556,1.38.882,1.454,1.939-.25,2.336-2.009,3.163-4.119,3.635a12.971,12.971,0,0,1-3.877,1.454Zm16.478-.244c-.055-.239-.351-.236-.648-.232a2.848,2.848,0,0,1-.321-.009c-.648-.563-1.59-.833-2.181-1.454-.867-1.863-.374-4.343,1.454-4.846a2.214,2.214,0,0,1,2.182,1.453,1.184,1.184,0,0,1,1.21.484c.432.135,1.007.125,1.212.485a8.566,8.566,0,0,1,2.424.242c2.437-.226,4.213-1.118,5.089-2.908.215.109.432.213.484.486.644.988-.065,1.935-.484,2.665a7.9,7.9,0,0,1-1.7,1.938.426.426,0,0,1-.238-.005c-.107-.018-.213-.036-.247.005a3.581,3.581,0,0,1-.485.485.541.541,0,0,1-.229-.007c-.112-.016-.225-.032-.257.007-.485.593-1.3.474-2.666.727a17.625,17.625,0,0,1-3.582.55A7.77,7.77,0,0,1,368.888,777.327Zm-6.059-6.784c-1.67-1.077-3.647-1.846-4.361-3.878.126-2.618,1.424-4.068,1.938-6.3.72-1.947,1.117-4.216,1.939-6.059a1.144,1.144,0,0,0,.243-.727h.484c1.187.083,1.073,2.009.727,2.908a8.463,8.463,0,0,1-.727,3.394c-.3,2.364-1.42,3.911-1.939,6.06.56.974,1.969,1.1,2.908,1.695,1.848-.152,3.342.049,3.634,1.453.011,1.36-1.138,1.72-2.447,1.72A14.138,14.138,0,0,1,362.83,770.543Zm11.147-13.085a2.984,2.984,0,0,1,2.423-.243c1.589,1.487,1.4,6.413-1.211,6.544C372.525,763.458,372.647,759.134,373.977,757.458Zm-23.99,5.574c-1.55-2.035-.448-7.185,2.667-6.058,1.954,1.464,1.609,6.422-1.223,6.422A3.424,3.424,0,0,1,349.987,763.032Zm-3.634-8.482c-.859-3.26,2.959-3.783,5.331-4.6a6.893,6.893,0,0,0,1.63-.139,6.266,6.266,0,0,1,2.005-.1c.6.447,1.75.351,1.939,1.212.062,1.192-1.423.839-1.939,1.454-1.689-.074-2.825.407-4.362.484a22.061,22.061,0,0,1-2.423.97c-.692.192-1.065.872-1.672.872A1.056,1.056,0,0,1,346.352,754.55Zm30.775-1.94a11.138,11.138,0,0,0-1.953,0c-1.622.092-3.244.183-3.379-1.212-.1-2.117,2.641-1.4,4.119-1.94a2.66,2.66,0,0,0,1.7.245,7.86,7.86,0,0,1,.965,0c.939.6,2.349.721,2.909,1.7.982.521,1.292,2.275.242,2.907C379.859,754.08,378.91,752.927,377.128,752.611Zm-31.5-37.561c-.59-1.914-2.248-2.76-2.182-5.33.4-.406.634-.982,1.454-.971,1.409-.116,1.69.895,2.181,1.7.478.733.977,1.445,1.454,2.181.71,1.711,2.216,2.629,2.423,4.846-.445.363-.6,1.012-1.212,1.211h-.064C347.116,718.687,346.718,716.521,345.625,715.05Zm-18.9,3.151c-.485-.485-1.513-.426-1.939-.969-.662-.227-1.033-.743-1.7-.969-1.007-.851-1.868-1.848-2.908-2.665-.752-1.591-1.706-2.978-1.7-5.333-.005-2.591,1.133-4.035,1.939-5.815,3.319-3.464,7.851-5.72,14.782-5.574-.073-.293.4-.117.485-.243.125-.177-.066-1.137.484-1.211-.061-.87.728-.888.728-1.7a16.733,16.733,0,0,0,2.665-2.665c1.164-.291,1.622-1.286,2.908-1.455.62-.833,2.224-.684,2.907-1.454a66.51,66.51,0,0,1,7.271-1.211,56.36,56.36,0,0,1,17.2,1.695c3.014.828,6.039,1.662,8.24,3.394.412.112.481-.12.549-.351.06-.205.121-.41.419-.377.071-.492.656-.474.727-.968a5.969,5.969,0,0,0,1.939-1.454,26.4,26.4,0,0,1,7.511-2.423h4.362a17.389,17.389,0,0,1,9.208,4.12,11.475,11.475,0,0,1,.485,15.265,26.181,26.181,0,0,1,.727,3.151c-.229,3.408-1.823,5.448-3.393,7.513-.751.057-.941.674-1.454.969-.391.336-1.249.2-1.453.726a6.7,6.7,0,0,0-1.336.008,7.13,7.13,0,0,1-1.571-.008,3.937,3.937,0,0,1-1.939-.726c-.358-.312-.266-.572-.727-.969,1.05-1.7,4.264-1.229,5.574-2.668,1.308-1.356,2.714-2.618,2.666-5.33a2.672,2.672,0,0,0-1.571-.266c-.847.005-1.7.01-1.822-.7-.63-1.134.557-2.277,1.212-2.908.429-1.1,1.374-1.694,1.939-2.666a13.047,13.047,0,0,1,.726-2.181V697.12c-.89-3.231-3.538-4.7-6.785-5.576h-5.332a25.963,25.963,0,0,0-8.724,2.665c.062,1.436.134,2.879-.969,3.152-1.4.183-1.325-1.1-2.181-1.454-.359-.853-1.377-1.048-1.938-1.7a41.342,41.342,0,0,0-7.271-1.21,72.28,72.28,0,0,0-14.3-.969,32.092,32.092,0,0,0-8.481,1.7,24.227,24.227,0,0,0-5.331,3.635c-.217,1.185,1.284.653.967,1.939-.723,0-.823.629-1.452.727-.426.22-1.21.083-1.455.484-1.345.027-2.23.516-3.635.484a29.441,29.441,0,0,0-6.543,1.7,10.742,10.742,0,0,0-4.118,3.393,6.2,6.2,0,0,1-.484,1.939c-.177.742.418.713.241,1.455.378,1.723,1.6,2.6,2.424,3.877a.648.648,0,0,1,.726.362.653.653,0,0,0,.728.364c.086.642,1.235.22,1.454.727.571-.316,1.674-.1,2.181-.484.445.066.535-.221.626-.508.1-.326.205-.653.827-.46.8.825.2,2.227,0,3.392-.831,1.052-2.258,1.507-4.142,1.507Q327.345,718.255,326.724,718.2Zm48.948-3.393c-.415-3.25,1.167-6.362,2.182-8.967.059-.263.482-.163.484-.482.281-.041.432.053.483.241,1.046-.043.837,2.077.486,2.665a8.288,8.288,0,0,1-.727,2.666c-.452,1.765-.552,3.88-2.769,3.88Zm-14.054-5.816a19.7,19.7,0,0,1-.969-4.362c-.031-.433.3-.511.243-.968h1.453c.743,1.115,1.045,2.67,1.7,3.875.05,1.446,1.125,3.481,0,4.6a2.98,2.98,0,0,1-.442.035C361.878,712.178,362,710.333,361.618,708.992Z"
                            transform="translate(-318.485 -686.456)"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                variants={imageVariants}
                className="col-span-5"
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                {renderImageCard(images[0], 0)}
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="col-span-5"
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                {renderImageCard(images[1], 1)}
              </motion.div>

              {/* Bottom row - shifted left */}
              <motion.div
                variants={imageVariants}
                className="col-span-5"
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                {renderImageCard(images[2], 2)}
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="col-span-5"
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                {renderImageCard(images[3], 3)}
              </motion.div>
              <div className="col-span-2 relative">
                {/* Food-related decoration icon in bottom-right empty space - more elegant food icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 bg-[#27AE60]/5 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Better food icon - grill/steak */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 text-[#27AE60]/60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18M3 12h18M3 18h18"></path>
                        <path d="M4 14a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path d="M14 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path>
                        <path d="M14 18a2 2 0 104 0 2 2 0 00-4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile: Swiper Carousel with enhanced navigation */}
          {isMobile && (
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1.15}
                centeredSlides={false}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                loop={true}
                className="foods-swiper pb-12"
              >
                {images.map((image) => (
                  <SwiperSlide key={image.id || `food-image-fallback-${Math.random()}`} className="h-full">
                    {renderImageCard(image, Number((image.id || '').split('-')[2] || 0))}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom navigation buttons */}
              <div className="swiper-button-prev !hidden md:!flex w-10 h-10 rounded-full bg-white shadow-md !text-[#27AE60] top-1/2 transform -translate-y-1/2 left-2 z-20"></div>
              <div className="swiper-button-next !hidden md:!flex w-10 h-10 rounded-full bg-white shadow-md !text-[#27AE60] top-1/2 transform -translate-y-1/2 right-2 z-20"></div>
            </div>
          )}
        </motion.div>

        {/* Added kitchen icon bottom decoration */}
        <div className="flex justify-center mt-12">
          <div className="w-20 h-20 opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full text-[#27AE60]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </BalancedLayout>

      {/* Add custom animations and Swiper styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .foods-swiper .swiper-pagination-bullet {
          background-color: #27ae60;
          opacity: 0.6;
        }

        .foods-swiper .swiper-pagination-bullet-active {
          background-color: #27ae60;
          opacity: 1;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 1rem !important;
        }
      `}</style>
    </section>
  );
};
