
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Canon EOS R5",
    description: "Professional full-frame mirrorless camera with 8K video recording capability.",
    price: 12500,
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
    price: 11000,
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
    price: 5200,
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
    price: 3600,
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
    price: 4000,
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
    price: 9800,
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
    price: 6500,
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
    price: 4500,
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
  },
  {
    id: "9",
    name: "Godox SL-60W LED Video Light",
    description: "Professional LED continuous lighting for video production with bowens mount.",
    price: 2800,
    category: "lighting",
    image: "https://images.unsplash.com/photo-1540476279764-95cd842bf327?q=80&w=1000",
    rentalAvailable: true,
    features: [
      "60W Daylight-Balanced Output",
      "5600K Color Temperature",
      "Bowens S-Type Mount",
      "Wireless Remote Control",
      "Silent Cooling System"
    ],
    stock: 10
  },
  {
    id: "10",
    name: "Aputure 120d II LED Light",
    description: "Professional LED light with impressive output and precision color accuracy.",
    price: 3500,
    category: "lighting",
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?q=80&w=1000",
    rentalAvailable: true,
    features: [
      "120W Daylight-Balanced Output",
      "CRI/TLCI 97+ Color Accuracy",
      "Bowens Mount Compatibility",
      "DMX Control Option",
      "Noise-Free Operation"
    ],
    stock: 8
  },
  {
    id: "11",
    name: "DJI Mavic 3 Pro",
    description: "Professional drone with Hasselblad camera system and advanced flight capabilities.",
    price: 18500,
    category: "drone",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=1000",
    rentalAvailable: true,
    features: [
      "Hasselblad 4/3 CMOS Sensor",
      "5.1K/50fps Video Recording",
      "46-Minute Flight Time",
      "15km Video Transmission",
      "Advanced Return to Home"
    ],
    stock: 5
  },
  {
    id: "12",
    name: "DJI Mini 3 Pro",
    description: "Compact sub-250g drone with professional-grade camera and obstacle avoidance.",
    price: 7200,
    category: "drone",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000",
    rentalAvailable: true,
    features: [
      "1/1.3-inch CMOS Sensor",
      "4K/60fps HDR Video",
      "34-Minute Flight Time",
      "Tri-Directional Obstacle Sensing",
      "Under 250g Takeoff Weight"
    ],
    stock: 6
  },
  {
    id: "13",
    name: "Final Cut Pro X",
    description: "Apple's professional video editing software with powerful tools and seamless ProRes integration.",
    price: 5500,
    category: "editing",
    image: "https://images.unsplash.com/photo-1619468625442-7129cbd14acf?q=80&w=1000",
    rentalAvailable: false,
    features: [
      "Magnetic Timeline Interface",
      "Advanced Color Grading",
      "Seamless ProRes Integration",
      "Motion Graphics Templates",
      "360° VR Editing"
    ],
    stock: 999
  },
  {
    id: "14",
    name: "Adobe After Effects Subscription",
    description: "Industry-standard motion graphics and visual effects software.",
    price: 4200,
    category: "editing",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000",
    rentalAvailable: false,
    features: [
      "Advanced Compositing Tools",
      "3D Design Capabilities",
      "Character Animation",
      "Dynamic Motion Graphics",
      "Integration with other Adobe Apps"
    ],
    stock: 999
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}
