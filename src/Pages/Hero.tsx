import {motion as m} from 'framer-motion'
import '../App.css'
import Face from '../assets/Face.jpg'
import { Button } from '@/components/ui/button'
import Docs from '../assets/Docs.svg'
import Message from '../assets/Message.svg'
export default function Hero() {
  return (
    <m.div className='bg-[#161513] lg:py-32  '
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} >

      <div className="text-white py-40 lg:py-8 font-inter">
      <div className='flex justify-center '>
      <img src={Face} alt="" className='w-56 rounded-full' />

      </div>
        <div className="text-center  text-4xl px-5 font-extrabold lg:text-5xl  lg:py-20 py-5">
        <p className="md:px-40 lg:px-80">
        <span className='gradient-text'> Hello I am Ernest</span>
        <br />
        <span> Welcome to my Portfolio site you will love it</span>
        </p>
        <p className='text-sm font-normal text-slate-50 mt-2'>
          I am your favorite tech guy, i can be an asset in solving problems in your business
        </p>
        </div>
        <div className='flex justify-center lg:gap-4 gap-2 lg:py-1 py-5
        '>
          <a href="https://wa.me/message/2RR7E4MJMWUUO1" target='_blank'>
        <Button className='bg-blue-600 lg:py-6 lg:px-10 gap-2'> <img src={Message} alt="" /> Get in touch now</Button>
          </a>
          <a href="https://drive.google.com/file/d/1iqGq86eN1B31ZqXTNtFFs3g83ZJdE7PB/view?usp=sharing" target="_blank">
        <Button className='bg-pink-600 lg:py-6 lg:px-10'><img src={Docs} alt="" /> Download Resume</Button>
        </a>
        </div>
      </div>
    </m.div>
  )
}
