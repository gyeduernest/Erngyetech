import { Button } from '@/components/ui/button'
import '../App.css'
import Call from '../assets/Call.svg'
import Projects from '../assets/Projects.svg'
import { Link } from 'react-router-dom'


export default function Calltoaction1() {
  return (
    <div className="bg-[#161513] py-20 flex justify-center px-5">
       <div className="bg-orange-600 lg:w-[600px] satisfied py-10 flex justify-center rounded-b-3xl text-center">
       <div>
       <h4 className="text-4xl font-extrabold text-white mb-3">
        Are you satisfied so far?
       </h4>
       <p className='text-white lg:px-32 px-5'>
        If you are content with any of my services you can contact me let us talk
       </p>
       <div className='py-5 flex justify-center'>
       <div className=' lg:p- gap-2 flex'>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSefXhqap-Nis8XMkowANlZYx80n_UUi8HVwHwTp2n9GVwQK7w/viewform?usp=sf_link" target='_blank'>
          <Button className='gap-2 flex items-center w-full'>
           <img src={Call} alt="" /> Hire Me Now 
          </Button>
            </a>
            <a href="">
              <Link to="/signup">

          <Button className='gap-2 flex items-center w-full'>
            <img src={Projects} alt="" />View Projects
          </Button>
              </Link>
            </a>
          </div>
       </div>

       </div>
       </div>
    </div>
  )
}
