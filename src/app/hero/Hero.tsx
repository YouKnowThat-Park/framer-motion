"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

// 1. motion은 동적 기반, 그렇기에 자동완성 태그를 지원하지 않음. (아주 삐죽삐죽이야 삐죽)
// 2. initial: 컴포넌트가 처음 렌더링될 때
// 3. animate: 컴포넌트가 렌더링된 후 최종 상태
//  -> opacity: 선명도
// 4. transition: 애니메이션 효과가 몇초뒤에 나타날지
//  -> duration: 지속 시간
// 5. useScroll: Framer-motion에서 사용 가능한 스크롤 추적 이벤트

// useTransform 사용 전

// const Hero = () => {
//   const { scrollY } = useScroll();

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 2 }}
//         transition={{ duration: 3 }}
//         className="font-bold text-[100px] text-[#f2f2f2]"
//       >
//         Hello Mr. My Yesterday
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;

// useTransform 사용 후

const Hero = () => {
  const { scrollY } = useScroll();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 3 }}
        className="font-bold text-[100px] text-[#f2f2f2]"
      >
        Hello Mr. My Yesterday
      </motion.div>
    </div>
  );
};

export default Hero;
