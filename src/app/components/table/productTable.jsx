import React from "react";
import ModalComponent from "../modal/productModal";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function TableComponent(props) {
  const { tableName, AddFieldName, product, columns } = props;

  return (
    <>
      <div className="flex justify-between gap-3 items-end">
        <h3 className="text-lg font-bold">{tableName}</h3>
        <ModalComponent addFieldName={AddFieldName} />
      </div>

      <Table
        isCompact
        removeWrapper
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContentPlacement="outside"
        topContentPlacement="outside"
        className="mt-4 bg-white p-4 rounded-md"
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          ))}
        </TableHeader>

        <TableBody>
          {product.map((item) => (
            <TableRow key={item.productId}>
              {columns.map((column) => (
                <TableCell key={column.uid}>
                  {column.uid === "productImg" ? (
                    <img class="rounded-full"
                  
                      src={item.productImg} // Assuming productImg is the URL of the image
                      alt={item.productName} // Provide alt text for accessibility
                      style={{ maxWidth: "100px", maxHeight: "100px" }} // Optional: Define image dimensions
                    />
                  ) : (
                    item[column.uid]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
