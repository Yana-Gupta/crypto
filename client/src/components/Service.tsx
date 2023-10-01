import { BiSolidCheckShield } from 'react-icons/bi';
import { BiSearchAlt } from 'react-icons/bi';
import { BiHeart } from 'react-icons/bi';

const ServiceCard = ({
  color,
  title,
  icons,
  subtitle,
}: {
  color: string;
  title: string;
  icons: JSX.Element;
  subtitle: string;
}): JSX.Element => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icons}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-white text-lg">{title}</h1>
      <p className="my-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Service = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col md:flex-row justify-center items-center gradient-bg-services px-4 sm:px-12 lg:px-24 ">
      <div className="flex-1 flex md:flex-row flex-col items-center justify-between  py-12 px-2">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-5xl py-2 text-gradient">
            Services that we use
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-end ">
        <ServiceCard
          color="bg-blue-600"
          title="Secure"
          icons={<BiSolidCheckShield size={21} className="text-white" />}
          subtitle="We use the latest technology to secure your data and privacy."
        />
        <ServiceCard
          color="bg-gray-800"
          title="Best exchange rates"
          icons={<BiSearchAlt size={21} className="text-white" />}
          subtitle="We use the latest technology to secure your data and privacy."
        />
        <ServiceCard
          color="bg-red-600"
          title="Fast"
          icons={<BiHeart size={21} className="text-white" />}
          subtitle="We use the latest technology to secure your data and privacy."
        />
      </div>
    </div>
  );
};

export default Service;
