const sampleListings = [
  {
    title: "My Hostel",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [77.5946, 12.9716 ] 
    }
  },
  {
    title: "My House",
    description:
    "Enjoy a warm and peaceful home with a cozy ambiance, modern comforts, and a welcoming vibe for relaxation and togetherness.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 5000000,
    location: "Meerut",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.7064, 28.9845 ]
    }
  },
  {
    title: "Your Flat",
    description:
    "Experience the charm of Flat in this beautifully restored House. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3700000,
    location: "Noida",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.3910, 28.5355 ]
    }
  },
  {
    title: "Your Apartment",
    description:
    "Escape to a apartment house on the Pacific coast of Rajasthan. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Rajasthan",
    country: "India",
    geometry:{
      coordinates: [ 74.2179, 27.0238 ], type: 'Point' 
    }
  },
  {
    title: "Flat",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1680098057495-efa1413023f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "Hostel",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1678790909398-961ffa85d03d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Punjabi Bagh, Delhi",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.1242, 28.6620 ] 
    }
  },{
    title: "Villa",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Meerut, UP",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.7064, 28.9845 ] 
    }
  },{
    title: "D",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "E",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582417728413-b2347161b864?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "F",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "G",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "H",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1684175656172-19a7ee56f0c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "I",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "J",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1673014202349-38687dd47f94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "K",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "L",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "M",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "N",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "O",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1611216212569-d739dbe9ed40?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "P",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560449752-3fd4bdbe7df0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "Q",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1616593871468-2a9452218369?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "R",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600494448850-6013c64ba722?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "S",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600493504546-07f3cab212b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "T",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "U",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },{
    title: "V",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry:{
      type: 'Point', coordinates: [ 77.5946, 12.9716 ] 
    }
  },
];

module.exports = { data: sampleListings };
