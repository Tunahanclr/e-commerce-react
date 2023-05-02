import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product({product, handleMouseEnter, handleMouseLeave, hoveredProductId}) {
  const navigate=useNavigate()
  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg relative"
      key={product.id}
      onMouseEnter={() => handleMouseEnter(product.id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center">
        <img  className="h-32 md:h-60 object-cover" src={product.image} alt="" />
      </div>
      {hoveredProductId === product.id && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button onClick={()=>navigate(`products/${product?.id}`)} className="text-lg bg-blue-500 w-36 rounded h-11 hover:bg-blue-400 font-bold">Product Review</button>
        </div>
      )}
      <div className="px-4 py-2 flex justify-between mt-4 items-center gap-3">
        <h2 className="text-black font-semibold text-xs sm:text-sm md:text-lg mb-2">{product.title}</h2>
        <p className="text-gray-800 font-bold">${product.price}</p>
      </div>
    </div>
  );
}
