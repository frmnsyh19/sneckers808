// app/product/[produkid]/page.tsx

import { ChilldrenClient } from "@/app/components/DetailProduct/ChilldrenClient";
import React from "react";

// Tetap gunakan async function tapi sebagai default export (ini diperbolehkan oleh App Router)
const Page = async ({ params }: { params: Promise<{ produkid: string }> }) => {
  return (
    <div className="w-full flex flex-col">
      <ChilldrenClient productid={(await params).produkid ?? ""} />
    </div>
  );
};

export default Page;
