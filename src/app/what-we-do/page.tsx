import React from "react";
import Link from "next/link";
import WorkSamplesGrid from "@/features/what-we-do/work-samples-grid";
import { WwdHeader } from "@/features/what-we-do/work-samples-grid/wwd-header";

const page = () => {
  return (
    <div>
      <WwdHeader />
      <WorkSamplesGrid />
    </div>
  );
};

export default page;
