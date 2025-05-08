'use client'
import { useState } from 'react'
import { useMarkerColor } from '@/context/MarkerContext'
import { HexColorPicker, HexColorInput } from "react-colorful";
import { Button } from './ui/button';
import PopoverColorPicker from './PopoverColorPicker';

export default function ChangeMapPinColors({ type, label }: MapPinColors) {

  const getColorByType = () => {
    let rawColor = ''
    switch (type) {
      case 'background':
        rawColor = background
        break
      case 'border':
        rawColor = borderColor
        break
      case 'glyph':
        rawColor = glyphColor
        break
    }

    try {
      return rawColor || '#ffffff'
    } catch (err) {
      console.error('Geçersiz renk:', rawColor)
      return '#ffffff'
    }
  }

  const {
    background,
    borderColor,
    glyphColor,
    changeBgColor,
    changeBorderColor,
    changeGlyphColor } = useMarkerColor()

  const [color, setColor] = useState(getColorByType() || '#fff')

  const handleColorChange = () => {
    if (color) {
      switch (type) {
        case 'background':
          changeBgColor(color)
          break
        case 'border':
          changeBorderColor(color)
          break
        case 'glyph':
          changeGlyphColor(color)
          break
      }
    }
  }

  return (
    <div className='grid grid-cols-3 items-center gap-2'>

      <p>{label}</p>
      <PopoverColorPicker color={color} onChange={setColor} />
      <Button type='button'
        variant='outline'
        size="sm"
        onClick={handleColorChange}
        className='mt-2'
      >Rengi kaydet</Button>
    </div >
  )
}