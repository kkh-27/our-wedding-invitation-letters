type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  id?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}
