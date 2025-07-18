import Image from 'next/image';

const CarouselCard = ({ image, category, title, description }) => {
    return (
        <div className="relative max-w-xs w-full h-130 flex flex-col items-center pb-14">
            {/* Image container */}
            <div className="w-full h-100 overflow-hidden rounded-xl shadow-md">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={240}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Text card that overlaps the image */}
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-80 w-[75%] h-47 bg-white rounded-xl shadow-lg px-6 py-4 text-center z-10">
                <p className="text-sm text-orange-500">{category}</p>
                <h3 className="text-lg font-Sans-serif text-gray-800">{title}</h3>
                <p className="text-sm font-Sans-serif text-gray-500 mt-2">{description}</p>
                <div className="mt-4">
                    <button className="bg-[#156c5f] text-white rounded-full h-10  w-10 p-2 hover:bg-[#ee8961] transition duration-300">
                        <i className="fas fa-angle-right"></i>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CarouselCard;
