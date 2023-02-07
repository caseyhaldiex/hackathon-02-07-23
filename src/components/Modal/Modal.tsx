import bgImage from "../../assets/bg-image.png";

interface ModalTypes {
  children: JSX.Element;
  onClick: () => void;
}

export const Modal = ({ children, onClick }: ModalTypes) => {
  return (
    <div
      style={{ backgroundImage: "url(" + bgImage + ")" }}
      className="h-full w-full flex justify-center items-center fixed bg-black"
    >
      <div className="h-[566px] w-[802px] text-white bg-[#0E1116] flex items-center justify-start flex-col">
        <div className="w-full h-[67px] bg-black flex items-center justify-start mb-4">
          <div className="text-white text-md ml-4">
            Get messages based on your interests
          </div>
          <div className="flex-1"></div>
          <div className="mr-4">
            <button className="bg-[#0E1116] py-2 px-4 rounded text-sm mr-4">
              Cancel
            </button>
            <button
              onClick={onClick}
              className="bg-[#4088F7] py-2 px-4 rounded text-sm"
            >
              Next
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
