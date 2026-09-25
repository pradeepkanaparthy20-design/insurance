type PolicyCardProps = {
  title: string;
};

export default function PolicyCard({ title }: PolicyCardProps) {
  return <article>{title}</article>;
}