import { useState } from "react";
import { Category } from "../category";

export function ProfileAside() {
  const [activeElement, setActiveElement] = useState<string>("Element1");

  const handleClick = (elementId: string) => {
    setActiveElement(elementId);
  };

  return (
    <div className="w-full bg-sixth-color rounded-2xl flex flex-col basis-2/4 p-7 lg:p-10 gap-6 lg:gap-10">
      <img
        src={require("../../../../assets/images/me.png")}
        alt="avatar"
        className="rounded-lg w-full max-h-[187px] md:max-h-[300px] lg:max-h-[485px] object-cover"
      />
      <div className="flex flex-col gap-5 lg:gap-6">
        <Category
          title="Данные профиля"
          onClick={() => handleClick("Element1")}
          active={activeElement === "Element1"}
        />
        <Category
          title="Рабочее пространство"
          onClick={() => handleClick("Element2")}
          active={activeElement === "Element2"}
        />
        <Category
          title="Приватность"
          onClick={() => handleClick("Element3")}
          active={activeElement === "Element3"}
        />
        <Category
          title="Безопасность"
          onClick={() => handleClick("Element4")}
          active={activeElement === "Element4"}
        />
      </div>
    </div>
  );
}
