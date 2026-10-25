type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`} data-reveal>
      <div className="section-index" aria-hidden="true">
        <span>{index}</span>
        <i />
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
