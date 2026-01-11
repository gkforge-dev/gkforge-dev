export const ABOUT = {
  intro: `Lead Software Engineer with 5+ years of experience architecting and delivering 
production-grade distributed systems, enterprise marketplaces, and cloud-native applications. 
Specialized in AWS serverless architecture, microservices design, and building scalable platforms 
that handle 100K+ monthly requests with 99.9% uptime.`,
  details: [
    "🚀 Architecting multi-tenant SaaS platforms & enterprise CRM systems at scale",
    "👥 Leading 50+ engineers across 3 product lines with agile workflows",
    "☁️ Expert in AWS Serverless (Lambda, Aurora, API Gateway, S3, CodePipeline)",
    "🔧 Building RESTful APIs, microservices, and event-driven architectures",
    "🤖 Integrating GenAI components for NLP-based query understanding & recommendations",
    "💳 Implementing payment gateways, settlement workflows & multi-party transactions",
    "📊 Reducing latency by 30%, improving delivery efficiency by 35%",
    "🏆 Employee of the Year - iProgrammer Solutions Pvt. Ltd."
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python"],
    frameworks: ["NestJS", "Node.js", "NextJS", "Express.js", "React.js", "fastAPI"],
    cloud: ["AWS Lambda", "S3", "Aurora", "API Gateway", "CodePipeline", "EC2", "GCP", "OCI", "Docker", "CI/CD"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "DocumentDB"],
    tools: ["Git", "VS Code", "Jira", "Postman", "Serverless Framework"]
  }
};

export const EXPERIENCE = [
  {
    role: "Lead Software Engineer",
    company: "iProgrammer Solutions Pvt. Ltd.",
    location: "Pune, Maharashtra, India",
    period: "Jan 2025 – Present",
    highlights: [
      "Integrated GenAI components for natural-language query understanding and content recommendations, improving engagement and click-through rates by 30%.",
      "Architected a Marketplace On-boarding system with KYC verification, document management, and profile verification platform serving large-scale enterprise clients.",
      "Led 50+ engineers across 3 product lines; implemented agile workflows with sprint planning and code review practices, improving delivery efficiency by 35%.",
      "Optimized AWS serverless infrastructure using Lambda, API Gateway, and Aurora, reducing latency by 30% and improving horizontal scalability.",
      "Collaborated with product owners and stakeholders to deliver impact-driven solutions across distributed microservices architecture.",
      "Established architecture standards, design patterns, and best practices for cross-team development consistency."
    ]
  },
  {
    role: "Senior Software Engineer",
    company: "iProgrammer Solutions Pvt. Ltd.",
    location: "Pune, Maharashtra, India",
    period: "Feb 2023 – Jan 2025",
    highlights: [
      "Led backend development for 10+ Enterprise Level Applications, achieving 99.9% uptime and handling 100,000+ monthly user requests.",
      "Designed and integrated multiple payment models including subscription billing, one-time payments, and partner payouts to streamline marketplace transactions.",
      "Reduced technical debt by 40% via strategic refactoring, implementing modular system design and clean architecture principles.",
      "Architected a marketplace platform for architects and contractors with real-time collaboration features, boosting platform engagement by 60%.",
      "Implemented comprehensive API documentation, monitoring dashboards, and alerting systems using CloudWatch and custom metrics."
    ]
  },
  {
    role: "Software Engineer",
    company: "iProgrammer Solutions Pvt. Ltd.",
    location: "Pune, Maharashtra, India",
    period: "Mar 2022 – Feb 2023",
    highlights: [
      "Developed full-stack onboarding systems using React.js frontend with Node.js/Express backend, implementing multi-step workflows and validation.",
      "Streamlined CI/CD deployments through AWS CodePipeline with automated testing, reducing release time by 25%.",
      "Improved system stability by resolving performance bottlenecks through query optimization, caching strategies, and enhanced test coverage.",
      "Built RESTful APIs following OpenAPI specifications with proper error handling and input validation."
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "iProgrammer Solutions Pvt. Ltd.",
    location: "Pune, Maharashtra, India",
    period: "Feb 2021 – Mar 2022",
    highlights: [
      "Transitioned from frontend to full-stack engineering; implemented Node.js + MySQL APIs with proper ORM patterns.",
      "Developed automation scripts and data visualization tools using Python for ETL processes and reporting dashboards.",
      "Gained expertise in AWS cloud deployment including EC2, S3, RDS, and production monitoring with CloudWatch.",
      "Contributed to code reviews, documentation, and knowledge sharing within the team."
    ]
  }
];

export const PROJECTS = [
  {
    name: "Multi-CRM Platform for Marketplace & Home Services",
    role: "Solution Architect & Lead Engineer",
    period: "2021 – Present",
    tech: ["Node.js", "AWS", "Microservices", "Payment Gateways", "Aurora"],
    highlights: [
      "Architected and built a suite of interconnected CRM systems to support an enterprise marketplace and home services ecosystem at scale.",
      "Designed a Partner Onboarding CRM enabling vendors to operate across multiple geographies, manage product catalogs, dynamic pricing, and securely onboard bank details for automated payouts.",
      "Implemented order and service lifecycle management CRM to handle order creation, SLA tracking, agent assignments, delivery milestones, and customer interaction workflows.",
      "Built a service fulfillment CRM to manage end-to-end execution of home-building services including 2D/3D designs, consultations, and specialty services.",
      "Integrated payment gateways (Razorpay, Stripe) and settlement workflows with role-based access control to ensure secure fund flows between customers, partners, and internal teams.",
      "Developed admin dashboards and reporting pipelines providing visibility into partner performance, SLA compliance, revenue, and fulfillment metrics using real-time analytics."
    ]
  },
  {
    name: "End-to-end Home-builder Platform",
    role: "Backend Dev & Solution Architect",
    period: "Feb 2021 – Present",
    tech: ["AWS Serverless", "Aurora", "Node.js", "Lambda", "API Gateway"],
    highlights: [
      "Architected backend services for two mobile apps (IHB & Partner) using event-driven serverless architecture, achieving 99.9% uptime.",
      "Designed and implemented an Admin Portal with React.js for configuration management, user management, and analytics; reducing admin overhead by 40%.",
      "Implemented resilient serverless patterns including circuit breakers, retry logic, and DLQ handling for fault tolerance.",
      "Built caching strategies using ElastiCache (Redis) and CloudFront CDN, cutting average API latency by 30% for key endpoints.",
      "Designed database schema with Aurora MySQL, implementing read replicas and connection pooling for optimal performance."
    ]
  },
  {
    name: "e-Invoicing SaaS (UAE) – PEPPOL / FTA Integration",
    role: "Solution Architect",
    period: "2025 – Present",
    tech: ["PEPPOL", "Node.js", "Python", "AWS", "Multi-tenant Architecture"],
    highlights: [
      "Architected and delivered a PEPPOL-compliant SaaS platform for digital invoice exchange integrated with UAE's Federal Tax Authority (FTA).",
      "Implemented XML/UBL invoice generation and validation engine following PEPPOL BIS 3.0 specifications.",
      "Automated invoice validation, transmission via Access Points, and error handling, reducing manual processing by 100%.",
      "Designed multi-tenant database architecture with tenant isolation, ensuring data security and compliance.",
      "Implemented secure data exchange using digital signatures, encryption, and comprehensive audit logging for regulatory compliance."
    ]
  },
  {
    name: "Contact Center Panel (Customer Support Toolkit)",
    role: "Full Stack & Solution Architect",
    period: "2022 – 2023",
    tech: ["AWS Serverless", "React", "Node.js", "Knowlarity", "WebSocket"],
    highlights: [
      "Designed and delivered a contact center panel enabling agents to manage customer calls and tickets with real-time updates.",
      "Integrated Knowlarity telephony services for call management including IVR, call recording, and agent routing.",
      "Improved agent throughput by 40% and reduced average handling time by 25% through optimized UI/UX workflows.",
      "Implemented WebSocket-based real-time notifications for incoming calls, ticket assignments, and status updates.",
      "Built automated follow-up workflows integrating call metadata with task management to reduce manual handoffs."
    ]
  },
  {
    name: "OneTech Lite (Offline-first Mobile Solution)",
    role: "Backend Dev & Sync Architect",
    period: "2022 – Present",
    tech: ["Flutter", "AWS", "SQLite", "Sync Engine", "REST APIs"],
    highlights: [
      "Designed and implemented offline-capable mobile app architecture with automatic sync to cloud services.",
      "Built robust sync conflict resolution using last-write-wins and custom merge strategies to preserve data integrity.",
      "Implemented background sync with exponential backoff and delta sync to optimize bandwidth in low-connectivity regions.",
      "Created RESTful sync APIs with versioning and pagination for efficient data transfer between mobile and cloud."
    ]
  },
  {
    name: "Event Management System (Enterprise Feature)",
    role: "Full Stack Developer",
    period: "2021 – 2022",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    highlights: [
      "Built an end-to-end event management module with event creation, registration, ticketing, and attendee management.",
      "Implemented real-time event streaming using Socket.io for live updates and notifications.",
      "Developed reusable UI component library with Storybook documentation, reducing frontend dev time by 25%.",
      "Integrated AWS S3 for event media storage with image optimization and CDN delivery."
    ]
  }
];

export const CONTACT = {
  email: "gopalkhichar@gkforge.dev",
  phone: "+91 8928680608",
  github: "github.com/gkforge-dev",
  linkedin: "linkedin.com/in/gopal-khichar",
  website: "gkforge.dev",
  location: "Pune, Maharashtra, India"
};

export const EDUCATION = [{
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "MIT World Peace University, Pune, India",
  year: "Sept 2020",
  cgpa: "7.4 CGPA"
},{
  degree: "HSC (Computer and Mathematics)",
  institution: "The Aditya Birla Public School, Awarpur, MH, India",
  year: "May 2017",
  cgpa: "65%"
}];

export const CERTIFICATIONS = [
  {
    name: "Programming for Everybody (Python)",
    issuer: "Coursera - University of Michigan",
    year: "2020"
  }
];

export const ASCII_BANNER = `

 ██████╗  ██████╗ ██████╗  █████╗ ██╗         ██╗  ██╗██╗  ██╗██╗ ██████╗██╗  ██╗ █████╗ ██████╗ 
██╔════╝ ██╔═══██╗██╔══██╗██╔══██╗██║         ██║ ██╔╝██║  ██║██║██╔════╝██║  ██║██╔══██╗██╔══██╗
██║  ███╗██║   ██║██████╔╝███████║██║         █████╔╝ ███████║██║██║     ███████║███████║██████╔╝
██║   ██║██║   ██║██╔═══╝ ██╔══██║██║         ██╔═██╗ ██╔══██║██║██║     ██╔══██║██╔══██║██╔══██╗
╚██████╔╝╚██████╔╝██║     ██║  ██║███████╗    ██║  ██╗██║  ██║██║╚██████╗██║  ██║██║  ██║██║  ██║
 ╚═════╝  ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝

`;

export const HELP_COMMANDS = [
  { command: "help", description: "Show available commands" },
  { command: "about", description: "Learn more about me" },
  { command: "skills", description: "View my technical skills" },
  { command: "experience", description: "View my work experience" },
  { command: "projects", description: "View my projects" },
  { command: "education", description: "View my education & certifications" },
  { command: "contact", description: "Get my contact information" },
  { command: "leetcode", description: "View my LeetCode activity" },
  { command: "resume", description: "Download my resume" },
  { command: "banner", description: "Show the ASCII banner" }
];
