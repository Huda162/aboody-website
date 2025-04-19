import Image from "next/image";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
      <h1 className="text-3xl font-bold text-gray-500 text-start">{title}</h1>
  );
}
