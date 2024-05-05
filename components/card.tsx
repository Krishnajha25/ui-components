import { Button } from "@/components/ui/button"
import Image from "next/image"
import shoesImg from "../public/assets/footwear/shoes1.webp"
import shoesImg2 from "../public/assets/footwear/shoes2.webp"
import { HeartIcon } from 'lucide-react'

export function CustomCard() {
  return (
    <article className="md:w-60 rounded-xl relative cursor-pointer">
      <div className="grid gap-2">
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            alt="Product image"
            className="object-cover w-full h-40 md:h-64"
            height="300"
            src={shoesImg}
            width="200"
          />
        </div>
        <div className="grid gap-1.5">
          <p className="font-normal text-sm text-muted">Jordan</p>
          <h3 className="font-semibold text-xs md:text-base truncate">SPIZIKE LOW &apos;WHITE/OBSIDIAN-PURE PLATINUM&apos;</h3>
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:gap-2">
            <p className="font-semibold text-sm md:text-lg">₹ 14,995.00</p>
            <p className="font-semibold text-xs text-muted line-through">₹ 17,000.00</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full">
          {/* <Button size="sm" className="w-full">Add to cart</Button> */}
          {/* <Button size="sm" variant="outline"><HeartIcon /></Button> */}
        </div>
      </div>
    </article>
  )
}
