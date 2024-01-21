import '../App.css'
import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"
import  Laptop  from '../assets/Laptop.png'
import Call from '../assets/Call.svg'
import Projects from '../assets/Projects.svg'

export default function Skills() {
  return (
    <div className="bg-slate-50 lg:py-10  font-inter px-5 py-10 ">
      <div className='skills lg:text-6xl  text-3xl lg:px-40  font-extrabold mb-10'>
        My Skills and Services
      </div>

      <div className='lg:flex lg:mb-20 justify-center gap-20 items-center'>
        <div>
          <div className=''>
            <div className='text-2xl font-extrabold mb-5'>
              Web development
            </div>
            <div className='flex gap-2 mb-5'>
            <Badge className='bg-yellow-400' variant="outline">HTML</Badge>
            <Badge className='bg-purple-400' variant="outline">CSS</Badge>
            <Badge variant="outline"className='bg-blue-400'>React</Badge>
            <Badge variant="outline" className='bg-indigo-400'>Wordpress</Badge>

            </div>
          </div>
          <p className='lg:w-96 mb-5'>
            I am well knowledgeable when it comes to web development. I can build a static website for your business enriched with SEO to boost your business digital exposure. When it comes to blog websites also trust me and my team to deliver 
          </p>
          <div className=' lg:p- gap-2 flex'>
          <Button className='gap-2 flex items-center w-full'>
           <img src={Call} alt="" /> Hire Me Now 
          </Button>
          <Button className='gap-2 flex items-center w-full'>
            <img src={Projects} alt="" />View Projects
          </Button>
          </div>
        

        </div>
        <div>
            <img src={Laptop} alt=""  className='w-96'/>
        </div>
      </div>
      <div className='lg:flex justify-center gap-20 items-center lg:p-'>
      <div>
            <img src={Laptop} alt=""  className='w-96'/>
        </div>
        <div>
          <div className=''>
            <div className='text-2xl font-extrabold mb-5'>
              Web development
            </div>
            <div className='flex gap-2 mb-5'>
            <Badge className='bg-yellow-400' variant="outline">HTML</Badge>
            <Badge className='bg-purple-400' variant="outline">CSS</Badge>
            <Badge variant="outline"className='bg-blue-400'>React</Badge>
            <Badge variant="outline" className='bg-indigo-400'>Wordpress</Badge>

            </div>
          </div>
          <p className='lg:w-96 mb-5'>
            I am well knowledgeable when it comes to web development. I can build a static website for your business enriched with SEO to boost your business digital exposure. When it comes to blog websites also trust me and my team to deliver 
          </p>
          <div className=' lg:p- gap-2 flex'>
          <Button className='gap-2 flex items-center w-full'>
           <img src={Call} alt="" /> Hire Me Now 
          </Button>
          <Button className='gap-2 flex items-center w-full'>
            <img src={Projects} alt="" />View Projects
          </Button>
          </div>
        

        </div>
        
      </div>

    </div>
  )
}
