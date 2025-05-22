// components/ProfileCard.tsx
import Image, { StaticImageData } from "next/image";

interface ProfileCardProps {
  image: string | StaticImageData;
  name: string;
  role: string;
  description: string;
}

const ProfileCard = ({ image, name, role, description }: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-9">
      {/* Description */}
      <p className="text-gray-700 text-sm mb-4">{description}</p>

      {/* Image and Name/Role */}
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div>
          <h6 className="text-lg font-semibold text-gray-900">{name}</h6>
          <span className="text-sm text-gray-600 whitespace-nowrap">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
