import Github from '../assets/Socials/Github.svg'
import Whatsapp from '../assets/Socials/whatsapplight.svg'
import Facebook from '../assets/Socials/Facebook.svg'
import Instagram from '../assets/Socials/Instagram.svg'
import Linkedin from '../assets/Socials/Linkedin.svg'
import Telegram from '../assets/Socials/Telegram.svg'
import Gmail from '../assets/Socials/Gmail.svg'


export default function Socials() {
  return (
    <div>
      <div className="flex lg:gap-5 gap-2 px-5">
                  <a href="https://github.com/gyeduernest"  target='_blank'>
                      <div className="w-5 h-5 rounded-full bg-slate-900 ">
                      <img src={Github} className='w-5' alt="" />
                      </div>                    
                  </a>
                   <a href="https://www.instagram.com/hypercitigram/" target='_blank'>
                      <div className="w-5 h-5 rounded-full bg-slate-900">
                      <img src={Instagram} className='w-5' alt="" />
                      </div>
                   </a>
                      <a href="https://web.facebook.com/ernestnana.yawgyedu.5" target='_blank'>
                      <div className="w-5 h-5 rounded-full bg-slate-900">
                      <img src={Facebook} className='w-5' alt="" />
                      </div>


                      </a>
                      <a href="https://wa.me/message/2RR7E4MJMWUUO1" target='_blank'>
                      <div className="w-5 h-5 rounded-full bg-slate-900">
                      <img src={Whatsapp} className='w-5' alt="" />
                      </div>
                      </a>
                      <a href="https://www.linkedin.com/in/ernest-gyedu-b71948164/" target='_blank'>
                      <div className="w-5 h-5 rounded-full bg-slate-900">
                      <img src={Linkedin} className='w-5' alt="" />
                      </div>
                      </a>
                      <a href="https://t.me/gyeduernest" target='_blank'>
                      <div className="w-5 h-5 rounded-full bg-slate-900">
                      <img src={Telegram} className='w-5' alt="" />
                      </div>

                      </a>
                      <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
                      <div className="w-5 h-5 rounded-full bg-slate-900">
                      <img src={Gmail} className='w-5' alt="" />
                      </div>


                      </a>
                  </div>
    </div>
  )
}
