import { FormEvent } from "react";
import { ProfileForm } from "./profile-form";

export function ProfileData({
  handleSubmit,
}: {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="w-full bg-sixth-color rounded-2xl flex flex-col p-7 lg:p-10 gap-5 lg:gap-6">
      <div className="w-full border-b-[1px] border-b-fourth-color pb-4">
        <h2 className="title">Данные профиля</h2>
      </div>
      <div className="flex flex-col gap-6 lg:gap-8">
        <ProfileForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
