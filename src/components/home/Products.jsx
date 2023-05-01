import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategoryProducts } from "../../redux/ProductSlice";
import ReactPaginate from "react-paginate";
import Loading from "../loading";
import Product from "./Product";
export default function Products({ category, sort }) {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  const handleMouseEnter = (id) => {
    setHoveredProductId(id);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  //! paginate
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 ml-10">
        {productsStatus == "LOADING" ? (
          <Loading />
        ) : (
          currentItems
            ?.sort((a, b) =>
              sort == "inc"
                ? a.price - b.price
                : sort == "dec"
                ? b.price - a.price
                : null
            )
            .map((product, i) => (
              <div
                key={i}
                className="flex flex-wrap justify-center md:justify-start"
              >
                <div className="flex justify-center bg-white w-[300px] rounded m-4">
                  <Product
                    product={product}
                    handleMouseEnter={handleMouseEnter}
                    hoveredProductId={hoveredProductId}
                    handleMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>
            ))
        )}
      </div>
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
