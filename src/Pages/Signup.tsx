import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createUserWithEmailAndPassword, Auth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import logo from '../assets/Primarylogo.svg';
import project from '../assets/Projects.svg'





interface SignupProps {
  auth: Auth;
}

const Signup: React.FC<SignupProps> = ({ auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const createAccount = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // const user = userCredential.user;

      navigate('/login');
    } catch (error) {
      console.error('Authentication Error:', error);
    }
      
    
  };
  
  return (
   <div   className="py-5 lg:py-12 flex justify-center bg-slate-900 text-white">
     <div className=" justify-center lg:px-[500px] py-10 px-6 lg:py-20">
      <div className="">
              <img src={logo} alt=""  className="w-56"/>
              </div>
              <form action="" 
                  className='w-72 lg:w-96 lg:py-8 py-5 lg:px-7 px-5 border-2 border-slate-400 rounded-md '>
                  <div className="font-bold text-2xl mb-5">
                    Signup
                    <p className="text-xs font-normal ">
                      Sign up with your email and password.
                    </p>
                  </div>
              <div className="sm:col-span-4">
              <label htmlFor="email"  className="block text-sm font-medium leading-6 text-slate-50">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="youremail@gmail.com."
                  className="mb-5 px-3 block w-full rounded-md border-2 border-slate-400 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-xs"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }
                }
                  
                />
              </div>
            </div>
              <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-50">
                    Password 
             </label>
              <div className="mt-2">
                <input
                  id="Password"
                  name="Password"
                  type="Password"
                  autoComplete="off"
                  placeholder="insert password given"
                  className="block w-full text-xs rounded-md px-3 border-2 border-slate-400 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }
                  } />
              </div>
            </div>

            <div className="flex justify-center  ">
              <Button 
              onClick={createAccount}
              className="bg-blue-700 w-full mt-8 hover:bg-blue-400 focus:ring-4 gap-3 focus:bg-blue-800">
               <img src={project} alt="" className="" /> Go to Projects
              </Button>
            </div>
              </form>

    </div>
   </div>
  )
}

export default Signup;