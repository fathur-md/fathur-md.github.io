import { Subject } from '@/types';

export const subjects: Subject[] = [
  // --- SEMESTER 4 ---
  {
    id: 's4_web_prog',
    semester: 4,
    title: 'Web Programming',
    description:
      'Modern web architecture, user interface interaction, and full backend integration.',
    slug: 'web-programming',
  },
  {
    id: 's4_ai',
    semester: 4,
    title: 'Artificial Intelligence',
    description:
      'Exploration of AI algorithms, heuristic state space search, and introduction to machine learning.',
    slug: 'artificial-intelligence',
  },
  {
    id: 's4_algo_analysis',
    semester: 4,
    title: 'Algorithm Analysis',
    description:
      'Delving into Big O Notation, data structure efficiency, and memory optimization techniques.',
    slug: 'algorithm-analysis',
  },
  {
    id: 's4_os',
    semester: 4,
    title: 'Operating Systems',
    description:
      'Processor core management, CPU scheduling, virtual memory architecture, and OS file systems.',
    slug: 'operating-systems',
  },
  {
    id: 's4_network',
    semester: 4,
    title: 'Computer Networks',
    description:
      'Communication topologies, OSI layers, TCP/IP protocols, and fundamental server administration.',
    slug: 'computer-networks',
  },

  // --- SEMESTER 3 ---
  {
    id: 's3_data_structures',
    semester: 3,
    title: 'Data Structures',
    description:
      'Concepts and implementations of Linked Lists, Stacks, Queues, Trees, Graphs, and memory manipulation.',
    slug: 'data-structures',
  },
  {
    id: 's3_db_prog',
    semester: 3,
    title: 'Database Programming',
    description:
      'Entity relationships, advanced SQL queries, triggers, and data aggregation.',
    slug: 'database-programming',
  },
  {
    id: 's3_numerical',
    semester: 3,
    title: 'Numerical Computing',
    description:
      'Solving complex calculus and mathematical problems using iterative algorithms.',
    slug: 'numerical-computing',
  },
  {
    id: 's3_computer_arch',
    semester: 3,
    title: 'Computer Architecture',
    description:
      'Studying the mechanics of microcontrollers, RAM, ALU, and machine instruction execution (Assembly).',
    slug: 'computer-architecture',
  },

  // --- SEMESTER 2 ---
  {
    id: 's2_oop',
    semester: 2,
    title: 'Object-Oriented Programming',
    description:
      'OOP paradigms (Encapsulation, Inheritance, Polymorphism) implemented in Java.',
    slug: 'oop-java',
  },
  {
    id: 's2_discrete_math',
    semester: 2,
    title: 'Discrete Mathematics',
    description:
      'Fundamentals of mathematical logic, set theory, graphs, and combinatorial probability.',
    slug: 'discrete-mathematics',
  },
  {
    id: 's2_database',
    semester: 2,
    title: 'Database Systems',
    description:
      'Introduction to Entity-Relationship Diagram (ERD) design and database normalization.',
    slug: 'database-systems',
  },
];
