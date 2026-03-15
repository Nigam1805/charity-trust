/**
 * WEBSITE CONTENT – Edit this file to update all text, details, and media.
 * Single source for the entire Care & Share Trust site.
 */

export const siteContent = {
  trustName: "Care & Share Trust",
  tagline: "Serving Humanity with Food and Care",

  hero: {
    headline: "Serving Humanity with Food and Care",
    subtext:
      "We provide nutritious meals to hospital patients, their families, school children, and people in need.",
    ctaPrimary: "Donate Now",
    ctaSecondary: "Learn More",
  },

  about: {
    intro:
      "Care & Share Trust is a registered charitable trust dedicated to reducing hunger and malnutrition among the most vulnerable—patients in hospitals, their families, school children, and residents of ashrams and underserved communities. We believe that access to nutritious food is a basic right.",
    mission:
      "To provide timely, nutritious meals to those in need—whether in hospitals, schools, ashrams, or local communities—and to support families so they can focus on care and recovery rather than hunger.",
    vision:
      "A society where no one goes hungry in times of need. We aim to be a reliable partner for hospitals, schools, and community institutions in the fight against malnutrition.",
    activities: [
      "Distribution of nutritious meals to patients and attendants in hospitals.",
      "School meal programs to ensure children receive at least one healthy meal a day.",
      "Food support to ashrams and similar institutions caring for the elderly and needy.",
      "Community food distribution drives in underserved localities.",
    ],
    whyWeServe:
      "We serve because we believe that a simple meal can bring hope, dignity, and strength. Food is not just nutrition—it is care. By supporting patients, families, and children, we help them focus on healing and learning instead of worrying about their next meal.",
    impactStats: [
      { label: "Meals Served", value: "50,000+" },
      { label: "Families Supported", value: "2,500+" },
      { label: "Schools Reached", value: "25+" },
      { label: "Hospitals Partnered", value: "10+" },
    ],
    /** Key people – trustees, founders, or team. Use localImage (e.g. /images/team/1.jpg) or leave empty for placeholder. */
    people: [
      {
        id: "1",
        name: "Ramesh Patel",
        role: "Founder & Managing Trustee",
        bio: "Dedicated to reducing hunger in our community. Leads outreach and partnerships with hospitals and schools.",
        localImage: "/images/team/1.jpg",
        imagePlaceholder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      },
      {
        id: "2",
        name: "Priya Sharma",
        role: "Trustee – Programmes",
        bio: "Oversees meal distribution and volunteer coordination. Ensures nutritious food reaches those who need it most.",
        localImage: "/images/team/2.jpg",
        imagePlaceholder: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      },
      {
        id: "3",
        name: "Vikram Mehta",
        role: "Trustee – Operations",
        bio: "Manages logistics, donor relations, and day-to-day operations so we can scale our impact.",
        localImage: "/images/team/3.jpg",
        imagePlaceholder: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      },
    ],
  },

  /** Service images: use localImage (e.g. /images/services/hospital.jpg) to use your own; else imagePlaceholder (Indian/charity-themed URLs). */
  services: [
    {
      id: "hospital",
      title: "Hospital Food Service",
      description: "Provide nutritious food to patients and their family members.",
      icon: "Heart",
      localImage: "/images/services/hospital.jpg",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
    },
    {
      id: "school",
      title: "School Meal Program",
      description: "Provide meals to children in schools.",
      icon: "UtensilsCrossed",
      localImage: "/images/services/school.jpg",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80",
    },
    {
      id: "ashram",
      title: "Ashram Support",
      description: "Provide food to elderly and needy people in ashrams.",
      icon: "Users",
      localImage: "/images/services/ashram.jpg",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80",
    },
    {
      id: "community",
      title: "Community Food Distribution",
      description: "Food distribution in needy local communities.",
      icon: "Package",
      localImage: "/images/services/community.jpg",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80",
    },
  ],

  /** Gallery: use localImage (e.g. /images/gallery/1.jpg) for your own real donation photos; else src. Add your images to public/images/gallery/. */
  gallery: [
    {
      id: "1",
      localImage: "/images/gallery/1.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Volunteers distributing meals in India",
      caption: "Food distribution at hospital",
      description:
        "Our volunteers distribute nutritious meals to patients and their families at partner hospitals across India. Every meal helps families focus on recovery.",
    },
    {
      id: "2",
      localImage: "/images/gallery/2.jpg",
      src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
      alt: "Indian meals for school children",
      caption: "School meal program",
      description:
        "We provide hot, nutritious Indian meals to school children so they can learn on a full stomach. Our school meal program reaches thousands of students.",
    },
    {
      id: "3",
      localImage: "/images/gallery/3.jpg",
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
      alt: "Community donation drive in India",
      caption: "Community food drive",
      description:
        "Community members and volunteers come together to collect and distribute food to needy families in local neighbourhoods and villages.",
    },
    {
      id: "4",
      localImage: "/images/gallery/4.jpg",
      src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
      alt: "Gujarati-style meal served at ashram",
      caption: "Ashram meal service",
      description:
        "We support ashrams and care homes with regular meal supplies. Elderly and needy residents receive wholesome Indian food with dignity and care.",
    },
    {
      id: "5",
      localImage: "/images/gallery/5.jpg",
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
      alt: "Indian volunteers at food bank",
      caption: "Volunteers at work",
      description:
        "Our dedicated volunteers pack and distribute food parcels. Together we ensure no one in our community goes hungry.",
    },
    {
      id: "6",
      localImage: "/images/gallery/6.jpg",
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
      alt: "Indian food for families in need",
      caption: "Family receiving meals",
      description:
        "Families in need receive nutritious Indian meals through our distribution centres. Your donations help us serve more families every day.",
    },
    {
      id: "7",
      localImage: "/images/gallery/7.jpg",
      src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&q=80",
      alt: "Donation drive – packing meals",
      caption: "Packing meals for distribution",
      description:
        "Volunteers pack fresh, nutritious meals at our distribution centre. Your donations fund ingredients and logistics so we can reach more people in need.",
    },
    {
      id: "8",
      localImage: "/images/gallery/8.jpg",
      src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
      alt: "Donation collection point",
      caption: "Donation collection point",
      description:
        "Community members drop off food and supplies at our collection points. Every contribution—whether food or funds—helps us fight hunger locally.",
    },
    {
      id: "9",
      localImage: "/images/gallery/9.jpg",
      src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
      alt: "Receiving donated groceries",
      caption: "Receiving donated groceries",
      description:
        "Families in need receive grocery kits from our donation drives. We partner with local vendors and donors to provide essential staples and fresh produce.",
    },
    {
      id: "10",
      localImage: "/images/gallery/10.jpg",
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
      alt: "Volunteers preparing food",
      caption: "Volunteers preparing food",
      description:
        "Our kitchen volunteers prepare hot meals daily for hospital visitors, school programmes, and community centres. Your support keeps this going.",
    },
    {
      id: "11",
      localImage: "/images/gallery/11.jpg",
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
      alt: "Mid-day meal at school",
      caption: "Mid-day meal at school",
      description:
        "Children enjoy a hot mid-day meal at a partner school. Full stomachs help them concentrate and stay in school. Donations directly fund these meals.",
    },
    {
      id: "12",
      localImage: "/images/gallery/12.jpg",
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
      alt: "Thank you to our donors",
      caption: "Thank you to our donors",
      description:
        "We are grateful to every donor and volunteer. Your generosity turns into meals, hope, and dignity for thousands. Join us—donate or volunteer today.",
    },
  ],

  donation: {
    message: "Your donation helps us serve meals to those who need it most.",
    instructions:
      "You can support our cause by transferring funds to our bank account or using UPI. Every contribution goes directly toward providing nutritious meals.",
    bankName: "Example Bank",
    accountName: "Care & Share Trust",
    accountNumber: "1234567890123456",
    ifsc: "EXMP0001234",
    upiId: "donate@upi",
    qrCodeImage: "/qr-donate.svg",
  },

  contact: {
    address: "123 Charity Lane, Ahmedabad, Gujarat 380001, India",
    phone: "+91 9737779805",
    email: "raminigam2@gmail.com",
    mapLocation: "Ahmedabad,Gujarat",
    mapLink: "https://maps.google.com/?q=Ahmedabad,Gujarat",
  },
} as const;

export type SiteContent = typeof siteContent;
