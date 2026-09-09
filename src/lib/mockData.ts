export type UserRole = 'FARMER' | 'BUYER' | 'ADMIN';

export type User = {
  id: string;
  name: string;
  role: UserRole;
  phone: string;
  location: string;
  trustScore: number;
  verified: boolean;
  avatar?: string;
  completedTransactions: number;
};

export type ListingStatus = 'ACTIVE' | 'PENDING_OFFERS' | 'COMPLETED' | 'CANCELLED';

export type ProduceListing = {
  id: string;
  farmerId: string;
  crop: string;
  quantity: number; // in tonnes
  expectedPrice: number; // in INR per kg
  qualityGrade: 'A' | 'B' | 'C';
  location: string;
  harvestDate: string;
  availableUntil: string;
  status: ListingStatus;
  images: string[];
  additionalInfo: string;
};

export type OfferStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED';

export type Offer = {
  id: string;
  listingId: string;
  buyerId: string;
  offeredPrice: number; // in INR per kg
  quantityRequested: number; // in tonnes
  logisticsType: 'BUYER_PICKUP' | 'FARMER_TRANSPORT' | 'PLATFORM_ASSISTED';
  paymentTerms: string;
  status: OfferStatus;
  createdAt: string;
  estimatedTransportCost: number; // per kg
};

export const MOCK_FARMERS: User[] = [
  {
    id: 'f1',
    name: 'Ramesh Kumar',
    role: 'FARMER',
    phone: '+91 9876543210',
    location: 'Coimbatore, Tamil Nadu',
    trustScore: 4.8,
    verified: true,
    completedTransactions: 24,
  },
  {
    id: 'f2',
    name: 'Lakshmi N.',
    role: 'FARMER',
    phone: '+91 8765432109',
    location: 'Erode, Tamil Nadu',
    trustScore: 4.5,
    verified: true,
    completedTransactions: 12,
  }
];

export const MOCK_BUYERS: User[] = [
  {
    id: 'b1',
    name: 'FreshMart Supermarkets',
    role: 'BUYER',
    phone: '+91 7654321098',
    location: 'Chennai, Tamil Nadu',
    trustScore: 4.9,
    verified: true,
    completedTransactions: 156,
  },
  {
    id: 'b2',
    name: 'Sri Krishna Restaurants',
    role: 'BUYER',
    phone: '+91 6543210987',
    location: 'Coimbatore, Tamil Nadu',
    trustScore: 4.2,
    verified: true,
    completedTransactions: 43,
  },
  {
    id: 'b3',
    name: 'AgriCorp Processing',
    role: 'BUYER',
    phone: '+91 5432109876',
    location: 'Tiruppur, Tamil Nadu',
    trustScore: 4.7,
    verified: true,
    completedTransactions: 89,
  }
];

export const MOCK_LISTINGS: ProduceListing[] = [
  {
    id: 'l1',
    farmerId: 'f1',
    crop: 'Carrot',
    quantity: 5,
    expectedPrice: 35,
    qualityGrade: 'A',
    location: 'Coimbatore, Tamil Nadu',
    harvestDate: '2026-09-10',
    availableUntil: '2026-09-15',
    status: 'ACTIVE',
    images: ['/crops/carrot.jpg'],
    additionalInfo: 'Organic, pesticide-free'
  },
  {
    id: 'l2',
    farmerId: 'f2',
    crop: 'Beetroot',
    quantity: 3,
    expectedPrice: 28,
    qualityGrade: 'B',
    location: 'Erode, Tamil Nadu',
    harvestDate: '2026-09-08',
    availableUntil: '2026-09-12',
    status: 'ACTIVE',
    images: ['/crops/beetroot.jpg'],
    additionalInfo: 'Freshly harvested'
  }
];

export const MOCK_OFFERS: Offer[] = [
  {
    id: 'o1',
    listingId: 'l1',
    buyerId: 'b1',
    offeredPrice: 37,
    quantityRequested: 5,
    logisticsType: 'BUYER_PICKUP',
    paymentTerms: 'Immediate upon pickup',
    status: 'PENDING',
    createdAt: '2026-09-09T10:00:00Z',
    estimatedTransportCost: 0
  },
  {
    id: 'o2',
    listingId: 'l1',
    buyerId: 'b2',
    offeredPrice: 36,
    quantityRequested: 2,
    logisticsType: 'PLATFORM_ASSISTED',
    paymentTerms: '50% advance, 50% on delivery',
    status: 'PENDING',
    createdAt: '2026-09-09T11:30:00Z',
    estimatedTransportCost: 2
  },
  {
    id: 'o3',
    listingId: 'l1',
    buyerId: 'b3',
    offeredPrice: 34,
    quantityRequested: 5,
    logisticsType: 'FARMER_TRANSPORT',
    paymentTerms: 'Full payment within 2 days of delivery',
    status: 'PENDING',
    createdAt: '2026-09-09T12:15:00Z',
    estimatedTransportCost: 3
  }
];
