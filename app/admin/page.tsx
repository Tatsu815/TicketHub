"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"
import EventItem from "@/components/event-item"

export default function AdminDashboard() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "TechFuture Summit 2025",
      description: "Hội nghị công nghệ lớn nhất năm với các chủ đề về xu hướng AI, blockchain và đổi mới sáng tạo.",
      status: "pending",
    },
    {
      id: 2,
      title: "VietMusic Fest",
      description:
        "Lễ hội âm nhạc hoành tráng với sự góp mặt của các ca sĩ nổi tiếu, khu trải nghiệm và các nghệ sĩ khách mời.",
      status: "pending",
    },
    {
      id: 3,
      title: "Marathon Challenge 2025",
      description:
        "Giải chạy quy mô lớn dành cho mọi đối tượng, khuyến khích lối sống lành mạnh và rèn luyện sức khỏe.",
      status: "approved",
    },
    {
      id: 4,
      title: "Startup Connect Expo",
      description: "Sự kiện kết nối các startup với nhà đầu tư, nơi chia sẻ ý tưởng nghiệp và tìm kiếm cơ hội hợp tác.",
      status: "rejected",
    },
  ])

  const handleApprove = (id: number) => {
    setEvents(events.map((event) => (event.id === id ? { ...event, status: "approved" } : event)))
  }

  const handleReject = (id: number) => {
    setEvents(events.map((event) => (event.id === id ? { ...event, status: "rejected" } : event)))
  }

  const filteredEvents = (status: string) => {
    if (status === "all") return events
    return events.filter((event) => event.status === status)
  }

  return (
    <div className="min-h-screen bg-[#f8f0ee] flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1">
        <AdminHeader />

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-medium">Danh sách sự kiện</h1>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="bg-white mb-4">
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="pending">Đang chờ</TabsTrigger>
              <TabsTrigger value="approved">Đã duyệt</TabsTrigger>
              <TabsTrigger value="rejected">Đã từ chối</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {events.map((event) => (
                <EventItem
                  key={event.id}
                  event={event}
                  onApprove={() => handleApprove(event.id)}
                  onReject={() => handleReject(event.id)}
                />
              ))}
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              {filteredEvents("pending").map((event) => (
                <EventItem
                  key={event.id}
                  event={event}
                  onApprove={() => handleApprove(event.id)}
                  onReject={() => handleReject(event.id)}
                />
              ))}
            </TabsContent>

            <TabsContent value="approved" className="space-y-4">
              {filteredEvents("approved").map((event) => (
                <EventItem
                  key={event.id}
                  event={event}
                  onApprove={() => handleApprove(event.id)}
                  onReject={() => handleReject(event.id)}
                />
              ))}
            </TabsContent>

            <TabsContent value="rejected" className="space-y-4">
              {filteredEvents("rejected").map((event) => (
                <EventItem
                  key={event.id}
                  event={event}
                  onApprove={() => handleApprove(event.id)}
                  onReject={() => handleReject(event.id)}
                />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

