import {motion as m} from 'framer-motion'
import '../App.css'
import Face from '../assets/Face.jpg'
import { Button } from '@/components/ui/button'
import Whatsapp from '../assets/Socials/whatsapplight.svg'
import Message from '../assets/Message.svg'
import Congratulations from './Confetti'

export default function Introduction() {
  return (
    <m.div className='bg-[#161513]  mb-32'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} >
      <Congratulations/>

      <div className="text-white py-32 lg:py- font-inter">
      <div className='flex justify-center '>
      <img src={Face} alt="" className='w-56 rounded-full' />

      </div>
        <div className="text-center  text-4xl px-5 font-extrabold lg:text-5xl  lg:py-20 py-5">
        <p className="md:px-40 lg:px-80">
        <span className='congratulations lg:text-7xl text-4xl'>Congratulations</span>
        <br />
        <span className='px-5 font-medium text-2xl lg:text-4xl'> You have full access to all Personal Projects</span>
        </p>
        </div>
        <div className='flex justify-center lg:gap-4 gap-2 lg:py-1 py-5
        '>
        <Button className='bg-blue-600 lg:py-6 lg:px-10 gap-2'> <img src={Message} alt="" /> Get Started</Button>
        <Button className='bg-green-700 items-center gap-2 flex lg:py-6 lg:px-10'><img src={Whatsapp} alt="" className='w-5'/>Whatsapp Me</Button>
        </div>
      </div>
    </m.div>
  )
}
