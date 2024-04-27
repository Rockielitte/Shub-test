import img from "@/assets/carousel.png";
import img2 from "@/assets/carousel2.png";
import clsx from "clsx";
import { useCallback, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useDraggableScroll from "use-draggable-scroll";
const images = [
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
  img,
  img2,
];
function App() {
  const scrollRef = useRef(null);
  const scrollRight = useCallback(() => {
    scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
  });
  const scrollLeft = useCallback(() => {
    scrollRef.current.scrollLeft -= scrollRef.current.clientWidth;
  });
  const { onMouseDown } = useDraggableScroll(scrollRef, { scrollStep: 10000 });
  return (
    <div className=" flex flex-col items-center max-w-[1200px] mx-auto py-10 px-4">
      <div className="flex flex-col items-center w-3/5 mb-[55px]">
        <p className="text-[32px] text-[#202227] font-bold text-center  mt-[14px] mb-[24px] leading-normal">
          Hoạt động tiêu biểu từ cộng đồng giáo dục
        </p>
        <p className="text-center leading-normal text-[20px] text-[#202227]">
          Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá
          trình giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.
        </p>
      </div>
      <div className="relative w-full">
        <div
          onClick={() => {
            scrollRight();
          }}
          className="absolute -right-0.5 z-30 p-4 bg-white shadow-xl rounded-full border cursor-pointer top-[50%] translate-y-[-50%] hover:opacity-70 transition-all duration-1000 hover:bg-slate-200"
        >
          <FaArrowRight />
        </div>
        <div
          onClick={() => {
            scrollLeft();
          }}
          className="absolute -left-0.5 z-30 p-4 bg-white shadow-xl rounded-full border cursor-pointer top-[50%] translate-y-[-50%] hover:opacity-70 transition-all duration-1000 hover:bg-slate-200"
        >
          <FaArrowLeft />
        </div>
        <div
          className="w-full scroll-pl-3 snap-x px-3  pt-[30px] flex  overflow-x-auto flex-row scrollbar-hide scroll-smooth  select-none"
          onMouseDown={onMouseDown}
          ref={scrollRef}
        >
          {images.map((image, index) => (
            <div className=" relative snap-start min-w-[100%]  sm:min-w-[50%] md:min-w-[25%] lg:min-w-[20%] xl:min-w-[16.67%] px-3 ">
              <div className="absolute inset-0 z-20 top-[-30px]"></div>
              <img
                src={image}
                key={index}
                className={clsx(
                  "w-full h-auto object-cover rounded-[10px] ",
                  index % 2 === 1 && " translate-y-[-30px]"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
