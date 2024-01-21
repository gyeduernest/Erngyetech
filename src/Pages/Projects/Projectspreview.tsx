import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Baitab from '/src/assets/UI/Baitab.png'
import Gymbud from '/src/assets/UI/Gymbud.png'
import Datacompany from '/src/assets/UI/Datacompany.png'
import Miniproject from '/src/assets/UI/Miniproject.png'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


export default function Projectspreview() {
  return (
    <div className="  py-10 h-96 bg-slate-50 lg:px-12">
      <h3 className="text-4xl font-bold  mb-10 text-center ">
        My Projects Preview
      </h3>
      <div className=" px-16 z-0 lg:grid lg:grid-cols-3  justify-center lg:px-10">
        <div>
        <Carousel className="lg:w-96 w-64">
            <CarouselContent className="">
                <CarouselItem className=""><img src={Baitab} alt="" className="rounded-md lg:rounded-3xl" />
                 <div className="py-5  ">
                    <h3 className="text-2xl font-semibold justify-between flex">Baitab <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
                    <h3 className="text-2xl font-semibold justify-between flex">Gymbud <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
                    <h3 className="text-2xl font-semibold justify-between flex">Data company website <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
                    <h3 className="text-2xl font-semibold justify-between flex">Data company website <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
        <Carousel className="lg:w-96 w-64">
            <CarouselContent className="">
                <CarouselItem className=""><img src={Baitab} alt="" className="rounded-md lg:rounded-3xl" />
                 <div className="py-5  ">
                    <h3 className="text-2xl font-semibold justify-between flex">Baitab <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
                    <h3 className="text-2xl font-semibold justify-between flex">Gymbud <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
                    <h3 className="text-2xl font-semibold justify-between flex">Data company website <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
                    <h3 className="text-2xl font-semibold justify-between flex">Data company website <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
        <Carousel className="lg:w-96 w-64">
            <CarouselContent className="">
                <CarouselItem className=""><img src={Baitab} alt="" className="rounded-md lg:rounded-3xl" />
                 <div className="py-5  ">
                    <h3 className="text-2xl font-semibold justify-between flex">Baitab <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
                    <h3 className="text-2xl font-semibold justify-between flex">Gymbud <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
                    <h3 className="text-2xl font-semibold justify-between flex">Data company website <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
                    <h3 className="text-2xl font-semibold justify-between flex">Data company website <Button className="" variant={"link"} size={"sm"}>View</Button> </h3>
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
      </div>


    </div>
  )
}
