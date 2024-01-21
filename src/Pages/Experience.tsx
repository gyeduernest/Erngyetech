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
    <div className="bg-[#161513] py-10">

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
                  <ul>
                    <li className="mb-2">Tropic Shine</li>
                    <li className="mb-2">Mar 2022 - Apr 2023 (1 year 2 months)</li>
                    <li className="mb-2">● Analyze data to supply tools and materials to workers at various branches.</li>
                    <li className="mb-2">● Prepare accounts and attendance list for salary payment of workers.</li>
                    <li className="mb-2">● control stock of goods and track its usage</li>
                    <li className="mb-2">● Solve worker disputes and conflicts in the field.</li>
                    <li className="mb-2">● Updating worker database details.</li>
                    <li className="mb-2">● Ensure the signing of confirmation letters from clients for service rendered</li>
                  </ul>
                  <Button className="gap-2 mt-2 bg-blue-600">
                          <img src={Docs} alt="" />  Download Resume
                        </Button>
                </AccordionContent>
              </AccordionItem>
          </Accordion>
        <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Revenue mobilizer</AccordionTrigger>
                <AccordionContent>
                <ul>
                    <li className="mb-2">Kasseh health center</li>
                    <li className="mb-2">Sep 2020 - Aug 2021 (1 year)</li>
                    <li className="mb-2">● Responsible for revenue mobilization and Accountability</li>
                    <li className="mb-2">● located in the Ada East district as part of my National Service.</li>
                    <li className="mb-2">●Entrusted with the collection of funds for drugs and/or
                               services being rendered</li>                    
                </ul>
                  <Button className="gap-2 mt-2 bg-blue-600">
                          <img src={Docs} alt="" />  Download Resume
                        </Button>
                </AccordionContent>
              </AccordionItem>
          </Accordion>
        <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Map Designer and consultant</AccordionTrigger>
                <AccordionContent>
                <ul>
                <li className="mb-2">KNUST SRC</li>
                <li className="mb-2">Jun 2019 - Sep 2019 (4 months)</li>
                <li className="mb-2">● Awarded a contract by KNUST SRC to consult on drawing of maps for the school</li>
                    <li className="mb-2">● I fulfilled the contract requirements with the help of the Arc Map software</li>
                    <li className="mb-2">●The maps were then embedded into a brochure for the 2020 'Freshers' in KNUST</li>                    
                </ul>
                  <Button className="gap-2 mt-2 bg-blue-600">
                          <img src={Docs} alt="" />  Download Resume
                        </Button>
                </AccordionContent>
              </AccordionItem>
          </Accordion>
        <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Volunteer Internship</AccordionTrigger>
                <AccordionContent>
                <ul>
                <li className="mb-2">Devt plan consult</li>
                <li className="mb-2">Jun 2019 - Sep 2019 (4 months)</li>
                <li className="mb-2">●Assisted a consultancy company on a project from the Millennium Development Agency</li>
                    <li className="mb-2">●Served as a data collector and a collator and did some administrative duties</li>
                    <li className="mb-2">●Responsible for data cleaning and made sure the data collected was free of ambiguities.</li>
                    <li className="mb-2">● Involved with regard to writing progress reports and researching data</li>                    
                </ul>
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
