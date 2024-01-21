import { Button } from '@/components/ui/button'
import '../App.css'
import Call from '../assets/Call.svg'

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
       <Button className='px-5 gap-3'>
        <img src={Call} alt="" />
        Let us talk
       </Button>
       </div>

       </div>
       </div>
    </div>
  )
}
