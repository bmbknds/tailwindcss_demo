export default function Colors() {
  const colors = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];
  const strength = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div className="p-4">
      <p className="text-yellow-500 text-xs">
        *Note: This dynamic classes work because we config for generating all
        css class colors that matched the pattern.
      </p>
      {colors.map((color, index) => (
        <div
          key={index}
          className="grid grid-cols-11 gap-2 text-left items-center space-y-2"
        >
          {strength.map((str, i) =>
            i === 0 ? (
              <div key={i} className="font-bold first-letter:uppercase">
                {color}
              </div>
            ) : (
              <div key={i} className="text-left">
                <div
                  className={`bg-${color}-${str} h-[48px] w-[64px] px-4 rounded`}
                ></div>

                <span>{str}</span>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
