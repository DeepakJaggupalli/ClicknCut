import { Product, Order } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Canon EOS R5",
    description: "Professional full-frame mirrorless camera with 8K video recording capability.",
    price: 1500,
    category: "camera",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 1200,
    category: "camera",
    image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 850,
    category: "lens",
    image: "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 700,
    category: "accessory",
    image: "https://images.pexels.com/photos/12459501/pexels-photo-12459501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 1800,
    category: "editing",
    image: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 1600,
    category: "camera",
    image: "https://images.pexels.com/photos/6614288/pexels-photo-6614288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 1900,
    category: "editing",
    image: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 950,
    category: "lens",
    image: "https://images.pexels.com/photos/159342/camera-lens-slr-photography-159342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 600,
    category: "lighting",
    image: "https://images.pexels.com/photos/266149/pexels-photo-266149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 750,
    category: "lighting",
    image: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 1700,
    category: "drone",
    image: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 1100,
    category: "drone",
    image: "https://images.pexels.com/photos/10447595/pexels-photo-10447595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 1950,
    category: "editing",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    price: 1750,
    category: "editing",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: false,
    features: [
      "Advanced Compositing Tools",
      "3D Design Capabilities",
      "Character Animation",
      "Dynamic Motion Graphics",
      "Integration with other Adobe Apps"
    ],
    stock: 999
  },
  {
    id: "15",
    name: "Nikon Z9",
    description: "Flagship professional mirrorless camera with advanced AI subject detection.",
    price: 1850,
    category: "camera",
    image: "https://images.pexels.com/photos/704976/pexels-photo-704976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: true,
    features: [
      "45.7MP Stacked CMOS Sensor",
      "8K30p and 4K120p Video Recording",
      "120fps Continuous Shooting",
      "3D Tracking with Subject Detection",
      "Blackout-Free EVF"
    ],
    stock: 3
  },
  {
    id: "16",
    name: "Canon RF 70-200mm f/2.8L IS USM",
    description: "Professional telephoto zoom lens with constant f/2.8 aperture.",
    price: 1150,
    category: "lens",
    image: "https://images.pexels.com/photos/255364/pexels-photo-255364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: true,
    features: [
      "Constant f/2.8 Maximum Aperture",
      "Optical Image Stabilization",
      "Dual Nano USM Motors",
      "Customizable Control Ring",
      "Weather-Sealed Construction"
    ],
    stock: 5
  },
  {
    id: "17",
    name: "RØDE VideoMic Pro+",
    description: "Professional on-camera shotgun microphone for clear audio recording.",
    price: 550,
    category: "accessory",
    image: "https://images.pexels.com/photos/1564844/pexels-photo-1564844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: true,
    features: [
      "Digital Switching with Safety Channel",
      "Automatic Power On/Off",
      "Rechargeable Battery",
      "2-Stage High Pass Filter",
      "High Frequency Boost"
    ],
    stock: 12
  },
  {
    id: "18",
    name: "Profoto B10 Plus",
    description: "Compact battery-powered studio flash with high output and TTL.",
    price: 1350,
    category: "lighting",
    image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: true,
    features: [
      "500Ws Output",
      "High-Speed Sync",
      "TTL Metering",
      "Smartphone Control",
      "Continuous LED Light"
    ],
    stock: 6
  },
  {
    id: "19",
    name: "Neewer LED Ring Light",
    description: "18-inch bi-color LED ring light kit with stand for portrait and video shooting.",
    price: 500,
    category: "lighting",
    image: "https://images.pexels.com/photos/1454661/pexels-photo-1454661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: true,
    features: [
      "3200-5600K Color Temperature",
      "Dimmable Output",
      "Smartphone Holder",
      "Hot Shoe Adapter",
      "Remote Control"
    ],
    stock: 15
  },
  {
    id: "20",
    name: "Adobe Photoshop Subscription",
    description: "Professional photo editing and graphic design software.",
    price: 1650,
    category: "editing",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: false,
    features: [
      "Advanced Layer Controls",
      "Content-Aware Fill",
      "Neural Filters",
      "Camera RAW Integration",
      "3D Design Capabilities"
    ],
    stock: 999
  },
  {
    id: "21",
    name: "Autel EVO II Pro",
    description: "Professional drone with 6K camera and advanced obstacle avoidance.",
    price: 1450,
    category: "drone",
    image: "https://images.pexels.com/photos/169573/sky-air-view-nature-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: true,
    features: [
      "1-inch CMOS Sensor",
      "6K Video Recording",
      "40-Minute Flight Time",
      "Omnidirectional Obstacle Avoidance",
      "9km Video Transmission"
    ],
    stock: 4
  },
  {
    id: "22",
    name: "Skylum Luminar AI",
    description: "AI-powered photo editing software with automated enhancement tools.",
    price: 800,
    category: "editing",
    image: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: false,
    features: [
      "AI Sky Replacement",
      "Portrait Enhancement",
      "Composition AI",
      "Landscape Enhancement",
      "One-Click Presets"
    ],
    stock: 999
  },
  {
    id: "23",
    name: "GoPro HERO11 Black",
    description: "Waterproof action camera with stabilization and 5.3K video.",
    price: 650,
    category: "camera",
    image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: true,
    features: [
      "5.3K60 Video",
      "HyperSmooth 5.0 Stabilization",
      "27MP Photos",
      "Waterproof to 33ft",
      "TimeWarp 3.0"
    ],
    stock: 10
  },
  {
    id: "24",
    name: "Sigma 85mm f/1.4 Art",
    description: "Professional portrait lens with exceptional sharpness and bokeh.",
    price: 900,
    category: "lens",
    image: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rentalAvailable: true,
    features: [
      "f/1.4 Maximum Aperture",
      "Hyper-Sonic Motor (HSM)",
      "Super Multi-Layer Coating",
      "Brass Bayonet Mount",
      "Minimum Focus Distance of 0.85m"
    ],
    stock: 7
  }
];

// Sample user orders for the returns page
export const userOrders: Order[] = [
  {
    id: "order1",
    customerId: "user1",
    items: [
      {
        id: "item1",
        productId: "1",
        productName: "Canon EOS R5",
        productImage: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 1,
        rentalDays: 5,
        price: 1500,
        orderDate: "2023-10-10",
        returnDate: "2023-10-15",
        returned: false
      },
      {
        id: "item2",
        productId: "3",
        productName: "Canon RF 50mm f/1.2L USM",
        productImage: "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 1,
        rentalDays: 5,
        price: 850,
        orderDate: "2023-10-10",
        returnDate: "2023-10-15",
        returned: false
      }
    ],
    totalAmount: 11750,
    orderDate: "2023-10-10",
    status: "completed"
  },
  {
    id: "order2",
    customerId: "user1",
    items: [
      {
        id: "item3",
        productId: "2",
        productName: "Sony a7S III",
        productImage: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantity: 1,
        rentalDays: 3,
        price: 1200,
        orderDate: "2023-11-05",
        returnDate: "2023-11-08",
        returned: false
      }
    ],
    totalAmount: 3600,
    orderDate: "2023-11-05",
    status: "completed"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}

export function getUserOrders(userId: string): Order[] {
  return userOrders.filter(order => order.customerId === userId);
}

export function getOrderById(orderId: string): Order | undefined {
  return userOrders.find(order => order.id === orderId);
}
