type CarryItemProps = {
  name: string;
  item: string;
  createdAt: string | Date;
};

export default function CarryItemCard({ name, item, createdAt }: CarryItemProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="flex items-center gap-4 backdrop-blur-lg bg-black/20 dark:bg-white/10 px-4 py-2 rounded-full text-sm whitespace-nowrap overflow-auto">
      <span className="font-semibold">{name}</span>
      <span>•</span>
      <span>{item}</span>
      <span>•</span>
      <span>{formattedDate}</span>
    </div>
  );
}