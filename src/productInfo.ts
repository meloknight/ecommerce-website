export interface productInfoItemInterface {
  productId: number;
  productType: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productTexture: string;
  productWeightInLbs: number;
  productSize: string;
  firstProductImage: string;
  secondProductImage: string;
  thirdProductImage: string;
}

export const productInfo: productInfoItemInterface[] = [
  {
    productId: 0,
    productType: "Lamps",
    productName: "Black and White Lamp",
    productDescription:
      "Our striking black and white metal lamp is a fusion of modern elegance and timeless charm. With its monochromatic design and smooth metal construction, this lamp effortlessly enhances any decor scheme while illuminating your space with a touch of sophistication.",
    productPrice: 120,
    productTexture: "Smooth metal",
    productWeightInLbs: 4,
    productSize: "10cm x 10cm",
    firstProductImage:
      "./assets/product-images/black-and-white-lamp/black-and-white-lamp-1.jpeg",
    secondProductImage:
      "./assets/product-images/black-and-white-lamp/black-and-white-lamp-2.webp",
    thirdProductImage:
      "./assets/product-images/black-and-white-lamp/black-and-white-lamp-3.webp",
  },
  {
    productId: 1,
    productType: "Skin Care",
    productName: "Body Oil 50mL",
    productDescription:
      "Indulge in the luxurious hydration of our 50mL Body Oil, crafted to nourish your skin with a delicate blend of natural oils. Its lightweight formula absorbs quickly, leaving your skin feeling silky smooth and radiant, making every application a pampering experience.",
    productPrice: 18,
    productTexture: "Oil",
    productWeightInLbs: 0.4,
    productSize: "5cm x 5cm",
    firstProductImage:
      "/assets/product-images/body-oil-50ml/body-oil-50ml-1.jpg",
    secondProductImage:
      "/assets/product-images/body-oil-50ml/body-oil-50ml-2.jpg",
    thirdProductImage:
      "/assets/product-images/body-oil-50ml/body-oil-50ml-3.jpg",
  },
  {
    productId: 2,
    productType: "Skin Care",
    productName: "Body Oil 200mL",
    productDescription:
      "Experience the indulgent hydration of our larger 200mL Body Oil, meticulously crafted to lavish your skin with a luxurious blend of natural oils. Its lightweight formula absorbs swiftly, enveloping your skin in silky smoothness and radiance with every generous application, ensuring a truly pampering experience.",
    productPrice: 60,
    productTexture: "Oil",
    productWeightInLbs: 1.6,
    productSize: "10cm x 10cm",
    firstProductImage:
      "/assets/product-images/body-oil-200ml/body-oil-200ml-1.jpg",
    secondProductImage:
      "/assets/product-images/body-oil-200ml/body-oil-200ml-2.jpg",
    thirdProductImage:
      "/assets/product-images/body-oil-200ml/body-oil-200ml-3.jpg",
  },
  {
    productId: 3,
    productType: "Chairs",
    productName: "Comfy Chair",
    productDescription:
      "This sumptuously comfortable dark grey fabric chair is the epitome of relaxation and style. Its sleek design and plush upholstery invite you to sink in and unwind, making it the perfect addition to any modern living space.",
    productPrice: 320,
    productTexture: "Textile",
    productWeightInLbs: 50,
    productSize: "60cm x 60cm",
    firstProductImage: "/assets/product-images/comfy-chair/comfy-chair-1.jpg",
    secondProductImage: "/assets/product-images/comfy-chair/comfy-chair-2.webp",
    thirdProductImage: "/assets/product-images/comfy-chair/comfy-chair-3.webp",
  },
  {
    productId: 4,
    productType: "Chairs",
    productName: "Copenhagen Armchair",
    productDescription:
      "Elevate your space with our Copenhagen Armchair, meticulously crafted with supple leather upholstery and sturdy wooden construction for both style and durability. Its timeless design and ergonomic build ensure a blend of sophistication and comfort, making it the ideal centerpiece for any contemporary setting.",
    productPrice: 540,
    productTexture: "Leather",
    productWeightInLbs: 70,
    productSize: "60cm x 60cm",
    firstProductImage:
      "/assets/product-images/copenhagen-armchair/copenhagen-armchair-1.jpg",
    secondProductImage:
      "/assets/product-images/copenhagen-armchair/copenhagen-armchair-2.webp",
    thirdProductImage:
      "/assets/product-images/copenhagen-armchair/copenhagen-armchair-3.webp",
  },
  {
    productId: 5,
    productType: "Furniture",
    productName: "Cube Lolo Vase Black",
    productDescription:
      "Our sleek black Cube Lolo Vase combines a modern plastic body with a chic metal frame for a striking yet elegant aesthetic. Its minimalist design effortlessly complements any decor style, adding a touch of sophistication to your floral arrangements or standalone display.",
    productPrice: 40,
    productTexture: "Smooth plastic",
    productWeightInLbs: 4,
    productSize: "15cm x 15cm",
    firstProductImage:
      "/assets/product-images/cube-lolo-vase-black/cube-lolo-vase-black-1.png",
    secondProductImage:
      "/assets/product-images/cube-lolo-vase-black/cube-lolo-vase-black-2.webp",
    thirdProductImage:
      "/assets/product-images/cube-lolo-vase-black/cube-lolo-vase-black-3.webp",
  },
  {
    productId: 6,
    productType: "Furniture",
    productName: "Gejst Shelf A Black Ash",
    productDescription:
      "This black Gejst Shelf A is meticulously crafted from durable wood and adorned with a sleek black ash paint coat for a timeless finish. Its minimalist design offers ample storage space and also adds a touch of contemporary elegance to any room",
    productPrice: 105,
    productTexture: "Wood",
    productWeightInLbs: 10,
    productSize: "60cm x 20cm",
    firstProductImage:
      "/assets/product-images/gejst-shelf-a-black-ash-black/gejst-shelf-a-black-ash-black-1.jpg",
    secondProductImage:
      "/assets/product-images/gejst-shelf-a-black-ash-black/gejst-shelf-a-black-ash-black-2",
    thirdProductImage:
      "/assets/product-images/gejst-shelf-a-black-ash-black/gejst-shelf-a-black-ash-black-3.webp",
  },
  {
    productId: 7,
    productType: "Lamps",
    productName: "Golden Modern Light",
    productDescription:
      "Illuminate your space with our exquisite Golden Modern Light, meticulously crafted from shimmering golden resin and sleek metal for a luxurious aesthetic. Its contemporary design and warm glow bring both elegance and ambiance to any room, making it a statement piece that effortlessly enhances your decor.",
    productPrice: 210,
    productTexture: "Plastic",
    productWeightInLbs: 6,
    productSize: "20cm x 20cm",
    firstProductImage:
      "/assets/product-images/golden-modern-light/golden-modern-light-1.jpg",
    secondProductImage:
      "/assets/product-images/golden-modern-light/golden-modern-light-2.webp",
    thirdProductImage:
      "/assets/product-images/golden-modern-light/golden-modern-light-3.webp",
  },
  {
    productId: 8,
    productType: "Lamps",
    productName: "Lamp Light Blue",
    productDescription:
      "Introducing our charming blue Lamp Light, crafted from light blue plastic to evoke a sense of tranquility and style. Its soothing hue and modern design make it the perfect addition to any space, casting a gentle glow that enhances both ambiance and decor with ease.",
    productPrice: 98,
    productTexture: "Plastic",
    productWeightInLbs: 8,
    productSize: "14cm x 14cm",
    firstProductImage:
      "/assets/product-images/lamp-light-blue/lamp-light-blue-1.png",
    secondProductImage:
      "/assets/product-images/lamp-light-blue/lamp-light-blue-2.webp",
    thirdProductImage:
      "/assets/product-images/lamp-light-blue/lamp-light-blue-3.webp",
  },
  {
    productId: 9,
    productType: "Chairs",
    productName: "Little Woolen Armchair ",
    productDescription:
      "Our Little Woolen Armchair has been crafted with plush synthetic wool upholstery atop a sturdy wooden frame for both comfort and durability. Its charming design and cozy feel make it the perfect spot for relaxation and adding a touch of warmth to any corner of your home.",
    productPrice: 520,
    productTexture: "Synthetic Wool",
    productWeightInLbs: 50,
    productSize: "60cm x 60cm",
    firstProductImage:
      "/assets/product-images/little-armchair-sheepskin/little-armchair-sheepskin-1.jpg",
    secondProductImage:
      "/assets/product-images/little-armchair-sheepskin/little-armchair-sheepskin-2.jpg",
    thirdProductImage:
      "/assets/product-images/little-armchair-sheepskin/little-armchair-sheepskin-3.jpg",
  },
  {
    productId: 10,
    productType: "Lamps",
    productName: "Mat Black Lamp",
    productDescription:
      "This sleek black lamp is a contemporary addition to any space. Its minimalist design exudes sophistication while providing soft, ambient illumination, perfect for creating a cozy atmosphere in your home or office.",
    productPrice: 115,
    productTexture: "Plastic",
    productWeightInLbs: 8,
    productSize: "12cm x 12cm",
    firstProductImage:
      "/assets/product-images/mat-black-lamp/mat-black-lamp-1.png",
    secondProductImage:
      "/assets/product-images/mat-black-lamp/mat-black-lamp-2.webp",
    thirdProductImage:
      "/assets/product-images/mat-black-lamp/mat-black-lamp-3.webp",
  },
  {
    productId: 11,
    productType: "Chairs",
    productName: "Oak Spanish Chair",
    productDescription:
      "Our exquisite Oak Spanish Chair is expertly crafted with sturdy oak and sumptuous leather upholstery for a timeless appeal. Its classic design and premium materials exude sophistication, making it a standout piece that effortlessly blends comfort and elegance in any space.",
    productPrice: 635,
    productTexture: "Wood",
    productWeightInLbs: 75,
    productSize: "60cm x 60cm",
    firstProductImage:
      "/assets/product-images/oak-spanish-chair/oak-spanish-chair-1.png",
    secondProductImage:
      "/assets/product-images/oak-spanish-chair/oak-spanish-chair-2.webp",
    thirdProductImage:
      "/assets/product-images/oak-spanish-chair/oak-spanish-chair-3.webp",
  },
  {
    productId: 12,
    productType: "Kitchen",
    productName: "Pop-Up Toaster",
    productDescription:
      "Experience the convenience of our sleek white Pop-up Toaster, designed to bring a touch of modern functionality to your morning routine. With its efficient pop-up feature and stylish design, it ensures perfectly toasted bread every time, making breakfast preparation a breeze.",
    productPrice: 50,
    productTexture: "Plastic",
    productWeightInLbs: 4,
    productSize: "20cm x 10cm",
    firstProductImage:
      "/assets/product-images/pop-up-toaster/pop-up-toaster-1.jpg",
    secondProductImage:
      "/assets/product-images/pop-up-toaster/pop-up-toaster-2.jpg",
    thirdProductImage:
      "/assets/product-images/pop-up-toaster/pop-up-toaster-3.jpg",
  },
  {
    productId: 13,
    productType: "Furniture",
    productName: "5 compartment Shelf",
    productDescription:
      "This versatile wooden 5 Compartment Shelf is designed to bring both organization and charm to any room. With its sturdy construction and ample storage space, it provides a simple and minimal solution for displaying and tidying up your belongings with ease.",
    productPrice: 155,
    productTexture: "Wood",
    productWeightInLbs: 30,
    productSize: "60cm x 60cm",
    firstProductImage:
      "/assets/product-images/pulp-unit-5-compartment/pulp-unit-5-compartment-1.jpeg",
    secondProductImage:
      "/assets/product-images/pulp-unit-5-compartment/pulp-unit-5-compartment-2.jpg",
    thirdProductImage:
      "/assets/product-images/pulp-unit-5-compartment/pulp-unit-5-compartment-3.jpg",
  },
  {
    productId: 14,
    productType: "Electronics",
    productName: "Remote Sensor Light",
    productDescription:
      "Our innovative Remote Sensor Light features a sleek metal design and advanced app compatibility for effortless customization. With its responsive sensors and versatile programming options, it offers convenient illumination tailored to your needs.",
    productPrice: 80,
    productTexture: "metal",
    productWeightInLbs: 5,
    productSize: "12cm x 12cm",
    firstProductImage:
      "/assets/product-images/remote-sensor-light/remote-sensor-light-1.jpg",
    secondProductImage:
      "/assets/product-images/remote-sensor-light/remote-sensor-light-2.webp",
    thirdProductImage:
      "/assets/product-images/remote-sensor-light/remote-sensor-light-3.jpg",
  },
  {
    productId: 15,
    productType: "Lamps",
    productName: "Simple Golden Lamp",
    productDescription:
      "Illuminate your space with elegance using our Simple Golden Lamp, boasting a timeless design and radiant golden finish. Its understated charm adds a touch of sophistication to any room, making it the perfect lighting accent for both modern and classic decor styles.",
    productPrice: 166,
    productTexture: "Plastic",
    productWeightInLbs: 8,
    productSize: "20cm x 20cm",
    firstProductImage:
      "/assets/product-images/simple-golden-lamp/simple-golden-lamp-1.png",
    secondProductImage:
      "/assets/product-images/simple-golden-lamp/simple-golden-lamp-2.webp",
    thirdProductImage:
      "/assets/product-images/simple-golden-lamp/simple-golden-lamp-3.webp",
  },
  {
    productId: 16,
    productType: "Lamps",
    productName: "Table Lamp",
    productDescription:
      "Our versatile Simple Table Lamp is crafted with durable plastic construction and available in a variety of vibrant colors to suit any decor. Its minimalist design and adjustable brightness make it an ideal addition to any space, offering both functionality and style in one sleek package.",
    productPrice: 65,
    productTexture: "Plastic",
    productWeightInLbs: 4,
    productSize: "12cm x 12cm",
    firstProductImage: "/assets/product-images/table-lamp/table-lamp-1.png",
    secondProductImage: "/assets/product-images/table-lamp/table-lamp-2.webp",
    thirdProductImage: "/assets/product-images/table-lamp/table-lamp-3.webp",
  },
  {
    productId: 17,
    productType: "Lamps",
    productName: "The Sun Pendant Black",
    productDescription:
      "Elevate your space with The Sun Pendant Black a captivating hanging light that exudes contemporary allure. Its sleek black design and radiant glow make it a stylish statement piece, illuminating any room with modern sophistication and warmth.",
    productPrice: 166,
    productTexture: "Plastic",
    productWeightInLbs: 10,
    productSize: "20cm x 20cm",
    firstProductImage:
      "/assets/product-images/the-sun-pendant-black/the-sun-pendant-black-1.jpeg",
    secondProductImage:
      "/assets/product-images/the-sun-pendant-black/the-sun-pendant-black-2.webp",
    thirdProductImage:
      "/assets/product-images/the-sun-pendant-black/the-sun-pendant-black-3.jpg",
  },
  {
    productId: 18,
    productType: "Chairs",
    productName: "Traditional Chair",
    productDescription:
      "The timeless Traditional Chair, meticulously crafted with sturdy wood construction and adorned with soft textile coverings for comfort and style. Its classic design exudes warmth and elegance, making it the perfect addition to any home or office setting.",
    productPrice: 330,
    productTexture: "Wood",
    productWeightInLbs: 35,
    productSize: "60cm x 60cm",
    firstProductImage:
      "/assets/product-images/traditional-chair/traditional-chair-1.jpg",
    secondProductImage:
      "/assets/product-images/traditional-chair/traditional-chair-2.webp",
    thirdProductImage:
      "/assets/product-images/traditional-chair/traditional-chair-3.webp",
  },
  {
    productId: 19,
    productType: "Skin Care",
    productName: "Unbleached Cotton Pads 180",
    productDescription:
      "Our Unbleached Cotton Pads 180 are designed for seamless pairing with your skincare routine. Crafted from soft unbleached cotton, these pads offer a luxurious and eco-friendly way to enhance your skincare regimen.",
    productPrice: 35,
    productTexture: "Cotton",
    productWeightInLbs: 0.5,
    productSize: "10cm x 10cm",
    firstProductImage:
      "/assets/product-images/unbleached-cotton-pads-180/unbleached-cotton-pads-180-1.jpg",
    secondProductImage:
      "/assets/product-images/unbleached-cotton-pads-180/unbleached-cotton-pads-180-2.jpg",
    thirdProductImage:
      "/assets/product-images/unbleached-cotton-pads-180/unbleached-cotton-pads-180-3.jpg",
  },
];
