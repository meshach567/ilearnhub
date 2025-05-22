import Link from "next/link";
import {
  companyLinks,
  supportLinks,
  contactInfo,
  courseLinks,
} from "@/data/footer";

// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-[#FFF8DC] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* First Div: ILearnSchool and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-black">ILearnSchool</h3>
            <p className="text-gray-600">
              Empowering learners with the best educational resources.
            </p>
          </div>

          {/* Second Div: Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="text-gray-700 hover:text-gray-500 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Div: Course Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Courses</h4>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="text-gray-700 hover:text-gray-500 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fourth Div: Support Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="text-gray-700 hover:text-gray-500 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fifth Div: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Contact Info</h4>
            <ul className="space-y-2">
              {contactInfo.map((info) => (
                <li key={info.id} className="text-gray-600">
                  <strong>{info.type}:</strong> {info.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
