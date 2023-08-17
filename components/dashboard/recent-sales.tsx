import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"


import { Badge } from "../ui/badge"
export function RecentSales() {
  return (
    <div className="space-y-8 mt-7">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>O</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <Badge variant="outline" className="h-6">Office</Badge>
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Office365</p>
        </div>
        <div className="ml-auto">
        <Badge variant="outline" className="h-6" style={{background:"#ffffff"}}>          
            <span style={{color:"#000000"}}>Calculating...</span>
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <Badge variant="outline" className="h-6">Photos & Videos</Badge>
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Brightcove</p>
        </div>
        <div className="ml-auto">
        <Badge variant="outline" className="h-6" style={{background:"#CDF4FF"}}>          
            {ArrowUpIcon && (
            <ArrowUpIcon className="mr-2 h-4 w-4" style={{color: "#0F7587"}} />
              )}
            <span style={{color:"#0F7587"}}>Medium</span>
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <Badge variant="outline" className="h-6">Office</Badge>
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Gmail</p>
        </div>
        <div className="ml-auto">
        <Badge variant="outline" className="h-6" style={{background:"#FFE2AC"}}>          
            {ArrowUpIcon && (
            <ArrowUpIcon className="mr-2 h-4 w-4" style={{color: "#D84318"}} />
              )}
            <span style={{color:"#D84318"}}>High</span>
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <Badge variant="outline" className="h-6">Entertainment</Badge>
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Netflix</p>
        </div>
        <div className="ml-auto">
        <Badge variant="outline" className="h-6" style={{background:"#CDF4FF"}}>          
            {ArrowUpIcon && (
            <ArrowUpIcon className="mr-2 h-4 w-4" style={{color: "#0F7587"}} />
              )}
            <span style={{color:"#0F7587"}}>Medium</span>
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>F</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <Badge variant="outline" className="h-6">Collab</Badge>
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Facebook</p>
        </div>
        <div className="ml-auto">
        <Badge variant="outline" className="h-6" style={{background:"#CDF4FF"}}>          
            {ArrowUpIcon && (
            <ArrowUpIcon className="mr-2 h-4 w-4" style={{color: "#0F7587"}} />
              )}
            <span style={{color:"#0F7587"}}>Medium</span>
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <Badge variant="outline" className="h-6">None</Badge>
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Glint</p>
        </div>
        <div className="ml-auto">
        <Badge variant="outline" className="h-6" style={{background:"#22C55E66"}}>          
            {ArrowUpIcon && (
            <ArrowUpIcon className="mr-2 h-4 w-4" style={{color: "#599E18"}} />
              )}
            <span style={{color:"#599E18"}}>Low</span>
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <Badge variant="outline" className="h-6">Development</Badge>
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Github</p>
        </div>
        <div className="ml-auto">
        <Badge variant="outline" className="h-6" style={{background:"#FFE2AC"}}>          
            {ArrowUpIcon && (
            <ArrowUpIcon className="mr-2 h-4 w-4" style={{color: "#D84318"}} />
              )}
            <span style={{color:"#D84318"}}>High</span>
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <Badge variant="outline" className="h-6">Recruiting</Badge>
        </div>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">LinkedIn</p>
        </div>
        <div className="ml-auto">
        <Badge variant="outline" className="h-6" style={{background:"#CDF4FF"}}>          
            {ArrowUpIcon && (
            <ArrowUpIcon className="mr-2 h-4 w-4" style={{color: "#0F7587"}} />
              )}
            <span style={{color:"#0F7587"}}>Medium</span>
          </Badge>
        </div>
      </div>
    </div>
  )
}
