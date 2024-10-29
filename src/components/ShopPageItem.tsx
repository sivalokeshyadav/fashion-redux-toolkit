import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";

interface ShopItemProps {
  data: any;
  key: string;
}

const ShopPageItem: React.FC<ShopItemProps> = ({ data }) => {
  const cartItems = useSelector(
    (state: RootState) => state.cartSlice.cartItems
  );
  console.log("siva",cartItems)
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          border: "2px solid black",
          margin: "10px",
          borderRadius: "10px",
          width: "400px",
          height: "550px",
        }}
      >
        <div>
          <div>
            <img src={data.image} alt={data.title} height={200} width={200} />
          </div>
          <div style={{ fontSize: "10px" }}>
            <h3>{data.title}</h3>
            <h3>{data.category}</h3>
            <p>{data.description}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ margin: "10px" }}>Price:${data.price}</h3>
              <strong style={{ margin: "10px" }}>
                rating:{data.rating.rate}
              </strong>{" "}
              <strong style={{ margin: "10px" }}>
                Count:{data.rating.count}
              </strong>{" "}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
            <button
            onClick={()=>dispatch(addToCart(data))}
              style={{
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add To Cart
            </button>
          
            <button
            onClick={()=>dispatch(removeFromCart(data))}
              style={{
                backgroundColor: "red",
                color: "white",
                cursor: "pointer",
              }}
            >
              Remove From Cart
            </button>
          
        </div>
      </div>
    </>
  );
};

export default ShopPageItem;
