export interface Agency {
  id: number;
  name: string;
  location: string;
  phone: string;
  agent: string;
  url: string;
  logo: string;
}

export const AGENCIES: Agency[] = [
  {
    id: 1,
    name: "Crown North Talent",
    location: "Los Angeles, CA",
    phone: "(818) 123-4567",
    agent: "Sarah Jenkins",
    url: "#",
    logo: "/images/agencies/crown-north.webp"
  },
  {
    id: 2,
    name: "HWA Talent Agency",
    location: "New York, NY",
    phone: "(212) 987-6543",
    agent: "Michael Chen",
    url: "#",
    logo: "/images/agencies/hwa-logo-white.webp"
  },
  {
    id: 3,
    name: "Lau Lapides Company",
    location: "London, UK",
    phone: "+44 20 7123 4567",
    agent: "Emma Thompson",
    url: "#",
    logo: "/images/agencies/laulapidescompany.webp"
  }
];
