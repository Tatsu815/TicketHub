import Link from "next/link"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-white h-screen flex flex-col">
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          <Link href="/admin/events" className="flex items-center p-3 text-sm rounded-lg bg-gray-100 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            Quản lý sự kiện
          </Link>

          <Link href="/admin/users" className="flex items-center p-3 text-sm rounded-lg hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Quản lý người dùng
          </Link>
        </nav>
      </div>

      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
          <LogOut className="mr-2 h-4 w-4" />
          Đăng xuất
        </Button>
      </div>
    </div>
  )
}

