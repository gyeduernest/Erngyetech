import Logo from '../assets/Primarylogo.svg'
import Socials from './Socials'

export default function Footer() {
  return (
    <div className=''>
      <div className='py-5 px-5 items-center justify-between lg:px-20 bg-slate-900 flex'>

      <div>
        <img src={Logo} alt="" />
      </div>
      <Socials/>
      </div>
      

      </div>
      
  )
}
