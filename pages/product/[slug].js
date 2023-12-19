import Layout from '@/components/Layout'
import Product from '@/models/Product'
import { Store } from '@/utils/Store'
import db from '@/utils/db'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

export default function ProductPage(props) {
  const { product } = props
  const { state, dispatch } = useContext(Store)
  const router = useRouter()
  if (!product) {
    return <Layout title="Product Not Found">Product Not found</Layout>
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug)
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/products/${product._id}`)
    // dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })

    if (data.countInStock < quantity) {
      return toast.error('Sorry, Product is out of stock')
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
    router.push('/cart')
  }

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            reponsive={true}
            className=""
          />
        </div>

        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Categoty: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>

        {/* Right Status (Price and Payment Details) */}
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>$ {product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'in stock' : 'Unavailable'}</div>
            </div>
            <button className="primary-btn w-full" onClick={addToCartHandler}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(contex) {
  const { params } = contex
  const { slug } = params

  await db.connect()
  const product = await Product.findOne({ slug }).lean()
  await db.disconnect()
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  }
}
