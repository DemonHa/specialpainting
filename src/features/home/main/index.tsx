const Main = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | undefined;
}) => {
  return (
    <div className="flex lg:divide-x divide-gray-300 dark:divide-slate-700 border-y border-gray-300 dark:border-slate-700">
      <div className="hidden lg:flex items-end">
        <div className="flex-1"></div>
        <div className="w-[100px] h-[100px] dark:bg-darkJeans bg-teal-600"></div>
      </div>
      <div className="flex-1 divide-y divide-gray-300 dark:divide-slate-700">
        <>{children}</>
        <div className="hidden lg:flex h-[100px]"></div>
      </div>
    </div>
  );
};

export default Main;
