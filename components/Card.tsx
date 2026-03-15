export function Card({
  title,
  description,
  img,
  icon,
}: {
  title: string;
  description: string;
  img?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="cursor-pointer w-full min-w-0 bg-neutral-100 rounded-xl flex flex-col items-center p-4 sm:p-6 shadow-sm hover:shadow-md active:scale-[0.98] transition-all touch-manipulation">
      {(icon || img) && (
        <div className="mb-3 sm:mb-4 flex justify-center">
          {icon ?? (img && <img src={img} alt={title} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />)}
        </div>
      )}
      <h3 className="text-xs sm:text-sm font-bold text-[var(--color-primary)] mb-1.5 sm:mb-2 text-center leading-tight">
        {title.toUpperCase()}
      </h3>
      <p className="text-[10px] sm:text-xs text-[var(--color-text-muted)] text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}
