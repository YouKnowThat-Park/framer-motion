"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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

// 1. useScroll: Framer-motion에서 사용 가능한 스크롤 추적 이벤트
//  -> scrollY : 현재 스크롤 픽셀 값
//  -> scrollYProgress : 타겟 요소 기존 0~1 사이의 비율 값
// 2. useTransform : 입력값을 원하는 출력값으로 변환 해주는 훅
// 3.useSpring : motionValue를 물리 애니메이션으로 보정해주는 훅
//  -> stiffness : 강도 (기본 값 : 100)
//  -> damping : 값이 클수록 빠름 (기본 값 : 10)
//  -> mass : 값이 클수록 느림

const Hero = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.01, 1], [1, 1, 0]);
  const opacity = useSpring(rawOpacity, {
    stiffness: 300,
    damping: 90,
  });

  return (
    <div ref={wrapperRef} className="h-[150vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ opacity }}
          className="font-bold text-[100px] text-[#f2f2f2]"
        >
          Hello Mr.
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
