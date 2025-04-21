"use client";

import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import React, { useState } from "react";
import { useGetCategoryData } from "@/libs/admin/service/category/useGetCategoryData";
import { useDeleteCategory } from "@/libs/admin/service/category/useDeleteCategory";
import { formatDate } from "@/libs/helper/FormatDate";
import { ModalUpdateCategory } from "./ModalUpdateCategory";

type categoryType = {
  id: number;
  categoryname: string;
  createdAt: string;
};

export const TableCategory = ({ query }: { query: string }) => {
  const [oldCategory, setOldCategory] = useState<{
    id: number;
    categoryname: string;
  }>({ id: 0, categoryname: "" });
  const [showUpdate, setShowUpdate] = useState<boolean>(false);

  const { data: category, refetch } = useGetCategoryData(query);

  const { mutate } = useDeleteCategory({
    onSuccess: () => {
      refetch();
    },
  });

  const handleClickUpdate = (id: number, oldCategory: string) => {
    setOldCategory({ id: id, categoryname: oldCategory });
    setShowUpdate(true);
  };

  return (
    <>
      <div className=" w-full flex justify-center items-center">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Category</th>
                <th>CreatedAt</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {category
                ? category.map((items: categoryType, i: number) => {
                    return (
                      <>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{items.categoryname}</td>
                          <td>{formatDate(items.createdAt)}</td>
                          <td>
                            <div className=" flex gap-2">
                              <div
                                onClick={() =>
                                  handleClickUpdate(
                                    items.id,
                                    items.categoryname
                                  )
                                }
                                className=" badge badge-warning p-3 cursor-pointer">
                                <FiEdit className=" text-base text-white" />
                              </div>
                              <div
                                onClick={() => mutate({ id: items.id })}
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
        <ModalUpdateCategory
          setShowUpdate={setShowUpdate}
          showUpdate={showUpdate}
          oldCategory={oldCategory}
        />
      </div>
    </>
  );
};
