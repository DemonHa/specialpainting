import { motion } from "framer-motion";

type props = {
  activePage: number;
};

const AnimatedSlider = ({ activePage }: props) => {
  const items = ["01", "02", "03", "04"];

  return (
    <div className="flex space-x-10 px-10 py-2">
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={{ borderColor: "#434345", color: "#434345" }}
          animate={{
            borderColor: activePage === index ? "#dc2626" : "#434345",
            color: activePage === index ? "#dc2626" : "#434345",
            width: activePage === index ? "10rem" : "2rem",
          }}
          transition={{ duration: 0.5 }}
          className="border-t-2 pt-2"
        >
          <div className={`text-xl font-semibold`}>{item}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSlider;
