export default function Customization() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-row gap-2">
          <label className="font-bold">Customize Color:</label>
          <p class="text-nashtech">
            This text using customization color called "Nashtech"
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <label className="font-bold ">
            Customize responsive break point:
          </label>
          <p className="sm:text-[5rem] 2xl:text-lg 2k:hidden">
            This text will not display in the break point called "2k" (width:
            2560px)
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <label className="font-bold ">Customize spacing:</label>
          {/* *Noted: line-clamp plugin helps for display ... with lines, instead of config css height and property, remove line-clamp for displaying full text,  */}
          <p className="w-nashtech bg-nashtech text-white line-clamp-2">
            This is customize spacing called "nashtech" - "w-nashtech"(width:
            199px)
          </p>
        </div>
      </div>
    </>
  );
}
