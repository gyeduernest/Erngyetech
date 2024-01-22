import { SyntheticEvent, useState } from "react";
import { signInWithEmailAndPassword, Auth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../assets/Primarylogo.svg";
import project from '../assets/Projects.svg'


interface LoginProps {
  auth: Auth;
}

const Login: React.FC<LoginProps> = ({ auth }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState<string | null>(null);

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Allprojects');
    } catch (error) {
      if ((error as any).code === 'auth/wrong-password') {
        setErrorState('Incorrect password. Please try again.');
      } else {
        console.error('Authentication Error:', error);
        setErrorState('Log in failed. Please check your credentials and try again.');
      }
    }
  };
    return (<div>
      
      <div className=" flex bg-slate-900 text-slate-50 justify-center py-10 mx-auto w-full">
        <div className="lg:py-20 lg:px-[500px] py-10 px-6 ">
                <div className="">
                <img src={logo} alt=""  className="w-40"/>
                </div>
                <form action="" className='w-72 lg:w-96 lg:py-8 py-5 lg:px-7 px-5 border-2 border-slate-400 rounded-md '>
                  <div className="font-bold text-2xl mb-5">
                      Login
                    </div>               
                      <p className="w-56 text-xs mb-5 text-slate-100">
                          
                    One Last thing you can input your credentials to gain access to my projects  
                      </p>              
                
                {errorState && (
                <div className="text-red-600 text-end rounded-md px-3  py-2 text-xs font-semibold bg-red-100">
                  {errorState}
                </div>
              )}
                
  
  
              
                <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-50">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="youremail@gmail.com..."
                    className="border-2 border-slate-400 text-xs mb-5 px-3 block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    className="border-2 border-slate-400 block text-xs w-full rounded-md px-3  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }
                    }
                  />
                </div>
              </div>
  
              <div className="flex justify-center  ">
                <Button onClick={handleLogin} className="bg-blue-700 w-full mt-8 hover:bg-blue-400 focus:ring-4 gap-3 focus:bg-blue-800">
                   <img src={project} alt="" className="" /> Go to Projects
                </Button>
              </div>
              
  
                </form>
  
      </div>
      </div>
    </div>
    )
  };
  export default Login;