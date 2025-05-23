const Product1 = () => {
  const data = [
    {
      "id": 4,
      "title": "Classic Grey Hooded Sweatshirt",
      "slug": "classic-grey-hooded-sweatshirt",
      "price": 90,
      "description": "Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/R2PN9Wq.jpeg",
        "https://i.imgur.com/IvxMPFr.jpeg",
        "https://i.imgur.com/7eW9nXP.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 6,
      "title": "Classic Comfort Fit Joggers",
      "slug": "classic-comfort-fit-joggers",
      "price": 25,
      "description": "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/ZKGofuB.jpeg",
        "https://i.imgur.com/GJi73H0.jpeg",
        "https://i.imgur.com/633Fqrz.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 8,
      "title": "Classic Red Jogger Sweatpants",
      "slug": "classic-red-jogger-sweatpants",
      "price": 98,
      "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/9LFjwpI.jpeg",
        "https://i.imgur.com/vzrTgUR.jpeg",
        "https://i.imgur.com/p5NdI6n.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 9,
      "title": "Classic Navy Blue Baseball Cap",
      "slug": "classic-navy-blue-baseball-cap",
      "price": 61,
      "description": "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/R3iobJA.jpeg",
        "https://i.imgur.com/Wv2KTsf.jpeg",
        "https://i.imgur.com/76HAxcA.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 12,
      "title": "Classic Black Baseball Cap",
      "slug": "classic-black-baseball-cap",
      "price": 58,
      "description": "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/KeqG6r4.jpeg",
        "https://i.imgur.com/xGQOw3p.jpeg",
        "https://i.imgur.com/oO5OUjb.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 13,
      "title": "Classic Olive Chino Shorts",
      "slug": "classic-olive-chino-shorts",
      "price": 84,
      "description": "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/UsFIvYs.jpeg",
        "https://i.imgur.com/YIq57b6.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 14,
      "title": "Classic High-Waisted Athletic Shorts",
      "slug": "classic-high-waisted-athletic-shorts",
      "price": 43,
      "description": "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/eGOUveI.jpeg",
        "https://i.imgur.com/UcsGO7E.jpeg",
        "https://i.imgur.com/NLn4e7S.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 15,
      "title": "Classic White Crew Neck T-Shirt",
      "slug": "classic-white-crew-neck-t-shirt",
      "price": 39,
      "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/axsyGpD.jpeg",
        "https://i.imgur.com/T8oq9X2.jpeg",
        "https://i.imgur.com/J6MinJn.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 16,
      "title": "Classic White Tee - Timeless Style and Comfort",
      "slug": "classic-white-tee-timeless-style-and-comfort",
      "price": 73,
      "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/Y54Bt8J.jpeg",
        "https://i.imgur.com/SZPDSgy.jpeg",
        "https://i.imgur.com/sJv4Xx0.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 17,
      "title": "Classic Black T-Shirt",
      "slug": "classic-black-t-shirt",
      "price": 35,
      "description": "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/9DqEOV5.jpeg",
        "https://i.imgur.com/ae0AEYn.jpeg",
        "https://i.imgur.com/mZ4rUjj.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 18,
      "title": "Sleek White & Orange Wireless Gaming Controller",
      "slug": "sleek-white-orange-wireless-gaming-controller",
      "price": 69,
      "description": "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/ZANVnHE.jpeg",
        "https://i.imgur.com/Ro5z6Tn.jpeg",
        "https://i.imgur.com/woA93Li.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 19,
      "title": "Sleek Wireless Headphone & Inked Earbud Set",
      "slug": "sleek-wireless-headphone-inked-earbud-set",
      "price": 44,
      "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/yVeIeDa.jpeg",
        "https://i.imgur.com/jByJ4ih.jpeg",
        "https://i.imgur.com/KXj6Tpb.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 20,
      "title": "Sleek Comfort-Fit Over-Ear Headphones",
      "slug": "sleek-comfort-fit-over-ear-headphones",
      "price": 28,
      "description": "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/SolkFEB.jpeg",
        "https://i.imgur.com/KIGW49u.jpeg",
        "https://i.imgur.com/mWwek7p.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 25,
      "title": "Stylish Red & Silver Over-Ear Headphones",
      "slug": "stylish-red-silver-over-ear-headphones",
      "price": 39,
      "description": "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/YaSqa06.jpeg",
        "https://i.imgur.com/isQAliJ.jpeg",
        "https://i.imgur.com/5B8UQfh.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 26,
      "title": "Sleek Mirror Finish Phone Case",
      "slug": "sleek-mirror-finish-phone-case",
      "price": 27,
      "description": "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/yb9UQKL.jpeg",
        "https://i.imgur.com/m2owtQG.jpeg",
        "https://i.imgur.com/bNiORct.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 28,
      "title": "Sleek Modern Leather Sofa",
      "slug": "sleek-modern-leather-sofa",
      "price": 53,
      "description": "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/Qphac99.jpeg",
        "https://i.imgur.com/dJjpEgG.jpeg",
        "https://i.imgur.com/MxJyADq.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 29,
      "title": "Mid-Century Modern Wooden Dining Table",
      "slug": "mid-century-modern-wooden-dining-table",
      "price": 24,
      "description": "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/DMQHGA0.jpeg",
        "https://i.imgur.com/qrs9QBg.jpeg",
        "https://i.imgur.com/XVp8T1I.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 30,
      "title": "Elegant Golden-Base Stone Top Dining Table",
      "slug": "elegant-golden-base-stone-top-dining-table",
      "price": 66,
      "description": "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/NWIJKUj.jpeg",
        "https://i.imgur.com/Jn1YSLk.jpeg",
        "https://i.imgur.com/VNZRvx5.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 31,
      "title": "Modern Elegance Teal Armchair",
      "slug": "modern-elegance-teal-armchair",
      "price": 25,
      "description": "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/6wkyyIN.jpeg",
        "https://i.imgur.com/Ald3Rec.jpeg",
        "https://i.imgur.com/dIqo03c.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 32,
      "title": "Elegant Solid Wood Dining Table",
      "slug": "elegant-solid-wood-dining-table",
      "price": 67,
      "description": "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/4lTaHfF.jpeg",
        "https://i.imgur.com/JktHE1C.jpeg",
        "https://i.imgur.com/cQeXQMi.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 33,
      "title": "Modern Minimalist Workstation Setup",
      "slug": "modern-minimalist-workstation-setup",
      "price": 49,
      "description": "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/3oXNBst.jpeg",
        "https://i.imgur.com/ErYYZnT.jpeg",
        "https://i.imgur.com/boBPwYW.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 34,
      "title": "Modern Ergonomic Office Chair",
      "slug": "modern-ergonomic-office-chair",
      "price": 71,
      "description": "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/3dU0m72.jpeg",
        "https://i.imgur.com/zPU3EVa.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 35,
      "title": "Futuristic Holographic Soccer Cleats",
      "slug": "futuristic-holographic-soccer-cleats",
      "price": 39,
      "description": "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/qNOjJje.jpeg",
        "https://i.imgur.com/NjfCFnu.jpeg",
        "https://i.imgur.com/eYtvXS1.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 36,
      "title": "Rainbow Glitter High Heels",
      "slug": "rainbow-glitter-high-heels",
      "price": 39,
      "description": "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/62gGzeF.jpeg",
        "https://i.imgur.com/5MoPuFM.jpeg",
        "https://i.imgur.com/sUVj7pK.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 37,
      "title": "Chic Summer Denim Espadrille Sandals",
      "slug": "chic-summer-denim-espadrille-sandals",
      "price": 33,
      "description": "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/9qrmE1b.jpeg",
        "https://i.imgur.com/wqKxBVH.jpeg",
        "https://i.imgur.com/sWSV6DK.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 38,
      "title": "Vibrant Runners: Bold Orange & Blue Sneakers",
      "slug": "vibrant-runners-bold-orange-blue-sneakers",
      "price": 27,
      "description": "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/hKcMNJs.jpeg",
        "https://i.imgur.com/NYToymX.jpeg",
        "https://i.imgur.com/HiiapCt.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 39,
      "title": "Vibrant Pink Classic Sneakers",
      "slug": "vibrant-pink-classic-sneakers",
      "price": 84,
      "description": "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/mcW42Gi.jpeg",
        "https://i.imgur.com/mhn7qsF.jpeg",
        "https://i.imgur.com/F8vhnFJ.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 40,
      "title": "Futuristic Silver and Gold High-Top Sneaker",
      "slug": "futuristic-silver-and-gold-high-top-sneaker",
      "price": 68,
      "description": "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/npLfCGq.jpeg",
        "https://i.imgur.com/vYim3gj.jpeg",
        "https://i.imgur.com/HxuHwBO.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 44,
      "title": "Classic Blue Suede Casual Shoes",
      "slug": "classic-blue-suede-casual-shoes",
      "price": 39,
      "description": "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/sC0ztOB.jpeg",
        "https://i.imgur.com/Jf9DL9R.jpeg",
        "https://i.imgur.com/R1IN95T.jpeg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 45,
      "title": "Sleek Futuristic Electric Bicycle",
      "slug": "sleek-futuristic-electric-bicycle",
      "price": 22,
      "description": "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/BG8J0Fj.jpg",
        "https://i.imgur.com/ujHBpCX.jpg",
        "https://i.imgur.com/WHeVL9H.jpg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 46,
      "title": "Sleek All-Terrain Go-Kart",
      "slug": "sleek-all-terrain-go-kart",
      "price": 37,
      "description": "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/Ex5x3IU.jpg",
        "https://i.imgur.com/z7wAQwe.jpg",
        "https://i.imgur.com/kc0Dj9S.jpg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 47,
      "title": "Radiant Citrus Eau de Parfum",
      "slug": "radiant-citrus-eau-de-parfum",
      "price": 73,
      "description": "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/xPDwUb3.jpg",
        "https://i.imgur.com/3rfp691.jpg",
        "https://i.imgur.com/kG05a29.jpg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 48,
      "title": "Sleek Olive Green Hardshell Carry-On Luggage",
      "slug": "sleek-olive-green-hardshell-carry-on-luggage",
      "price": 48,
      "description": "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/jVfoZnP.jpg",
        "https://i.imgur.com/Tnl15XK.jpg",
        "https://i.imgur.com/7OqTPO6.jpg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 49,
      "title": "Chic Transparent Fashion Handbag",
      "slug": "chic-transparent-fashion-handbag",
      "price": 61,
      "description": "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/Lqaqz59.jpg",
        "https://i.imgur.com/uSqWK0m.jpg",
        "https://i.imgur.com/atWACf1.jpg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 50,
      "title": "Trendy Pink-Tinted Sunglasses",
      "slug": "trendy-pink-tinted-sunglasses",
      "price": 38,
      "description": "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/0qQBkxX.jpg",
        "https://i.imgur.com/I5g1DoE.jpg",
        "https://i.imgur.com/myfFQBW.jpg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 51,
      "title": "Elegant Glass Tumbler Set",
      "slug": "elegant-glass-tumbler-set",
      "price": 50,
      "description": "Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": [
        "https://i.imgur.com/TF0pXdL.jpg",
        "https://i.imgur.com/BLDByXP.jpg",
        "https://i.imgur.com/b7trwCv.jpg"
      ],
      "creationAt": "2025-04-24T02:26:09.000Z",
      "updatedAt": "2025-04-24T02:26:09.000Z"
    },
    {
      "id": 59,
      "title": "iphone 20",
      "slug": "iphone-20",
      "price": 500,
      "description": "tra gop",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400"],
      "creationAt": "2025-04-24T04:47:34.000Z",
      "updatedAt": "2025-04-24T04:47:34.000Z"
    },
    {
      "id": 61,
      "title": "New P roduct",
      "slug": "new-p-roduct",
      "price": 10,
      "description": "A description",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400"],
      "creationAt": "2025-04-24T05:36:54.000Z",
      "updatedAt": "2025-04-24T05:36:54.000Z"
    },
    {
      "id": 62,
      "title": "New Product",
      "slug": "new-product",
      "price": 10,
      "description": "2",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placeimg.com/640/480/any"],
      "creationAt": "2025-04-24T06:05:12.000Z",
      "updatedAt": "2025-04-24T06:05:12.000Z"
    },
    {
      "id": 63,
      "title": "Noise Cancelling Earbuds",
      "slug": "noise-cancelling-earbuds",
      "price": 284,
      "description": "Compact and portable",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/FF5733/fff"],
      "creationAt": "2025-04-24T06:19:55.000Z",
      "updatedAt": "2025-04-24T06:19:55.000Z"
    },
    {
      "id": 64,
      "title": "Wireless Keyboard",
      "slug": "wireless-keyboard",
      "price": 339,
      "description": "Ideal for professionals",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/581845/fff"],
      "creationAt": "2025-04-24T06:19:56.000Z",
      "updatedAt": "2025-04-24T06:19:56.000Z"
    },
    {
      "id": 65,
      "title": "Digital Camera",
      "slug": "digital-camera",
      "price": 279,
      "description": "Perfect for daily use",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/F39C12/fff"],
      "creationAt": "2025-04-24T06:19:56.000Z",
      "updatedAt": "2025-04-24T06:19:56.000Z"
    },
    {
      "id": 66,
      "title": "Photo Printer",
      "slug": "photo-printer",
      "price": 322,
      "description": "Compact and portable",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/33CFFF/fff"],
      "creationAt": "2025-04-24T06:19:57.000Z",
      "updatedAt": "2025-04-24T06:19:57.000Z"
    },
    {
      "id": 67,
      "title": "Laptop Cooling Pad",
      "slug": "laptop-cooling-pad",
      "price": 115,
      "description": "Sleek and functional",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/581845/fff"],
      "creationAt": "2025-04-24T06:19:58.000Z",
      "updatedAt": "2025-04-24T06:19:58.000Z"
    },
    {
      "id": 68,
      "title": "Webcam",
      "slug": "webcam",
      "price": 325,
      "description": "Ideal for professionals",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/F39C12/fff"],
      "creationAt": "2025-04-24T06:19:58.000Z",
      "updatedAt": "2025-04-24T06:19:58.000Z"
    },
    {
      "id": 69,
      "title": "Mechanical Keyboard",
      "slug": "mechanical-keyboard",
      "price": 160,
      "description": "Perfect for daily use",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/85FF33/fff"],
      "creationAt": "2025-04-24T06:19:59.000Z",
      "updatedAt": "2025-04-24T06:19:59.000Z"
    },
    {
      "id": 70,
      "title": "Wireless Headphones",
      "slug": "wireless-headphones",
      "price": 241,
      "description": "Perfect for daily use",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/85FF33/fff"],
      "creationAt": "2025-04-24T06:20:00.000Z",
      "updatedAt": "2025-04-24T06:20:00.000Z"
    },
    {
      "id": 71,
      "title": "4K Monitor",
      "slug": "4k-monitor",
      "price": 252,
      "description": "Perfect for daily use",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/C70039/fff"],
      "creationAt": "2025-04-24T06:20:00.000Z",
      "updatedAt": "2025-04-24T06:20:00.000Z"
    },
    {
      "id": 72,
      "title": "Fitness Tracker",
      "slug": "fitness-tracker",
      "price": 308,
      "description": "Perfect for daily use",
      "category": {
        "id": 3,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/900C3F/fff"],
      "creationAt": "2025-04-24T06:20:01.000Z",
      "updatedAt": "2025-04-24T06:20:01.000Z"
    },
    {
      "id": 73,
      "title": "LED Desk Lamp",
      "slug": "led-desk-lamp",
      "price": 221,
      "description": "Sleek and functional",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/8E44AD/fff"],
      "creationAt": "2025-04-24T06:20:01.000Z",
      "updatedAt": "2025-04-24T06:20:01.000Z"
    },
    {
      "id": 74,
      "title": "E-Reader",
      "slug": "e-reader",
      "price": 146,
      "description": "Sleek and functional",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/DAF7A6/fff"],
      "creationAt": "2025-04-24T06:20:03.000Z",
      "updatedAt": "2025-04-24T06:20:03.000Z"
    },
    {
      "id": 75,
      "title": "Surge Protector",
      "slug": "surge-protector",
      "price": 200,
      "description": "Ideal for professionals",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/FF5733/fff"],
      "creationAt": "2025-04-24T06:20:05.000Z",
      "updatedAt": "2025-04-24T06:20:05.000Z"
    },
    {
      "id": 76,
      "title": "Gaming Mouse",
      "slug": "gaming-mouse",
      "price": 159,
      "description": "Compact and portable",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/F39C12/fff"],
      "creationAt": "2025-04-24T06:20:06.000Z",
      "updatedAt": "2025-04-24T06:20:06.000Z"
    },
    {
      "id": 77,
      "title": "Gaming Chair",
      "slug": "gaming-chair",
      "price": 187,
      "description": "Compact and portable",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/900C3F/fff"],
      "creationAt": "2025-04-24T06:20:06.000Z",
      "updatedAt": "2025-04-24T06:20:06.000Z"
    },
    {
      "id": 78,
      "title": "Smart Plug",
      "slug": "smart-plug",
      "price": 330,
      "description": "Compact and portable",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/C70039/fff"],
      "creationAt": "2025-04-24T06:20:11.000Z",
      "updatedAt": "2025-04-24T06:20:11.000Z"
    },
    {
      "id": 79,
      "title": "Smart Watch",
      "slug": "smart-watch",
      "price": 277,
      "description": "Perfect for daily use",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/FF5733/fff"],
      "creationAt": "2025-04-24T06:20:12.000Z",
      "updatedAt": "2025-04-24T06:20:12.000Z"
    },
    {
      "id": 80,
      "title": "Laptop Stand",
      "slug": "laptop-stand",
      "price": 356,
      "description": "Sleek and functional",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/33CFFF/fff"],
      "creationAt": "2025-04-24T06:20:13.000Z",
      "updatedAt": "2025-04-24T06:20:13.000Z"
    },
    {
      "id": 81,
      "title": "Graphic Tablet",
      "slug": "graphic-tablet",
      "price": 402,
      "description": "Sleek and functional",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/33CFFF/fff"],
      "creationAt": "2025-04-24T06:20:14.000Z",
      "updatedAt": "2025-04-24T06:20:14.000Z"
    },
    {
      "id": 82,
      "title": "VR Headset",
      "slug": "vr-headset",
      "price": 101,
      "description": "Compact and portable",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/900C3F/fff"],
      "creationAt": "2025-04-24T06:20:14.000Z",
      "updatedAt": "2025-04-24T06:20:14.000Z"
    },
    {
      "id": 83,
      "title": "Ergonomic Mouse",
      "slug": "ergonomic-mouse",
      "price": 382,
      "description": "Sleek and functional",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/85FF33/fff"],
      "creationAt": "2025-04-24T06:20:20.000Z",
      "updatedAt": "2025-04-24T06:20:20.000Z"
    },
    {
      "id": 84,
      "title": "HD Projector",
      "slug": "hd-projector",
      "price": 410,
      "description": "Ideal for professionals",
      "category": {
        "id": 5,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/581845/fff"],
      "creationAt": "2025-04-24T06:20:20.000Z",
      "updatedAt": "2025-04-24T06:20:20.000Z"
    },
    {
      "id": 85,
      "title": "Bluetooth Speaker",
      "slug": "bluetooth-speaker",
      "price": 466,
      "description": "Sleek and functional",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/F39C12/fff"],
      "creationAt": "2025-04-24T06:20:23.000Z",
      "updatedAt": "2025-04-24T06:20:23.000Z"
    },
    {
      "id": 86,
      "title": "Power Bank",
      "slug": "power-bank",
      "price": 306,
      "description": "Sleek and functional",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/8E44AD/fff"],
      "creationAt": "2025-04-24T06:20:23.000Z",
      "updatedAt": "2025-04-24T06:20:23.000Z"
    },
    {
      "id": 87,
      "title": "Tablet",
      "slug": "tablet",
      "price": 265,
      "description": "High quality and modern design",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/FF5733/fff"],
      "creationAt": "2025-04-24T06:20:25.000Z",
      "updatedAt": "2025-04-24T06:20:25.000Z"
    },
    {
      "id": 88,
      "title": "Portable Charger",
      "slug": "portable-charger",
      "price": 174,
      "description": "Stylish and durable",
      "category": {
        "id": 4,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400/8E44AD/fff"],
      "creationAt": "2025-04-24T06:20:31.000Z",
      "updatedAt": "2025-04-24T06:20:31.000Z"
    },
    {
      "id": 89,
      "title": "Jopka",
      "slug": "jopka",
      "price": 20,
      "description": "Privet iz Pitera",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://i.imgur.com/Yv1ZHOY.jpeg"],
      "creationAt": "2025-04-24T06:50:49.000Z",
      "updatedAt": "2025-04-24T06:50:49.000Z"
    },
    {
      "id": 90,
      "title": "Laptop HP",
      "slug": "laptop-hp",
      "price": 750,
      "description": "Laptop 15inch",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://api.escuelajs.co/api/v1/files/678a.png"],
      "creationAt": "2025-04-24T07:48:39.000Z",
      "updatedAt": "2025-04-24T07:48:39.000Z"
    },
    {
      "id": 91,
      "title": "TV",
      "slug": "tv",
      "price": 45,
      "description": "45inch TV",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://api.escuelajs.co/api/v1/files/168c.webp"],
      "creationAt": "2025-04-24T08:07:13.000Z",
      "updatedAt": "2025-04-24T08:07:13.000Z"
    },
    {
      "id": 92,
      "title": "Desktop",
      "slug": "desktop",
      "price": 1200,
      "description": "desktop pc",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://api.escuelajs.co/api/v1/files/3555.avif"],
      "creationAt": "2025-04-24T08:09:23.000Z",
      "updatedAt": "2025-04-24T08:09:23.000Z"
    },
    {
      "id": 93,
      "title": "keyboard",
      "slug": "keyboard",
      "price": 30,
      "description": "wireless keyboard",
      "category": {
        "id": 2,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://api.escuelajs.co/api/v1/files/1114.avif"],
      "creationAt": "2025-04-24T08:14:41.000Z",
      "updatedAt": "2025-04-24T08:14:41.000Z"
    },
    {
      "id": 97,
      "title": "royal hats",
      "slug": "royal-hats",
      "price": 24,
      "description": "goods",
      "category": {
        "id": 20,
        "name": "Royalss",
        "slug": "royalss",
        "image": "https://imgur.com/49FiVI0",
        "creationAt": "2025-04-24T08:34:26.000Z",
        "updatedAt": "2025-04-24T08:34:26.000Z"
      },
      "images": ["https://imgur.com/49FiVI0"],
      "creationAt": "2025-04-24T08:43:32.000Z",
      "updatedAt": "2025-04-24T08:43:32.000Z"
    },
    {
      "id": 98,
      "title": "ex",
      "slug": "ex",
      "price": 24,
      "description": "ex",
      "category": {
        "id": 20,
        "name": "Royalss",
        "slug": "royalss",
        "image": "https://imgur.com/49FiVI0",
        "creationAt": "2025-04-24T08:34:26.000Z",
        "updatedAt": "2025-04-24T08:34:26.000Z"
      },
      "images": ["https://imgur.com/49FiVI0"],
      "creationAt": "2025-04-24T09:24:13.000Z",
      "updatedAt": "2025-04-24T09:24:13.000Z"
    },
    {
      "id": 99,
      "title": "ex1",
      "slug": "ex1",
      "price": 24,
      "description": "ex1",
      "category": {
        "id": 20,
        "name": "Royalss",
        "slug": "royalss",
        "image": "https://imgur.com/49FiVI0",
        "creationAt": "2025-04-24T08:34:26.000Z",
        "updatedAt": "2025-04-24T08:34:26.000Z"
      },
      "images": ["https://imgur.com/49FiVI0"],
      "creationAt": "2025-04-24T09:24:20.000Z",
      "updatedAt": "2025-04-24T09:24:20.000Z"
    },
    {
      "id": 100,
      "title": "New Cotton Shirt",
      "slug": "new-cotton-shirt",
      "price": 1100,
      "description": "Very nice and attractive",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placeimg.com/640/480/cotton"],
      "creationAt": "2025-04-24T11:04:34.000Z",
      "updatedAt": "2025-04-24T11:04:34.000Z"
    },
    {
      "id": 101,
      "title": "Mobile Phones",
      "slug": "mobile-phones",
      "price": 10,
      "description": "A description",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placeimg.com/640/480/any"],
      "creationAt": "2025-04-24T11:04:36.000Z",
      "updatedAt": "2025-04-24T11:04:36.000Z"
    },
    {
      "id": 103,
      "title": "test title 5",
      "slug": "test-title-5",
      "price": 100,
      "description": "A description",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400"],
      "creationAt": "2025-04-24T11:06:42.000Z",
      "updatedAt": "2025-04-24T11:06:42.000Z"
    },
    {
      "id": 104,
      "title": "Test Title 3",
      "slug": "test-title-3",
      "price": 100,
      "description": "A description",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400"],
      "creationAt": "2025-04-24T11:06:44.000Z",
      "updatedAt": "2025-04-24T11:06:44.000Z"
    },
    {
      "id": 106,
      "title": "Test Title 12",
      "slug": "test-title-12",
      "price": 100,
      "description": "A description",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://placehold.co/600x400"],
      "creationAt": "2025-04-24T11:09:48.000Z",
      "updatedAt": "2025-04-24T11:09:48.000Z"
    },
    {
      "id": 111,
      "title": "ryjt",
      "slug": "ryjt",
      "price": 4,
      "description": "Privet iz Pitera",
      "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2025-04-24T02:26:09.000Z",
        "updatedAt": "2025-04-24T02:26:09.000Z"
      },
      "images": ["https://i.imgur.com/Yv1ZHOY.jpeg"],
      "creationAt": "2025-04-24T11:59:47.000Z",
      "updatedAt": "2025-04-24T11:59:47.000Z"
    }
  ]

  return ( 
    <>
    {data}
    </>
   );
}
 
export default Product1;