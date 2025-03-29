import Image from "next/image"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface EventCardProps {
  id?: string
  title?: string
  price?: string
  date?: string
  image?: string
  featured?: boolean
}

export default function EventCard({
  id = "1",
  title = "Tên sự kiện",
  price = "Giá vé",
  date = "Ngày tổ chức",
  image = "/placeholder.svg?height=225&width=300",
  featured = false,
}: EventCardProps) {
  return (
    <Link href={`/su-kien/${id}`} className="block">
      <div className={`bg-white rounded-lg overflow-hidden ${featured ? "shadow-md" : ""}`}>
        <div className="aspect-[4/3] relative bg-gray-200">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-3">
          <h3 className={`${featured ? "font-semibold text-base" : "font-medium text-sm"}`}>{title}</h3>
          <div className="flex items-center gap-1 mt-1">
            <Badge variant="outline" className="text-xs font-normal px-1 py-0">
              {price}
            </Badge>
          </div>
          <div className="flex items-center text-xs text-blue-600 mt-1">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

