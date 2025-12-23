import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sherin Marva",
  initials: "SM",
  url: "https://sherinmarwa.github.io/",
  location: "Chennai, Tamil Nadu, India",
  locationLink: "https://www.google.com/maps/place/Chennai",
  description:
    "Software Developer specializing in Java, Spring Boot, Microservices, and AWS — building scalable backend systems, secure REST APIs, and cloud-ready applications for enterprise and fintech platforms.",
  summary:
    "I am a Software Developer with a strong foundation in Java and backend development, and real-world experience building microservices-based applications for fintech and banking systems. My expertise includes Spring Boot, REST APIs, MongoDB, SQL, and AWS deployments. I focus on developing secure, scalable, and high-performance systems that support core banking workflows, lending platforms, and enterprise financial applications.",
  avatarUrl: "/sherin.png",

  skills: [
    "Java",
    "Spring Boot",
    "Microservices Architecture",
    "REST APIs",
    "MongoDB",
    "SQL",
    "AWS",
    "Kafka / RabbitMQ",
    "Docker",
    "Kubernetes (Basic)",
    "API Security & Authentication",
    "Git & GitHub",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "sherinn6052@gmail.com",
    tel: "+91-XXXXXXXXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sherinmarwa",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/sherin-marwa-77724b200",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "YouTube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:sherinn6052@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Cognizant",
      href: "#",
      badges: ["REST APIs", "Spring Boot", "Backend Systems"],
      location: "India",
      title: "software Engineer",
      logoUrl: "/cognizant.png",
      start: "Jun 2025",
      end: "Dec 2025",
      description:
        "Developed and maintained REST APIs for a Toyota enterprise application using Java and Spring Boot as part of a Cognizant project.",
    },
    {
      company: "Vivriti Capital",
      href: "#",
      badges: ["FinTech", "Microservices"],
      location: "India",
      title: "software Engineer",
      logoUrl: "/vivriti.png",
      start: "Feb 2022",
      end: "Jun 2025",
      description:
        "Developed and maintained scalable Java-based microservices for fintech and banking applications, focusing on secure APIs, cloud deployment on AWS, and high-performance backend systems.",
    },
  ],

  education: [
    {
      school: "MAM College of Engineering",
      href: "https://www.mamce.org/",
      degree: "B.Tech Information Engineering",
      logoUrl: "/MAMLogo.png",
      start: "2017",
      end: "2021",
    },
  ],

  projects: [
    {
      title: "Supply Chain Finance Platform",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Developed backend services for a supply chain finance platform enabling invoice financing, vendor onboarding, and transaction tracking. Built scalable microservices using Java and Spring Boot, integrated secure REST APIs, and managed financial data using MongoDB and SQL.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "MongoDB",
        "SQL",
        "AWS"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Co-Lending Finance System",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Worked on a co-lending finance system supporting multiple lenders with automated loan processing, document handling, and disbursement workflows. Implemented backend microservices, API integrations, and asynchronous processing to ensure scalability and reliability.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Kafka",
        "REST APIs",
        "MongoDB",
        "AWS"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Enterprise REST API Development – Toyota (Cognizant)",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Worked as a Software Developer at Cognizant on a Toyota enterprise project, focusing on building and maintaining RESTful APIs using Java and Spring Boot. Contributed to backend services that supported business workflows, ensured data consistency, and improved API performance and reliability.",
      technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "SQL",
        "Git",
        "Enterprise Systems"
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [] as any[], // You can keep this empty or I can add DS hackathons if you want
} as const;
