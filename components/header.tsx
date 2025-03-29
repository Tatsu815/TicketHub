"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-[#6b4f4f] text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          TicketHub
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-md flex">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Bạn cần tìm gì?"
              className="w-full rounded-r-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="absolute right-0 top-0 h-full rounded-l-none bg-white hover:bg-gray-100 text-gray-800">
              Tìm kiếm
            </Button>
          </div>
        </div>

        {/* Auth links */}
        <div className="flex items-center gap-2">
          <Link href="/dang-nhap" className="text-sm hover:underline">
            Đăng nhập
          </Link>
          <span>/</span>
          <Link href="/dang-ky" className="text-sm hover:underline">
            Đăng ký
          </Link>

          {/* Language selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

