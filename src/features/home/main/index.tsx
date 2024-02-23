const Main = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | undefined;
}) => {
  return (
    <div className="flex divide-x divide-slate-700 border-y border-slate-700">
      <div className="w-[100px]"></div>
      <div className="flex-1 divide-y divide-slate-700">{children}</div>
    </div>
  );
};

export default Main;
