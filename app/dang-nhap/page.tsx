"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Login() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login form submitted:", formData)
    // Handle login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f0ee] p-4">
      <div className="w-full max-w-md bg-[#e9d9d6] rounded-3xl p-6 shadow-sm">
        <h1 className="text-xl font-medium text-center mb-6">Thông tin đăng nhập</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="emailOrPhone" className="block text-sm font-medium mb-1">
              Email / Số điện thoại
            </label>
            <Input
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className="w-full bg-white border-none"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Mật khẩu
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white border-none"
              required
            />
            <div className="absolute right-0 top-7 pr-2">
              <Link href="/quen-mat-khau" className="text-sm text-gray-700 hover:underline">
                Quên mật khẩu?
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button type="submit" className="bg-[#a9a9a9] hover:bg-[#8a8a8a] text-white px-8">
              Đăng nhập
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Chưa có tài khoản?{" "}
            <Link href="/dang-ky" className="text-blue-600 hover:underline">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

