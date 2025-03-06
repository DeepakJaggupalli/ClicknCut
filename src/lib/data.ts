import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Canon EOS R5",
    description: "Professional full-frame mirrorless camera with 8K video recording capability.",
    price: 1950,
    category: "camera",
    image: "https://i.imgur.com/xCUsiK2.jpg",
    rentalAvailable: true,
    features: [
      "45MP Full-Frame CMOS Sensor",
      "8K RAW Video Recording",
      "High-Speed Continuous Shooting",
      "In-Body Image Stabilization",
      "Dual Card Slots"
    ],
    stock: 5,
    brand: "Canon",
    specifications: {
      resolution: "45MP",
      sensor: "Full-Frame",
      weight: "738g",
      dimensions: "138 x 97.5 x 88 mm"
    }
  },
  {
    id: "2",
    name: "Sony a7S III",
    description: "Full-frame mirrorless camera optimized for video and low-light performance.",
    price: 1800,
    category: "camera",
    image: "https://i.imgur.com/uHBMOr8.jpg",
    rentalAvailable: true,
    features: [
      "12.1MP Full-Frame CMOS Sensor",
      "4K 120p Video Recording",
      "16-Bit RAW Output",
      "ISO Range of 40-409600",
      "5-Axis In-Body Image Stabilization"
    ],
    stock: 3,
    brand: "Sony",
    specifications: {
      resolution: "12.1MP",
      sensor: "Full-Frame",
      weight: "699g",
      dimensions: "128.9 x 96.9 x 80.8 mm"
    }
  },
  {
    id: "3",
    name: "Canon RF 50mm f/1.2L USM",
    description: "Ultra-fast standard prime lens with exceptional image quality.",
    price: 1200,
    category: "lens",
    image: "https://i.imgur.com/tLb43qM.jpg",
    rentalAvailable: true,
    features: [
      "Extremely fast f/1.2 maximum aperture",
      "Ring-type Ultrasonic Motor (USM)",
      "Customizable Control Ring",
      "Weather-Sealed Construction",
      "Minimum Focus Distance of 0.4m"
    ],
    stock: 8,
    brand: "Canon",
    specifications: {
      focalLength: "50mm",
      aperture: "f/1.2",
      weight: "950g",
      filterSize: "77mm"
    }
  },
  {
    id: "4",
    name: "DJI Ronin-S",
    description: "Professional 3-axis gimbal stabilizer for DSLR and mirrorless cameras.",
    price: 1100,
    category: "accessory",
    image: "https://i.imgur.com/iWtXJHl.jpg",
    rentalAvailable: true,
    features: [
      "8.8 lb Payload Capacity",
      "Single-Handed Operation",
      "Sport Mode for Fast-Moving Subjects",
      "12-Hour Battery Life",
      "Silent Motors"
    ],
    stock: 6,
    brand: "DJI",
    specifications: {
      maxPayload: "3.6kg",
      batteryLife: "12 hours",
      weight: "1.86kg",
      dimensions: "202 x 185 x 486 mm"
    }
  },
  {
    id: "5",
    name: "Adobe Premiere Pro Subscription",
    description: "Professional video editing software with comprehensive tools and features.",
    price: 1200,
    category: "editing",
    image: "https://i.imgur.com/c9NvRQ9.jpg",
    rentalAvailable: false,
    features: [
      "Multi-Camera Editing",
      "Advanced Color Grading",
      "After Effects Integration",
      "Motion Graphics Templates",
      "VR Editing"
    ],
    stock: 999,
    brand: "Adobe",
    specifications: {
      version: "2023",
      platform: "Windows/macOS",
      requirements: "16GB RAM, 8GB VRAM",
      subscription: "Monthly"
    }
  },
  {
    id: "6",
    name: "Blackmagic Pocket Cinema Camera 6K",
    description: "Compact cinema camera with 6K resolution and Super 35 sensor.",
    price: 1850,
    category: "camera",
    image: "https://i.imgur.com/FLtfVSu.jpg",
    rentalAvailable: true,
    features: [
      "Super 35 Sensor",
      "6K Resolution Recording",
      "13 Stops of Dynamic Range",
      "Dual Native ISO up to 25,600",
      "EF Lens Mount"
    ],
    stock: 4,
    brand: "Blackmagic Design",
    specifications: {
      resolution: "6K",
      sensor: "Super 35",
      weight: "899g",
      dimensions: "179 x 93 x 143 mm" 
    }
  },
  {
    id: "7",
    name: "DaVinci Resolve Studio",
    description: "Professional editing, color correction, visual effects, and audio post-production software.",
    price: 1300,
    category: "editing",
    image: "https://i.imgur.com/N3p4UQY.jpg",
    rentalAvailable: false,
    features: [
      "Advanced Color Grading Tools",
      "Multi-User Collaboration",
      "Fairlight Audio Post-Production",
      "Fusion Visual Effects",
      "Neural Engine AI Features"
    ],
    stock: 999,
    brand: "Blackmagic Design",
    specifications: {
      version: "18",
      platform: "Windows/macOS/Linux",
      requirements: "32GB RAM, 8GB VRAM",
      license: "Perpetual"
    }
  },
  {
    id: "8",
    name: "Sony 24-70mm f/2.8 GM",
    description: "Professional standard zoom lens with constant f/2.8 aperture.",
    price: 1150,
    category: "lens",
    image: "https://i.imgur.com/b31xKDt.jpg",
    rentalAvailable: true,
    features: [
      "Constant f/2.8 Maximum Aperture",
      "XA Lens Element and Nano AR Coating",
      "Direct Drive SSM Focus System",
      "Dust and Moisture Resistant",
      "Focus Hold Button and AF/MF Switch"
    ],
    stock: 7,
    brand: "Sony",
    specifications: {
      focalLength: "24-70mm",
      aperture: "f/2.8",
      weight: "886g",
      filterSize: "82mm"
    }
  },
  {
    id: "9",
    name: "Godox SL-60W LED Video Light",
    description: "Professional LED continuous lighting for video production with bowens mount.",
    price: 1000,
    category: "lighting",
    image: "https://i.imgur.com/znf0tDt.jpg",
    rentalAvailable: true,
    features: [
      "60W Daylight-Balanced Output",
      "5600K Color Temperature",
      "Bowens S-Type Mount",
      "Wireless Remote Control",
      "Silent Cooling System"
    ],
    stock: 10,
    brand: "Godox",
    specifications: {
      power: "60W",
      colorTemp: "5600K",
      weight: "1.98kg",
      dimensions: "22 x 14.5 x 13 cm"
    }
  },
  {
    id: "10",
    name: "Aputure 120d II LED Light",
    description: "Professional LED light with impressive output and precision color accuracy.",
    price: 1050,
    category: "lighting",
    image: "https://i.imgur.com/N0OwO0W.jpg",
    rentalAvailable: true,
    features: [
      "120W Daylight-Balanced Output",
      "CRI/TLCI 97+ Color Accuracy",
      "Bowens Mount Compatibility",
      "DMX Control Option",
      "Noise-Free Operation"
    ],
    stock: 8,
    brand: "Aputure",
    specifications: {
      power: "120W",
      colorTemp: "5500K",
      weight: "2.2kg",
      dimensions: "24 x 15 x 16 cm"
    }
  },
  {
    id: "11",
    name: "DJI Mavic 3 Pro",
    description: "Professional drone with Hasselblad camera system and advanced flight capabilities.",
    price: 1900,
    category: "drone",
    image: "https://i.imgur.com/hGxSiHN.jpg",
    rentalAvailable: true,
    features: [
      "Hasselblad 4/3 CMOS Sensor",
      "5.1K/50fps Video Recording",
      "46-Minute Flight Time",
      "15km Video Transmission",
      "Advanced Return to Home"
    ],
    stock: 5,
    brand: "DJI",
    specifications: {
      sensor: "4/3 CMOS",
      flightTime: "46 minutes",
      weight: "895g",
      dimensions: "221×96.3×90.3 mm"
    }
  },
  {
    id: "12",
    name: "DJI Mini 3 Pro",
    description: "Compact sub-250g drone with professional-grade camera and obstacle avoidance.",
    price: 1400,
    category: "drone",
    image: "https://i.imgur.com/KYvlPPD.jpg",
    rentalAvailable: true,
    features: [
      "1/1.3-inch CMOS Sensor",
      "4K/60fps HDR Video",
      "34-Minute Flight Time",
      "Tri-Directional Obstacle Sensing",
      "Under 250g Takeoff Weight"
    ],
    stock: 6,
    brand: "DJI",
    specifications: {
      sensor: "1/1.3-inch CMOS",
      flightTime: "34 minutes",
      weight: "249g",
      dimensions: "171×245×62 mm"
    }
  },
  {
    id: "13",
    name: "Final Cut Pro X",
    description: "Apple's professional video editing software with powerful tools and seamless ProRes integration.",
    price: 1250,
    category: "editing",
    image: "https://i.imgur.com/oqJvIvx.jpg",
    rentalAvailable: false,
    features: [
      "Magnetic Timeline Interface",
      "Advanced Color Grading",
      "Seamless ProRes Integration",
      "Motion Graphics Templates",
      "360° VR Editing"
    ],
    stock: 999,
    brand: "Apple",
    specifications: {
      version: "10.6",
      platform: "macOS",
      requirements: "16GB RAM, 4GB VRAM",
      license: "Perpetual"
    }
  },
  {
    id: "14",
    name: "Adobe After Effects Subscription",
    description: "Industry-standard motion graphics and visual effects software.",
    price: 1150,
    category: "editing",
    image: "https://i.imgur.com/Wqh6aP5.jpg",
    rentalAvailable: false,
    features: [
      "Advanced Compositing Tools",
      "3D Design Capabilities",
      "Character Animation",
      "Dynamic Motion Graphics",
      "Integration with other Adobe Apps"
    ],
    stock: 999,
    brand: "Adobe",
    specifications: {
      version: "2023",
      platform: "Windows/macOS",
      requirements: "16GB RAM, 8GB VRAM",
      subscription: "Monthly"
    }
  },
  {
    id: "15",
    name: "Nikon Z9",
    description: "Flagship professional mirrorless camera with advanced AI subject detection.",
    price: 1980,
    category: "camera",
    image: "https://i.imgur.com/qJfptKx.jpg",
    rentalAvailable: true,
    features: [
      "45.7MP Stacked CMOS Sensor",
      "8K30p and 4K120p Video Recording",
      "120fps Continuous Shooting",
      "3D Tracking with Subject Detection",
      "Blackout-Free EVF"
    ],
    stock: 3,
    brand: "Nikon",
    specifications: {
      resolution: "45.7MP",
      sensor: "Stacked CMOS",
      weight: "1340g",
      dimensions: "149 x 149.5 x 90.5 mm"
    }
  },
  {
    id: "16",
    name: "Canon RF 70-200mm f/2.8L IS USM",
    description: "Professional telephoto zoom lens with constant f/2.8 aperture.",
    price: 1350,
    category: "lens",
    image: "https://i.imgur.com/zUKGIJI.jpg",
    rentalAvailable: true,
    features: [
      "Constant f/2.8 Maximum Aperture",
      "Optical Image Stabilization",
      "Dual Nano USM Motors",
      "Customizable Control Ring",
      "Weather-Sealed Construction"
    ],
    stock: 5,
    brand: "Canon",
    specifications: {
      focalLength: "70-200mm",
      aperture: "f/2.8",
      weight: "1070g",
      filterSize: "77mm"
    }
  },
  {
    id: "17",
    name: "RØDE VideoMic Pro+",
    description: "Professional on-camera shotgun microphone for clear audio recording.",
    price: 1000,
    category: "accessory",
    image: "https://i.imgur.com/IXE2ZLH.jpg",
    rentalAvailable: true,
    features: [
      "Digital Switching with Safety Channel",
      "Automatic Power On/Off",
      "Rechargeable Battery",
      "2-Stage High Pass Filter",
      "High Frequency Boost"
    ],
    stock: 12,
    brand: "RØDE",
    specifications: {
      pattern: "Supercardioid",
      frequency: "20Hz - 20kHz",
      weight: "122g",
      batteryLife: "100+ hours"
    }
  },
  {
    id: "18",
    name: "Profoto B10 Plus",
    description: "Compact battery-powered studio flash with high output and TTL.",
    price: 1250,
    category: "lighting",
    image: "https://i.imgur.com/TZSj5qK.jpg",
    rentalAvailable: true,
    features: [
      "500Ws Output",
      "High-Speed Sync",
      "TTL Metering",
      "Smartphone Control",
      "Continuous LED Light"
    ],
    stock: 6,
    brand: "Profoto",
    specifications: {
      output: "500Ws",
      batteryLife: "200-400 flashes",
      weight: "1.9kg",
      dimensions: "23.5 x 10 x 10 cm"
    }
  },
  {
    id: "19",
    name: "Neewer LED Ring Light",
    description: "18-inch bi-color LED ring light kit with stand for portrait and video shooting.",
    price: 1000,
    category: "lighting",
    image: "https://i.imgur.com/aUmrTwa.jpg",
    rentalAvailable: true,
    features: [
      "3200-5600K Color Temperature",
      "Dimmable Output",
      "Smartphone Holder",
      "Hot Shoe Adapter",
      "Remote Control"
    ],
    stock: 15,
    brand: "Neewer",
    specifications: {
      diameter: "18 inches",
      power: "55W",
      colorTemp: "3200-5600K",
      weight: "4.08kg"
    }
  },
  {
    id: "20",
    name: "Adobe Photoshop Subscription",
    description: "Professional photo editing and graphic design software.",
    price: 1100,
    category: "editing",
    image: "https://i.imgur.com/3YoLw5E.jpg",
    rentalAvailable: false,
    features: [
      "Advanced Layer Controls",
      "Content-Aware Fill",
      "Neural Filters",
      "Camera RAW Integration",
      "3D Design Capabilities"
    ],
    stock: 999,
    brand: "Adobe",
    specifications: {
      version: "2023",
      platform: "Windows/macOS",
      requirements: "16GB RAM, 4GB VRAM",
      subscription: "Monthly"
    }
  },
  {
    id: "21",
    name: "Autel EVO II Pro",
    description: "Professional drone with 6K camera and advanced obstacle avoidance.",
    price: 1850,
    category: "drone",
    image: "https://i.imgur.com/Nix3K0x.jpg",
    rentalAvailable: true,
    features: [
      "1-inch CMOS Sensor",
      "6K Video Recording",
      "40-Minute Flight Time",
      "Omnidirectional Obstacle Avoidance",
      "9km Video Transmission"
    ],
    stock: 4,
    brand: "Autel Robotics",
    specifications: {
      sensor: "1-inch CMOS",
      flightTime: "40 minutes",
      weight: "1191g",
      dimensions: "270 x 370 x 127 mm"
    }
  },
  {
    id: "22",
    name: "Skylum Luminar AI",
    description: "AI-powered photo editing software with automated enhancement tools.",
    price: 1050,
    category: "editing",
    image: "https://i.imgur.com/lp7VQFg.jpg",
    rentalAvailable: false,
    features: [
      "AI Sky Replacement",
      "Portrait Enhancement",
      "Composition AI",
      "Landscape Enhancement",
      "One-Click Presets"
    ],
    stock: 999,
    brand: "Skylum",
    specifications: {
      version: "2023",
      platform: "Windows/macOS",
      requirements: "8GB RAM, 2GB VRAM",
      license: "Perpetual"
    }
  },
  {
    id: "23",
    name: "GoPro HERO11 Black",
    description: "Waterproof action camera with stabilization and 5.3K video.",
    price: 1000,
    category: "camera",
    image: "https://i.imgur.com/iJeOYv8.jpg",
    rentalAvailable: true,
    features: [
      "5.3K60 Video",
      "HyperSmooth 5.0 Stabilization",
      "27MP Photos",
      "Waterproof to 33ft",
      "TimeWarp 3.0"
    ],
    stock: 10,
    brand: "GoPro",
    specifications: {
      resolution: "5.3K60",
      sensor: "1/1.9-inch CMOS",
      weight: "154g",
      dimensions: "71.8 x 50.8 x 33.6 mm"
    }
  },
  {
    id: "24",
    name: "Sigma 85mm f/1.4 Art",
    description: "Professional portrait lens with exceptional sharpness and bokeh.",
    price: 1150,
    category: "lens",
    image: "https://i.imgur.com/Fm9nCIW.jpg",
    rentalAvailable: true,
    features: [
      "f/1.4 Maximum Aperture",
      "Hyper-Sonic Motor (HSM)",
      "Super Multi-Layer Coating",
      "Brass Bayonet Mount",
      "Minimum Focus Distance of 0.85m"
    ],
    stock: 7,
    brand: "Sigma",
    specifications: {
      focalLength: "85mm",
      aperture: "f/1.4",
      weight: "1130g",
      filterSize: "86mm"
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(product => product.brand === brand);
}

export function getAvailableBrands(): string[] {
  const brands = new Set(products.map(product => product.brand));
  return Array.from(brands);
}

export function filterProducts(options: {
  category?: string;
  priceRange?: [number, number];
  brand?: string;
  search?: string;
}): Product[] {
  let filtered = [...products];
  
  if (options.category && options.category !== "all") {
    filtered = filtered.filter(product => product.category === options.category);
  }
  
  if (options.priceRange) {
    const [min, max] = options.priceRange;
    filtered = filtered.filter(
      product => product.price >= min && product.price <= max
    );
  }
  
  if (options.brand) {
    filtered = filtered.filter(product => product.brand === options.brand);
  }
  
  if (options.search) {
    const term = options.search.toLowerCase();
    filtered = filtered.filter(
      product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term)
    );
  }
  
  return filtered;
}
