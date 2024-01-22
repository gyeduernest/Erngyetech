import Logo from '../assets/Primarylogo.svg'
import Whatsapp from '../assets/Socials/whatsapplight.svg'
import Facebook from '../assets/Socials/Facebook.svg'
import Github from '../assets/Socials/Github.svg'
import Instagram from '../assets/Socials/Instagram.svg'
import Linkedin from '../assets/Socials/Linkedin.svg'
import Telegram from '../assets/Socials/Telegram.svg'
import Gmail from '../assets/Socials/Gmail.svg'

export default function Footer() {
  return (
    <div className=''>
      <div className='py-5 px-5 justify-between lg:px-20 bg-slate-900 flex'>

      <div>
        <img src={Logo} alt="" />
      </div>
      <div className='flex justify-between gap-2 lg:gap-5'>
              <img src={Whatsapp} className='w-5' alt="" />
              <img src={Github} className='w-5' alt="" />
              <img src={Facebook} className='w-5' alt="" />
              <img src={Telegram} className='w-5' alt="" />
              <img src={Instagram} className='w-5' alt="" />
              <img src={Linkedin} className='w-5' alt="" />
              <img src={Gmail} className='w-5' alt="" />
      </div>
      </div>
      

      </div>
      
  )
}
