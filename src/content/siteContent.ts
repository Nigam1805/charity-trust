/**
 * WEBSITE CONTENT  single source for copy, nav labels, page titles, forms, footer, and media paths.
 * Sections: trustName, logoUrl / siteTitleMarkUrl (trust-logo.png), tagline, hero (incl. optional backgroundImage), about, services[], gallery[], donation, nav, footerLabels,
 * homePage, servicesPage, pages.{donate,contact,about,gallery}, mapSection, contactForm, contact.
 */

export const siteContent = {
  trustName: "Aanand Dhara Charitable Trust",
  /** Trust logo (emblem + wordmark). File in public/. */
  logoUrl: "/trust-logo.png",
  /** Same asset in the navbar, shown inside a circular badge. */
  siteTitleMarkUrl: "/trust-logo.png",
  tagline: "Where compassion flows like a river of joy",

  hero: {
    /** Full-width hero photo in public/; leave empty string to use gradient-only hero. */
    backgroundImage: "/hero-background.png?v=2",
    headline: "Serving Humanity with Food, Care & Compassion",
    subtext:
      "Child Education · Hospital Meal Program · Women Empowerment · Help the Needy · Social Welfare · Climate Action  six service areas, one mission: dignity, care, and lasting change at the grassroots.",
    ctaPrimary: "Donate Now",
    ctaSecondary: "Learn More",
  },

  about: {
    intro:
      "Aanand Dhara Charitable Trust is a registered non-profit organisation dedicated to uplifting underserved communities across India. The name Aanand Dhara  meaning ‘Stream of Joy’  reflects our core belief: happiness and well-being naturally flow when communities come together to serve those most in need. From nourishing patients in hospitals to educating children, empowering women, driving social welfare, and protecting our environment  we work across six service areas to create meaningful, lasting change at the grassroots level. Every initiative is rooted in dignity, compassion, and full transparency. We are driven by the conviction that every human being deserves dignity, opportunity, and care  regardless of economic background. With the generous support of donors, volunteers, and community partners, Aanand Dhara Charitable Trust continues to be a lifeline for thousands of families every year.",
    coreValues: [
      {
        title: "Compassion First",
        body: "Every decision begins with empathy for the people we serve. No policy, process, or procedure comes before the well-being of our beneficiaries.",
      },
      {
        title: "Full Transparency",
        body: "We maintain open records and publish regular activity reports, ensuring every donor and supporter can see exactly how their contributions create impact.",
      },
      {
        title: "Community Driven",
        body: "We work alongside communities, not just for them. Local voices guide our programs to ensure real relevance and lasting ownership.",
      },
      {
        title: "Sustainable Impact",
        body: "Our programs are designed to create systemic change  not just temporary relief. We build capacity so communities can thrive independently.",
      },
      {
        title: "Inclusivity",
        body: "We serve regardless of caste, religion, gender, or background. Dignity and opportunity belong to every human being, without exception.",
      },
    ],
    mission:
      "To serve every person in need with dignity, care, and lasting compassion  through education, nutrition, empowerment, relief, social welfare, and environmental stewardship  so communities can grow stronger together.",
    vision:
      "A India where every child can learn, every family is nourished in times of crisis, women lead with confidence, the most vulnerable receive immediate and long-term support, communities are healthy and inclusive, and our environment is protected for future generations.",
    activities: [
      "Child Education  quality schooling, learning materials, tuition support, and life-skills workshops for underprivileged children.",
      "Hospital Meal Program  nutritious, hygienic meals for patients and accompanying family members at partner hospitals.",
      "Women Empowerment  vocational training, self-help groups, financial literacy, and mentoring for women-led livelihoods.",
      "Help the Needy  food, clothing, blankets, hygiene kits, and emergency relief for the homeless and disaster-affected.",
      "Social Welfare  health camps, sanitation awareness, elderly care, and community development with local partners.",
      "Climate Action  tree plantation, water storage tanks, rainwater harvesting, and environmental education.",
    ],
    whyWeServe:
      "We believe that when compassion flows like a stream of joy, entire communities rise. Every act of kindness  a meal, a lesson, a sapling, a listening ear  carries dignity and hope. We exist so that no one is left behind.",
    whySupport: [
      {
        title: "Full Transparency & Accountability",
        body: "Every rupee donated is used with complete accountability. We publish regular activity reports and impact summaries, and maintain open financial records for all donors, supporters, and stakeholders. Nothing is hidden  ever.",
      },
      {
        title: "Grassroots Impact, No Middlemen",
        body: "We work directly with the communities we serve. There are no middlemen, no unnecessary delays. Your support reaches the beneficiary immediately and effectively  creating real change on the ground.",
      },
      {
        title: "Holistic, Multi-Dimensional Approach",
        body: "From feeding the sick to educating children, empowering women, supporting the elderly, and planting trees  we address multiple dimensions of human and environmental welfare together, for deeper and more lasting impact.",
      },
      {
        title: "CSR Partnership & Tax Benefits",
        body: "Corporates and individuals can partner with us for CSR activities aligned with their values and commitments. Donations may be eligible for tax deduction benefits under applicable provisions of the Indian Income Tax Act.",
      },
      {
        title: "Community-Centred & Inclusive",
        body: "All our programs are designed with and for the communities we serve. We listen first, act together, and ensure that every individual  regardless of background  receives dignity, care, and opportunity.",
      },
      {
        title: "Sustainable & Long-Term Programs",
        body: "We do not just provide relief  we build capacity. Our programs are designed for sustainability, so communities can continue thriving even after our direct intervention has concluded. Change that lasts.",
      },
    ],
    impactStats: [
      { label: "Service Areas", value: "6+" },
      { label: "Lives Impacted", value: "1,000+" },
      { label: "Donation Driven", value: "100%" },
      { label: "Compassion", value: "∞" },
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

  /** Six service areas  copy aligned with Aanand Dhara Trust content document. */
  services: [
    {
      id: "child-education",
      title: "Child Education",
      description:
        "Aanand Dhara Charitable Trust believes that education is the most powerful tool for breaking the cycle of poverty. We support underprivileged children with access to quality schooling, learning materials, tuition assistance, and skill-building workshops. Our programs focus on building strong foundations in literacy, numeracy, and life skills so that every child  regardless of economic background  can grow up to realise their full potential.",
      bullets: [
        "Free books, stationery and school supplies for children in need.",
        "After-school tuition support and community learning centres.",
        "Scholarships for meritorious but financially challenged students.",
        "Awareness campaigns to reduce school dropout rates in rural areas.",
        "Educational workshops on hygiene, health, and life skills.",
      ],
      quote: "Education is the most powerful weapon which you can use to change the world.",
      quoteAuthor: "Nelson Mandela",
      icon: "GraduationCap",
      localImage: "/images/services/education.jpg",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    },
    {
      id: "hospital-meals",
      title: "Hospital Meal Program",
      description:
        "Illness is already a heavy burden  hunger should never add to it. Our Hospital Meal Program provides nutritious, hygienic, and freshly prepared meals to patients and their accompanying family members at hospitals. We recognise that caregivers often go without food while attending to their loved ones. A warm, nourishing meal is more than food  it is a message that someone cares.",
      bullets: [
        "Daily distribution of healthy, freshly prepared meals to patients.",
        "Nutritious food packages for family members accompanying patients.",
        "Special diet meals for patients with specific health conditions.",
        "Partnerships with hospitals, clinics, and healthcare institutions.",
        "Volunteer-driven distribution with warmth and compassion.",
      ],
      quote: "The best way to find yourself is to lose yourself in the service of others.",
      quoteAuthor: "Mahatma Gandhi",
      icon: "UtensilsCrossed",
      localImage: "/images/services/hospital.jpg",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
    },
    {
      id: "women-empowerment",
      title: "Women Empowerment",
      description:
        "At Aanand Dhara, we believe that empowering a woman empowers an entire community. Our women empowerment programs provide vocational training, skill development workshops, financial literacy education, and self-help group support. We work to ensure that women  especially from rural and low-income backgrounds  have the tools, confidence, and support networks to lead independent, dignified lives.",
      bullets: [
        "Vocational training in tailoring, handicrafts and digital skills.",
        "Self-help group formation and micro-finance assistance.",
        "Financial literacy and entrepreneurship workshops.",
        "Legal awareness and women's rights education programs.",
        "Mentoring support for women-led small businesses and startups.",
      ],
      quote: "There is no limit to what we, as women, can accomplish.",
      quoteAuthor: "Michelle Obama",
      icon: "HeartHandshake",
      localImage: "/images/services/women-empowerment.jpg",
      imagePlaceholder:
        "https://images.pexels.com/photos/36746074/pexels-photo-36746074.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "help-needy",
      title: "Help the Needy",
      description:
        "From homeless individuals to flood-affected families and daily-wage workers during times of crisis, Aanand Dhara Charitable Trust is on the ground providing immediate relief and long-term support to those who need it most. We distribute food, clothing, blankets, hygiene kits, and essential supplies so that no human being is denied basic dignity.",
      bullets: [
        "Food distribution drives during festivals, winters, and emergencies.",
        "Blanket and warm clothing donation camps in cold seasons.",
        "Hygiene kit and essential supply distribution to homeless individuals.",
        "Emergency relief and support during floods, droughts and disasters.",
        "Street children care and shelter support initiatives.",
      ],
      quote: "We make a living by what we get, but we make a life by what we give.",
      quoteAuthor: "Winston Churchill",
      icon: "HandHeart",
      localImage: "/images/services/help-needy.jpg",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    },
    {
      id: "social-welfare",
      title: "Social Welfare",
      description:
        "Our social welfare initiatives address the root causes of poverty, inequality, and social exclusion at the community level. We run free health check-up camps, hygiene and sanitation awareness workshops, elderly care programs, and community development activities. By partnering with local governments and civil society organisations, we amplify our reach.",
      bullets: [
        "Free health check-up and medical camps in rural areas and urban slums.",
        "Sanitation, hygiene and clean drinking water awareness campaigns.",
        "Support programs and recreational activities for senior citizens.",
        "Community development and rural infrastructure upliftment projects.",
        "Awareness drives on education, nutrition and preventive healthcare.",
      ],
      quote: "Alone we can do so little; together we can do so much.",
      quoteAuthor: "Helen Keller",
      icon: "Users",
      localImage: "/images/services/health.jpg",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    },
    {
      id: "climate-action",
      title: "Climate Action",
      description:
        "Aanand Dhara Charitable Trust takes its responsibility towards the environment seriously. Our climate action programs focus on large-scale tree plantation drives to restore green cover and reduce carbon footprint, and the construction of water storage tanks where access to clean drinking water remains scarce. Every tree planted and every drop of water saved is a gift to current and future generations.",
      bullets: [
        "Large-scale tree plantation drives in communities, schools and highways.",
        "Construction of water storage tanks in water-scarce regions.",
        "Rainwater harvesting systems for villages and rural households.",
        "Environmental and climate awareness education for children and youth.",
        "Community training on water conservation and sustainable practices.",
        "Native and climate-resilient species prioritised; follow-up monitoring of saplings.",
      ],
      quote: "The Earth is what we all have in common.",
      quoteAuthor: "Wendell Berry",
      icon: "Trees",
      localImage: "/images/services/community.jpg",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80",
    },
  ],

  /** Gallery  photos from Downloads/selected; local files in public/images/gallery/. */
  gallery: [
    {
      id: "1",
      localImage: "/images/gallery/1.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Hospital ward visit with nutritional supplements for a mother and child",
      caption: "Beside the bed, with care",
      description:
        "Supporting a patient and family in the hospital with nutritional supplements  small comforts that help recovery feel less alone.",
    },
    {
      id: "2",
      localImage: "/images/gallery/2.jpg",
      src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
      alt: "Medicines handed to a woman patient on a hospital bed",
      caption: "Essential medicines in the ward",
      description:
        "Delivering prescribed medicines directly to patients so treatment can continue without added worry.",
    },
    {
      id: "3",
      localImage: "/images/gallery/3.jpg",
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
      alt: "Elderly patient in hospital bed with visitors bringing supplement boxes",
      caption: "With families at difficult times",
      description:
        "Standing with an elderly patient and loved ones  supplements and solidarity during a long stay in care.",
    },
    {
      id: "4",
      localImage: "/images/gallery/4.jpg",
      src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
      alt: "Volunteer giving medicine boxes to a young patient with IV line",
      caption: "Support for patients on treatment",
      description:
        "Reaching patients who are on drips and daily medication  every box is one less burden on the ward.",
    },
    {
      id: "5",
      localImage: "/images/gallery/5.jpg",
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
      alt: "Stacks of health supplement cartons with Aanand Dhara Charitable Trust banner",
      caption: "Stocked for the next round of giving",
      description:
        "Preparing cartons of wellness supplements under the trust banner  ready to move from the storeroom to those who need them.",
    },
    {
      id: "6",
      localImage: "/images/gallery/6.jpg",
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
      alt: "Volunteer with supplement boxes in front of trust registration banner",
      caption: "Ahmedabad  our home base",
      description:
        "Registered trust activity in Chandlodia and surrounding areas  accountable, local, and people-first.",
    },
    {
      id: "7",
      localImage: "/images/gallery/7.jpg",
      src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&q=80",
      alt: "Food staples handed over in a basin at a charity handover",
      caption: "Food essentials for a family",
      description:
        "A full basin of groceries  rice, oil, and staples  handed over so a household can cook with dignity.",
    },
    {
      id: "8",
      localImage: "/images/gallery/8.jpg",
      src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
      alt: "Ration kit of flour, oil, pulses, and vegetables in front of trust banner",
      caption: "A ration kit, ready to go",
      description:
        "Flour, oil, pulses, onions, and potatoes lined up for families  one kit can steady a week at home.",
    },
    {
      id: "9",
      localImage: "/images/gallery/9.jpg",
      src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
      alt: "Volunteer handing snack packets to schoolchildren on the pavement",
      caption: "Snacks for schoolchildren",
      description:
        "A quick smile on the sidewalk  snack packets for children after school or on the way home.",
    },
    {
      id: "10",
      localImage: "/images/gallery/10.jpg",
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
      alt: "Community snack distribution from a cardboard box on the street",
      caption: "Outreach in the neighbourhood",
      description:
        "Volunteers and neighbours gather around a simple box  small packets, big warmth in the open air.",
    },
    {
      id: "11",
      localImage: "/images/gallery/11.jpg",
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
      alt: "Children in school uniform receiving packets from volunteers",
      caption: "Reaching children where they are",
      description:
        "School uniforms and bright faces  distributing snacks where families live and study.",
    },
    {
      id: "12",
      localImage: "/images/gallery/12.jpg",
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
      alt: "Street distribution of food packets to a family with children",
      caption: "Kindness on the street",
      description:
        "Stopping for a moment on the roadside  snacks shared with children and parents in the community.",
    },
    {
      id: "13",
      localImage: "/images/gallery/13.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Trust volunteers handing a meal tray to an elderly woman in front of trust banner",
      caption: "A hot meal, hand to hand",
      description:
        "Volunteers serve a plated meal to an elder in front of the trust banner  dignity and nutrition together.",
    },
    {
      id: "14",
      localImage: "/images/gallery/14.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Elderly woman eating at a bunk bed in a shared care facility with a volunteer",
      caption: "Care where people stay",
      description:
        "A quiet moment in a dormitory-style shelter  a warm meal and company for someone who needs both.",
    },
    {
      id: "15",
      localImage: "/images/gallery/15.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Community hall meal with young people seated at tables and trust banner",
      caption: "Community hall lunch",
      description:
        "Trust volunteers with youth enjoying a shared meal  simple food, strong community.",
    },
    {
      id: "16",
      localImage: "/images/gallery/16.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Volunteers serving vada pav to students at long tables with trust banner",
      caption: "School-age meal service",
      description:
        "Fresh vada pav and chutney for rows of students  energy for the afternoon and a full hall of thanks.",
    },
    {
      id: "17",
      localImage: "/images/gallery/17.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Volunteer handing a basin of rice, oil, and staples to a woman in a pink sari",
      caption: "Groceries for the kitchen",
      description:
        "Oil, rice, and staples in one basin  practical help so a family can cook at home without worry.",
    },
    {
      id: "18",
      localImage: "/images/gallery/18.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Hospital corridor sign for TBCD wards on the seventh floor",
      caption: "Inside the hospital we serve",
      description:
        "Wayfinding in a busy public hospital  our teams walk these corridors to reach patients on the wards.",
    },
    {
      id: "19",
      localImage: "/images/gallery/19.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Volunteer handing a container to a patient in a hospital bed",
      caption: "Bedside support",
      description:
        "A small container of food or supplement  a direct handoff so rest and recovery come first.",
    },
    {
      id: "20",
      localImage: "/images/gallery/20.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Volunteer giving packaged items to an elderly man on a hospital bed",
      caption: "For elders in the ward",
      description:
        "Listening, handing over essentials, and staying a minute longer  care that feels human.",
    },
    {
      id: "21",
      localImage: "/images/gallery/21.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Volunteer with health items beside an elderly woman in a hospital bed",
      caption: "Comfort at the bedside",
      description:
        "Digestives, supplements, and a smile  small items that say someone is thinking of you.",
    },
    {
      id: "22",
      localImage: "/images/gallery/22.jpg",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Bottled health products on display with Anand Dhara Charitable Trust banner",
      caption: "Ready for distribution",
      description:
        "Bottled supplements lined up under the trust banner in Ahmedabad  the next batch heading out to those in need.",
    },
  ],

  donation: {
    message:
      "Your donation supports education, hospital meals, women’s empowerment, relief for the needy, social welfare, and climate action  with full transparency.",
    instructions:
      "Transfer funds by bank or UPI, or explore CSR partnerships. Every contribution is accounted for with open records and activity reports.",
    bankName: "Example Bank",
    accountName: "Aanand Dhara Charitable Trust",
    accountNumber: "1234567890123456",
    ifsc: "EXMP0001234",
    upiId: "aananddharacharitabl.82206907@hdfcbank",
    qrCodeImage: "/qr-donate.png",
    sectionTitle: "Support Our Cause",
    bankHeading: "Bank Transfer",
    upiHeading: "UPI",
    bankFieldLabels: {
      bankName: "Bank Name",
      accountName: "Account Name",
      accountNumber: "Account Number",
      ifsc: "IFSC Code",
    },
    upiIdLabel: "UPI ID:",
    upiSideTextBeforeId: "Scan with any UPI app to donate. Or use UPI ID:",
    thankYouFooter:
      "Thank you for your generosity. Together we can ensure every child learns, every family is nourished, and every community thrives.",
    qrAlt: "UPI QR Code for donations",
    qrLoadFailed: "QR code image",
  },

  /** Main navigation  same labels used in header and footer quick links. */
  nav: {
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/gallery", label: "Gallery" },
      { href: "/donate", label: "Donate" },
      { href: "/contact", label: "Contact" },
    ] as const,
  },

  footerLabels: {
    quickLinks: "Quick Links",
    contact: "Contact",
    supportUs: "Support Us",
    donateNow: "Donate Now",
    rightsReserved: "All rights reserved.",
  },

  homePage: {
    impactTitle: "Our Impact",
    impactSubtitle:
      "Six focused initiatives  lives touched across India  driven by donors, volunteers, and community partners.",
    galleryTitle: "On the ground in Ahmedabad",
    gallerySubtitle:
      "Hospital visits, trust-led drives, food kits, community meals, and neighbourhood outreach  real moments from our work.",
    galleryViewAll: "View All",
    finalCtaTitle: "Join Us in Making a Difference",
    finalCtaSubtitle:
      "Join the movement. Donate · Volunteer · Partner · Spread the word  every act of kindness creates a powerful wave of change.",
    finalCtaDonate: "Donate Now",
    finalCtaContact: "Contact Us",
  },

  servicesPage: {
    title: "Our Service Areas",
    subtitle:
      "Six focused initiatives, one shared mission  to serve every person in need with dignity, care, and lasting compassion.",
  },

  pages: {
    donate: {
      title: "Donate",
      intro:
        "Your contribution strengthens child education, hospital meals, women's empowerment, help for the needy, social welfare, and climate action  with accountability you can trust.",
    },
    contact: {
      title: "Contact Us",
      intro: "Get in touch for inquiries, partnerships, or to learn how you can help.",
      infoHeading: "Contact Information",
    },
    about: {
      title: "Who We Are",
      peopleTitle: "Our People",
      peopleSubtitleTemplate: "The trustees and team behind {trustName}.",
      coreValuesTitle: "Our Core Values",
      missionTitle: "Our Mission",
      visionTitle: "Our Vision",
      activitiesTitle: "What We Focus On",
      whyWeServeTitle: "Why We Serve",
      whySupportTitle: "Why Support Us",
      whySupportSubtitle:
        "Join the movement. Be the change. Donate · Volunteer · Partner with us · Spread the word.",
      impactNumbersTitle: "Impact at a Glance",
    },
    gallery: {
      title: "Gallery",
      intro:
        "Hospital wards, distribution halls, and neighbourhood streets  photos from Aanand Dhara Charitable Trust’s programmes in and around Ahmedabad.",
      body:
        "Supplements and medicines for patients, meals and kits for families, trust banners and volunteers with schoolchildren. Tap any image to read more.",
      gridTitle: "Hospitals, halls, and streets",
      galleryCountLine: "{count} photos from the field.",
      imagePlaceholder: "Image",
      viewDetails: "View details",
      notFoundTitle: "Image not found",
      backToGallery: "Back to Gallery",
      imageUnavailable: "Image unavailable",
    },
  },

  mapSection: {
    title: "Find Us",
    loading: "Loading map…",
    iframeTitle: "Trust location on Google Maps",
  },

  contactForm: {
    title: "Send a Message",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    phonePlaceholder: "Your phone number",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message",
    submit: "Send Message",
    submitting: "Sending…",
    success: "Thank you. Your message has been sent.",
    error: "Something went wrong. Please try again or email us directly.",
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
