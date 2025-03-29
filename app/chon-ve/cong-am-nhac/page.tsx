"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Minus, Plus, Edit2 } from "lucide-react"
import Link from "next/link"
import CheckoutHeader from "@/components/checkout-header"
import CheckoutSteps from "@/components/checkout-steps"

export default function CongAmNhacTicketSelection() {
  const [quantity, setQuantity] = useState(1)
  const [ticketType, setTicketType] = useState("regular")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    paymentMethod: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const eventDetails = {
    title: "Genfest",
    date: "04.11.2023 - 05.11.2023",
    location: "Trung Tâm Mới The Global City",
    vipPrice: 2500000,
    premiumPrice: 1500000,
    regularPrice: 800000,
  }

  const getSelectedPrice = () => {
    switch (ticketType) {
      case "vip":
        return eventDetails.vipPrice
      case "premium":
        return eventDetails.premiumPrice
      default:
        return eventDetails.regularPrice
    }
  }

  const getTicketTypeName = () => {
    switch (ticketType) {
      case "vip":
        return "VIP"
      case "premium":
        return "Cao cấp"
      default:
        return "Thường"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <CheckoutHeader />

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left sidebar - Steps */}
        <div className="md:col-span-3">
          <CheckoutSteps currentStep={1} />
        </div>

        {/* Middle section - Ticket selection */}
        <div className="md:col-span-5 bg-white p-6 rounded-lg">
          <h2 className="text-xl font-medium mb-6">Chọn vé</h2>

          {/* VIP ticket */}
          <div
            className={`border rounded-lg p-4 mb-4 cursor-pointer ${ticketType === "vip" ? "border-[#1a4b9e] bg-blue-50" : ""}`}
            onClick={() => setTicketType("vip")}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">VÉ VIP</h3>
                <ul className="text-sm mt-2 list-disc list-inside">
                  <li>Khu vực đặc biệt</li>
                  <li>Quà tặng độc quyền</li>
                  <li>Giao lưu nghệ sĩ</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="font-bold">{eventDetails.vipPrice.toLocaleString()} đ</p>
                <div className="flex items-center mt-2 space-x-2">
                  {ticketType === "vip" && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          decreaseQuantity()
                        }}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-6 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          increaseQuantity()
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Premium ticket */}
          <div
            className={`border rounded-lg p-4 mb-4 cursor-pointer ${ticketType === "premium" ? "border-[#1a4b9e] bg-blue-50" : ""}`}
            onClick={() => setTicketType("premium")}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">VÉ CAO CẤP</h3>
                <ul className="text-sm mt-2 list-disc list-inside">
                  <li>Khu vực gần sân khấu</li>
                  <li>Quà tặng đặc biệt</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="font-bold">{eventDetails.premiumPrice.toLocaleString()} đ</p>
                <div className="flex items-center mt-2 space-x-2">
                  {ticketType === "premium" && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          decreaseQuantity()
                        }}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-6 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          increaseQuantity()
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Regular ticket */}
          <div
            className={`border rounded-lg p-4 mb-4 cursor-pointer ${ticketType === "regular" ? "border-[#1a4b9e] bg-blue-50" : ""}`}
            onClick={() => setTicketType("regular")}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">VÉ THƯỜNG</h3>
                <ul className="text-sm mt-2 list-disc list-inside">
                  <li>Khu vực tiêu chuẩn</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="font-bold">{eventDetails.regularPrice.toLocaleString()} đ</p>
                <div className="flex items-center mt-2 space-x-2">
                  {ticketType === "regular" && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          decreaseQuantity()
                        }}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-6 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          increaseQuantity()
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <Button variant="outline" className="bg-gray-200 border-none">
              <Link href="/su-kien/cong-am-nhac">Quay lại</Link>
            </Button>
            <Button className="bg-[#1a4b9e] hover:bg-[#143a7d] text-white">Tiếp theo</Button>
          </div>
        </div>

        {/* Right sidebar - Order details */}
        <div className="md:col-span-4 bg-white p-6 rounded-lg">
          <h2 className="text-lg font-medium mb-4">Chi tiết đơn hàng</h2>

          <div className="space-y-4">
            <div className="bg-gray-100 p-3 rounded">
              <p className="font-medium">{eventDetails.title}</p>
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Thời gian:</p>
              <p className="text-sm text-gray-600">{eventDetails.date}</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">Thông tin chi tiết</p>
              <Button variant="ghost" size="sm" className="h-6 p-0">
                <Edit2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-600">Họ và tên:</p>
                <Input name="fullName" value={formData.fullName} onChange={handleChange} className="h-8 mt-1" />
              </div>

              <div>
                <p className="text-sm text-gray-600">Email:</p>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} className="h-8 mt-1" />
              </div>

              <div>
                <p className="text-sm text-gray-600">Số điện thoại:</p>
                <Input name="phone" value={formData.phone} onChange={handleChange} className="h-8 mt-1" />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Phương thức thanh toán</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn phương thức thanh toán" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Chuyển khoản ngân hàng</SelectItem>
                  <SelectItem value="momo">Ví MoMo</SelectItem>
                  <SelectItem value="vnpay">VNPay</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">Loại vé</p>
              <Button variant="ghost" size="sm" className="h-6 p-0">
                <Edit2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <p>
                  Vé {getTicketTypeName()} x{quantity}
                </p>
                <p>{(getSelectedPrice() * quantity).toLocaleString()} đ</p>
              </div>

              <div className="flex justify-between font-medium">
                <p>Tổng tiền</p>
                <p>{(getSelectedPrice() * quantity).toLocaleString()} đ</p>
              </div>
            </div>

            <Button className="w-full bg-[#1a4b9e] hover:bg-[#143a7d] text-white">Mua vé</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

