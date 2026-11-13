export type Link = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  status: string;
  description: string;
  stack: string;
  links: Link[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  groups: { title: string; items: string[] }[];
};

export const intro =
  "Full-stack developer at Yapı Kredi, working on bulk payments. Outside work I build my own projects. The current one is a multi-currency wallet.";

export const projects: Project[] = [
  {
    name: "Wallet & Ledger",
    status: "In progress · demo 2027",
    description:
      "A multi-currency wallet on a double-entry ledger. Every transfer is a balanced journal entry, and corrections are new entries, never edits.",
    stack: "Java 21 · Spring Boot · PostgreSQL · React · TypeScript",
    links: [
      {
        label: "Source",
        href: "https://github.com/Sametkorkmazz/wallet-ledger",
      },
      {
        label: "Design decisions",
        href: "https://github.com/Sametkorkmazz/wallet-ledger/tree/main/docs/adr",
      },
    ],
  },
];

export const jobs: Job[] = [
  {
    company: "Yapı Kredi",
    role: "Intern → Software Developer",
    period: "2024 – now",
    groups: [
      {
        title: "Bulk payments",
        items: [
          "Helped move bulk payments (corporate customers upload Excel/TXT files with thousands of payments) from the monolith into a Spring Boot microservice.",
          "Built the REST APIs behind the approval flow: approve, reject and cancel for whole batches and single transactions, plus listing both.",
          "Built an internal admin screen in React for the service's configuration parameters.",
        ],
      },
      {
        title: "Platform",
        items: [
          "Upgraded services from Spring Boot 2.7 to 3.x, including javax → jakarta.",
          "Switched services from calling the monolith to calling the new microservices.",
          "Fixed bugs in scheduled payments and request-to-pay.",
        ],
      },
      {
        title: "Internship, R&D",
        items: [
          "Built the React frontend for a survey feature in an internal sprint-tracking app used across teams, took over its backend when the original team members left, and added live answers over WebSocket.",
          "Built team search end to end: database tables and APIs for team data, and a React search component that takes users to each team's dashboard.",
          "Built a seat-reservation screen with a scaling seat map.",
        ],
      },
    ],
  },
];

export const contact = {
  email: "samet@sametkorkmaz.dev",
  github: "https://github.com/Sametkorkmazz",
  linkedin: "https://www.linkedin.com/in/samet-korkmaz-dev",
} as const;
