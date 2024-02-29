import React from 'react';

const Statistic = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${className} space-y-3`}>
      <div className="text-red-500 text-6xl text-center">{title}</div>
      <div className="text-center">{description}</div>
    </div>
  );
};

const statisticsData = [
  { title: "500+", description: "award-winning clients", className: "px-4 py-7" },
  { title: "$15B+", description: "in client acquisitions", className: "px-4 py-7" },
  { title: "36", description: "month average engagement", className: "px-4 py-7" },
  { title: "20+", description: "client IPOs supported", className: "px-4 py-7" },
  { title: "20+", description: "years of experience", className: "px-4 py-7" },
  { title: "3K+", description: "world-class engineers", className: "px-4 py-7" },
];

const Statistics = () => {
  return (
    <div className="!border-t-0 lg:!border-t grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 divide-y lg:divide-x-0 lg:divide-y-0 divide-gray-300 dark:divide-slate-700">
      <div className="text-red-500 text-lg md:col-span-2 px-5 py-4 ml-2">
        Key stats
      </div>
      {statisticsData.map((stat, index) => (
        <Statistic
          key={index}
          className={`${stat.className} ${index % 2 !== 0 ? 'md:border-l': ''} border-slate-700`}
          title={stat.title}
          description={stat.description}
        />
      ))}
    </div>
  );
};

export default Statistics;
