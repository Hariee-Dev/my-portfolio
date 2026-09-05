// src/data/projectsData.js

const projectsData = [
  {
    title: "Explore",
    subtitle: "Data Migration Platform",
    role: "Full Stack Developer",
    period: "Jul 2025 – Present",
    metrics: [
      { value: "1M+", label: "Records Streamed" },
      { value: "60%", label: "Manual Effort Cut" },
      { value: "35%", label: "Error Reduction" }
    ],
    bullets: [
      "Architected a high-performance data migration platform using Spring Boot and Apache Kafka for event-driven, asynchronous streaming, processing 1M+ records and cutting manual migration effort by 60%.",
      "Implemented Spring JDBC with MySQL for optimized bulk data persistence and transaction management; enforced Role-Based Access Control (RBAC) with a full audit trail via Spring Security.",
      "Delivered a responsive React.js and Tailwind CSS frontend for real-time migration monitoring, reducing operator errors by 35%."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "MySQL",
      "React.js",
      "Tailwind CSS",
      "Spring JDBC",
      "Spring Security"
    ]
  },
  {
    title: "Reports",
    subtitle: "Business Intelligence and Reporting Platform",
    role: "Full Stack Developer",
    period: "Feb 2026 – Present",
    metrics: [
      { value: "100%", label: "Reporting Automated" },
      { value: "40%", label: "Query Time Cut" },
      { value: "3", label: "Departments Served" }
    ],
    bullets: [
      "Built a business intelligence reporting system using JasperReports for automated PDF and tabular report generation, eliminating 100% of manual reporting effort across 3 departments.",
      "Integrated ClickHouse (OLAP columnar database) for analytical queries on large datasets, cutting average report generation time by 40%.",
      "Secured the platform with JWT-based authentication via Spring Security and built interactive dashboards using React.js and Spring Boot RESTful APIs for real-time business insights."
    ],
    technologies: [
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JasperReports",
      "ClickHouse",
      "React.js"
    ]
  }
];

export default projectsData;
