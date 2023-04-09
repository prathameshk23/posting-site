"use client";

type ToggleProps = {
  deletePost: () => void;
  setToggle: (toggle: boolean) => void;
};

export default function Toggle({deletePost, setToggle}: ToggleProps) {
  return (
    <div onClick={(e)=>{setToggle(false)}} className="fixed bg-black/40 w-full h-full z-20 left-0 top-0">
      <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
        <h2 className="text-xl">
          Are you sure you want to delete this post 🤔
        </h2>
        <h3 className="text-sm text-red-600">
          Pressing the delete buton will delete the post permanently!!
        </h3>
        <button className="bg-red-500 text-sm text-white py-2 rounded-md px-4">
          Delete
        </button>
      </div>
    </div>
  );
}
