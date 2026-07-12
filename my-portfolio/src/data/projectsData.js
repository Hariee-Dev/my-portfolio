// src/data/projectsData.js

const projectsData = [
  {
    title: "Explore",
    subtitle: "Data Migration Platform",
    role: "Full Stack Developer",
    company: "Solartis Technology Services",
    period: "July 2025 - Present",
    technologies: ["Java", "Spring Boot", "Apache Kafka", "MySQL", "React", "Tailwind CSS"],
    bullets: [
      "Architected a high-performance data migration platform using Spring Boot and Apache Kafka for event-driven, asynchronous data streaming, processing over 1 million records and cutting manual migration effort by 60%.",
      "Implemented Spring JDBC with MySQL for optimized bulk data persistence and transaction management; enforced Role-Based Access Control (RBAC) with a full audit trail using Spring Security.",
      "Delivered a responsive React.js and Tailwind CSS frontend enabling real-time migration monitoring, reducing operator errors by 35%."
    ],
    metrics: [
      { value: "1M+", label: "Records Streamed" },
      { value: "60%", label: "Manual Effort Saved" },
      { value: "35%", label: "Error Reduction" }
    ],
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Reports",
    subtitle: "Business Intelligence & Reporting Platform",
    role: "Full Stack Developer",
    company: "Solartis Technology Services",
    period: "Feb 2026 - Present",
    technologies: ["Spring Boot", "Spring Security", "JWT", "JasperReports", "ClickHouse", "React", "Tailwind CSS"],
    bullets: [
      "Built a business intelligence reporting system using JasperReports for automated PDF and tabular report generation, eliminating 100% of manual reporting effort for 3 departments.",
      "Integrated ClickHouse (OLAP columnar database) for analytical queries on large datasets, reducing average report generation time by 40%.",
      "Secured the platform with JWT-based authentication via Spring Security and built interactive dashboards using React.js and Spring Boot RESTful APIs for real-time business insights."
    ],
    metrics: [
      { value: "100%", label: "Reporting Automated" },
      { value: "40%", label: "Speed Improvement" },
      { value: "3", label: "Departments Served" }
    ],
    gradient: "from-cyan-500 to-emerald-600"
  }
];

export default projectsData;
