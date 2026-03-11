export interface Project {
  id: string;
  title: string;
  category: 'Kitchen' | 'Bathroom' | 'Basement' | 'Exterior' | 'Full Home';
  description: string;
  imageUrl: string;
  location: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription: string;
  features: string[];
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Plateau Kitchen',
    category: 'Kitchen',
    description: 'A complete transformation of a heritage kitchen into a modern, functional space with high-end finishes.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
    location: 'Plateau-Mont-Royal, Montreal',
    year: '2023'
  },
  {
    id: '2',
    title: 'Sainte-Foy Spa Bathroom',
    category: 'Bathroom',
    description: 'Converted a standard bathroom into a luxurious spa-like retreat with heated floors and a walk-in rain shower.',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200',
    location: 'Sainte-Foy, Quebec City',
    year: '2023'
  },
  {
    id: '3',
    title: 'Lévis Basement Suite',
    category: 'Basement',
    description: 'Finished a raw basement into a multi-generational living space including a kitchenette and full bath.',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200',
    location: 'Lévis, QC',
    year: '2022'
  },
  {
    id: '4',
    title: 'West Island Exterior Facelift',
    category: 'Exterior',
    description: 'Updated the curb appeal with new siding, stone accents, and a custom-built front porch.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    location: 'Pointe-Claire, Montreal',
    year: '2023'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jean-François Tremblay',
    location: 'Quebec City',
    text: 'RenovQc transformed our kitchen beyond our expectations. Their professionalism and attention to detail are unmatched in the Quebec region.',
    rating: 5
  },
  {
    id: '2',
    name: 'Marie-Claude Roy',
    location: 'Montreal',
    text: 'The team was punctual, respectful of our home, and the quality of the bathroom renovation is exceptional. Highly recommend!',
    rating: 5
  },
  {
    id: '3',
    name: 'Pierre-Luc Girard',
    location: 'Laval',
    text: 'Great experience from start to finish. They handled the permits and the entire process was stress-free. Our basement looks amazing.',
    rating: 5
  }
];

export const services: Service[] = [
  {
    id: 'kitchen',
    title: 'Kitchen Renovation',
    description: 'Custom cabinetry, modern countertops, and optimized layouts for the heart of your home.',
    icon: 'ChefHat',
    longDescription: 'We specialize in creating kitchens that balance aesthetic beauty with practical functionality. From custom islands to smart storage solutions, we handle everything from plumbing to lighting.',
    features: ['Custom Cabinetry', 'Quartz & Granite Countertops', 'Lighting Design', 'Appliance Installation', 'Open Concept Layouts'],
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bathroom',
    title: 'Bathroom Remodeling',
    description: 'Spa-like retreats with high-end fixtures, custom tiling, and efficient plumbing.',
    icon: 'Bath',
    longDescription: 'Transform your bathroom into a personal sanctuary. We focus on waterproof integrity, luxury finishes, and maximizing space in even the smallest Quebec homes.',
    features: ['Walk-in Showers', 'Heated Flooring', 'Custom Vanities', 'Tile & Stone Work', 'Modern Fixtures'],
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'basement',
    title: 'Basement Finishing',
    description: 'Turn your unused space into a home theater, gym, or additional living suite.',
    icon: 'Home',
    longDescription: 'Maximize your home\'s square footage. We handle moisture control, insulation, and soundproofing to ensure your basement is as comfortable as any other floor.',
    features: ['Moisture Protection', 'Soundproofing', 'Egress Windows', 'Home Theaters', 'In-law Suites'],
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'exterior',
    title: 'Exterior & Siding',
    description: 'Enhance curb appeal and energy efficiency with modern siding and stone work.',
    icon: 'Hammer',
    longDescription: 'Protect your investment from Quebec\'s harsh winters. We provide durable, high-quality exterior solutions that look great and improve insulation.',
    features: ['Vinyl & Wood Siding', 'Stone Veneer', 'Window Replacement', 'Custom Decks', 'Roofing Services'],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  }
];
