import { useState } from "react";
import { UiMenuIcon } from "../../../../../shared/ui/UiMenuIcon";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../../../../../features/users/usersSlice";
import { RootState } from "../../../../../app/store";
import { useGetUserByIdQuery } from "../../../../../app/api/users";
import {
  addToArchived,
  removeFromArchived,
} from "../../../../../features/users/archivedUsersSlice";

export function CardMenu({ archived, id }: { archived?: boolean; id: number }) {
  const [show, setShow] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { data } = useGetUserByIdQuery(String(id));

  const handleRemove = () => {
    dispatch(removeUser(id));
  }; // Кнопка скрыть

  const handleAddToArchive = () => {
    if (data) {
      dispatch(addToArchived(data));
      dispatch(removeUser(id));
    }
  }; // Кнопка архивировать

  const handleActive = () => {
    if (data) {
      dispatch(removeFromArchived(id));
      dispatch(addUser(data));
    }
  }; // Кнопка активировать

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
            <div
              className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer transition-colors duration-300"
              onClick={() => handleActive()}
            >
              Активировать
            </div>
          ) : (
            <>
              <div
                className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer transition-colors duration-300"
                onClick={() => null}
              >
                Редактировать
              </div>
              <div
                className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer transition-colors duration-300"
                onClick={() => handleAddToArchive()}
              >
                Архивировать
              </div>
              <div
                className="px-3 py-2 additional-medium text-first-color lg:hover:text-accent cursor-pointer transition-colors duration-300"
                onClick={() => handleRemove()}
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
