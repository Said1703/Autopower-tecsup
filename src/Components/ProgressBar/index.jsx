export default function ProgressBar() {
  return (
    <div key="progress-bar" className="max-w-xl mx-auto mt-20 p-5">
      <div className="mx-12 md:mx-24 flex">
        <div className="flex-shrink w-12 h-12 flex items-center justify-center font-semibold text-xl border-4 border-darkblue rounded-full">
          1
        </div>
        <div className="flex-1 border-t-4 border-darkblue mt-5 md:block"></div>
        <div className="w-12 h-12 flex items-center justify-center font-semibold text-xl border-4 border-darkblue rounded-full">
          2
        </div>
        <div className="flex-1 border-t-4 border-darkblue mt-5 md:block"></div>
        <div className="flex-shrin w-12 h-12 flex items-center justify-center font-semibold text-xl border-4 border-darkblue rounded-full">
          3
        </div>
      </div>
    </div>
  );
}
