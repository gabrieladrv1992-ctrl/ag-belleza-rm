const PALETTE = [
  { bg: 'E5E8E4', fg: '810100' },
  { bg: '810100', fg: 'F5F8F6' },
  { bg: '8A8A83', fg: '030301' },
  { bg: '030301', fg: 'F5F8F6' },
]

export function placeholderTile(text, index = 0, size = '900x1100') {
  const { bg, fg } = PALETTE[index % PALETTE.length]
  return `https://placehold.co/${size}/${bg}/${fg}/png?text=${encodeURIComponent(text)}&font=montserrat`
}
