// components/ContentSection.tsx
import Image from "next/image";
import Heart from "../../icons/heart.svg";
import Bricks from "../../../assets/images/bricks.png";
import Engineer from "../../../assets/images/engineer.png";

const Premium = () => {
  return (
    <section className="bg-[#FFF8DC] mt-8 py-12 md:py-24 h-auto bg-cover bg-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 ">
        {/* Left Div: Image */}
        <div className="w-full md:w-1/2  animate-slide-in-left">
          <div className="relative w-full h-auto md:h-96">
            <Image
              src={Engineer}
              fill
              alt="Education Illustration"
              className="rounded-lg object-cover object-center h-full w-full"
            />
          </div>
        </div>

        {/* Right Div: Content */}
        <div className="w-full md:w-1/2 space-y-8 animate-slide-in-right">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Premium <span className="text-[#FF7F50]">Learning</span> Experience
          </h1>

          {/* Content Blocks */}
          <div className="flex flex-col space-y-6">
            {/* First Block */}
            <div className="flex items-center space-x-4">
              <div className="relative bg-[#4B0082] p-4 rounded-xl flex-shrink-0">
                <Image
                  src={Heart}
                  alt="Heart Icon"
                  width={30}
                  height={30}
                  className="w-8 h-8"
                />
              </div>
              <div className="leading-6">
                <span className="block text-lg text-gray-700">
                  Easily Accessible
                </span>
                <span className="block text-lg text-gray-700">
                  Learning Will Feel Very Comfortable with ILearnHub
                </span>
              </div>
            </div>

            {/* Second Block */}
            <div className="flex items-center space-x-4">
              <div className="relative bg-[#4B0082] p-4 rounded-xl flex-shrink-0">
                <Image
                  src={Bricks}
                  alt="Bricks Icon"
                  width={50}
                  height={50}
                  className="w-8 h-8"
                />
              </div>
              <div className="leading-6">
                <span className="block text-lg text-gray-700">
                  Easily Accessible
                </span>
                <span className="block text-lg text-gray-700">
                  Learning Will Feel Very Comfortable with ILearnHub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
