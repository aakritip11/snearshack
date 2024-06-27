import React from "react";

// Sample product data for each section (including rating and old price)
const latestProductsData = [
  { id: 1, name: "Vans Mens Old Skool Sneaker",description:"casual skateboarding shoe", price: "$10", oldPrice: "$15", image: "https://img.freepik.com/premium-photo/running-shoes-white-background_10541-635.jpg?w=1060", rating: 4.5 },
  { id: 2, name: "Adidas Men's Gamecourt 2 M Tennis Shoes",description:"trendy tennis shoes", price: "$15", image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", rating: 3.8 },
  { id: 3, name: "Puma Unisex-Adult Rbd Game Low Sneaker",description:"casual low-top sneaker.", price: "$12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDk4qCtM4AoSgbUju1yEwLw7CvcvlUsfXe8w&usqp=CAU", rating: 4.2 },

  { id: 4, name: "Nike Mens Court Royale 2 Sneaker",description:"casual lifestyle sneaker", price: "$18", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchcCcLHvlqPnoXAkqsC3K2icyd-zxh581-Wqu_GHMS5UsvztM7F03LZPq83B_uBBp0Ss&usqp=CAU", rating: 4, oldPrice: "$20" }
 
  // Add more products here...
];

const newArrivalsData = [
  { id: 1, name: "Converse Women's Lift Canvas Low Top ",description:"casual low-top sneaker",price: "$20", image: "https://media.istockphoto.com/id/1324847242/photo/pair-of-white-leather-trainers-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Rbx9ZKVILqu62GF-Lx26YfjYQjGvKK-MJELsg5xg0iY=", rating: 4.0, oldPrice: "$25" },
  { id: 2, name: "Nike Air Max 90 GTX Shoes",description:"athletic/lifestyle sneakers",price: "$25", image: "https://st2.depositphotos.com/4307429/7393/i/950/depositphotos_73934475-stock-photo-sneaker-on-white-background.jpg", rating: 4.7 },
  { id: 3, name: "Adidas 'Samba' Classic Sneakers",description:"retro-inspired lifestyle sneakers", price: "$22", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoLVIatoIn40kRY9GIOsJ1X_4akszKcMJ2n_LWrSaBBlCzNMHjhCNT_Nc6FjxWpHugqU&usqp=CAU", rating: 3.5, oldPrice: "$30" },
  { id: 4, name: "Converse 'Jack Purcell' Sneakers",description:"casual lifestyle sneakers", price: "$23", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5qto2Nn7KAPG-JgIC26ErjDzsYHZTUsq8KsEbEwDCupK3T0zumG1cQIK3Q4w439tqT4&usqp=CAU", rating: 4 }
  // Add more products here...
];

const trendingProductsData = [
  { id: 1, name: "Vans 'Authentic' Core Classic Sneakers",description:"skate-inspired/athletic shoes", price: "$30", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDtYKi_xuH4kOBF-QVo0ie7x5uE9pf8FufA&usqp=CAU", rating: 4.8 },
  { id: 2, name: "Puma 'Wild Rider' Rollin' Sneakers",description:"athletic/casual  sneakers. ", price: "$35", image: "https://rukminim2.flixcart.com/image/850/1000/jyhl1u80/shoe/t/v/v/daigola-shoes-for-men-8-kircom-blue-original-imafgsgyagd8h6cs.jpeg?q=20", rating: 3.2, oldPrice: "$40" },
  { id: 3, name: "Nike Air Force 1 '07 Sneakers",description:"lifestyle/basketball-inspired shoes", price: "$32", image: "https://itizen-production.s3.amazonaws.com/uploads/image_asset/image/17622437/item-image-0.jpg", rating: 4.9 },
  { id: 4, name: "Puma Rocket Sneakers",description:"lifestyle/performance shoes", price: "$30", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz20zHmYKQ-6GukOEdalJkpiLf4wBuYbl6C5bYqqMC-zSokmXqEE8-PQmb3HwE_RAptcc&usqp=CAU", rating: 4,oldPrice: "$33"}
  // Add more products here...
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="star">&#9733;</span>); // Filled star
    } else {
      stars.push(<span key={i} className="star">&#9734;</span>); // Empty star
    }
  }
  return <div className="star-rating">{stars}</div>;
};

const ProductItem = ({ name, description, price, oldPrice, image, rating }) => {
  return (
    <div className="product-item">
      <img className="product-image" src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <StarRating rating={rating} />
        <p className="des">{description}</p>
        <p className="product-price">{price}</p>
        {oldPrice && <p className="old-price">{oldPrice}</p>}
      </div>
    </div>
  );
};



function Categories() {
  return (
    <div className="container">
      {/* Latest Products Column */}
      <div className="column latest-products">
        <h2 className="section-heading">New Arrivals</h2>
        <hr/>
   
        {latestProductsData.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>

      {/* New Arrivals Column */}
      <div className="column new-arrivals">
        <h2 className="section-heading">Top Rated</h2>
        <hr/>
     
        {newArrivalsData.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>

      {/* Trending Products Column */}
      <div className="column trending-products">
        <h2 className="section-heading">Trending Products</h2>
        <hr/>
      
        {trendingProductsData.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Categories;