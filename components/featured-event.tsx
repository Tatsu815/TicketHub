import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export default function FeaturedEvent() {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#e6f7ff] to-[#d1f0ff] p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-[#2a95bf] text-lg font-medium mb-1">Hoàng Dũng</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a95bf] mb-4">YÊN CONCERT</h2>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <Calendar className="h-5 w-5 mr-2 text-[#2a95bf]" />
                <div>
                  <p>
                    <span className="font-medium">TP. Hồ Chí Minh:</span> 15.10.2022
                  </p>
                  <p>
                    <span className="font-medium">Thủ đô Hà Nội:</span> 04.11.2022
                  </p>
                </div>
              </div>

              <div className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 mr-2 text-[#2a95bf]" />
                <div>
                  <p>
                    <span className="font-medium">TP. HCM:</span> Nhà Thi Đấu Quận Khu 7
                  </p>
                  <p>
                    <span className="font-medium">Hà Nội:</span> Cung Thể Thao Quần Ngựa
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-[#2a95bf] hover:bg-[#1d7a9e]">
                <Link href="/su-kien/yeu-concert">Xem chi tiết</Link>
              </Button>
              <Button variant="outline" className="border-[#2a95bf] text-[#2a95bf] hover:bg-[#e6f7ff]">
                <Link href="/chon-ve/yeu-concert">Mua vé ngay</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-xs aspect-[3/4]">
              <Image
                src="/images/hoang-dung-concert.png"
                alt="Hoàng Dũng - YÊU Concert"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

