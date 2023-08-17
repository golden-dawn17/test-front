"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserAuthFormLogin } from "@/components/login/login-page"

export default function LoginAccount() {
  return (
    <section className="grid items-center gap-6">
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Palo Alto Networks
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta cupiditate aspernatur explicabo minus corporis, voluptatem.&rdquo;
              </p>
              <footer className="text-sm">Aryan Siddapuram</footer>
            </blockquote>
          </div>
        </div>
          <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center mb-5">
              <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back!
              </h1>
              <p className="text-sm text-muted-foreground">
              Enter your credentials below to login
              </p>
            </div>
            <UserAuthFormLogin />
          </div>
        </div>
        </div>
    </section>
  )
}
