// components/ContentSection.tsx
import Computer from "@/components/icons/computer";
import Note from "@/components/icons/note";
import Certificate from "@/components/icons/certificate";

const ContentSection = () => {
  return (
    <section className="bg-[#4B0082] w-[80%] mx-auto -top-14 relative py-12 px-6 rounded-[30px] shadow-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="mb-4">
              <Computer />
            </div>
            <div className="text-center">
              <h5 className="text-xl font-semibold text-[#FF7F50] mb-2">
                Learn Anytime
              </h5>
              <p className="text-[#FF7F50]">
                Access our courses from anywhere in the world at your
                convenience.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="mb-4">
              <Note />
            </div>
            <div className="text-center">
              <h5 className="text-xl font-semibold text-[#FF7F50] mb-2">
                Expert Instructors
              </h5>
              <p className="text-[#FF7F50]">
                Learn from industry experts with years of experience.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="mb-4">
              <Certificate />
            </div>
            <div className="text-center">
              <h5 className="text-xl font-semibold text-[#FF7F50] mb-2">
                Hands-On Projects
              </h5>
              <p className="text-[#FF7F50]">
                Gain practical experience with real-world projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
