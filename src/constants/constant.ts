
import { UserObject } from "@/models/User"
import { NavItems } from "@/models/Header"

export const userInfo: UserObject = {
    name: 'Priyanshu Prakhar',
    picture: '/self.jpg',
    heading: 'I&#39;m a Software Engineer from India with hands-on experience in full-stack development. I’ ve built web applications, e-commerce platforms, and event websites using technologies like React.js, Node.js, Django, and MongoDB. Through internships and projects, I’ve contributed to real-world software solutions, optimized backend systems, and collaborated in cross-functional teams to enhance user experiences and system performance.',
    about: `
        <p>I am a passionate Software Engineer with a strong background in Web Development, I have graduated from IIT Dhanabad.</p>
        <p>My journey in tech began during my time at IIT (ISM) Dhanbad, where I  developed a strong foundation in programming. Since then, I’ve worked on impactful projects—from building full-stack applications with React.js and Node.js </p>
        <p> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
        `,
    skills: [  'Data Structure & Algo.' ,'React', 'Competitive-Programining', 'C/C++', 'AWS', 'MongoDB', 'MySQL', 'HTML', 'CSS'],   
}
export const headerItems: NavItems = {
    home: { label: 'Home', page: 'home' },
    about: { label: 'About', page: 'about' },
    projects: { label: 'Projects', page: 'projects' }  
}

export const projects = {
    quickbrief: { image: 'https://i.ibb.co/mCqQBn5b/QU.jpg' },
    srijan:     {image:'https://i.ibb.co/cKVQzKPv/Screenshot-2025-05-21-125447.png'},
    shopsizzle: { image: 'https://i.ibb.co/RkmCxK99/Untitled-design.png'}
}
