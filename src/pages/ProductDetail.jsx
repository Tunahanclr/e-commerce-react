import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/ProductSlice";
import Detail from "../components/detail/Detail";
import Loading from "../components/loading";
export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {productDetailStatus == "LOADING" ? (
        <Loading />
      ) : (
        <Detail productDetail={productDetail} />
      )}
    </div>
  );
}
