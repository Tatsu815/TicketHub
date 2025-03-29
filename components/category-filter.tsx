export default function CategoryFilter() {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">Tất cả</button>
      <button className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium border">Âm nhạc</button>
      <button className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium border">Thể thao</button>
      <button className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium border">Khác</button>
    </div>
  )
}

