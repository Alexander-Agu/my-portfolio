import { FaBox } from "react-icons/fa6";


export const projectCards = [
    {
        name: "Inventory Management System",
        icon: <FaBox className='project-card-icon' />,
        des: "A full-stack app for managing inventory, items, and valuations with real-time updates and comprehensive reporting features.",
        features: [
            "Built a full-stack inventory system using ASP.NET (backend) and React (frontend).",
            "Implemented inventory valuation with weighted average cost and closing stock calculations.",
            "Containerized the backend using Docker for consistent deployment.",
            "Enabled real-time inventory tracking and secure CRUD operations."
        ],
        stack: [
            "React",
            "ASP.NET",
            "PostgreSQL",
            "Docker"
        ],
        demoLink: "https://invi-tory.vercel.app/",
        repLink: "https://github.com/Alexander-Agu/Invi-Tory.git"
    }
]