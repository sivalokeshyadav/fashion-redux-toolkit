import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { fetchDataUsingThunk } from "../redux/slices/storeSlice";
import ShopPageItem from "../components/ShopPageItem";

const StorePage = () => {
  const storeItems = useSelector(
    (state: RootState) => state.storeSlice.products
  );
  const loading = useSelector((state: RootState) => state.storeSlice.loading);
  //const error = useSelector((state: RootState) => state.storeSlice.error);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDataUsingThunk());
  }, []);
  return (
    <div>
      siva
      {!loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {storeItems.map((item: any) => {
            return <ShopPageItem key={item.id} data={item} />;
          })}
        </div>
      ) : (
        <div>Loading Items.......</div>
      )}
    </div>
  );
};

export default StorePage;
