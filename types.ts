
export interface PackageType {
  name: string;
  price: string;
  billingInfo: string;
  savings?: string;
  duration: string;
  features: {
    label: string;
    included: boolean | string;
  }[];
  icon: string;
  isPopular?: boolean;
}

export interface ProjectType {
  id: number;
  title: string;
  category: string;
  placeholder: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
