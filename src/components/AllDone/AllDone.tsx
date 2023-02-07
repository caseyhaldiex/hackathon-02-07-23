interface AllDoneTypes {
  onClick: () => void;
}
export const AllDone = ({ onClick }: AllDoneTypes) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[#545454] w-[240px] mt-[90px] text-md text-center mb-6">
        Nice! We will show you more messages like this from now on.
      </div>
      <div className="w-[220px] flex justify-center items-center flex-col">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden flex justify-center items-center">
          <img
            alt="snoop doggy dog"
            className="h-full"
            src="https://media2.giphy.com/media/wAxlCmeX1ri1y/giphy.gif?cid=790b761104cf78e2ca642360cbc052a5f26d46c237f1813d&rid=giphy.gif&ct=g"
          />
        </div>
        <button
          onClick={onClick}
          className="bg-[#4088F7] py-2 px-4 text-sm mt-6 rounded-full"
        >
          All Done! 🥳
        </button>
      </div>
      <div></div>
    </div>
  );
};
