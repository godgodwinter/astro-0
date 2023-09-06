import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  console.log("tes");
  toast("Here is your toast.");
};

const RBasicIndex = () => {
  return (
    <>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
      <div>Ini component react</div>
    </>
  );
};

export default RBasicIndex;
