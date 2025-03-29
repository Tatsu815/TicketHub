import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Music, Users } from "lucide-react"
import Header from "@/components/header"
import Link from "next/link"

export default function NhungThanhPhoMoMangPage() {
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
                  src="/images/nhung-thanh-pho-mo-mang.png"
                  alt="Những Thành Phố Mơ Màng Autumn"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right column - Event details */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold text-[#f08c5a] mb-2">Những Thành Phố Mơ Màng Autumn</h1>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">Âm nhạc</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Festival
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">V-Pop</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 mt-0.5 text-[#f08c5a]" />
                  <div>
                    <p className="font-medium">Thời gian</p>
                    <p>09.09.2023 (16:00 - 22:30)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#f08c5a]" />
                  <div>
                    <p className="font-medium">Địa điểm</p>
                    <p>Hall B2 SECC Quận 7 (Khu vực trong nhà)</p>
                    <p className="text-sm text-gray-500">
                      Trung tâm Hội chợ và Triển lãm Sài Gòn, Quận 7, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 mt-0.5 text-[#f08c5a]" />
                  <div>
                    <p className="font-medium">Nghệ sĩ biểu diễn</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                      <p>The Sans</p>
                      <p>Chillies</p>
                      <p>Da LAB</p>
                      <p>NGỌT</p>
                      <p>The Flob</p>
                      <p>Màu Nước Band</p>
                      <p>Hoàng Dũng</p>
                      <p>Vũ</p>
                      <p>Tlinh</p>
                      <p>Pháo</p>
                      <p>Milky Day</p>
                      <p>MCK</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Music className="h-5 w-5 mr-2 text-[#f08c5a]" />
                  Thông tin sự kiện
                </h2>
                <div className="prose max-w-none">
                  <p>
                    <strong>Những Thành Phố Mơ Màng Autumn</strong> là lễ hội âm nhạc mùa thu với phong cách pixel art
                    độc đáo, quy tụ dàn nghệ sĩ Indie và V-Pop hàng đầu Việt Nam. Sự kiện mang đến không gian âm nhạc đa
                    dạng từ Indie, R&B đến Hip-hop.
                  </p>
                  <p>Chương trình sẽ diễn ra liên tục trong 6 tiếng với nhiều hoạt động:</p>
                  <ul>
                    <li>
                      Biểu diễn từ các nghệ sĩ và ban nhạc nổi tiếng: The Sans, Chillies, Da LAB, NGỌT, The Flob, Màu
                      Nước Band
                    </li>
                    <li>Trình diễn solo từ các ca sĩ: Hoàng Dũng, Vũ, Tlinh, Pháo, MCK</li>
                    <li>Khu vực triển lãm nghệ thuật pixel art</li>
                    <li>Khu ẩm thực và đồ uống</li>
                    <li>Hoạt động giao lưu và ký tặng</li>
                  </ul>
                  <p>Hãy sẵn sàng cho một đêm nhạc đầy cảm xúc với những giai điệu mơ màng giữa không khí mùa thu!</p>
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
                    <p className="font-bold">650.000 đ</p>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">VÉ THƯỜNG</p>
                      <p className="text-sm text-gray-600">Khu vực tiêu chuẩn</p>
                    </div>
                    <p className="font-bold">350.000 đ</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#f08c5a] hover:bg-[#e67a48] text-lg py-6">
                <Link href="/chon-ve/nhung-thanh-pho-mo-mang">Mua vé ngay</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

