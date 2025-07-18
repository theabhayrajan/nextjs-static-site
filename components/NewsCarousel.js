import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';

const CarouselCard = ({ image, title, description, date }) => {
  return (
    <div className="relative max-w-xs w-full h-[460px] flex flex-col items-center pb-14">
      <div className="w-full h-[300px] overflow-hidden rounded-xl shadow-md">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[180px] w-[90%] sm:w-[80%] h-auto bg-white rounded-xl shadow-lg px-6 py-5 text-left z-10">
        <div className="flex items-center text-orange-500 text-sm mb-2">
          <FaCalendarAlt className="mr-2" />
          <span>{date}</span>
        </div>

        <h3 className="text-lg font-serif text-gray-800 mb-1 leading-snug">{title}</h3>

        <p className="text-sm font-sans text-gray-500 mb-4 leading-snug">
          {description}
        </p>

        <button className="text-[#156c5f] text-sm font-medium hover:text-[#ee8961] transition duration-300">
          Read More <i className="fas fa-angle-right ml-1"></i>
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;
