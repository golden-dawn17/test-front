"use client"
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

import { LucideCloud } from "lucide-react"
import { ScreenShareIcon } from "lucide-react"
import { Airplay } from "lucide-react"
import { Cloud } from "lucide-react"

export const labels = [
  {
    value: "office",
    label: "Office",
  },
  {
    value: "photo_video",
    label: "Photo & Video",
  },
  {
    value: "development",
    label: "Development",
  },
]

export const types = [
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "saas",
    label: "SaaS",
    icon: Cloud,
  },
  {
    value: "others",
    label: "Others",
    icon: Airplay,
  },
]

export const risks = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
  {
    label: "Calculating...",
    value: "calculating",
  }
]
