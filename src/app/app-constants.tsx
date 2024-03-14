const banners = [
  "image/banners/01.jpeg",
  "image/banners/02.jpeg",
  "image/banners/03.jpeg",
  "image/banners/04.jpeg",
  "image/banners/05.jpeg",
  "image/banners/06.jpeg",
];

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

interface PropItem {
  key: string;
  val: string;
}
const menuItems: PropItem[] = [
  { key: "Home", val: "/" },
  { key: "About us", val: "/about" },
  { key: "Portfolio", val: "/showcase" },
  { key: "Services", val: "/services" },
  { key: "Projects", val: "/clients" },
  { key: "Contact us", val: "/contact" },
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
    description:
      "No need to stress about shopping for books. Order online and have your textbooks and supplies delivered straight to your doorstep for free.",
    name: "Louis Miriam",
    position: "Web Developer",
    company: "AMAZON INC",
    image: "image/logos/logo-amazon 3.svg",
    imageAlt: "testimonial",
  },
  {
    id: 2,
    title: "Easy Shopping, Quick Delivery",
    description:
      "No need to stress about shopping for books. Order online and have your textbooks and supplies delivered straight to your doorstep for free.",
    name: "Sanjeev Chavan",
    position: "iOS Developer",
    company: "AMAZON INC",
    image: "image/logos/logo-amazon 3.svg",
    imageAlt: "testimonial",
  },
];

const ourMissionTitle = "Mission Statement:";
const ourMission =
  "Our mission is to create seamless transitions between interior and exterior spaces, crafting cohesive environments that harmonize with their surroundings and enrich the lives of those who inhabit them. Through innovative design, superior craftsmanship, and a deep understanding of our clients' needs, we strive to deliver integrated interior and exterior solutions that inspire, rejuvenate, and connect people with the natural world. With a commitment to sustainability, creativity, and excellence, we aim to exceed expectations and leave a positive impact on communities and environments alike.";
const ourVisionTitle = "Vision Statement:";
const ourVision =
  "Our vision is to be the premier provider of holistic design and construction services, seamlessly integrating interior and exterior elements to create immersive, transformative experiences. We envision a future where our innovative solutions blur the lines between indoor and outdoor living, blurring boundaries and fostering a deeper connection to nature and community. By embracing cutting-edge technologies, sustainable practices, and a culture of continuous improvement, we aspire to shape environments that inspire, rejuvenate, and endure for generations to come, leaving a lasting legacy of beauty, functionality, and wellbeing.";

export const constants = {
  services,
  clients,
  testmonials,
  banners,
  ourMissionTitle,
  ourMission,
  ourVisionTitle,
  ourVision,
  menuItems,
};
