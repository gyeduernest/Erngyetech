import { Button } from '@/components/ui/button'
import Gyedu from '../assets/Gyedu.png'
import Whatsapp from '../assets/Socials/whatsapplight.svg'
import Facebook from '../assets/Socials/Facebook.svg'
import Github from '../assets/Socials/Github.svg'
import Instagram from '../assets/Socials/Instagram.svg'
import Linkedin from '../assets/Socials/Linkedin.svg'
import Telegram from '../assets/Socials/Telegram.svg'
import Gmail from '../assets/Socials/Gmail.svg'

export default function Quote() {
  return (
    <div className='lg:flex lg:justify-center py-10 px-5'>
            <img src={Gyedu} alt="" />
            <div className='bg-slate-800 lg:bottom-5  py-2 w-56 relative bottom-20 rounded-md px-2'>
              <div className='text-slate-50 text-xs lg:text-sm  text-center'>
                You can always locate me from any of these social Media Handles and i will readily be available to respond
              </div>
              <hr className='mt-5 mb-5 border-slate-500'/>
              <div className='flex gap-2  lg:hidden'>
              <img src={Whatsapp} className='w-5' alt="" />
              <img src={Github} className='w-5' alt="" />
              <img src={Facebook} className='w-5' alt="" />
              <img src={Telegram} className='w-5' alt="" />
              <img src={Instagram} className='w-5' alt="" />
              <img src={Linkedin} className='w-5' alt="" />
              <img src={Gmail} className='w-5' alt="" />

              </div>
              <div className='hidden md:hidden sm:hidden lg:block '>
                <Button className=" bg-green-800 text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Whatsapp} className='w-5' alt="" />
                  Whatsapp
                </Button>
                <Button className="  text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Github} className='w-5' alt="" />
                  Githubrepo
                </Button>
                <Button className=" bg-blue-700 text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Facebook} className='w-5' alt="" />
                  Facebook
                </Button>
                <Button className=" bg-pink-600 text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Telegram} className='w-5' alt="" />
                  Telegram
                </Button>
                
                <Button className=" bg-orange-400 text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Instagram} className='w-5' alt="" />
                  Instagram
                </Button>
                <Button className=" bg-blue-500 text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Linkedin} className='w-5' alt="" />
                  LinkedIn
                </Button>

              </div>

            </div>

    </div>
  )
}
