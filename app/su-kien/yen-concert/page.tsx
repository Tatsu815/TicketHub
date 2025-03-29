import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, User, Music } from "lucide-react"
import Header from "@/components/header"
import Link from "next/link"

export default function YenConcertPage() {
  return (
    <div className="min-h-screen bg-[#f8f0ee]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column - Event image */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/hoang-dung-concert.png"
                  alt="Hoàng Dũng - YÊN Concert"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right column - Event details */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold text-[#2a95bf] mb-2">Hoàng Dũng - YÊN CONCERT</h1>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Âm nhạc</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Concert</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 mt-0.5 text-[#2a95bf]" />
                  <div>
                    <p className="font-medium">Thời gian</p>
                    <p>TP. Hồ Chí Minh: 15.10.2022</p>
                    <p>Thủ đô Hà Nội: 04.11.2022</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#2a95bf]" />
                  <div>
                    <p className="font-medium">Địa điểm</p>
                    <p>TP. HCM: Nhà Thi Đấu Quận Khu 7</p>
                    <p>Hà Nội: Cung Thể Thao Quần Ngựa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-0.5 text-[#2a95bf]" />
                  <div>
                    <p className="font-medium">Thời gian mở bán vé chính thức</p>
                    <p>17.09.2022 - 11:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <User className="h-5 w-5 mr-3 mt-0.5 text-[#2a95bf]" />
                  <div>
                    <p className="font-medium">Ban tổ chức</p>
                    <p>Lirico Entertainment & Double U</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Music className="h-5 w-5 mr-2 text-[#2a95bf]" />
                  Thông tin concert
                </h2>
                <div className="prose max-w-none">
                  <p>
                    "YÊN" Concert là đêm nhạc đặc biệt của ca sĩ Hoàng Dũng, mang đến cho khán giả những trải nghiệm âm
                    nhạc đầy cảm xúc và tinh tế. Với chủ đề "YÊN", concert hứa hẹn sẽ đưa người nghe qua nhiều cung bậc
                    cảm xúc thông qua các tác phẩm âm nhạc đã làm nên tên tuổi của Hoàng Dũng.
                  </p>
                  <p>
                    Khán giả sẽ được thưởng thức những bản hit quen thuộc như "Nàng Thơ", "Chờ Anh Nhé", "Đôi Lời Tình
                    Ca" cùng nhiều ca khúc mới chưa từng được trình diễn. Đặc biệt, concert sẽ có sự góp mặt của nhiều
                    khách mời bất ngờ, hứa hẹn mang đến những màn kết hợp đầy thú vị.
                  </p>
                  <p>
                    Đừng bỏ lỡ cơ hội được đắm chìm trong không gian âm nhạc đầy cảm xúc cùng Hoàng Dũng tại "YÊN"
                    Concert!
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Giá vé</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">VÉ PREMIUM</p>
                      <p className="text-sm text-gray-600">Hàng vé ngồi - Số lượng có hạn</p>
                    </div>
                    <p className="font-bold">1.200.000 đ</p>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">VÉ THƯỜNG</p>
                      <p className="text-sm text-gray-600">Hàng vé đứng hoặc ngồi - Số lượng có hạn</p>
                    </div>
                    <p className="font-bold">480.000 đ</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#2a95bf] hover:bg-[#1d7a9e] text-lg py-6">
                <Link href="/chon-ve/yen-concert">Mua vé ngay</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

