import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Button = ({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center cursor-pointer">
      {children}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-fuchsia-400 px-6 pt-10 sm:pt-20 pb-10 flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-20 lg:gap-28">
      <div className="flex flex-col-reverse items-end sm:items-start sm:flex-col gap-5 sm:gap-14 text-black">
        <div className="flex flex-row sm:flex-col gap-3 w-[100%]">
          <div className="w-20 sm:w-44">
            <img
              className="w-[100%]"
              src="https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2FRavi_Srikantan.png&w=768&q=75"
            />
          </div>
          <div>
            <div className="font-bold text-lg">Benjamin Maisano</div>
            <div>CTO at Mount Sinai</div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button>
            <BsArrowLeft className="text-white" />
          </Button>
          <Button>
            <BsArrowRight className="text-white" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-12 text-black">
        <div className="font-bold text-2xl lg:text-4xl">
          “Vention has provided very talented engineers across web UI, mobile,
          backend APIs, and system designs, to data integrations and beyond.
        </div>
        <div>
          Their staff integrated quickly and were dedicated to the internal
          teams throughout the relationship, acting as long term partners in our
          strategic digital efforts.”
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
