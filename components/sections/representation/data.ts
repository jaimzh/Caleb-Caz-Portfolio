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
    agent: "Tony Jima",
    url: "https://www.crownnorthtalentagency.com/",
    logo: "/images/agencies/crown-north.webp"
  },
  {
    id: 2,
    name: "HWA Talent Agency",
    location: "New York, NY",
    phone: "(212) 987-6543",
    agent: "Michael Chen",
    url: "https://www.helenwellsagency.com",
    logo: "/images/agencies/hwa-logo-white.webp"
  },
  {
    id: 3,
    name: "Lau Lapides Company",
    location: "London, UK",
    phone: "+44 20 7123 4567",
    agent: "Lau Lapides",
    url: "https://www.laulapidescompany.com/",
    logo: "/images/agencies/laulapidescompany.webp"
  }
];
