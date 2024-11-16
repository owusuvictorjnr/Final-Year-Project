/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import data from '@/utils/data'

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card min-h-1/2 lg:min-h-36 lg:w-[15rem]">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={1000}
          height={1000}
          className="rounded shadow h-[35vh] w-full lg:h-56 lg:w-full"
        />
      </Link>

      <div className="flex flex-col items-center justify-center">
        <Link href={`/product/${product.slug}`}>
          <h1 className="text-lg">{product.name}</h1>
        </Link>

        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-btn"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
