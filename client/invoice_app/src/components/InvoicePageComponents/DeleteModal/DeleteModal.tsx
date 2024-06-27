import Button from "../../UI/Button/Button";
import { motion } from "framer-motion";
import { DeleteModalProps } from "./types";

const DeleteModal = ({
  id,
  closeModal,
  deleteCurrentInvoice,
}: DeleteModalProps) => {
  return (
    <section className="flex items-center justify-center w-screen h-screen fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-10">
      <motion.div
        initial={{ y: "-50%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white dark:bg-dark_bg rounded-lg w-[30.25rem] mx-auto p-8 md:w-[90%]">
          <h1 className="text-3xl text-text_dark dark:text-white font-medium mb-4">
            Confirm Deletion
          </h1>
          <p className="font-light leading-5">
            Are you sure you want to delete invoice #{id}? This action cannot be
            undone.
          </p>

          <div className="flex items-center gap-4 mt-8 w-fit ml-auto">
            <Button
              text="Cancel"
              bg_color="bg-gray dark:bg-light_purple"
              text_color="text-text_dark dark:text-white"
              clickFunc={closeModal}
            />
            <Button
              text="Delete"
              bg_color="bg-red"
              text_color="text-white"
              clickFunc={deleteCurrentInvoice}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DeleteModal;
