import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Map1 from '../assets/Maps/Map1.jpg'
import Funky1 from '../assets/Contentcreation/Funky1.jpg'
import Tutorials from '../assets/Contentcreation/Tutorials1.jpg'
import Socials from "./Socials"

export default function Others() {
  return (
    <div>

      <h3 className="lg:text-7xl text-3xl font-bold flex justify-center py-10">
       Other Personal Projects
      </h3>
      <div className="flex justify-center py-10">

      <Carousel orientation="horizontal" className=" w-64 lg:w-[900px] md:w-96 ">
        <CarouselContent>
              <CarouselItem>
                <img src={Map1} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                 <h2 className="lg:text-3xl text-xl font-bold">
                  Your digital guy  
                 </h2>
                  <div className="gap-2 flex  py-3 ">
                    <Badge className="bg-green-700 text-slate-50">
                       Arc Map
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                      In 2019 i was consulted on the drawing of Maps for Kwame Nkrumah University of science and Technology to be embeded for a brochure meant for the freshers
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 100%
                    </p>
                  <Progress value={100} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="https://drive.google.com/drive/folders/1ZSOXC0QXWY5DG9FlDpZNO3P2YsTBz9fD?usp=sharing" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <Badge className="bg-red-700 text-slate-50">
                          Live
                        </Badge>
                        Project
                      </Button>
                      </a>
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-violet-600 lg:px-8 text-slate-50">
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
                <img src={Funky1} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                 <h2 className="lg:text-3xl text-xl font-bold">
                  Street content 
                 </h2>
                  <div className="gap-2 flex  py-3 ">
                    <Badge className="bg-indigo-700 text-slate-50">
                       Premiere  Pro
                    </Badge>
                    <Badge className="bg-red-700 text-slate-50">
                       Youtube
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                      When i get time to be on the streets i shoot content with people that interested i use premiere pro to edit and upload on youtube
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 100%
                    </p>
                  <Progress value={100} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="https://www.youtube.com/channel/UCIBEiFxRhhkNCCw6J8-azYA" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <Badge className="bg-red-700 text-slate-50">
                          Youtube
                        </Badge>
                        View
                      </Button>
                      </a>
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-violet-600 lg:px-8 text-slate-50">
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
                <img src={Tutorials} alt="" className="border-2 rounded-md border-slate-300" />
                <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                 <h2 className="lg:text-3xl text-xl font-bold">
                  Tutorial Content  
                 </h2>
                  <div className="gap-2 flex  py-3 ">
                  <Badge className="bg-indigo-700 text-slate-50">
                       Premiere  Pro
                    </Badge>
                    <Badge className="bg-red-700 text-slate-50">
                       Youtube
                    </Badge>
                    
                  </div>
                  <p className="text-xs lg:text-sm lg:w-1/2">
                     I also do Tutorials on my spare time i take the videos with a canon 6D and post on youtube
                  </p>
                  <div className="py-2">
                    <p className="mb-2 mt-3">
                      Progress 100%
                    </p>
                  <Progress value={100} className="bg-slate-50 " />
                  </div>
                    <div className="flex gap-5 py-5">
                      <a href="https://www.youtube.com/channel/UCn4JrUrMSDuKg9JBiHHo4yg" target="_blank">
                      <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                        <Badge className="bg-red-600">
                          Live
                        </Badge>
                        Project
                      </Button>
                      </a>
                      <a href="" target="_blank">
                      <Button className="gap-2 bg-violet-600 lg:px-8 text-slate-50">
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
  )
}
