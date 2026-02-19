import { portfolio_vibes } from "../assets/images";
import {
    contact,
    git,
    github,
    linkedin,
    mongodb,
    c,
    Python,
    java,
    MySQL,
    PyLib,
    PowerBI,
    Doctor_Portal,
    Brain_Tumor_DL,
    AI_Healthcare
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Language",
    },
    {
        imageUrl: Python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: MySQL,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: PowerBI,
        name: "PowerBI",
        type: "Analytical tool",
    },
    {
        imageUrl: PyLib,
        name: "Python Libraries",
        type: "Libraries",
    },
];

export const experiences = [
    {
        title: "Data Analyst Intern",
        company_name: "Portfolio Vibes",
        icon: portfolio_vibes,
        iconBg: "#403D3D",
        date: "Aug 2025 - Oct 2025",
        points: [
            "Analyzed a Sales Performance Dashboard using Power BI, utilizing Walmart sales data to visualize sales trends, seasonal variations, and the impact of external factors.",
            "Additionally, developed a Stock Market Analysis project using Python in Google Colab, integrating the Gemini API for AI-generated insights.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/graveFTS',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dipsekhar-maity',
    }
];

export const projects = [
    {
        iconUrl: Brain_Tumor_DL,
        theme: 'btn-back-red',
        name: 'Brain Tumor Detection Using Deep Learning',
        description: 'Developed a deep learning-based system to detect brain tumors from MRI images using Convolutional Neural Networks (CNN). The model was trained on preprocessed medical image datasets and evaluated using accuracy, precision, and recall metrics. This project demonstrates my understanding of computer vision, neural networks, and real-world healthcare AI applications.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: AI_Healthcare,
        theme: 'btn-back-green',
        name: 'PrognosAI - AI-Powered Predictive Healthcare System',
        description: 'Designed and implemented a predictive healthcare model using neural networks (FFNN, RNN) for early risk detection. Integrated real time sensor data with Raspberry Pi. Automated vital sign system monitoring to assist clinical decision-making, especially in low-resource settings.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: Doctor_Portal,
        theme: 'btn-back-blue',
        name: 'Doctor Appointment Portal',
        description: 'Developed a secure healthcare portal with a centralized database to manage patient records, streamline doctor-patient communication, enable appointment booking, and collect patient feedback. Implemented role-based access and real-time data handling using RESTful APIs.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
];