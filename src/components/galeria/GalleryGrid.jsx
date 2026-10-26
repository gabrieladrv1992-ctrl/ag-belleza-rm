import { motion } from 'framer-motion'

export default function GalleryGrid({ items, onSelect }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:balance]">
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
            alt=""
            width="900"
            height="1100"
            loading="lazy"
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div style={{ color: item.esEjemplo ? item.colorTexto : undefined }} className={item.esEjemplo
            ? 'absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center'
            : 'absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-5 text-white'}>
            <p className="text-sm font-medium leading-relaxed">
              {item.categoria}
            </p>
            <p className="gallery-card-title break-words font-serif text-xl font-semibold leading-snug lg:text-[22px]">{item.titulo}</p>
          </div>
        </motion.button>
      ))}
    </div>
  )
}
