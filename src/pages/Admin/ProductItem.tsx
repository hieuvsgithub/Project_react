import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { deleteProduct, fetchProduct } from "@/features/product/productAction";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductItem = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProduct());
    return () => {};
  }, []);

  return (
    <>
      {products.map((item) => {
        return (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-center ">
              {item.id}
            </TableCell>
            <TableCell className="max-w-[80px]">{item.title}</TableCell>
            <TableCell className="max-w-[120px]">{item.description}</TableCell>
            <TableCell className="text-center max-w-[20px]">
              {item.price}
            </TableCell>
            <TableCell className="text-center max-w-[100px]">
              <Button className=" bg-orange-500">
                <Link to={`update_product/${item.id}`}>update</Link>
              </Button>
              <Button
                className="ml-[20px] bg-rose-800"
                onClick={() => dispatch(deleteProduct(item.id))}
              >
                remove
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

export default ProductItem;
