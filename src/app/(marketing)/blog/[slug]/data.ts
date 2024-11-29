// data.ts
export interface Content {
    title?: string;
    description: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    image: string;
    description?: string;
    contents: Content[];
    category?: string;
    date?: string;
    author?: string;
    readTime?: string;
}

const mockBlogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'mastering-react-for-modern-web-development',
        title: "Mastering React for Modern Web Development",
        readTime: "5 min read",
        date: "November 25, 2024",
        author: "Jane Developer",
        image: "/blog.png",
        category: "Development",
        description: "Explore the essential features of React and how it revolutionizes modern web development. Learn the best practices and tips for building robust web applications.",
        contents: [
            {
                title: "Introduction to React",
                description: "1. Why React? An overview of React’s popularity and its key features. 2. JSX: The syntax extension for JavaScript that allows you to write HTML in React. 3. Components: The building blocks of any React application."
            },
            {
                title: "Advanced React Techniques",
                description: "1. State Management: Using useState and useReducer hooks. 2. React Router: Managing navigation and routing in your applications. 3. Performance Optimization: Techniques to improve the performance of React apps."
            },
            {
                title: "Conclusion",
                description: "React continues to be a powerful tool for web developers. By mastering its features and best practices, you can create dynamic and high-performing web applications."
            }
        ]
    },
    {
        id: '2',
        slug: "effective-seo-strategies-for-2024",
        title: "Effective SEO Strategies for 2024",
        readTime: "15 min read",
        date: "November 25, 2024",
        author: "SEO Guru",
        image: "/blog.png",
        category: "Marketing",
        description: "Stay ahead of the curve with the latest SEO strategies. Learn how to optimize your website for search engines and improve your rankings.",
        contents: [
            {
                title: "On-Page SEO Techniques",
                description: "1. Keyword Research: How to find and use the right keywords. 2. Meta Tags: Optimizing title tags and meta descriptions. 3. Content Quality: Creating valuable content that engages users."
            },
            {
                title: "Off-Page SEO Strategies",
                description: "1. Backlinks: Building a strong backlink profile. 2. Social Media: Leveraging social media for SEO benefits. 3. Guest Blogging: Writing guest posts to increase your site's authority."
            },
            {
                title: "Technical SEO",
                description: "1. Site Speed: Improving page load times. 2. Mobile-Friendliness: Ensuring your site is mobile-friendly. 3. Sitemap and Robots.txt: Managing your site's indexing."
            },
            {
                title: "Conclusion",
                description: "Effective SEO is a combination of various strategies. By staying updated with the latest trends and continuously optimizing your site, you can achieve higher rankings and more traffic."
            }
        ]
    },
    {
        id: '3',
        slug: "introduction-to-nodejs-for-backend-development",
        title: "Introduction to Node.js for Backend Development",
        readTime: "8 min read",
        date: "November 25, 2024",
        author: "Backend Expert",
        image: "/blog.png",
        category: "Development",
        description: "Learn the basics of Node.js and how it can be used for backend development. Discover its advantages and how to get started with building server-side applications.",
        contents: [
            {
                title: "Getting Started with Node.js",
                description: "1. What is Node.js? An introduction to the platform. 2. Setting Up: How to install Node.js and get started. 3. Your First App: Creating a simple server."
            },
            {
                title: "Core Features of Node.js",
                description: "1. Event-Driven Architecture: Understanding Node.js’s non-blocking I/O model. 2. Modules: How to use and create modules. 3. File System: Working with the file system in Node.js."
            },
            {
                title: "Advanced Topics",
                description: "1. Express.js: Building web applications with Express. 2. Asynchronous Programming: Using Promises and async/await. 3. Databases: Connecting to databases with Node.js."
            },
            {
                title: "Conclusion",
                description: "Node.js is a powerful tool for backend development. By mastering its core features and understanding its asynchronous nature, you can build efficient and scalable server-side applications."
            }
        ]
    },
    {
        id: '4',
        slug: "latest-trends-in-web-design-for-2024",
        title: "Latest Trends in Web Design for 2024",
        readTime: "9 min read",
        date: "November 25, 2024",
        author: "Design Enthusiast",
        image: "/blog.png",
        category: "Design",
        description: "Stay updated with the latest trends in web design. Learn about the new design techniques and tools that can help you create stunning and user-friendly websites.",
        contents: [
            {
                title: "Minimalistic Design",
                description: "The rise of minimalism in web design, focusing on simplicity and usability."
            },
            {
                title: "Dark Mode",
                description: "The growing popularity of dark mode and its benefits for user experience."
            },
            {
                title: "Micro-Interactions",
                description: "Using subtle animations and interactions to enhance user engagement."
            },
            {
                title: "Responsive Design",
                description: "Ensuring your website looks great on all devices with responsive design techniques."
            },
            {
                title: "Conclusion",
                description: "Web design trends continue to evolve. By incorporating the latest trends, you can create modern and engaging websites that stand out."
            }
        ]
    },
    {
        id: '5',
        slug: "digital-marketing-101",
        title: "Digital Marketing 101: An Introduction",
        readTime: "10 min read",
        date: "November 25, 2024",
        author: "Marketing Maven",
        image: "/blog.png",
        category: "Marketing",
        description: "An introductory guide to digital marketing. Learn the basics of SEO, social media marketing, email marketing, and more to boost your online presence.",
        contents: [
            {
                title: "What is Digital Marketing?",
                description: "An overview of digital marketing and its importance in the modern business landscape."
            },
            {
                title: "SEO Basics",
                description: "Understanding the fundamentals of search engine optimization and how to implement them."
            },
            {
                title: "Social Media Marketing",
                description: "Leveraging social media platforms to engage with your audience and promote your brand."
            },
            {
                title: "Email Marketing",
                description: "Building an effective email marketing strategy to nurture leads and drive conversions."
            },
            {
                title: "Content Marketing",
                description: "Creating valuable content to attract and retain a clearly defined audience."
            },
            {
                title: "Conclusion",
                description: "Digital marketing is a crucial component of any successful business strategy. By mastering its various aspects, you can effectively promote your brand and achieve your business goals."
            }
        ]
    },
    {
        id: '6',
        slug: "building-and-scaling-web-applications-with-vuejs",
        title: "Building and Scaling Web Applications with Vue.js",
        readTime: "8 min read",
        date: "November 25, 2024",
        author: "Vue Veteran",
        image: "/blog.png",
        category: "Development",
        description: "Discover the power of Vue.js for building scalable web applications. Learn about its core features, ecosystem, and best practices for developing robust applications.",
        contents: [
            {
                title: "Introduction to Vue.js",
                description: "An overview of Vue.js and its unique features."
            },
            {
                title: "Core Concepts",
                description: "Understanding components, directives, and the Vue instance."
            },
            {
                title: "State Management",
                description: "Managing application state with Vuex."
            },
            {
                title: "Routing",
                description: "Using Vue Router for navigation in your applications."
            },
            {
                title: "Best Practices",
                description: "Tips and tricks for building maintainable and scalable Vue.js applications."
            },
            {
                title: "Conclusion",
                description: "Vue.js is a versatile framework that simplifies web development. By mastering its core concepts and best practices, you can build powerful web applications."
            }
        ]
    }
];


export default mockBlogPosts;