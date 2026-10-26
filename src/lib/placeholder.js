const PALETTE = [
  { bg: 'E5E8E4', fg: '810100' },
  { bg: '810100', fg: 'F5F8F6' },
  { bg: '8A8A83', fg: '030301' },
  { bg: '030301', fg: 'F5F8F6' },
]

export function placeholderColors(index = 0) {
  return PALETTE[index % PALETTE.length]
}

export function placeholderTile(text, index = 0, size = '900x1100') {
  const { bg, fg } = placeholderColors(index)
  if (text === '') {
    const [width, height] = size.split('x')
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#${bg}"/></svg>`)}`
  }
  return `https://placehold.co/${size}/${bg}/${fg}/png?text=${encodeURIComponent(text)}&font=montserrat`
}
