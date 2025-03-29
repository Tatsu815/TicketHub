import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Music, Users } from "lucide-react"
import Header from "@/components/header"
import Link from "next/link"

export default function CongAmNhacPage() {
  return (
    <div className="min-h-screen bg-[#f8f0ee]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column - Event image */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative aspect-[3/4] w-full">
                <Image src="/images/cong-am-nhac-da-giac-quan.png" alt="Genfest" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Right column - Event details */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold text-[#1a4b9e] mb-2">Genfest</h1>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Âm nhạc</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Festival
                </span>
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">K-Pop</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 mt-0.5 text-[#1a4b9e]" />
                  <div>
                    <p className="font-medium">Thời gian</p>
                    <p>04.11.2023 - 05.11.2023</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#1a4b9e]" />
                  <div>
                    <p className="font-medium">Địa điểm</p>
                    <p>Trung Tâm Mới The Global City</p>
                    <p className="text-sm text-gray-500">Đường Đỗ Xuân Hợp, P. An Phú, Q.2, TP Thủ Đức, Hồ Chí Minh</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 mt-0.5 text-[#1a4b9e]" />
                  <div>
                    <p className="font-medium">Nghệ sĩ biểu diễn</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                      <p>Zico</p>
                      <p>Zion.T</p>
                      <p>Hyolyn</p>
                      <p>Lee Hi</p>
                      <p>Tlinh</p>
                      <p>Wren Evans</p>
                      <p>Low G</p>
                      <p>B Ray</p>
                      <p>Hieuthuhai</p>
                      <p>MONO</p>
                      <p>GERDNANG</p>
                      <p>GREY D</p>
                      <p>Chill</p>
                      <p>Obito</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Music className="h-5 w-5 mr-2 text-[#1a4b9e]" />
                  Thông tin sự kiện
                </h2>
                <div className="prose max-w-none">
                  <p>
                    <strong>Genfest</strong> là lễ hội âm nhạc đa dạng với sự góp mặt của các nghệ sĩ hàng đầu Việt Nam
                    và quốc tế. Sự kiện hứa hẹn mang đến trải nghiệm âm nhạc đa giác quan độc đáo, kết hợp giữa âm
                    thanh, ánh sáng và công nghệ hiện đại.
                  </p>
                  <p>Lễ hội sẽ diễn ra trong 2 ngày với nhiều hoạt động hấp dẫn:</p>
                  <ul>
                    <li>Biểu diễn từ các nghệ sĩ K-Pop nổi tiếng: Zico, Hyolyn, Zion.T, Lee Hi</li>
                    <li>
                      Trình diễn từ các nghệ sĩ Việt Nam: Tlinh, Wren Evans, Low G, B Ray, Hieuthuhai, MONO, GERDNANG,
                      GREY D, Chill, Obito
                    </li>
                    <li>Khu vực trải nghiệm công nghệ thực tế ảo</li>
                    <li>Khu ẩm thực đa dạng</li>
                    <li>Hoạt động giao lưu với nghệ sĩ</li>
                  </ul>
                  <p>Đừng bỏ lỡ cơ hội tham gia lễ hội âm nhạc hoành tráng nhất năm 2023!</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Giá vé</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">VÉ VIP</p>
                      <p className="text-sm text-gray-600">Khu vực đặc biệt - Quà tặng độc quyền - Giao lưu nghệ sĩ</p>
                    </div>
                    <p className="font-bold">2.500.000 đ</p>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">VÉ CAO CẤP</p>
                      <p className="text-sm text-gray-600">Khu vực gần sân khấu - Quà tặng đặc biệt</p>
                    </div>
                    <p className="font-bold">1.500.000 đ</p>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">VÉ THƯỜNG</p>
                      <p className="text-sm text-gray-600">Khu vực tiêu chuẩn</p>
                    </div>
                    <p className="font-bold">800.000 đ</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#1a4b9e] hover:bg-[#143a7d] text-lg py-6">
                <Link href="/chon-ve/cong-am-nhac">Mua vé ngay</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

