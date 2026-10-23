import { motion } from 'framer-motion'

export default function GalleryGrid({ items, onSelect }) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:balance]">
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          type="button"
          onClick={(event) => onSelect(index, event.currentTarget)}
          whileHover={{ scale: 1.02 }}
          className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-nude-200 bg-white text-left shadow-sm"
        >
          <img
            src={item.imagen}
            alt={item.titulo}
            loading="lazy"
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-champagne-300">
              {item.categoria}
            </p>
            <p className="text-sm font-medium text-white">{item.titulo}</p>
          </div>
        </motion.button>
      ))}
    </div>
  )
}
