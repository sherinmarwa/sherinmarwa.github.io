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
  avatarUrl: "/myself.png",

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
      badges: ["FinTech", "Banking Systems", "Microservices", "REST APIs"],
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
      degree: "B.E Computer Science Engineering",
      logoUrl: "/MAMLogo.png",
      start: "2017",
      end: "2021",
    },
  ],

  projects: [
    {
      title: "Credit Risk Prediction System",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "End-to-end ML system to predict loan default probability using structured financial data with full data pipeline orchestration.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Spark",
        "Hive",
        "Airflow",
        "AWS",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Customer Churn Analytics Platform",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Machine learning-based churn prediction system with feature engineering, model explainability, and automated retraining workflows.",
      technologies: [
        "Python",
        "XGBoost",
        "SQL",
        "Airflow",
        "Docker",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "GenAI NLP Automation System",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built a GenAI-powered text classification and summarization engine for automated document intelligence.",
      technologies: [
        "Python",
        "Transformers",
        "OpenAI",
        "FastAPI",
        "Docker",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [] as any[], // You can keep this empty or I can add DS hackathons if you want
} as const;
