import type { Bike } from '@/types';

export const MOCK_BIKES: Bike[] = [
  {
    id: '1',
    brand: 'Royal Enfield',
    model: 'Classic 350',
    image: 'https://images.unsplash.com/photo-1558980394-0a37c6813337?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558980394-0a37c6813337?auto=format&fit=crop&q=80',
    ],
    basePrice: 193000,
    type: 'Cruiser',
    isFeatured: true,
    variants: [
      { id: '1a', name: 'Single Channel ABS', price: 193000, engine: '349cc', mileage: '35 kmpl', weight: '195 kg' },
      { id: '1b', name: 'Dual Channel ABS', price: 202000, engine: '349cc', mileage: '35 kmpl', weight: '195 kg' }
    ]
  },
  {
    id: '2',
    brand: 'Yamaha',
    model: 'MT-15 V2',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80',
    ],
    basePrice: 168000,
    type: 'Street',
    isFeatured: true,
    variants: [
      { id: '2a', name: 'Standard', price: 168000, engine: '155cc', mileage: '45 kmpl', weight: '141 kg' }
    ]
  },
  {
    id: '3',
    brand: 'KTM',
    model: 'Duke 390',
    image: 'https://images.unsplash.com/photo-1568772585407-9361fa11d619?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361fa11d619?auto=format&fit=crop&q=80',
    ],
    basePrice: 310000,
    type: 'Street',
    isFeatured: false,
    variants: [
      { id: '3a', name: 'Standard', price: 310000, engine: '373cc', mileage: '28 kmpl', weight: '171 kg' }
    ]
  }
];
