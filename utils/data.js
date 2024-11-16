import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Vitech",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },

    {
      name: "Solution",
      email: "solution@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Long Sleev",
      slug: "longsleev",
      category: "Sleeves",
      image: "/img/pic10.jpg",
      price: 50,
      brand: "African Print",
      countInStock: 0,
      rating: 4.5,
      description: "high quality African ware",
      numReviews: 10,
      isFeatured: true,
      banner: "/img/pic5.jpg",
    },

    {
      name: "Short Sleev",
      slug: "shortsleev",
      category: "Sleeves",
      image: "/img/pic2.jpg",
      price: 150,
      brand: "African Print",
      countInStock: 100,
      rating: 4.5,
      description: "high quality African ware",
      numReviews: 10,
      isFeatured: true,
      banner: "/img/pic6.jpg",
    },

    {
      name: "beauty",
      slug: "African beauty",
      category: "beauty",
      image: "/img/pic3.jpg",
      price: 150,
      brand: "African Print",
      countInStock: 20,
      rating: 4.5,
      description: "high quality African ware",
      numReviews: 10,
    },

    {
      name: "cute",
      slug: "cutetness",
      category: "beauty",
      image: "/img/pic4.jpg",
      price: 1150,
      brand: "African Print",
      countInStock: 100,
      rating: 4.5,
      description: "high quality African ware",
      numReviews: 10,
    },

    {
      name: "Pants",
      slug: "African Pants",
      category: "Pants",
      image: "/img/pic5.jpg",
      price: 50,
      brand: "African Print",
      countInStock: 1,
      rating: 4.5,
      description: "high quality African ware",
      numReviews: 10,
    },
  ],
};

export default data;
