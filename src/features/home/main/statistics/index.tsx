const Statistic = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className}>
      <div className="text-red-500 text-6xl">{title}</div>
      <div>{description}</div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4">
      <div className="text-red-500 text-lg col-span-2 px-5 py-4">Key stats</div>
      <Statistic
        className="col-start-3 px-4 py-7"
        title="500+"
        description="award-winning clients"
      />
      <Statistic
        className="col-start-4 px-4 py-7"
        title="$15B+"
        description="in client acquisitions"
      />
      <Statistic
        className="row-start-2 px-4 py-7"
        title="36"
        description="month average engagement"
      />
      <Statistic
        className="row-start-2 px-4 py-7"
        title="20+"
        description="client IPOs supported"
      />
      <Statistic
        className="row-start-2 px-4 py-7"
        title="20+"
        description="years of experience"
      />
      <Statistic
        className="row-start-2 px-4 py-7"
        title="3K+"
        description="world-class engineers"
      />
    </div>
  );
};

export default Statistics;
