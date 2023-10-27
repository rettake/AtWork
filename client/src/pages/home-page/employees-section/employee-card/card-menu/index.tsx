import { useState } from "react";
import { UiMenuIcon } from "../../../../../shared/ui/UiMenuIcon";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from "../../../../../features/users/usersSlice";
import { useGetUserByIdQuery } from "../../../../../app/api/users";
import {
  addToArchived,
  removeFromArchived,
} from "../../../../../features/users/archivedUsersSlice";
import { useNavigate } from "react-router";

export function CardMenu({ archived, id }: { archived?: boolean; id: number }) {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

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

  const handleEdit = () => {
    navigate(`/user/${id}`);
  }; // Кнопка редактировать

  return (
    <div className="relative pl-2">
      <div>
        <UiMenuIcon
          isMobile={false}
          className="cursor-pointer lg:hover:text-accent transition-colors duration-300 hidden lg:block"
          onClick={() => setShow((prev) => !prev)}
        />
        <UiMenuIcon
          isMobile={true}
          className="cursor-pointer lg:hover:text-accent transition-colors duration-300 lg:hidden"
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
                onClick={() => handleEdit()}
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
