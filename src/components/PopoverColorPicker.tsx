"use client"
import { useState, useRef, useCallback, Dispatch } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { SetStateAction } from "react";
import useClickOutside from "@/hooks/useClickOutside";

type Props = {
  color: string
  onChange: Dispatch<SetStateAction<string>>
}

export default function PopoverColorPicker({ color, onChange }: Props) {
  const popover = useRef<HTMLDivElement | null>(null)
  const [isOpen, toggle] = useState(false)

  const close = useCallback(() => toggle(false), [])
  useClickOutside(popover, close)

  return (
    <div className="relative">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />
      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
          <HexColorInput color={color}
            onChange={onChange}
            prefixed
            className="mt-2 border rounded-lg p-1 w-full" />
        </div>
      )}
    </div>
  )
}