import { clearCart, removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
export default function CartComp({ cart }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center w-full max-w-[1440px] mx-auto my-10">
      <div className="w-full sm:w-auto sm:flex-none flex items-center justify-center mb-5">
       <img className='w-[200px] h-[200px]' src={cart.image} alt="" />
      </div>
      <div className="flex-1 sm:ml-5">
        <h2 className="text-2xl font-bold mb-2">{cart?.title}</h2>
        <p className="text-lg mb-2">{cart?.description}</p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <div className="flex items-center mb-2 sm:mb-0">
            <span className="font-bold text-xl mr-2">{cart?.price}$</span>
            <span className="text-lg">{cart?.quantity} adet</span>
          </div>
          <div
            className="text-red-500 text-xl font-bold cursor-pointer hover:text-gray-400"
            onClick={() => dispatch(removeFromCart(cart?.id))}
          >
              Delete Product
          </div>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-400 hover:text-red-500 transition-all"
          onClick={() => dispatch(clearCart(cart?.id))}
        >
            Clear Cart
        </button>
      </div>
    </div>
  );
}
