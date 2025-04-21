"use client";

import { useDeleteSize } from "@/libs/admin/service/SizeService/useDeleteSize";
import { useGetSize } from "@/libs/admin/service/SizeService/useGetSize";
import { formatDate } from "@/libs/helper/FormatDate";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";

type DataTypeSize = {
  size: string;
  stok: number;
  id: number;
  productid: string;
  product: {
    produkname: string;
  };
  createdAt: string;
};

export const TableSize = ({ query }: { query: string }) => {
  const { data: datas } = useGetSize(query);

  const { mutate } = useDeleteSize({
    onSuccess: () => {
      toast.success("okeokeoe");
    },
  });

  const handleDelete = (id: number) => {
    const confirmasi = confirm("are you sure");
    if (confirmasi) {
      mutate({
        id,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className=" w-full flex justify-center items-center">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Size</th>
                <th>Stok</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {datas
                ? datas.map((items: DataTypeSize, i: number) => {
                    return (
                      <>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{items.product.produkname}</td>
                          <td>{items.size}</td>
                          <td>{items.stok}</td>
                          <td>{formatDate(items.createdAt)}</td>
                          <td>
                            <div className=" flex gap-2">
                              <div className=" badge badge-warning p-3 cursor-pointer">
                                <FiEdit className=" text-base text-white" />
                              </div>
                              <div
                                onClick={() => handleDelete(items.id)}
                                className=" badge badge-error p-3 cursor-pointer">
                                <FaRegTrashCan className=" text-base text-white" />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
