import { UiFavoriteIcon } from "../UiFavoriteIcon";
import { UiLogo } from "../UiLogo";
import { UiNotificationIcon } from "../UiNotificationIcon";

export function UiHeader() {
  return (
    <header className="w-full p-4 flex items-center justify-center bg-sixth-color fixed">
      <div className="w-full max-w-[1140px] flex items-center justify-between">
        <UiLogo />
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-1">
            <UiFavoriteIcon />
            <UiNotificationIcon />
          </div>
          <div className="flex items-center gap-2">
            <img
              src={require("../../../assets/images/me.png")}
              alt="avatar"
              className="rounded-full w-7 h-7 md:w-5 md:h-5 object-cover"
            />
            <div className="hidden md:block additional-medium">Rettake</div>
          </div>
        </div>
      </div>
    </header>
  );
}
