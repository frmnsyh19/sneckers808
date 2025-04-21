import { ClientSize } from "@/app/components/admin/size/ClientSize";
import { Today } from "@/app/components/admin/Today";
import React from "react";
import { FiUser } from "react-icons/fi";

const page = () => {
  return (
    <div className="w-full flex bg-slate-100 rounded-md flex-col gap-2">
      {/* Header */}
      <div className="w-full flex justify-between border-gray-300 items-center h-20 border-b  p-5">
        <div className="flex flex-col gap-1 p-1">
          <p className="text-xl font-semibold">Brand Product Service</p>
          <Today />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center">
          <p className="text-base font-semibold">Firmansyah</p>
          <FiUser className="text-xl" />
        </div>
      </div>
      {/* Content */}
      <div className={` w-full  flex flex-col gap-1 p-1 `}>
        <ClientSize />
      </div>
    </div>
  );
};

export default page;
