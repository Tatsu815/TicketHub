import { Button } from "@/components/ui/button"
import EventCard from "@/components/event-card"
import CategoryFilter from "@/components/category-filter"
import Header from "@/components/header"
import Carousel from "@/components/carousel"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f0ee]">
      <Header />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Main Carousel - Featured Events */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Sự kiện nổi bật</h2>
          <Carousel />
        </div>

        {/* Category filters */}
        <div className="mt-6">
          <CategoryFilter />
        </div>

        {/* Recommended events */}
        <div className="mt-8">
          <h2 className="text-xl font-medium mb-4">Dành cho bạn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <EventCard
              id="cong-am-nhac"
              title="Genfest"
              price="800.000đ - 2.500.000đ"
              date="04.11.2023 - 05.11.2023"
              image="/images/cong-am-nhac-da-giac-quan.png"
              featured={true}
            />
            <EventCard
              id="nhung-thanh-pho-mo-mang"
              title="Những Thành Phố Mơ Màng"
              price="350.000đ - 650.000đ"
              date="09.09.2023"
              image="/images/nhung-thanh-pho-mo-mang.png"
              featured={true}
            />
            <EventCard
              id="yen-concert"
              title="Hoàng Dũng - YÊN Concert"
              price="480.000đ - 1.200.000đ"
              date="15.10.2022 - 04.11.2022"
              image="/images/hoang-dung-concert.png"
            />
            <EventCard
              id="techfuture-summit"
              title="TechFuture Summit 2025"
              price="350.000đ - 900.000đ"
              date="15.05.2025"
            />
          </div>

          {/* Right arrow for scrolling */}
          <div className="flex justify-end mt-2">
            <Button variant="ghost" className="rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

