export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  prices: { label: string; value: number }[];
  image: string;
  badge?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: 'biryani',
    title: 'Beef Biryani',
    subtitle: 'Our signature — slow-cooked, layered, legendary.',
    items: [
      {
        id: 'beef-biryani',
        name: 'Beef Biryani',
        description:
          'Tender beef chunks slow-dum cooked with aged basmati, our family masala, and soft caramelized onions.',
        badge: 'Most Loved',
        image:
          'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80',
        prices: [
          { label: '1 Pao', value: 300 },
          { label: '1.5 Pao', value: 450 },
          { label: '0.5 Kg', value: 600 },
          { label: '3 Pao', value: 900 },
          { label: '1 Kg', value: 1200 },
          { label: 'Extra Nalli', value: 250 },
        ],
      },
    ],
  },
  {
    id: 'pulao',
    title: 'Beef Pulao',
    subtitle: 'Aromatic, light, deeply flavorful — Karachi style.',
    items: [
      {
        id: 'beef-pulao',
        name: 'Beef Pulao',
        description:
          'Long-grain rice simmered in rich beef yakhni with whole spices and slow-melted bone marrow.',
        badge: "Chef's Pick",
        image:
          'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80',
        prices: [
          { label: '1 Pao', value: 300 },
          { label: '1.5 Pao', value: 450 },
          { label: '0.5 Kg', value: 600 },
          { label: '3 Pao', value: 900 },
          { label: '1 Kg', value: 1200 },
          { label: 'Extra Nalli', value: 250 },
        ],
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    subtitle: 'A sweet finish, the old Karachi way.',
    items: [
      {
        id: 'kheer',
        name: 'Kheer Box',
        description: 'Slow-reduced milk, basmati rice, cardamom, and a whisper of rosewater.',
        image:
          'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=900&q=80',
        prices: [{ label: 'Box', value: 200 }],
      },
      {
        id: 'zarda',
        name: 'Zarda',
        description: 'Sweet saffron rice with nuts and candied fruit — festive, fragrant, finished.',
        image:
          'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
        prices: [{ label: '200g', value: 200 }],
      },
    ],
  },
  {
    id: 'extras',
    title: 'Extras',
    subtitle: 'Perfect partners for your biryani.',
    items: [
      {
        id: 'raita',
        name: 'Raita',
        description: 'Cool, herbed yogurt — the classic balance to spice.',
        image:
          'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80',
        prices: [{ label: 'Serving', value: 60 }],
      },
      {
        id: 'salad',
        name: 'Salad',
        description: 'Crisp onion, cucumber, tomato, lemon — fresh, sharp, simple.',
        image:
          'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80',
        prices: [{ label: 'Serving', value: 60 }],
      },
    ],
  },
];
