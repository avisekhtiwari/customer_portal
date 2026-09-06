export interface BikeVariant {
  id: string;
  name: string;
  price: number;
  engine: string;
  mileage: string;
  weight: string;
}

export interface Bike {
  id: string;
  brand: string;
  model: string;
  image: string;
  gallery: string[];
  basePrice: number;
  type: string;
  variants: BikeVariant[];
  isFeatured?: boolean;
}

export interface EMICalculation {
  bikePrice: number;
  downPayment: number;
  loanAmount: number;
  interestRate: number; // annual percentage
  tenureMonths: number;
  monthlyEMI: number;
  totalInterest: number;
  totalPayable: number;
}

export interface FinanceEnquiry {
  name: string;
  mobile: string;
  email?: string;
  city: string;
  bikeId: string;
  bikeVariantId?: string;
  bikePrice: number;
  downPayment: number;
  loanAmount: number;
  preferredTenure: number;
}

export interface Customer {
  id: string;
  name: string;
  mobile: string;
  email: string;
  status: 'active' | 'inactive';
}

export interface Loan {
  id: string;
  customerId: string;
  bikeModel: string;
  loanAmount: number;
  interestRate: number;
  tenure: number;
  status: 'active' | 'closed' | 'defaulted';
  startDate: string;
  endDate: string;
}

export interface EMI {
  id: string;
  loanId: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'submitted' | 'under_verification' | 'paid' | 'rejected' | 'failed';
  paymentId?: string;
}

export interface Payment {
  id: string;
  emiId: string;
  amount: number;
  method: string;
  reference: string;
  date: string;
  status: 'submitted' | 'under_verification' | 'paid' | 'rejected' | 'failed';
}

export interface Document {
  id: string;
  loanId: string;
  type: 'loan_agreement' | 'invoice' | 'insurance' | 'rc' | 'noc' | 'other';
  title: string;
  url: string;
  isReleased: boolean;
}

export interface Query {
  id: string;
  customerId: string;
  subject: string;
  status: 'open' | 'resolved' | 'closed';
  createdAt: string;
}

export interface Notification {
  id: string;
  customerId: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}
