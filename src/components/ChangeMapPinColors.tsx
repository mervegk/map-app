'use client'
import { useState } from 'react'
import { Button } from './ui/button';
import PopoverColorPicker from './PopoverColorPicker';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/lib/Redux/store';
import { setBgColor, setBorderColor, setGlyphColor } from '@/lib/Redux/features/map-pin-slice';

export default function ChangeMapPinColors({ type, label }: MapPinColors) {

  const dispatch = useDispatch<AppDispatch>()
  const background = useSelector((state: RootState) => state.mapPinColors.value.background)
  const borderColor = useSelector((state: RootState) => state.mapPinColors.value.borderColor)
  const glyphColor = useSelector((state: RootState) => state.mapPinColors.value.glyphColor)

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

  const [color, setColor] = useState(getColorByType())

  const handleColorChange = () => {
    if (color) {
      switch (type) {
        case 'background':
          dispatch(setBgColor(color))
          break
        case 'border':
          dispatch(setBorderColor(color))
          break
        case 'glyph':
          dispatch(setGlyphColor(color))
          break
        default:
          return '#fff'
      }
    }
  }

  return (
    <div className='grid max-sm:grid-cols-1 max-sm:justify-center grid-cols-[40%_20%_40%] items-center gap-2'>
      <p>{label}</p>
      <PopoverColorPicker color={color} onChange={setColor} />
      <Button
        type='button'
        variant='outline'
        size="sm"
        onClick={handleColorChange}
        className='mt-2'
      >Rengi kaydet</Button>
    </div >
  )
}