import { Button } from '@/components/ui/button'
import '../App.css'
import Call from '../assets/Call.svg'
import Projects from '../assets/Projects.svg'
import { Link } from 'react-router-dom'

export default function Calltoaction2() {
  return (
    <div className="bg-[#161513] py-20 flex justify-center px-5">
       <div className="bg-orange-600  lg:w-[600px] entertained py-10 flex justify-center rounded-b-3xl text-center">
       <div>
       <h4 className="text-4xl font-extrabold text-white mb-3">
        Are'nt You Entertained!!!!
       </h4>
       <p className='text-white lg:px-16 px-5'>
        If you are content with any of my services you can contact me let us talk or better still create an account with me to view my personal Projects
       </p>
       <div className='py-5 gap-3 flex justify-center'>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSefXhqap-Nis8XMkowANlZYx80n_UUi8HVwHwTp2n9GVwQK7w/viewform?usp=sf_link" target='_blank'>
       <Button className='px-5 gap-3'>
        <img src={Call} alt="" />
        Let us talk
       </Button>
        </a>
        <Link to="/signup">

       <Button className='px-5 gap-3'>
        <img src={Projects} alt="" />
        View All Projects
       </Button>
        </Link>
       </div>

       </div>
       </div>
    </div>
  )
}
