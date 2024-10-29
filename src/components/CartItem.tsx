import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/store";
import { removeFromCart } from "../redux/slices/CartSlice";

export default function CartItem({ data }:any) {
    console.log("siva",data)
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="border rounded p-3 flex justify-between items-center w-full gap-3 bg-slate-900">
      <div className="__item_info flex gap-2">
        <img className="w-20 shrink-0 rounded" src={data.image} alt="" />
        <div className="flex justify-start items-start flex-col gap-1">
          <b className="font-bold">{data.title}</b>
          <p className="bg-white p-3 py-1 rounded text-green-700 w-fit font-bold">
            ${data.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(data.id))}
        className="shrink-0"
      >
Remove
      </button>
    </div>
  );
}