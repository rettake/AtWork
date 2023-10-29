export function Category({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  const getStyle = () =>
    active
      ? "additional-semibold cursor-pointer text-first-color transition-colors duration-300"
      : "additional-semibold cursor-pointer text-third-color hover:text-accent transition-colors duration-300";

  return (
    <div
      className="w-full border-b-[1px] border-b-fourth-color pb-3"
      onClick={onClick}
    >
      <h2 className={getStyle()}>{title}</h2>
    </div>
  );
}
