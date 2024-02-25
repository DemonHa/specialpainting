import { motion } from "framer-motion";

type props = {
  activePage: number;
  small?: boolean;
};

const AnimatedSlider = ({ activePage, small = false }: props) => {
  const items = ["01", "02", "03", "04"];

  return (
    <div className="flex space-x-2 lg:space-x-10">
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={{ borderColor: "#434345", color: "#434345" }}
          animate={{
            borderColor: activePage === index ? "#dc2626" : "#434345",
            color: activePage === index ? "#dc2626" : "#434345",
            width:
              activePage === index ? (small ? "2.5rem  " : "10rem") : "2rem",
          }}
          transition={{ duration: 0.5 }}
          className="border-t-2 pt-2"
        >
          <div className={`text-xs md:text-sm lg:text-xl font-semibold`}>
            {item}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSlider;
