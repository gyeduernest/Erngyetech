import Baitab from '../assets/UI/Baitab.png'
import Gymbud from '../assets/UI/Gymbud.png'
import Datacompany from '../assets/UI/Datacompany.png'
import Miniproject from '../assets/UI/Miniproject.png'
import Shop from '../assets/Webdev/Shop.png'
import Ghaprofund from '../assets/Webdev/Ghaprofund.png'
import Digitalguy from '../assets/Webdev/Digitalguy.png'
import Map1 from '../assets/Maps/Map1.jpg'
import Tutorials1 from '../assets/Contentcreation/Tutorials1.jpg'
import Funky1 from '../assets/Contentcreation/Funky1.jpg'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from 'react-router-dom'

export default function Fewprojects() {
  return (
    <div>
      <div className="  py-10 h-96 bg-slate-50 lg:px-12 lg:mb-96 mb-[1000px]">
      <h3 className="text-4xl font-bold  mb-10 text-center  Preview">
        My Projects Preview
      </h3>
      
      <div className="px-16 z-0 lg:grid lg:grid-cols-3  justify-center lg:px-10">
        <div>
          <div className="text-2xl font-bold mb-5">
            UI/UX
          </div>
        <Carousel className="lg:w-80 w-64">
            <CarouselContent className="">
                <CarouselItem className=""><img src={Baitab} alt="" className="rounded-md lg:rounded-3xl" />
                 <div className="py-5  ">
                    <h3 className="text-2xl font-semibold justify-between flex">Baitab
                    <Link to="/signup">
                     <Button className="" variant={"link"} size={"sm"}>
                      View
                      </Button>
                    </Link>
                       </h3>
                    <div>
                    <Badge className="bg-yellow-400 text-slate-900 mb-2">Figma</Badge>
                    </div>
                    <p className="text-slate-700">
                      A UI/UX portfolio project in the fintech sector Click here to view
                    </p>
                  </div>
                  </CarouselItem>
                <CarouselItem>
                  <img src={Gymbud} alt="" className="rounded-md lg:rounded-3xl" />
                  <div className="py-5  ">
                    <h3 className="text-2xl font-semibold justify-between flex">Gymbud <Link to="/signup">
                     <Button className="" variant={"link"} size={"sm"}>
                      View
                      </Button>
                    </Link> </h3>
                    <div>
                    <Badge className="bg-yellow-400 text-slate-900 mb-2">Figma</Badge>
                    </div>
                    <p className="text-slate-700">
                      A UI/UX portfolio Project for people in the health and fitness sector
                    </p>
                  </div>
                  </CarouselItem>
                <CarouselItem><img src={Datacompany} alt="" className="rounded-md lg:rounded-3xl" />
                <div className="py-5  ">
                    <h3 className="text-2xl font-semibold justify-between flex">Data company website <Link to="/signup">
                     <Button className="" variant={"link"} size={"sm"}>
                      View
                      </Button>
                    </Link> </h3>
                    <div>
                    <Badge className="bg-yellow-400 text-slate-900 mb-2">Figma</Badge>
                    </div>
                    <p className="text-slate-700">
                      A UI/UX portfolio landingpage in the Data analytics field sector Click here to view
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem><img src={Miniproject} alt="" className="lg:rounded-3xl rounded-md" />
                <div className="py-5  ">
                    <h3 className="text-2xl font-semibold justify-between flex">Data company website <Link to="/signup">
                     <Button className="" variant={"link"} size={"sm"}>
                      View
                      </Button>
                    </Link> </h3>
                    <div>
                    <Badge className="bg-yellow-400 text-slate-900 mb-2">Figma</Badge>
                    </div>
                    <p className="text-slate-700">
                      A UI/UX portfolio landingpage in the Data analytics field sector Click here to view
                    </p>
                  </div>
                </CarouselItem>
            </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
        </Carousel>
        </div>
        <div>
        <div className="text-2xl font-bold mb-5">
            Web development
          </div>
        <Carousel className="lg:w-80 w-64 py-5">
            <CarouselContent className="">
                <CarouselItem className=""><img src={Shop} alt="" className="rounded-md lg:rounded-3xl" />
                 <div className="py-5  ">
                    <h3 className="text-xl font-semibold justify-between flex">Shopify Dashboard<Link to="/signup">
                     <Button className="" variant={"link"} size={"sm"}>
                      View
                      </Button>
                    </Link> </h3>
                    <div className="flex gap-2">
                    <Badge className="bg-yellow-400 text-slate-900 mb-2">HTML</Badge>
                    <Badge className="bg-orange-400 text-slate-900 mb-2">Css</Badge>
                    <Badge className="bg-red-700 text-white  mb-2">Javascript</Badge>
                    </div>
                    <p className="text-slate-700">
                      I joined a hackathon to develop the shopify dashboard page to increase accessibility
                    </p>
                  </div>
                  </CarouselItem>
                <CarouselItem>
                  <img src={Ghaprofund} alt="" className="rounded-md lg:rounded-3xl" />
                  <div className="py-5  ">
                    <h3 className="text-2xl font-semibold justify-between flex">GhaProfund <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
                    <div>
                    <Badge className="bg-blue-600 text-slate-50 mb-2">React</Badge>
                    </div>
                    <p className="text-slate-700">
                      A simple landing page for an App
                    </p>
                  </div>
                  </CarouselItem>
                <CarouselItem><img src={Digitalguy} alt="" className="rounded-md lg:rounded-3xl" />
                <div className="py-5  ">
                    <h3 className="text-xl font-semibold justify-between flex">First site <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
                    <div className="gap-3">
                    <Badge className="bg-blue-700 text-white mb-2">HTML</Badge>
                    <Badge className="bg-yellow-400 text-slate-900 mb-2">Tailwind Css</Badge>
                    </div>
                    <p className="text-slate-700">
                      An expense Tracker application made with React                    </p>
                  </div>
                </CarouselItem>
            </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
        </Carousel>
        </div>
        <div>
        <div className="text-2xl font-bold mb-5">
            Others
          </div>
        <Carousel className="lg:w-80 w-64">
            <CarouselContent className="">
                <CarouselItem className=""><img src={Tutorials1} alt="" className="rounded-md lg:rounded-3xl" />
                 <div className="py-5  ">
                    <h3 className="text-xl font-semibold justify-between flex">Tutorials video <Link to="/signup">
                     <Button className="" variant={"link"} size={"sm"}>
                      View
                      </Button>
                    </Link> </h3>
                    <div className="gap-2 flex">
                    <Badge className="bg-indigo-700 text-slate-50 mb-2">Premiere Pro</Badge>
                    <Badge className="bg-red-600 text-slate-50 mb-2">Youtube</Badge>
                    
                    </div>
                    <p className="text-slate-700">
                      I also doing tutorials for youtube and interested audiences 
                    </p>
                  </div>
                  </CarouselItem>
                <CarouselItem>
                  <img src={Funky1} alt="" className="rounded-md lg:rounded-3xl" />
                  <div className="py-5  ">
                    <h3 className="text-2xl font-semibold justify-between flex">Street content <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
                    <div className="gap-3">
                    <Badge className="bg-indigo-700 text-slate-50 mb-2">Premiere Pro</Badge>
                    <Badge className="bg-red-600 text-slate-50 mb-2">Youtube</Badge>
                    
                    </div>
                    <p className="text-slate-700">
                      I also work with people for collab works on street content
                    </p>
                  </div>
                  </CarouselItem>
                <CarouselItem><img src={Map1} alt="" className="rounded-md h-56 w-96 lg:rounded-3xl" />
                <div className="py-5  ">
                    <h3 className="text-2xl font-semibold justify-between flex">Drawing of maps<Link to="/signup">
                     <Button className="" variant={"link"} size={"sm"}>
                      View
                      </Button>
                    </Link> </h3>
                    <div>
                    <Badge className="bg-green-700 text-slate-50 mb-2">Arc Map</Badge>
                    </div>
                    <p className="text-slate-700">
                      I was consulted on the drawing of maps for a project
                    </p>
                  </div>
                </CarouselItem>
                
            </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
        </Carousel>
        </div>
      </div>
    </div>
 </div>
  )
}
