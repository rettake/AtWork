import { useState } from "react";
import { UiMenuIcon } from "../../../../../shared/ui/UiMenuIcon";

export function CardMenu({ archived }: { archived?: boolean }) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="relative pl-2">
      <div>
        <UiMenuIcon
          className="lg:w-1 lg:h-5 lg:hover:text-accent transition-colors duration-300"
          onClick={() => setShow((prev) => !prev)}
        />
      </div>
      {show && (
        <div className="absolute top-[20px] lg:top-[30px] right-0 p-2 flex flex-col gap-2 bg-sixth-color rounded-xl border border-fourth-color">
          {archived ? (
            <div className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer">
              Активировать
            </div>
          ) : (
            <>
              <div className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer">
                Редактировать
              </div>
              <div className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer">
                Архивировать
              </div>
              <div className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer">
                Скрыть
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
