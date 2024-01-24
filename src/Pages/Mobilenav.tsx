import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import MenuButton from '../assets/MenuButton.svg'
import { Link, NavLink } from "react-router-dom"
import Socials from "./Socials"


export function Mobilenav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><img src={MenuButton} alt="" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 absolute left-[-40px] top-[-80px] h-[650px] ">
        <DropdownMenuLabel>Main Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to="/">Home</Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Projects</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <NavLink to="/signup">
                <DropdownMenuItem>Baitab</DropdownMenuItem>
                </NavLink>
                <NavLink to="/signup">
                <DropdownMenuItem>Gymbud</DropdownMenuItem>
                </NavLink>
                <DropdownMenuSeparator />
                <NavLink to="/signup">
                <DropdownMenuItem>Maps</DropdownMenuItem>
                </NavLink>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Services</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
              <a href="#skills">
                <DropdownMenuItem>UI/UX Design</DropdownMenuItem>
                <DropdownMenuItem>Web development</DropdownMenuItem>
             </a>

                <DropdownMenuSeparator />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>             
              Git Repository   
</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>             
                   <a href="https://github.com/gyeduernest/shopify" target="_blank">Shopify</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="https://github.com/gyeduernest/App_project_2" target="_blank">Ghaprofund</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><a href="https://github.com/gyeduernest/App_project">Fintrack</a></DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSefXhqap-Nis8XMkowANlZYx80n_UUi8HVwHwTp2n9GVwQK7w/viewform?usp=sf_link" target="_blank">

        <DropdownMenuItem><a href="https://docs.google.com/forms/d/e/1FAIpQLSefXhqap-Nis8XMkowANlZYx80n_UUi8HVwHwTp2n9GVwQK7w/viewform?usp=sf_link" target='_blank'>

Contact
</a></DropdownMenuItem>
        </a>
        
        <DropdownMenuItem className="">
          <Socials/>
          
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
