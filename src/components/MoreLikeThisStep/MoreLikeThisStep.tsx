interface MoreLikeThisStepTypes {
  onClick: () => void;
}
export const MoreLikeThisStep = ({ onClick }: MoreLikeThisStepTypes) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-[44px]">
        <h2>Tell us what kinds of messages you would like to see...</h2>
      </div>
      <div className="w-[220px] mt-[111px] flex justify-center items-center flex-col">
        <div className="text-[#545454] text-md text-center">
          Nice! We will show you more messages like this one.
        </div>
        <div className="text-[22px] mt-4">👍</div>
        <div className="text-sm text-white">More like this.</div>
        <button
          onClick={onClick}
          className="bg-[#4088F7] py-2 px-4 rounded text-sm mt-4"
        >
          Next Choice
        </button>
      </div>
      <div></div>
    </div>
  );
};
