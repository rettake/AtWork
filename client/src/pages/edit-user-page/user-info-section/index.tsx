import { useNavigate } from "react-router";
import { Dispatch, FormEvent } from "react";
import { UiBackArrowIcon } from "../../../shared/ui/UiBackArrowIcon";
import { ProfileAside } from "./profile-aside";
import { ProfileData } from "./profile-data";

export function UserInfoSection({
  setShowModal,
}: {
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <section className="w-full max-w-[1192px] px-4 mx-auto mt-[50px] lg:mt-[56px] md:mt-[96px] mb-10 md:mb-[198px] flex flex-col gap-5 lg:gap-6">
      <div
        onClick={() => navigate("/")}
        className="py-5 max-w-[120px] flex items-center gap-2 cursor-pointer"
      >
        <UiBackArrowIcon />
        <span className="text-second-color headline">Назад</span>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10">
        <ProfileAside />
        <ProfileData handleSubmit={handleSubmit} />
      </div>
    </section>
  );
}
