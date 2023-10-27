import { CardMenu } from "./card-menu";

export function EmployeeCard({
  name,
  company,
  city,
  archived,
}: {
  name: string;
  company: string;
  city: string;
  archived?: boolean;
}) {
  return (
    <div className="w-full flex flex-col md:flex-row items-start gap-4 md:gap-5 p-4 md:p-5 bg-sixth-color rounded-2xl">
      <img
        src={require("../../../../assets/images/me.png")}
        alt="avatar"
        className={`max-h-[140px] min-w-[112px] w-full object-cover rounded-lg ${
          archived && "grayscale"
        }`}
      />
      <div className="w-full flex flex-col gap-3 justify-between items-start h-full">
        <div className="w-full flex flex-col items-start gap-1">
          <div className="w-full flex justify-between items-start">
            <h4 className="headline text-accent">{name}</h4>
            <CardMenu archived={archived} />
          </div>
          <span className="additional-medium text-second-color">{company}</span>
        </div>
        <span className="caption text-third-color">{city}</span>
      </div>
    </div>
  );
}
