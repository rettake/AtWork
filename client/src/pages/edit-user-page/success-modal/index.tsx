import { Dispatch, useEffect } from "react";
import { UiCloseIcon } from "../../../shared/ui/UiCloseIcon/UiCloseIcon";
import { UiSuccessIcon } from "../../../shared/ui/UiSuccessIcon";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

export function SuccessModal({
  setShowModal,
  showModal,
}: {
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}) {
  const ref = useOutsideClick(() => {
    setShowModal(false);
  });

  useEffect(() => {
    const id = setTimeout(() => setShowModal(false), 4000);

    if (!showModal) clearTimeout(id);
  }, [showModal, setShowModal]);

  return (
    <div className="fixed top-0 left-0 h-full w-full right-0 bottom-0 z-[1000]">
      <div className="w-full h-full flex items-center justify-center bg-[#161616] bg-opacity-25">
        <div
          className="relative p-8 lg:p-10 rounded-2xl bg-sixth-color"
          ref={ref}
        >
          <UiCloseIcon
            className="absolute right-2 top-3 cursor-pointer z-[10000]"
            onClick={() => setShowModal(false)}
          />
          <div className="flex flex-col gap-4 lg:gap-5 items-center">
            <UiSuccessIcon />
            <h4 className="headline text-second-color">Изменения сохранены!</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
