'use client'
interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
      <h1 className="text-xl xl:text-3xl font-bold text-gray-500 text-start bg-[#f2f2f2] p-1 md:bg-transparent">{title}</h1>
  );
}
