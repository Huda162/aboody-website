import Image from "next/image";

interface AboutCardProps {
  title: string;
  body: string;
  image: string;
  direction?: "ltr" | "rtl";
}

const AboutCard: React.FC<AboutCardProps> = ({ title, body, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center space-y-4">
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#EE303C]">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default AboutCard;
