import { Button } from "../ui/button"
import { Search, User, Heart } from "lucide-react"

const Nav = () => {
  return (
    <nav className="p-4 bg-accent w-full">
      <div className="md:max-w-[1200px] w-full m-auto flex flex-row justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">Logo</h1>
          {/* <ul className="flex items-center gap-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Contact</li>
          </ul> */}
        </div>
        <div className="flex items-center md:gap-4 gap-2">
          <Button className="md:px-4 py-2 px-2 rounded-lg bg-transparent hover:bg-transparent">
            <Search className="text-primary" />
          </Button>
          <Button className="md:px-4 py-2 px-2 rounded-lg bg-transparent hover:bg-transparent">
            <Heart className="text-primary" />
          </Button>
          <Button className="md:px-4 py-2 px-2 rounded-lg bg-transparent hover:bg-transparent">
            <User className="text-primary" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Nav