import { Button } from '@/components/ui/button'
import Gyedu from '../assets/Gyedu.png'
import Whatsapp from '../assets/Socials/whatsapplight.svg'
import Facebook from '../assets/Socials/Facebook.svg'
import Github from '../assets/Socials/Github.svg'
import Instagram from '../assets/Socials/Instagram.svg'
import Linkedin from '../assets/Socials/Linkedin.svg'
import Telegram from '../assets/Socials/Telegram.svg'
import Socials from './Socials'

export default function Quote() {
  return (
    <div className='lg:flex lg:justify-center py-10 px-5'>
            <img src={Gyedu} alt="" />
            <div className='bg-slate-800 lg:bottom-5  py-2 w-56 relative bottom-20 rounded-md px-2'>
              <div className='text-slate-50 text-xs lg:text-sm  text-center'>
                You can always locate me from any of these social Media Handles and i will readily be available to respond
              </div>
              <hr className='mt-5 mb-5 border-slate-500'/>
              <div className='flex  lg:hidden'>
              <Socials/>

              </div>
              <div className='hidden md:hidden sm:hidden lg:block '>
                <a href="https://wa.me/message/0548612354" target='_blank'>
                <Button className=" bg-green-800 text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Whatsapp} className='w-5' alt="" />
                  Whatsapp
                </Button>
                </a>
                
                <a href="https://github.com/gyeduernest" target='_blank'>
                <Button className="  text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Github} className='w-5' alt="" />
                  Githubrepo
                </Button>
                </a>
               
                <a href="https://web.facebook.com/ernestnana.yawgyedu.5"  target='_blank'>

                <Button className=" bg-blue-700 text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Facebook} className='w-5' alt="" />
                  Facebook
                </Button>
                </a>
                <a href="https://t.me/gyeduernest"  target='_blank'>


                <Button className=" bg-pink-600 text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Telegram} className='w-5' alt="" />
                  Telegram
                </Button>
                </a>
                <a href="https://www.instagram.com/hypercitigram/" target='_blank'>

                <Button className=" bg-orange-400 text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Instagram} className='w-5' alt="" />
                  Instagram
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/ernest-gyedu-b71948164/" target='_blank'>

                <Button className=" bg-blue-500 text-slate-50  flex gap-2 px-16 items-center mb-3">
                  <img src={Linkedin} className='w-5' alt="" />
                  LinkedIn
                </Button>
                </a>

              </div>

            </div>

    </div>
  )
}
