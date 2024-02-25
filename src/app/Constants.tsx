const services = [
  {
    name: "1. Residential Interior & Exterior Design",
  },
  {
    name: "2. Commercial Interior & Exterior Design",
  },
  {
    name: "3. Space Planning",
  },
  {
    name: "4. Renovation & Remodeling Services",
  },
  {
    name: "5. Customized Furniture",
  },
  {
    name: "6. Joinery",
  },
  {
    name: "7. Landscaping",
  },
  {
    name: "8. Swimming Pool",
  },
  {
    name: "9. MEP",
  },
  {
    name: "10. Technical Services",
  },
];

const clients = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

interface Slide { 
  id: number;
  title: string; 
  description: string; 
  name: string; 
  position: string; 
  company: string;
  image: string;
  imageAlt: string; 
} 

const testmonials: Slide[] = [
  {
    id: 1,
    title: "Easy Shopping, Quick Delivery",
    description: "No need to stress about shopping for books. Order online and have your textbooks and supplies delivered straight to your doorstep for free.",
    name: "Louis Miriam",
    position: "Web Developer",
    company: "AMAZON INC",
    image: "image/logos/logo-amazon 3.svg",
    imageAlt: "testimonial"
  },
  {
    id: 2,
    title: "Easy Shopping, Quick Delivery",
    description: "No need to stress about shopping for books. Order online and have your textbooks and supplies delivered straight to your doorstep for free.",
    name: "Sanjeev Chavan",
    position: "iOS Developer",
    company: "AMAZON INC",
    image: "image/logos/logo-amazon 3.svg",
    imageAlt: "testimonial"
  }
]

export const Constants = {
  services,
  clients,
  testmonials
}