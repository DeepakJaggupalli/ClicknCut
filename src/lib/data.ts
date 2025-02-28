
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Canon EOS R5",
    description: "Professional full-frame mirrorless camera with 8K video recording capability.",
    price: 150,
    category: "camera",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000",
    rentalAvailable: true,
    features: [
      "45MP Full-Frame CMOS Sensor",
      "8K RAW Video Recording",
      "High-Speed Continuous Shooting",
      "In-Body Image Stabilization",
      "Dual Card Slots"
    ],
    stock: 5
  },
  {
    id: "2",
    name: "Sony a7S III",
    description: "Full-frame mirrorless camera optimized for video and low-light performance.",
    price: 135,
    category: "camera",
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1000",
    rentalAvailable: true,
    features: [
      "12.1MP Full-Frame CMOS Sensor",
      "4K 120p Video Recording",
      "16-Bit RAW Output",
      "ISO Range of 40-409600",
      "5-Axis In-Body Image Stabilization"
    ],
    stock: 3
  },
  {
    id: "3",
    name: "Canon RF 50mm f/1.2L USM",
    description: "Ultra-fast standard prime lens with exceptional image quality.",
    price: 65,
    category: "lens",
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f23?q=80&w=1000",
    rentalAvailable: true,
    features: [
      "Extremely fast f/1.2 maximum aperture",
      "Ring-type Ultrasonic Motor (USM)",
      "Customizable Control Ring",
      "Weather-Sealed Construction",
      "Minimum Focus Distance of 0.4m"
    ],
    stock: 8
  },
  {
    id: "4",
    name: "DJI Ronin-S",
    description: "Professional 3-axis gimbal stabilizer for DSLR and mirrorless cameras.",
    price: 45,
    category: "accessory",
    image: "https://images.unsplash.com/photo-1491796014055-e6835cdcd4c6?q=80&w=1000",
    rentalAvailable: true,
    features: [
      "8.8 lb Payload Capacity",
      "Single-Handed Operation",
      "Sport Mode for Fast-Moving Subjects",
      "12-Hour Battery Life",
      "Silent Motors"
    ],
    stock: 6
  },
  {
    id: "5",
    name: "Adobe Premiere Pro Subscription",
    description: "Professional video editing software with comprehensive tools and features.",
    price: 50,
    category: "editing",
    image: "https://images.unsplash.com/photo-1544245111-11cad1a8bde8?q=80&w=1000",
    rentalAvailable: false,
    features: [
      "Multi-Camera Editing",
      "Advanced Color Grading",
      "After Effects Integration",
      "Motion Graphics Templates",
      "VR Editing"
    ],
    stock: 999
  },
  {
    id: "6",
    name: "Blackmagic Pocket Cinema Camera 6K",
    description: "Compact cinema camera with 6K resolution and Super 35 sensor.",
    price: 120,
    category: "camera",
    image: "https://images.unsplash.com/photo-1536926053301-91cd989fd3a8?q=80&w=1000",
    rentalAvailable: true,
    features: [
      "Super 35 Sensor",
      "6K Resolution Recording",
      "13 Stops of Dynamic Range",
      "Dual Native ISO up to 25,600",
      "EF Lens Mount"
    ],
    stock: 4
  },
  {
    id: "7",
    name: "DaVinci Resolve Studio",
    description: "Professional editing, color correction, visual effects, and audio post-production software.",
    price: 80,
    category: "editing",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000",
    rentalAvailable: false,
    features: [
      "Advanced Color Grading Tools",
      "Multi-User Collaboration",
      "Fairlight Audio Post-Production",
      "Fusion Visual Effects",
      "Neural Engine AI Features"
    ],
    stock: 999
  },
  {
    id: "8",
    name: "Sony 24-70mm f/2.8 GM",
    description: "Professional standard zoom lens with constant f/2.8 aperture.",
    price: 55,
    category: "lens",
    image: "https://images.unsplash.com/photo-1550236520-7050f3582da0?q=80&w=1000",
    rentalAvailable: true,
    features: [
      "Constant f/2.8 Maximum Aperture",
      "XA Lens Element and Nano AR Coating",
      "Direct Drive SSM Focus System",
      "Dust and Moisture Resistant",
      "Focus Hold Button and AF/MF Switch"
    ],
    stock: 7
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}
