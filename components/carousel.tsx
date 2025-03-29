"use client"

import { useState, useEffect, useRef, type TouchEvent } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const slideRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      id: "cong-am-nhac",
      title: "Genfest",
      subtitle: "Music Festival",
      date: "04-05.11.2023",
      location: "The Global City",
      image: "/images/cong-am-nhac-da-giac-quan.png",
      bgColor: "bg-[#1a4b9e]",
      textColor: "text-white",
    },
    {
      id: "nhung-thanh-pho-mo-mang",
      title: "Những Thành Phố Mơ Màng",
      subtitle: "Autumn Festival",
      date: "09.09.2023",
      location: "Hall B2 SECC Quận 7",
      image: "/images/nhung-thanh-pho-mo-mang.png",
      bgColor: "bg-[#f08c5a]",
      textColor: "text-white",
    },
    {
      id: "yen-concert",
      title: "Hoàng Dũng - YÊN Concert",
      subtitle: "Solo Concert",
      date: "15.10.2022 - 04.11.2022",
      location: "TP. HCM & Hà Nội",
      image: "/images/hoang-dung-concert.png",
      bgColor: "bg-[#e6f7ff]",
      textColor: "text-[#2a95bf]",
    },
  ]

  const totalSlides = slides.length

  // Minimum swipe distance required (in pixels)
  const minSwipeDistance = 50

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Handle touch events for swiping
  const handleTouchStart = (e: TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    }

    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div className="relative mb-10">
      <div
        className="overflow-hidden relative rounded-lg shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={slideRef}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Link href={`/su-kien/${slide.id}`} className="block">
                <div className={`w-full flex flex-col md:flex-row ${slide.bgColor} rounded-lg overflow-hidden`}>
                  <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center">
                    <div className="text-center md:text-left">
                      <span className={`${slide.textColor} opacity-80 text-sm md:text-base`}>{slide.subtitle}</span>
                      <h2 className={`${slide.textColor} text-3xl md:text-5xl font-bold mb-4`}>{slide.title}</h2>
                      <p className={`${slide.textColor} opacity-90 mb-2`}>
                        <span className="font-medium">Thời gian:</span> {slide.date}
                      </p>
                      <p className={`${slide.textColor} opacity-90 mb-6`}>
                        <span className="font-medium">Địa điểm:</span> {slide.location}
                      </p>
                      <Button className="bg-white text-black hover:bg-gray-100">Xem chi tiết</Button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto relative">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Swipe indicator */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center items-center gap-2">
          <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
            <ChevronLeft className="h-4 w-4 text-gray-500" />
            <span className="text-xs text-gray-700">Vuốt để xem thêm</span>
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full shadow-md z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full shadow-md z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide ? "bg-black scale-100" : "bg-gray-400 scale-75"
            }`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  )
}

