import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductItem from "@/pages/Admin/ProductItem";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h2 className="text-[1.8rem] font-semibold">Product List </h2>
          <Button className="text-[1.1rem] font-medium bg-green-600">
            <Link to="add_product">Add product</Link>
          </Button>
        </div>
        <div>
          <Table className="mt-[10px]">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-center">Image</TableHead>
                <TableHead className="text-center">Title</TableHead>
                <TableHead className="text-center">Description</TableHead>
                <TableHead className="text-center">Price</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <ProductItem />
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ProductList;
