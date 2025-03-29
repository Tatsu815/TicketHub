"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface EventItemProps {
  event: {
    id: number
    title: string
    description: string
    status: string
  }
  onApprove: () => void
  onReject: () => void
}

export default function EventItem({ event, onApprove, onReject }: EventItemProps) {
  const getStatusBadge = () => {
    switch (event.status) {
      case "pending":
        return <Badge className="bg-blue-500">Đang chờ</Badge>
      case "approved":
        return <Badge className="bg-green-500">Đã duyệt</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Đã hủy</Badge>
      default:
        return null
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{event.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{event.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusBadge()}
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600" onClick={() => {}}>
            Xem chi tiết
          </Button>
        </div>
      </div>

      {event.status === "pending" && (
        <div className="flex justify-end mt-4 space-x-2">
          <Button
            size="sm"
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white"
            onClick={onReject}
          >
            Từ chối
          </Button>
          <Button size="sm" className="bg-green-500 hover:bg-green-600" onClick={onApprove}>
            Duyệt
          </Button>
        </div>
      )}
    </div>
  )
}

