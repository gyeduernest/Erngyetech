import Face from '../assets/Face.jpg'
import { Button } from "@/components/ui/button"
import Primarylogo from '../assets/Primarylogo.svg'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import Whatsapplight from '../assets/Socials/whatsapplight.svg'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MenuButton from '../assets/MenuButton.svg'



export default function Nav() {
  return (
    <div className="bg-[#161513] text-white fixed w-full md:px-10 lg:px-32  px-5 z-50">
          <header>
            <nav className=" flex items-center justify-between">
            <div className='lg:hidden md:block sm:block block'>
                    <Sheet>
                      <SheetTrigger className='text-white'>
                        <Button className='bg-white'>
                          <img src={MenuButton} alt="" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Are you absolutely sure?</SheetTitle>
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>
                    </div>
          <div className=" justify-center  hidden md:hidden lg:block" >
                    <img src={Primarylogo} alt="" className='w-20 h-20' />
                </div>
                <div className="hidden sm:hidden md:hidden lg:block">
                  <ul className="flex">
                  <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem className=" font-semibold px-5 rounded-md py-2">
                              Home
                            </NavigationMenuItem>
                          </NavigationMenuList>
                  </NavigationMenu>
                  
                  <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger className="bg-[#161513]">Skills</NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-md gap-4 shadow-xl border border-slate-300 px-10 py-5 tracking-tight flex">
                                  <div className="  rounded-md w-40">
                                    <div>
                                      <img src={Face} alt="" className='rounded-md' />
                                    </div>
                                    <div>
                                      <h3 className='font-inter font-semibold text-xl'> Hello There !!</h3>
                                      <p className='text-xs py-2 text-slate-600 '> Get to know the skills i got up my sleeve as i make the best of what i have and do you will not be disappointed if you hire me</p>
                                    </div>
                                    <Button>
                                      Hire me
                                    </Button>
                                  </div>
                                  <div>

                              <div className="mb-1 w-56 px-5 py-2 h-20 hover:bg-slate-50 hover:rounded-md">
                                  <NavigationMenuLink className="w-full" >
                                  <h3 className="text-sm font-semibold text-left  font-inter">Webdevelopment</h3>
                                    <p className="text-xs text-slate-400   font-inter"> Get to know what i can do when it comes to webdev</p>
                                  </NavigationMenuLink>
                              </div>
                              <div className="mb-1 w-56 px-5 py-2 h-20 hover:bg-slate-50 hover:rounded-md">
                                  <NavigationMenuLink className="w-full" >
                                  <h3 className="text-sm font-semibold text-left  font-inter">UI/UX </h3>
                                    <p className="text-xs text-slate-400   font-inter"> I love all things design and i have a couple of projects you ay like</p>
                                  </NavigationMenuLink>
                              </div>
                              <div className="mb-1 w-56 px-5 py-2 h-20 hover:bg-slate-50 hover:rounded-md">
                                  <NavigationMenuLink className="w-full" >
                                  <h3 className="text-sm font-semibold text-left  font-inter">Kobotoolbox</h3>
                                    <p className="text-xs text-slate-400   font-inter"> I know how to code questionnaires for your socio-economic research projects</p>
                                  </NavigationMenuLink>
                              </div>

                              <div className="flex-end justify-end flex  mt-3">
                              <Button>
                                More
                              </Button>
                              </div>
                              
                                  </div>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                  </NavigationMenu>
                  
                  <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger className="bg-[#161513]">Projects</NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-md gap-4 shadow-xl border border-slate-300 px-10 py-5 tracking-tight flex">
                                  <div className="  rounded-md w-40">
                                    <div>
                                      <img src={Face} alt="" className='rounded-md' />
                                    </div>
                                    <div>
                                      <h3 className='font-inter font-semibold text-xl'> Hello There !!</h3>
                                      <p className='text-xs py-2 text-slate-600 '> Get to know the skills i got up my sleeve as i make the best of what i have and do you will not be disappointed if you hire me</p>
                                    </div>
                                    <Button>
                                      Hire me
                                    </Button>
                                  </div>
                                  <div>

                              <div className="mb-1 w-56 px-5 py-2 h-20 hover:bg-slate-50 hover:rounded-md">
                                  <NavigationMenuLink className="w-full" >
                                  <h3 className="text-sm font-semibold text-left  font-inter">Webdevelopment</h3>
                                    <p className="text-xs text-slate-400   font-inter"> Get to know what i can do when it comes to webdev</p>
                                  </NavigationMenuLink>
                              </div>
                              <div className="mb-1 w-56 px-5 py-2 h-20 hover:bg-slate-50 hover:rounded-md">
                                  <NavigationMenuLink className="w-full" >
                                  <h3 className="text-sm font-semibold text-left  font-inter">UI/UX </h3>
                                    <p className="text-xs text-slate-400   font-inter"> I love all things design and i have a couple of projects you ay like</p>
                                  </NavigationMenuLink>
                              </div>
                              <div className="mb-1 w-56 px-5 py-2 h-20 hover:bg-slate-50 hover:rounded-md">
                                  <NavigationMenuLink className="w-full" >
                                  <h3 className="text-sm font-semibold text-left  font-inter">Kobotoolbox</h3>
                                    <p className="text-xs text-slate-400   font-inter"> I know how to code questionnaires for your socio-economic research projects</p>
                                  </NavigationMenuLink>
                              </div>

                              <div className="flex-end justify-end flex  mt-3">
                              <Button>
                                More
                              </Button>
                              </div>
                              
                                  </div>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                  </NavigationMenu>
                  <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger className="bg-[#161513]">Git Repositories</NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-md gap-4 shadow-xl border border-slate-300 px-10 py-5 tracking-tight flex">
                                  <div className="  rounded-md w-40">
                                    <div>
                                      <img src={Face} alt="" className='rounded-md' />
                                    </div>
                                    <div>
                                      <h3 className='font-inter font-semibold text-xl'> Hello There !!</h3>
                                      <p className='text-xs py-2 text-slate-600 '> Get to know the skills i got up my sleeve as i make the best of what i have and do you will not be disappointed if you hire me</p>
                                    </div>
                                    <Button>
                                      Hire me
                                    </Button>
                                  </div>
                                  <div>

                              <div className="mb-1 w-56 px-5 py-2 h-20 hover:bg-slate-50 hover:rounded-md">
                                  <NavigationMenuLink className="w-full" >
                                  <h3 className="text-sm font-semibold text-left  font-inter">Dept Operations</h3>
                                    <p className="text-xs text-slate-400   font-inter"> Get to know what i can do when it comes to webdev</p>
                                  </NavigationMenuLink>
                              </div>
                              <div className="mb-1 w-56 px-5 py-2 h-20 hover:bg-slate-50 hover:rounded-md">
                                  <NavigationMenuLink className="w-full" >
                                  <h3 className="text-sm font-semibold text-left  font-inter">Revenue Mobilizer </h3>
                                    <p className="text-xs text-slate-400   font-inter"> I love all things design and i have a couple of projects you ay like</p>
                                  </NavigationMenuLink>
                              </div>
                              <div className="mb-1 w-56 px-5 py-2 h-20 hover:bg-slate-50 hover:rounded-md">
                                  <NavigationMenuLink className="w-full" >
                                  <h3 className="text-sm font-semibold text-left  font-inter">Consulting</h3>
                                    <p className="text-xs text-slate-400   font-inter"> I know how to code questionnaires for your socio-economic research projects</p>
                                  </NavigationMenuLink>
                              </div>

                              <div className="flex-end justify-end flex  mt-3">
                              <Button>
                                Download Resume
                              </Button>
                              </div>
                              
                                  </div>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                  </NavigationMenu>
                  
                  <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem className=" font-semibold px-5 rounded-md py-2">
                              Contact
                            </NavigationMenuItem>
                          </NavigationMenuList>
                  </NavigationMenu>
                  <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem className=" font-semibold px-5 rounded-md py-2">
                              About
                            </NavigationMenuItem>
                          </NavigationMenuList>
                  </NavigationMenu>
                  <div className=''>
                  <a href="https://wa.me/message/2RR7E4MJMWUUO1" target="_blank">
                      <Button className="bg-green-700">
                        <img src={Whatsapplight} alt="" className="w-4 h-4 mr-2" />
                        Let us Chat
                      </Button>
                  </a>
                  
                </div>   
                  

                  </ul>
                  
                </div>
                <div className='md:block lg:hidden block sm:block py-10'>
                  <a href="https://wa.me/message/2RR7E4MJMWUUO1" target="_blank">
                      <Button className="bg-green-700">
                        <img src={Whatsapplight} alt="" className="w-4 h-4 mr-2" />
                        Let us Chat
                      </Button>
                  </a>
               </div>             
               
                
                           
                
            </nav>
          </header>

    </div>
  )
}
