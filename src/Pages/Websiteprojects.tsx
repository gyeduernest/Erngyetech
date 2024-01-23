import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Ghaprofund from '../assets/Webdev/Ghaprofund.png'
import Shop from '../assets/Webdev/Shop.png'
import Digitalguy from '../assets/Webdev/Digitalguy.png'
import Fintrack from '../assets/Webdev/Fintrack.png'
import Portfolio from '../assets/Webdev/Newwebsite.png'
import webdev2 from '../assets/Webdev/Webdev2.png'
import webdev1 from '../assets/Webdev/Webdev1.png'
import Digimarket from '../assets/Webdev/Digimarket.png'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Github from '../assets/Socials/Github.svg'
import Whatsapp from '../assets/Socials/whatsapplight.svg'
import Facebook from '../assets/Socials/Facebook.svg'
import Instagram from '../assets/Socials/Instagram.svg'
import Linkedin from '../assets/Socials/Linkedin.svg'
import Telegram from '../assets/Socials/Telegram.svg'
import Gmail from '../assets/Socials/Gmail.svg'

export default function Websiteprojects() {
  return (
<>

    <h3 className="lg:text-7xl text-3xl font-bold flex justify-center py-10">
        All Web dev Projects
      </h3>
    <div className="flex justify-center py-10">
      <Carousel orientation="horizontal" className=" w-64 lg:w-[900px] md:w-96 ">
          <CarouselContent>
            <CarouselItem>
              <img src={Portfolio} alt="" className="border-2 rounded-md border-slate-300" />
              <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                <h2 className="lg:text-3xl text-xl font-bold">
                  Portfolio website
                </h2>
                <div className="gap-2 flex  py-3 ">
                  <Badge className="bg-blue-700">
                      React
                  </Badge>
                  <Badge className="bg-slate-50 text-slate-900">
                      shadcn UI
                  </Badge>
                  <Badge className="bg-red-500 text-slate-50">
                      firebase
                  </Badge>
                </div>
                <p className="text-xs lg:text-sm lg:w-1/2">
This is my Personal Portfolio website of which i get to display what i have done since my academic years up until now. I have developed a mindset to grow my skills everyday and i think i have the ability to learn and grow fast into any project.You will have to create an account  to be able to view this projects.
                </p>
                <div className="py-2">
                  <p className="mb-2 mt-3">
                    Progress 95%
                  </p>
                <Progress value={95} className="bg-slate-50 " />
                </div>
                  <div className="flex gap-5 py-5">
                    <a href="https://github.com/gyeduernest/Erngyetech" target="_blank">
                    <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                      <img src={Github} alt="" className="w-5 bg-slate-900 rounded-full" />
                      Github
                    </Button>
                    </a>
                    <a href="https://statuesque-muffin-4f3d77.netlify.app/" target="_blank">
                    <Button className="gap-2 bg-blue-600 lg:px-8 text-slate-50">
                      <Badge className="bg-red-600">Live</Badge>
                      View
                    </Button>
                    </a>
                  </div>
                  <div className="flex lg:gap-5 gap-2 px-5">
                  <div className="w-5 h-5 rounded-full bg-slate-900 ">
          <img src={Github} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Instagram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Facebook} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Whatsapp} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Linkedin} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Telegram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Gmail} className='w-5' alt="" />
          </div>
                  </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img src={Ghaprofund} alt="" className="border-2 rounded-md border-slate-300" />
              <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                <h2 className="lg:text-3xl text-xl font-bold">
                  Ghaprofund
                </h2>
                <div className="gap-2 flex  py-3 ">
                  <Badge className="bg-blue-700">
                      React
                  </Badge>
                  <Badge className="bg-violet-800 text-slate-50">
                      Tailwind
                  </Badge>
                </div>
                <p className="text-xs lg:text-sm lg:w-1/2">
Ghaprofund is a Project i intend on implementing in the future for this project my aim is to list all Government projects that have been uncompleted with the aim of garning support in the form of crowd funding to donate towards the completion of such projects. it is still in the build stage as i try to implement a whole bunch of stack to get it up and running
                </p>
                <div className="py-2">
                  <p className="mb-2 mt-3">
                    Progress 65%
                  </p>
                <Progress value={65} className="bg-slate-50 " />
                </div>
                  <div className="flex gap-5 py-5">
                    <a href="https://github.com/gyeduernest/App_project_2" target="_blank">

                    <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                      <img src={Github} alt="" className="w-5 bg-slate-900 rounded-full" />
                      Github
                    </Button>
                    </a>
                    <a href="https://vocal-kashata-9c1075.netlify.app/" target="_blank">
                     <Button className="gap-2 bg-blue-600 lg:px-8 text-slate-50">
                      <Badge className="bg-red-600">Live</Badge>
                      View
                    </Button>
                    </a>
                  </div>
                  <div className="flex lg:gap-5 gap-2 px-5">
                  <div className="w-5 h-5 rounded-full bg-slate-900 ">
          <img src={Github} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Instagram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Facebook} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Whatsapp} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Linkedin} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Telegram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Gmail} className='w-5' alt="" />
          </div>
                  </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img src={webdev1} alt="" className="border-2 rounded-md border-slate-300" />
              <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                <h2 className="lg:text-3xl text-xl font-bold">
                  Get Appssite
                </h2>
                <div className="gap-2 flex  py-3 ">
                  <Badge className="bg-yellow-300 text-slate-700">
                      vite
                  </Badge>
                  <Badge className="bg-white text-slate-900">
                      Framer-motion
                  </Badge>
                  <Badge className="bg-violet-800 text-slate-50">
                      Tailwind
                  </Badge>
                </div>
                <p className="text-xs lg:text-sm lg:w-1/2">
The intended purpose for his landing page has been fulfilled. this is landing page with the aim of making users or visitors download an app. it uses framer motion to transition within pages you will hae to use a desktop to appreciate the transitions
                </p>
                <div className="py-2">
                  <p className="mb-2 mt-3">
                    Progress 95%
                  </p>
                <Progress value={98} className="bg-slate-50 " />
                </div>
                  <div className="flex gap-5 py-5">
                    <a href="https://github.com/gyeduernest/App_project">
                    <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                      <img src={Github} alt="" className="w-5 bg-slate-900 rounded-full" />
                      Github
                    </Button>
                    </a>
                    <a href="https://heartfelt-sherbet-62a298.netlify.app/">
                    <Button className="gap-2 bg-blue-600 lg:px-8 text-slate-50">
                      <Badge className="bg-red-600">Live</Badge>
                      View
                    </Button>
                    </a>
                  </div>
                  <div className="flex lg:gap-5 gap-2 px-5">
                  <div className="w-5 h-5 rounded-full bg-slate-900 ">
          <img src={Github} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Instagram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Facebook} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Whatsapp} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Linkedin} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Telegram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Gmail} className='w-5' alt="" />
          </div>
                  </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img src={webdev2} alt="" className="border-2 rounded-md border-slate-300" />
              <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                <h2 className="lg:text-3xl text-xl font-bold">
                  Landing page
                </h2>
                <div className="gap-2 flex  py-3 ">
                  <Badge className="bg-red-600">
                     HTML
                  </Badge>
                  <Badge className="bg-blue-500 text-slate-50">
                      Tailwind
                  </Badge>
                </div>
                <p className="text-xs lg:text-sm lg:w-1/2">
Tthis is just a simple landing page for an application website this was done in my early days starting web development
                </p>
                <div className="py-2">
                  <p className="mb-2 mt-3">
                    Progress 95%
                  </p>
                <Progress value={95} className="bg-slate-50 " />
                </div>
                  <div className="flex gap-5 py-5">
                    <a href="https://github.com/gyeduernest/App_project">


                    <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                      <img src={Github} alt="" className="w-5 bg-slate-900 rounded-full" />
                      Github
                    </Button>
                    </a>

                    <a href="https://courageous-sundae-1bc1b2.netlify.app/#">


                    <Button className="gap-2 bg-blue-600 lg:px-8 text-slate-50">
                      <Badge className="bg-red-600">Live</Badge>
                      View
                    </Button>
                    </a>
                  </div>
                  <div className="flex lg:gap-5 gap-2 px-5">
                  <div className="w-5 h-5 rounded-full bg-slate-900 ">
          <img src={Github} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Instagram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Facebook} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Whatsapp} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Linkedin} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Telegram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Gmail} className='w-5' alt="" />
          </div>
                  </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img src={Shop} alt="" className="border-2 rounded-md border-slate-300" />
              <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                <h2 className="lg:text-3xl text-xl font-bold">
                  Shopify ( Hackathon )
                </h2>
                <div className="gap-2 flex  py-3 ">
                  <Badge className="bg-blue-700">
                      HTML
                  </Badge>
                  <Badge className="bg-yellow-400 text-slate-900">
                      CSS
                  </Badge>
                  <Badge className="bg-violet-800 text-slate-50">
                      Javascript
                  </Badge>
                </div>
                <p className="text-xs lg:text-sm lg:w-1/2">
                      I joined a hackathon last year and the main purpose was to code a shopify clone but take into consideration accessibility for screen readers and keyboard only users. also website must be responsive and follow all UI rules in coding
                </p>
                <div className="py-2">
                  <p className="mb-2 mt-3">
                    Progress 98%
                  </p>
                <Progress value={98} className="bg-slate-50 " />
                </div>
                  <div className="flex gap-5 py-5">
                    <a href="https://github.com/gyeduernest/shopify" target="_blank">

                    <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                      <img src={Github} alt="" className="w-5 bg-slate-900 rounded-full" />
                      Github
                    </Button>
                    </a>
                    <a href="https://shopify-three-plum.vercel.app/" target="_blank">


                    <Button className="gap-2 bg-blue-600 lg:px-8 text-slate-50">
                      <Badge className="bg-red-600">Live</Badge>
                      View
                    </Button>
                    </a>
                  </div>
                  <div className="flex lg:gap-5 gap-2 px-5">
                  <div className="w-5 h-5 rounded-full bg-slate-900 ">
          <img src={Github} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Instagram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Facebook} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Whatsapp} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Linkedin} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Telegram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Gmail} className='w-5' alt="" />
          </div>
                  </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img src={Digitalguy} alt="" className="border-2 rounded-md border-slate-300" />
              <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                <h2 className="lg:text-3xl text-xl font-bold">
                  Project Name
                </h2>
                <div className="gap-2 flex  py-3 ">
                  <Badge className="bg-blue-700">
                      HTML
                  </Badge>
                  <Badge className="bg-yellow-400 text-slate-900">
                      Tailwind
                  </Badge>
                  <Badge className="bg-violet-800 text-slate-50">
                      Javascript
                  </Badge>
                </div>
                <p className="text-xs lg:text-sm lg:w-1/2">
                    I coded this website when i was still learning webdev not to say i am still not a leaner but i did it with the intention of knowing more. it is responsive and has an amateurish looking UI.
                </p>
                <div className="py-2">
                  <p className="mb-2 mt-3">
                    Progress 90%
                  </p>
                <Progress value={90} className="bg-slate-50 " />
                </div>
                  <div className="flex gap-5 py-5">
                    <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                      <img src={Github} alt="" className="w-5 bg-slate-900 rounded-full" />
                      Github
                    </Button>
                    <Button className="gap-2 bg-blue-600 lg:px-8 text-slate-50">
                      <Badge className="bg-red-600">Live</Badge>
                      View
                    </Button>
                  </div>
                  <div className="flex lg:gap-5 gap-2 px-5">
                  <div className="w-5 h-5 rounded-full bg-slate-900 ">
          <img src={Github} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Instagram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Facebook} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Whatsapp} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Linkedin} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Telegram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Gmail} className='w-5' alt="" />
          </div>
                  </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img src={Fintrack} alt="" />
              <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                <h2 className="lg:text-3xl text-xl font-bold">
                          Fintrack
                </h2>
                <div className="gap-2 flex  py-3 ">
                  <Badge className="bg-blue-700">
                      React
                  </Badge>
                  <Badge className="bg-yellow-400 text-slate-900">
                      Tailwind
                  </Badge>
                  <Badge className="bg-orange-500 text-slate-50">
                      Firebase
                  </Badge>
                </div>
                <p className="text-xs lg:text-sm lg:w-1/2">
Fintrack is an expense tracker app i created for my portfolio it calculates expenditure and income for you to keep track of your finances. it uses local storage for storing values you can add and delete values also.you will have to log in to gain access to the app.
                </p>
                <div className="py-2">
                  <p className="mb-2 mt-3">
                    Progress 80%
                  </p>
                <Progress value={80} className="bg-slate-50 " />
                </div>
                  <div className="flex gap-5 py-5">
                    <a href="https://github.com/gyeduernest/App_project" target="_blank">
                    <Button className="gap-2 bg-slate-50 lg:px-8 text-slate-800">
                      <img src={Github} alt="" className="w-5 bg-slate-900 rounded-full" />
                      Github
                    </Button>
                    </a>
                    <a href="https://app-project-2uze.vercel.app/">
                    <Button className="gap-2 bg-blue-600 lg:px-8 text-slate-50">
                      <Badge className="bg-red-600">Live</Badge>
                      View
                    </Button>
                    </a>
                  </div>
                  <div className="flex lg:gap-5 gap-2 px-5">
                  <div className="w-5 h-5 rounded-full bg-slate-900 ">
          <img src={Github} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Instagram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Facebook} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Whatsapp} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Linkedin} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Telegram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Gmail} className='w-5' alt="" />
          </div>
                  </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img src={Digimarket} alt="" />
              <div className="py-5 bg-slate-900 px-3 text-slate-50 rounded-b-lg">
                <h2 className="lg:text-3xl text-xl font-bold">
                          Landing page
                </h2>
                <div className="gap-2 flex  py-3 ">
                  <Badge className="bg-blue-700">
                      React
                  </Badge>
                  <Badge className="bg-yellow-400 text-slate-900">
                      Tailwind
                  </Badge>
                </div>
                <p className="text-xs lg:text-sm lg:w-1/2">
                  Landing page for a digital marketing individual who would want to showcase their works and services they offer.you can check out the git repository or the we site live
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
                      <img src={Github} alt="" className="w-5 bg-slate-900 rounded-full" />
                      Github
                    </Button>
                    </a>
                    <a href="https://classy-gumdrop-167339.netlify.app/">


                    <Button className="gap-2 bg-blue-600 lg:px-8 text-slate-50">
                      <Badge className="bg-red-600">Live</Badge>
                      View
                    </Button>
                    </a>
                  </div>
                  <div className="flex lg:gap-5 gap-2 px-5">
                  <div className="w-5 h-5 rounded-full bg-slate-900 ">
          <img src={Github} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Instagram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Facebook} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Whatsapp} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Linkedin} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Telegram} className='w-5' alt="" />
          </div>
          <div className="w-5 h-5 rounded-full bg-slate-900">
          <img src={Gmail} className='w-5' alt="" />
          </div>
                  </div>
              </div>
            </CarouselItem>
          </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
      </Carousel>


    </div>
</>
  )
}
