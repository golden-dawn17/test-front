"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    high: Math.floor(Math.random() * 5000) + 1000,
    medium: Math.floor(Math.random() * 5000) + 1000,
    low: Math.floor(Math.random() * 5000) + 1000,
  },
]

export function RiskScoreOverview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="high" stackId="a" fill="#FF754C"/>
        <Bar dataKey="medium" stackId="a" fill="#3F8CFF"/>
        <Bar dataKey="low" stackId="a" fill="#22C55E" radius={[4, 4, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  )
}
