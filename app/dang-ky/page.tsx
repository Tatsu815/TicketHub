"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    province: "",
    ward: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle registration logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f0ee] p-4">
      <div className="w-full max-w-xl bg-[#e9d9d6] rounded-3xl p-6 shadow-sm">
        <h1 className="text-xl font-medium text-center mb-6">Thông tin đăng ký</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1">
              Họ và tên
            </label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-white border-none"
              required
            />
          </div>

          <div>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border-none"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Số điện thoại
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border-none"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Địa chỉ
            </label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-white border-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="province" className="block text-sm font-medium mb-1">
                Tỉnh/thành
              </label>
              <Select>
                <SelectTrigger className="w-full bg-white border-none">
                  <SelectValue placeholder="Chọn tỉnh/thành" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hanoi">Hà Nội</SelectItem>
                  <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                  <SelectItem value="danang">Đà Nẵng</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="district" className="block text-sm font-medium mb-1">
                Quận/huyện
              </label>
              <Select>
                <SelectTrigger className="w-full bg-white border-none">
                  <SelectValue placeholder="Chọn quận/huyện" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="district1">Quận 1</SelectItem>
                  <SelectItem value="district2">Quận 2</SelectItem>
                  <SelectItem value="district3">Quận 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label htmlFor="ward" className="block text-sm font-medium mb-1">
              Phường/xã
            </label>
            <Select>
              <SelectTrigger className="w-full bg-white border-none">
                <SelectValue placeholder="Chọn phường/xã" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ward1">Phường 1</SelectItem>
                <SelectItem value="ward2">Phường 2</SelectItem>
                <SelectItem value="ward3">Phường 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center mt-6">
            <Button type="submit" className="bg-[#a9a9a9] hover:bg-[#8a8a8a] text-white px-8">
              Đăng ký
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Đã có tài khoản?{" "}
            <Link href="/dang-nhap" className="text-blue-600 hover:underline">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

