import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Figlogo from '../assets/Socials/Figlogo.svg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Baitab from '../assets/UI/Baitab.png'
import Gymbud from '../assets/UI/Gymbud.png'
import Createuser from '../assets/UI/Createuser.png'
import Datacompany from '../assets/UI/Datacompany.png'
import Miniproject from '../assets/UI/Miniproject.png'
import PortfoliowWebsite from '../assets/UI/PortfolioWebsite.png'
import Digimarket from '../assets/UI/Digimarket.png'
import Projectmanagement from '../assets/UI/Projectmanagement.png'
import Socials from "./Socials"
export default function Figma() {




  return (
    <>
    <div className="">

    <h3 className="lg:text-7xl text-3xl font-bold flex justify-center py-10 font-inter">
        All UI/UX Projects
      </h3>
    <div className="flex justify-center py-10">
      
      <Carousel orientation="horizontal" className=" w-64 lg:w-[900px] md:w-96 ">
        <CarouselContent>
              <CarouselItem>
                <img src={Baitab} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                  <h2 className="lg:text-3xl text-xl font-bold">
                    Baitab        
                  </h2>
                  <div className="gap-2 flex  py-3 ">
                    <Badge className="bg-yellow-400 text-slate-900">
                        Figma
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                      Baitab is an app mock up which seeks to link investors and potential entrepreneurs together.
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 80%
                    </p>
                  <Progress value={80} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="https://www.figma.com/file/tTMCsusArFBlnha1dPQXBn/Baitab-ultimate-project?type=design&node-id=101%3A1264&mode=design&t=s3yQjX9LvNxk78ol-1" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <img src={Figlogo} alt="" className="w-5 rounded-full" />
                        View Project
                      </Button>
                      </a>
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-pink-600 lg:px-8 text-slate-50">
                        
                        Hire me
                      </Button>
                      </a>
                    </div>
                    <div>
                  <Socials/>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img src={Gymbud} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                 <h2 className="lg:text-3xl text-xl font-bold">
                  Gymbud  
                 </h2>
                  <div className="gap-2 flex  py-3 ">
                    <Badge className="bg-yellow-400 text-slate-900">
                        Figma
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                      The name of this app is called Gymbud. A health and fitness app which seeks to connect health professionals and health and gym enthusiasts sort of like a social media app for such people.
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 95%
                    </p>
                  <Progress value={95} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="https://www.figma.com/file/7BqgZ69Gs8ZVp9Egs9yRhy/Gymbud?type=design&node-id=2%3A3&mode=design&t=7j0Ed1qA6aDR7yM8-1" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <img src={Figlogo} alt="" className="w-5 rounded-full" />
                        View Project
                      </Button>
                      </a>
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-pink-600 lg:px-8 text-slate-50">
                        
                        Hire me
                      </Button>
                      </a>
                    </div>
                    <div>
                  <Socials/>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img src={Projectmanagement} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                 <h2 className="lg:text-3xl text-xl font-bold">
                  Project management Company  
                 </h2>
                  <div className="gap-2 flex  py-3 ">
                    <Badge className="bg-yellow-400 text-slate-900">
                        Figma
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                     A company involved with Project management can use this for their digital exposure
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 95%
                    </p>
                  <Progress value={95} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="https://www.figma.com/file/giMsTYPHUR8iQ0Jy8p61Ma/project-management-landing-page?type=design&node-id=3%3A4660&mode=design&t=zLkEtEqTmo4HBDq1-1" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <img src={Figlogo} alt="" className="w-5 rounded-full" />
                        View Project
                      </Button>
                      </a>
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-pink-600 lg:px-8 text-slate-50">
                        
                        Hire me
                      </Button>
                      </a>
                    </div>
                    <div>
                  <Socials/>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img src={PortfoliowWebsite} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                 <h2 className="lg:text-3xl text-xl font-bold">
                  A Personal Portfolio Website  
                 </h2>
                  <div className="gap-2 flex  py-3 ">
                    <Badge className="bg-yellow-400 text-slate-900">
                        Figma
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                      This is my Personal Portfolio website of which a user get to display what they have done in terms of projects
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 98%
                    </p>
                  <Progress value={98} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <img src={Figlogo} alt="" className="w-5 rounded-full" />
                        View Project
                      </Button>
                      </a>
                      <a href="https://www.figma.com/file/b95hoQDHdf54Pa8Rrb7JbR/New-Portfolio-website?type=design&node-id=61%3A1188&mode=design&t=OOoc4HYl9lhCpp1X-1" target="_blank">
                      <Button className="gap-2 bg-pink-600 lg:px-8 text-slate-50">
                        
                        Hire me
                      </Button>
                      </a>
                    </div>
                    <div>
                  <Socials/>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img src={Createuser} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                 <h2 className="lg:text-3xl text-xl font-bold">
                  Authentication simulator  
                 </h2>
                  <div className="gap-2 flex  py-3 ">
                    <Badge className="bg-yellow-400 text-slate-900">
                        Figma
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                      Authentication simulation to log into an app or create a user as well as reset password
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 95%
                    </p>
                  <Progress value={95} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="https://www.figma.com/file/j7JwHLWcnPTRlzmUUpfOB8/Authentication?type=design&node-id=11%3A20&mode=design&t=DaYYQQQPlIJqAhOS-1" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <img src={Figlogo} alt="" className="w-5 rounded-full" />
                        View Project
                      </Button>
                      </a>
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-pink-600 lg:px-8 text-slate-50">
                        
                        Hire me
                      </Button>
                      </a>
                    </div>
                    <div>
                  <Socials/>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img src={Digimarket} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                 <h2 className="lg:text-3xl text-xl font-bold">
                  Digimarket  
                 </h2>
                  <div className="gap-2 flex  py-3 ">
                    <Badge className="bg-yellow-400 text-slate-900">
                        Figma
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                     Landing page for a digimarkerter or an agency in the marketing sector
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 98%
                    </p>
                  <Progress value={98} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="https://www.figma.com/file/3iUMAdizkYTWYMOfSfGE5Z/Digital-service-comp?type=design&node-id=1%3A3031&mode=design&t=dj0XkH41niDL89mD-1" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <img src={Figlogo} alt="" className="w-5 rounded-full" />
                        View Project
                      </Button>
                      </a>
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-pink-600 lg:px-8 text-slate-50">
                        
                        Hire me
                      </Button>
                      </a>
                    </div>
                    <div>
                  <Socials/>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img src={Datacompany} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                 <h2 className="lg:text-3xl text-xl font-bold">
                  Data Analytics  
                 </h2>
                  <div className="gap-2 flex  py-3 ">
                    <Badge className="bg-yellow-400 text-slate-900">
                        Figma
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                      A landing page for a company interested in Data Analytics
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 98%
                    </p>
                  <Progress value={98} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="https://www.figma.com/file/VOs9jUuvmlae2jCJbafWgo/Data-company?type=design&node-id=0%3A1&mode=design&t=JIvhNYOFKjF2MTEK-1" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <img src={Figlogo} alt="" className="w-5 rounded-full" />
                        View Project
                      </Button>
                      </a>
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-pink-600 lg:px-8 text-slate-50">
                        
                        Hire me
                      </Button>
                      </a>
                    </div>
                    <div>
                  <Socials/>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img src={Miniproject} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                 <h2 className="lg:text-3xl text-xl font-bold">
                  Your digital guy  
                 </h2>
                  <div className="gap-2 flex  py-3 ">
                    <Badge className="bg-yellow-400 text-slate-900">
                        Figma
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                      This is a simple landing page i did when i was starting to learn UI/UX
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 100%
                    </p>
                  <Progress value={100} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="https://www.figma.com/file/fuVZGL6iQaGrHLziUavB87/digital-guy?type=design&node-id=0%3A1&mode=design&t=SJOmjfpzjWLDRcnk-1" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <img src={Figlogo} alt="" className="w-5 rounded-full" />
                        View Project
                      </Button>
                      </a>
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-pink-600 lg:px-8 text-slate-50">
                        Hire me
                      </Button>
                      </a>
                    </div>
                    <div>
                  <Socials/>
                  </div>
                </div>
              </CarouselItem>
        </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
      </Carousel>




    </div>
    </div>
    </>
  )
}
