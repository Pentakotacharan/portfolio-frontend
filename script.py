
# Create a comprehensive portfolio structure based on Brittany Chiang's design and the resume data

resume_data = {
    "name": "Loka Surya Prakash Pentakota",
    "contact": {
        "phone": "+91-6301750186",
        "email": "plsprakash2003@gmail.com",
        "linkedin": "LinkedIn Profile URL",
        "github": "GitHub Profile URL"
    },
    "summary": "Computer Science student with 8.9 CGPA and product management experience leading cross-functional teams. Proven expertise in AI-MERN stack integration and full-stack development. Delivered production-ready applications with 350+ LeetCode solutions and multiple hackathon wins.",
    "experience": [
        {
            "title": "Full Stack Developer",
            "company": "Vertx",
            "location": "Remote",
            "duration": "January 2025 – September 2025",
            "responsibilities": [
                "Led cross-functional team of 5 developers (2 AI specialists, 3 MERN stack developers) for product development",
                "Integrated AI capabilities with MERN stack architecture for enhanced user experience",
                "Developed key features including Pitch Analysis and Mock Pitching AI models"
            ],
            "technologies": ["React", "Node.js", "Express.js", "MongoDB", "AI Integration"]
        },
        {
            "title": "Software Development Intern",
            "company": "Distacart",
            "location": "Hyderabad, India",
            "duration": "January 2025 – March 2025",
            "responsibilities": [
                "Customized Shopify Liquid themes and improved site performance",
                "Implemented SEO optimizations for better search visibility"
            ],
            "technologies": ["Shopify Liquid", "JavaScript", "CSS"]
        },
        {
            "title": "Software Development Intern",
            "company": "ServzPe",
            "location": "Remote",
            "duration": "April 2024 – September 2024",
            "responsibilities": [
                "Built marketplace platform using React.js, Node.js, Express.js, and MongoDB",
                "Implemented user authentication and subscription gateway",
                "Designed RESTful APIs for frontend-backend communication"
            ],
            "technologies": ["React.js", "Node.js", "Express.js", "MongoDB"]
        }
    ],
    "projects": [
        {
            "name": "Vertx Start - Investor Matching Platform",
            "description": "Developed full-stack platform connecting founders with investors through intelligent co-founder matching algorithms. Implemented startup financial tools including equity cap table calculations, valuation models, and convertible notes management. Designed comprehensive profile creation and exploration features for startup discovery and networking.",
            "technologies": ["React", "Node.js", "MongoDB", "Real-time Chat"],
            "github": "GitHub Link",
            "live": "Live Site"
        },
        {
            "name": "GeoInsight - Public Service Platform",
            "description": "Built platform addressing public service challenges with Google Maps API integration. Implemented real-time problem reporting and admin dashboard for issue tracking.",
            "technologies": ["React Native", "Express.js", "Node.js", "MongoDB", "Google Maps API"],
            "github": "GitHub Link"
        },
        {
            "name": "Architecture Website",
            "description": "Developed responsive interior design company website with modern UI/UX. Implemented interactive galleries and contact forms with mobile-first approach.",
            "technologies": ["ReactJS", "CSS", "JavaScript"],
            "github": "GitHub Link",
            "live": "Live Site"
        }
    ],
    "skills": {
        "languages": ["C/C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS"],
        "frameworks": ["React.js", "Next.js", "Node.js", "Express.js", "React Native", "TailwindCSS"],
        "databases": ["MongoDB", "MySQL", "Redis"],
        "cloud": ["AWS"],
        "tools": ["Git", "GitHub", "Shopify Liquid", "RESTful APIs", "AI Integration"]
    },
    "education": {
        "degree": "Bachelor of Technology in Computer Science and Engineering",
        "university": "Vignan's Institute Of Information Technology",
        "location": "Visakhapatnam, India",
        "duration": "2021 – 2025",
        "cgpa": "8.9/10.0"
    },
    "achievements": [
        {
            "title": "Top 10 Finalist - Sus-Hack 2023",
            "organization": "GDSC",
            "date": "February 2024"
        },
        {
            "title": "Best Use Of MongoDB Award",
            "organization": "MLH Frostfest Hackathon",
            "date": "February 2024"
        },
        {
            "title": "LeetCode Problem Solving",
            "description": "350+ Problems Solved, Rating: 1633",
            "date": "April 2024"
        },
        {
            "title": "CodeChef 3-Star Rating",
            "description": "Rating: 1672",
            "date": "April 2024"
        }
    ],
    "certifications": [
        {
            "title": "CCNA: Introduction to Networks",
            "organization": "Cisco Systems",
            "date": "May 2024"
        },
        {
            "title": "CCNA: Switching, Routing, and Wireless Essentials",
            "organization": "Cisco Systems",
            "date": "May 2024"
        },
        {
            "title": "JavaScript Essentials 1",
            "organization": "Cisco Systems",
            "date": "July 2023"
        }
    ]
}

print("Resume data structured successfully!")
print(f"Name: {resume_data['name']}")
print(f"Email: {resume_data['contact']['email']}")
print(f"Total Projects: {len(resume_data['projects'])}")
print(f"Total Experience: {len(resume_data['experience'])}")
