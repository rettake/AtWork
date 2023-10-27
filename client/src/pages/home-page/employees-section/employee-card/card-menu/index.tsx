import { useState } from "react";
import { UiMenuIcon } from "../../../../../shared/ui/UiMenuIcon";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../../../features/users/usersSlice";
import { RootState } from "../../../../../app/store";

export function CardMenu({ archived, id }: { archived?: boolean; id: number }) {
  const [show, setShow] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { users } = useSelector((state: RootState) => state.users);

  const handleRemove = (id: number) => {
    dispatch(removeUser(id));
  };

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
            <div className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer transition-colors duration-300">
              Активировать
            </div>
          ) : (
            <>
              <div className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer transition-colors duration-300">
                Редактировать
              </div>
              <div className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer transition-colors duration-300">
                Архивировать
              </div>
              <div
                className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer transition-colors duration-300"
                onClick={() => {
                  handleRemove(id);
                  console.log(users)
                }}
              >
                Скрыть
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
