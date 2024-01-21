import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Docs from '../assets/Docs.svg'

export default function Experience() {
  return (
    <div className="bg-[#161513]">

      <div className="lg:flex px-5  text-white  justify-between lg:px-72">
        <div className=" mb-10">
          <h3 className=" text-3xl font-bold education">
          Education
          </h3>
          <div>
          <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl">Tertiary Education</AccordionTrigger>
                      <AccordionContent>
                        <h4 className="text-sm mb-5">
                          Kwame Nkrumah University of Science and Technology (2016-2020)
                        </h4>
                        <p className="text-xs text-slate-300 ">
                          I have a BSc Development Planing certificate from the Department of Planning
                        </p>
                        <Button className="gap-2 mt-2 bg-orange-500">
                          <img src={Docs} alt="" />                Download Certificate
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
          </Accordion>

          </div>
        </div>
        <div>

        <h3 className="text-3xl experience font-bold">
          Experience
        </h3>
        <div>
        <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Dept Operations</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                  <Button className="gap-2 mt-2 bg-blue-600">
                          <img src={Docs} alt="" />  Download Resume
                        </Button>
                </AccordionContent>
              </AccordionItem>
          </Accordion>

        </div>
        </div>
      </div>
      
    </div>
  )
}
