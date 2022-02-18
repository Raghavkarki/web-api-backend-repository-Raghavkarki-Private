// use the path of your model
const Product = require("../models/productModel");
const mongoose = require("mongoose");
// use the new name of the database
const url = "mongodb://localhost:27017/easyshoe";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
  });
});
afterAll(async () => {
  await mongoose.connection.close();
});
describe("Product Schema test anything", () => {
  // the code below is for insert testing
  it("Add product testing anything", () => {
    const product = {
      name: "Nokia",
      description: "21",
      price: "21",
      images: "21",
      category: "21",
      stock: "21",
      user: "620a2bc885c3079daee14685", // Add id from user table
    };

    return Product.create(product).then((pro_ret) => {
      expect(pro_ret.name).toEqual("Nokia");
    });
  });

  it("to test the update", async () => {
    return Product.findByIdAndUpdate(
      { _id: Object("620a59f45d749d691915eaa8") }, // Add _id from product id
      { $set: { name: "ram" } }
    ).then((pp) => {
      expect(pp.name).toEqual("ram");
    });
  });

  it("to test the update review", async () => {
    return Product.findByIdAndUpdate(
      { _id: Object("620a59f45d749d691915eaa8") }, // Add _id from product table
      {
        $set: {
          reviews: {
            name: "test",
            comment: "test",
            rating: "12",
            user: "620a5d9c548dd7d8f8c51a9a", // Add userId from user table
          },
        },
      }
    ).then((pp) => {
      expect(pp.reviews.length > 0).toEqual(true);
    });
  });
  // the code below is for delete testing
  // Comment This code before executing test
  //   it("to test the delete product is working or not", async () => {
  //     const status = await Product.deleteMany();
  //     expect(status.ok).toBe(undefined);
  //   });

  it("to get product", async () => {
    const status = Product.find();
    expect(status.ok).toBe(undefined);
  });
});
