import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AdminHeader() {
  return (
    <header className="bg-[#6b4f4f] text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">TicketHub</h1>
      <div className="flex items-center">
        <span className="mr-4">Quản trị viên</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
            <DropdownMenuItem>English</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

