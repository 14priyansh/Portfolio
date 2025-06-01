
import Intro from '@/Components/intro';
import About from '@/Components/About';
import Projects from '@/Components/Projects'

const  Main: React.FC= ()=>{
    return (
        <div className="lg:mx-32 md:mx-4">
        <Intro/>
        <About/>
        <Projects/>
        </div>
        
    )
}

 export  default Main