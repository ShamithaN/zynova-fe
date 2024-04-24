import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS if not already imported

const CarouselCardSliderSwiper = () => {
  // Function to provide card data and other functionality
  const swipeCards = () => {
    return {
      cards: [
        {
          id: 1,
          image: `https://source.unsplash.com/random/300x200?Cocktail`,
          title: 'Cocktail',
          description: 'Tropical mix of flavors, perfect for parties.',
          price: 8.99,
          link: 'https://lqrs.com',
        },
        {
          id: 2,
          image: `https://source.unsplash.com/random/300x200?Smoothie`,
          title: 'Smoothie',
          description: 'Refreshing blend of fruits and yogurt.',
          price: 5.49,
          link: 'https://lqrs.com',
        },
        {
          id: 3,
          image: `https://source.unsplash.com/random/300x200?Iced Coffee`,
          title: 'Iced Coffee',
          description: 'Cold brewed coffee with a hint of vanilla.',
          price: 4.99,
          link: 'https://lqrs.com',
        },
        {
          id: 4,
          image: `https://source.unsplash.com/random/300x200?Mojito`,
          title: 'Mojito',
          description: 'Classic Cuban cocktail with mint and lime.',
          price: 7.99,
          link: 'https://lqrs.com',
        },
        {
          id: 5,
          image: `https://source.unsplash.com/random/300x200?Matcha Latte`,
          title: 'Matcha Latte',
          description: 'Creamy green tea latte, rich in antioxidants.',
          price: 6.49,
          link: 'https://lqrs.com',
        },
        {
          id: 6,
          image: `https://source.unsplash.com/random/300x200?Fruit Punch`,
          title: 'Fruit Punch',
          description: 'Sweet and tangy punch, bursting with fruity flavors.',
          price: 3.99,
          link: 'https://lqrs.com',
        },
        {
          id: 7,
          image: `https://source.unsplash.com/random/300x200?Bubble Tea`,
          title: 'Bubble Tea',
          description: 'Chewy tapioca pearls in a sweet milk tea base.',
          price: 4.99,
          link: 'https://lqrs.com',
        },
      ],
      addToCart(product) {
        console.log('Adding to cart:', product);
      },
    };
  };

  // Get card data and methods from the function
  const { cards, addToCart } = swipeCards();

  return (

        <div className="overflow-x-scroll scrollbar-hide mb-4 relative px-0.5" style={{ overflowY: 'hidden' }}>
            <div className="flex snap-x snap-mandatory gap-4" style={{ width: 'max-content' }}>
                {cards.map((card) => (
                    <div key={card.id} className="flex-none w-64 snap-center">
                        <div className="bg-white border-1 border border-gray-200 rounded-lg overflow-hidden mb-4">
                            <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg leading-6 font-bold text-gray-900">{card.title}</h3>
                                <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-2xl font-extrabold text-gray-900">${card.price.toFixed(2)}</span>
                                    <a href={card.link} className="text-white bg-fuchsia-950 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

  );
};

export default CarouselCardSliderSwiper;
