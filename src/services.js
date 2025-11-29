const categories = [
  {
    id: "hot-drinks",
    name: "Hot Drinks",
    image: "https://i.pinimg.com/1200x/1a/32/3a/1a323a61471547e557de0d1b35cf6baf.jpg",
    products: [
      { name: "Qara çay(Black tea)", price: "4.50", image: "https://i.pinimg.com/736x/b2/88/68/b28868d2d96b3b72b4697b208461c1fb.jpg" },
      { name: "Yaşıl çay(Green tea)", price: "5.00", image: "https://i.pinimg.com/736x/44/a9/2a/44a92afa2bed4f5213c0be3589c2a8da.jpg" },
      { name: "Nanəli çay(Mint tea)", price: "3.20", image: "https://i.pinimg.com/1200x/f2/33/d1/f233d17172901a23c56990456980336c.jpg" },
      { name: "Zəncəfilli çay", price: "5.80", image: "https://i.pinimg.com/736x/37/99/69/37996930a5575d90143608f505aa4d70.jpg" },
      { name: "İsti şokolad(Hot chocolate)", price: "4.50", image: "https://i.pinimg.com/736x/64/5c/76/645c76e8341d1162a55aa766aff690f3.jpg" },
      { name: "Kakao", price: "5.00", image: "https://i.pinimg.com/1200x/79/fb/17/79fb17b0661b9869277cd9e59ff23fa4.jpg" },
      { name: "Macha Latte", price: "3.20", image: "https://i.pinimg.com/1200x/85/7a/69/857a6927e476da5b4a35febb4a9de5fc.jpg" },
      { name: "Masala Chai", price: "5.80", image: "https://i.pinimg.com/736x/22/33/bf/2233bf899709fc983fa0f2dc1cd3bc35.jpg" }
   
    ]
  },
  {
    id: "cold-drinks",
    name: "Cold Drinks",
    image: "https://i.pinimg.com/736x/70/ad/1e/70ad1ecaee9c25763bde80a90e346ddf.jpg",
    products: [
      { name: "Iced Tea Lemon", price: "5.50", image: "https://i.pinimg.com/1200x/bf/7b/cf/bf7bcf63ab01a0c0a8e67fb0c912b07c.jpg" },
      { name: "Moxito", price: "5.50", image: "https://i.pinimg.com/1200x/e3/c6/65/e3c66527cf9a76a64629ce27baed939d.jpg" },
      { name: "Homemade Lemonade", price: "5.50", image: "https://i.pinimg.com/1200x/ff/02/5b/ff025bc01db3a954679604c06cd73b00.jpg" },
      { name: "Mint Lemonade", price: "5.50", image: "https://i.pinimg.com/1200x/65/26/cb/6526cbe31346339298d3536d5bd2207b.jpg" },
      { name: "Iced Chocolate", price: "5.50", image: "https://i.pinimg.com/1200x/02/b9/92/02b99231a8de988eaa6a57d6b1d8fd4a.jpg" },
      { name: "Fruit Iced Mix", price: "5.50", image: "https://i.pinimg.com/736x/9c/8a/22/9c8a2228846c0b9cf514fabee5dd668a.jpg" },
      { name: "Orange Juice", price: "5.50", image: "https://i.pinimg.com/1200x/96/cf/af/96cfafe88949e969050ab9426f2f79f7.jpg" },
      { name: "Apple Juice", price: "4.20", image: "https://i.pinimg.com/1200x/cf/09/3a/cf093a1643884dc7923e28275dd7c40c.jpg" }
    ]
  },
  {
    id: "coffee",
    name: "Coffee",
    image: "https://i.pinimg.com/736x/9a/26/bb/9a26bbcb064054ec3ac453ae2f83c4f0.jpg",
    products: [
      { name: "Cappuccino", price: "4.50", image: "https://i.pinimg.com/1200x/da/2b/3a/da2b3af0c9a4cf4f3550c0a738477ff9.jpg" },
      { name: "Latte", price: "5.00", image: "https://i.pinimg.com/736x/69/27/8d/69278df692b908574ad168c1f0410ab2.jpg" },
      { name: "Americano", price: "3.20", image: "https://i.pinimg.com/736x/e9/b7/e5/e9b7e596d74785a154e8634f7f841937.jpg" },
      { name: "Flat White", price: "5.80", image: "https://i.pinimg.com/1200x/69/73/5f/69735f151a45199b77d8d41205a22862.jpg" },
      { name: "Raf", price: "4.50", image: "https://i.pinimg.com/736x/fe/13/41/fe13412250287fc60f891dde486725dc.jpg" },
      { name: "Espresso", price: "5.00", image: "https://i.pinimg.com/1200x/bf/41/7a/bf417a0b8d7f6044ab535cb4edb5d22b.jpg" },
      { name: "Mocha", price: "3.20", image: "https://i.pinimg.com/736x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg" },
      { name: "Macchiato", price: "5.80", image: "https://i.pinimg.com/1200x/ff/fb/f2/fffbf2ff6caf46fdea4bdf3ca57020da.jpg" }
   ]
  },
  {
    id: "breakfast",
    name: "Breakfast",
    image: "https://i.pinimg.com/736x/a8/5a/a8/a85aa89a3e490ca37812c2f19091fd04.jpg",
    products: [
      { name: "English Breakfast", price: "6.50", image: "https://i.pinimg.com/1200x/2d/b4/b3/2db4b3344017f9d502705efc23956878.jpg" },
      { name: "Omelette (Cheese / Veggie)", price: "6.50", image: "https://i.pinimg.com/736x/9a/51/53/9a51536b13c33625055a8e4582ee73b1.jpg" },
      { name: "Pancakes (Honey / Chocolate)", price: "6.50", image: "https://i.pinimg.com/736x/92/89/51/928951ae333ff97d094db014344b7711.jpg" },
      { name: "French Toast", price: "6.50", image: "https://i.pinimg.com/1200x/6b/4f/fe/6b4ffeec6e0da2dd4f239c4358ab3ba7.jpg" },
      { name: "Avocado Toast", price: "6.50", image: "https://i.pinimg.com/1200x/c9/a7/18/c9a7181b6e8112b3db683b1d1cbf9c59.jpg" },
      { name: "Scrambled Eggs", price: "6.50", image: "https://i.pinimg.com/1200x/d8/06/72/d80672c657d514c2187ddc465e3e3443.jpg" },
      { name: "Croissant Breakfast Plate", price: "6.50", image: "https://i.pinimg.com/1200x/16/f4/f1/16f4f15c511b620654e29b0f8874f02f.jpg" },
      { name: "Yogurt Bowl (Granola & Fruits)", price: "6.50", image: "https://i.pinimg.com/736x/87/04/59/87045970c4c79dc77eb173ec28c96f35.jpg" },
    ]
  },
  {
    id: "snacks",
    name: "Snacks & Side Dishes",
    image: "https://i.pinimg.com/1200x/f8/c9/ec/f8c9ec0e5c51d092caed980b2e0a0cca.jpg",
    products: [
      { name: "Mozzarella Sticks", price: "4.50", image: "https://i.pinimg.com/1200x/27/e5/9d/27e59da407ee0f37f4fdabbdaf125858.jpg" },
      { name: "Chicken Nuggets", price: "4.50", image: "https://i.pinimg.com/736x/14/e8/93/14e893bb9d559dfe8e3ae17900abe222.jpg" },
      { name: "French Fries (Kartof fri)", price: "3.50", image: "https://i.pinimg.com/1200x/e5/4c/56/e54c563a59cac646262b2c330d1559c6.jpg" },
      { name: "Onion Rings", price: "3.50", image: "https://i.pinimg.com/1200x/54/a4/35/54a4354982e2b6b312511d76d6c38be6.jpg" },
      { name: "Garlic Bread", price: "3.50", image: "https://i.pinimg.com/736x/38/19/a1/3819a163d2ae93ea60f4a3c85d821cf1.jpg" },
      { name: "Cheese Balls", price: "4.50", image: "https://i.pinimg.com/736x/20/8c/3c/208c3c53629527e541bd3c2f363878d1.jpg" },
      { name: "Chicken Wings (BBQ / Spicy)", price: "7.50", image: "https://i.pinimg.com/736x/e1/6c/6a/e16c6abdb9e04596239436e47178c1cc.jpg" },
      { name: "Nachos with Cheese Sauce", price: "4.00", image: "https://i.pinimg.com/1200x/ec/b2/4f/ecb24f709b01e125f92aedafa79bf5d4.jpg" }
    ]
  },
  {
    id: "main-courses",
    name: "Main Courses",
    image: "https://i.pinimg.com/1200x/f1/46/ce/f146cead3d2cea1caa883126319a7bc7.jpg",
    products: [
      { name: "Grilled Chicken Steak", price: "8.50", image: "https://i.pinimg.com/736x/74/98/46/749846636219388c04b141af7989dde6.jpg" },
      { name: "Beef Steak with Mushroom Sauce", price: "7.50", image: "https://i.pinimg.com/736x/72/cf/8f/72cf8f181628006f365f205d3b2d92e3.jpg" },
      { name: "Chicken Teriyaki with Rice", price: "9.50", image: "https://i.pinimg.com/1200x/b0/9d/12/b09d122d5e8ecd4a35d77a0bf14c65f2.jpg" },
      { name: "Lemon Butter Salmon", price: "10.50", image: "https://i.pinimg.com/1200x/fa/c8/f8/fac8f8ab03f7816bca1950b75959aca6.jpg" },
      { name: "Chicken Alfredo Pasta", price: "9.50", image: "https://i.pinimg.com/1200x/04/f4/9e/04f49ee67da37e9632d74daf3aa8b0e8.jpg" },
      { name: "Beef Stroganoff", price: "8.50", image: "https://i.pinimg.com/1200x/c4/7e/25/c47e250dc9b9455129cdf65ead674e46.jpg" },
      { name: "Shrimp Penne Pasta", price: "9.50", image: "https://i.pinimg.com/1200x/47/47/0b/47470b5b4db5ce2b16207d16c1abfc24.jpg" },
      { name: "Creamy Garlic Chicken", price: "12.00", image: "https://i.pinimg.com/1200x/1d/59/3b/1d593bfaf1f50d9ea7d9d4cb863a949e.jpg" }
    ]
  },
  {
    id: "burgers",
    name: "Burgers / Sandwiches",
    image: "https://i.pinimg.com/1200x/09/e3/af/09e3afa3f14d03d22df211858ab135ae.jpg",
    products: [
      { name: "Classic Beef Burger", price: "6.50", image: "https://i.pinimg.com/736x/40/0f/97/400f97b4b3c98c9057df80cbbf852a5a.jpg" },
      { name: "Crispy Chicken Burger", price: "6.50", image: "https://i.pinimg.com/736x/e8/71/17/e87117318770c5416aefdbeed7b32d33.jpg" },
      { name: "Double Cheese Burger", price: "6.50", image: "https://i.pinimg.com/736x/33/6f/49/336f4969f18cc575675c4f485443c383.jpg" },
      { name: "BBQ Chicken Burger", price: "6.50", image: "https://i.pinimg.com/1200x/5f/2e/46/5f2e469621c8cc2e482373b3a3868865.jpg" },
      { name: "Club Sandwich", price: "6.50", image: "https://i.pinimg.com/1200x/b9/12/7f/b9127fb899fc6db5a40550457d8424b4.jpg" },
      { name: "Tuna Melt Sandwich", price: "6.50", image: "https://i.pinimg.com/1200x/34/c1/5a/34c15a68876a34a8b72a5d3be5e67f2c.jpg" },
      { name: "Grilled Chicken Sandwich", price: "6.50", image: "https://i.pinimg.com/1200x/34/89/63/34896373c0618b8f511a92d573f01a76.jpg" },
      { name: "Veggie Halloumi Burger", price: "5.80", image: "https://i.pinimg.com/736x/fa/7c/97/fa7c97dda9a45090eb0c9e5280cc2877.jpg" }
    ]
  },
  {
    id: "pizza-pasta",
    name: "Pizza & Pasta",
    image: "https://i.pinimg.com/1200x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg",
    products: [
      { name: "Margherita Pizza", price: "7.50", image: "https://i.pinimg.com/736x/d9/db/94/d9db947145fb931a2bd2b0dc46b59ac0.jpg" },
      { name: "Pepperoni Pizza", price: "7.50", image: "https://i.pinimg.com/1200x/af/ce/5b/afce5bc03baee84c15830afcb740a3f7.jpg" },
      { name: "Chicken Alfredo Pasta", price: "7.50", image: "https://i.pinimg.com/1200x/7c/74/10/7c7410643ac74ae2336dc47c35d624cc.jpg" },
      { name: "Bolognese Spaghetti", price: "7.50", image: "https://i.pinimg.com/1200x/df/6f/76/df6f76a785a000a1cb95387cbfd2d39d.jpg" },
      { name: "Four Cheese Pizza (Quattro Formaggi)", price: "7.50", image: "https://i.pinimg.com/1200x/16/74/ab/1674abcbb08250bd3b19ece2314ab401.jpg" },
      { name: "Veggie Garden Pizza", price: "7.50", image: "https://i.pinimg.com/1200x/7c/c1/8e/7cc18e3ae1d1be0e03edd5c786253a05.jpg" },
      { name: "Seafood Linguine", price: "7.50", image: "https://i.pinimg.com/1200x/24/77/c3/2477c3e23240239c6c3e01d7e2cb495f.jpg" },
      { name: "Carbonara Pasta", price: "8.20", image: "https://i.pinimg.com/1200x/c6/3b/66/c63b6642e17c6febb23f74a5106dd4b6.jpg" }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    image: "https://i.pinimg.com/1200x/51/8a/ee/518aeeae96e41df39b5274c40aa63619.jpg",
    products: [
      { name: "Chocolate Lava Cake", price: "4.50", image: "https://i.pinimg.com/736x/a8/02/61/a802617add1c92ca15d2fdc7fc484a6c.jpg" },
      { name: "New York Cheesecake", price: "4.50", image: "https://i.pinimg.com/1200x/e0/ce/88/e0ce8801e79320637a6424bd423d3635.jpg" },
      { name: "Tiramisu Classic", price: "4.50", image: "https://i.pinimg.com/1200x/f1/fd/96/f1fd96ca94e19fdd308cf4a7b1553634.jpg" },
      { name: "Nutella Crepe", price: "4.50", image: "https://i.pinimg.com/1200x/db/17/0a/db170adcf3e15a36535b87672f3a6d24.jpg" },
      { name: "Banoffee Pie", price: "4.50", image: "https://i.pinimg.com/1200x/e2/d4/0a/e2d40a57957714bce37119d2e81fe8fc.jpg" },
      { name: "Panna Cotta (Berry Sauce)", price: "4.50", image: "https://i.pinimg.com/1200x/e0/af/0b/e0af0ba21cdb679570d6a63e909ec801.jpg" },
      { name: "Carrot Cake Slice", price: "4.50", image: "https://i.pinimg.com/1200x/97/5f/05/975f05ffce4e41d68ff4b7496977e9f1.jpg" },
      { name: "Belgian Waffle (Ice Cream ilə)", price: "5.00", image: "https://i.pinimg.com/736x/7c/9a/05/7c9a050d4ebee58336842a683112b681.jpg" }
    ]
  },
  {
    id: "specials",
    name: "Specials / Seasonal",
    image: "https://i.pinimg.com/736x/3c/d5/7d/3cd57ddc8b9b5f338cbbe89f6085b5fb.jpg",
    products: [
      { name: "Grilled Salmon with Lemon Butter", price: "5.50", image: "https://i.pinimg.com/1200x/40/80/24/408024e3b42a26d9ec887dc0228b2a1d.jpg" },
      { name: "Pumpkin Cream Soup", price: "6.00", image: "https://i.pinimg.com/1200x/a0/de/ce/a0dece689e274ac45f592d495cd1f61f.jpg" },
      { name: "Strawberry Spinach Salad", price: "6.00", image: "https://i.pinimg.com/736x/37/4a/53/374a5325ab33ce87e6f1f7a54d0edc53.jpg" },
      { name: "BBQ Glazed Ribs", price: "6.00", image: "https://i.pinimg.com/1200x/d9/41/7f/d9417f8beea38b588d0c15368d8cfa8c.jpg" },
      { name: "Herb-Roasted Chicken with Vegetables", price: "6.00", image: "https://i.pinimg.com/1200x/2a/ed/d1/2aedd16e9cebf9a838b82f45e1c5068a.jpg" },
      { name: "Mango Avocado Salad", price: "6.00", image: "https://i.pinimg.com/1200x/ec/96/5e/ec965eb0374837f2e0850bdea100a824.jpg" },
      { name: "Creamy Mushroom Risotto", price: "6.00", image: "https://i.pinimg.com/1200x/0c/f1/5a/0cf15ab2bc3a2d8d22ca5178be0c3599.jpg" },
      { name: "Honey-Glazed Duck Breast", price: "6.00", image: "https://i.pinimg.com/1200x/0f/e9/b6/0fe9b60f9ac3a70d9315de9bf28d0d69.jpg" }
    ]
  }
];

export default categories;
