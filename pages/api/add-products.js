import { client } from "../../lib/client";
import slugify from "slugify"; // Import slugify library

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // This JSON arrives as a string,
      // so we turn it into a JS object with JSON.parse()
      const newProduct = await JSON.parse(req.body);

      // Generate a slug from the name using slugify library
      const slug = slugify(newProduct.title, { lower: true,strict:true });

      // Prepare the values with the correct data types
      const product = {
        _type:"product",
        name: newProduct.title,
        price: parseFloat(newProduct.price),
        brand: newProduct.brand,
        details: newProduct.description,
        image: [newProduct.image] // Assign the reference to the image asset
      };

      // Then use the Sanity client to create a new product document
      try {
        const createdProduct = await client.create(product);
        console.log(`Product was created, document ID is ${createdProduct._id}`);

        res.status(200).json({ msg: `Product was created, document ID is ${createdProduct._id}` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error, check console" });
      }

      break;
  }
}
