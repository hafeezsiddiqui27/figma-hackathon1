import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

interface CardProps {
  picture: string;
  username: string;
  profession: string;
}

const Teamuser: React.FC<CardProps> = ({ picture, username, profession }) => {
  return (
    <div className="w-[329px] h-[382px] flex flex-col items-center">
      {/* Image */}
      <div className="w-[280px] h-[231px]">
        <Image src={picture} alt={username} height={300} width={300} className="w-full h-full object-fill" />
      </div>

      {/* User Info */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold">{username}</h3>
        <p className="text-sm text-gray-500">{profession}</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4">
        <a href="#" aria-label="Facebook">
          <FaFacebook size={20} color='blue' />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram size={20} color='blue'/>
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter size={20} color='blue' />
        </a>
      </div>
    </div>
  );
};

export default Teamuser;
