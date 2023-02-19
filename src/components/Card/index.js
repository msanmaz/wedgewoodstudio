import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem, increaseQuantity, decreaseQuantity, removeItem } from "../../rtk/cartSlice";


const Card = ({ id,title, description, price, image,onClickHandler }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.items.find((item) => item.id === id));

  const handleAddToCart = () => {
    dispatch(addItem({ id, title, price }));
  };

  return (
    <div className="rounded-md shadow-md overflow-hidden bg-white hover:shadow-lg transform hover:-translate-y-1 transition duration-500">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-center object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex items-center mt-3">
          <span className="text-gray-900 font-bold text-xl">${price}</span>
          <button onClick={()=> handleAddToCart(id,title,price)} className="ml-auto py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
