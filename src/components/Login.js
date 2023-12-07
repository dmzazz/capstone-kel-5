import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

// Import Icon
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const styleModalAdmin = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };
  return (
    <>
      <div className="w-screen h-screen bg-[#F6F6F6] flex justify-center items-center">
        <div className="bg-white flex flex-col justify-center items-center px-20 rounded-lg shadow-lg">
          <h1 className="font-bold text-[#28FFBF] mt-5 mb-8">Login User</h1>

          {/* Form Login User */}
          <form>
            <div className="relative flex items-center">
              <label className="absolute inset-y-0 left-0 flex items-center pl-2">
                <PersonIcon />
              </label>
              <input type="text" id="username" name="username" placeholder="Username" className="w-full py-2 px-4 pl-9 border border-inherit border-2 rounded-lg shadow-md" required />
            </div>
            <div className="relative flex items-center my-3">
              <label className="absolute inset-y-0 left-0 flex items-center pl-2">
                <LockIcon />
              </label>
              <input type="password" id="password" name="password" placeholder="Password" className="w-full py-2 px-4 pl-9 border border-inherit border-2 rounded-lg shadow-md" required></input>
            </div>
            <button type="submit" className="w-full bg-[#28FFBF] font-bold text-white uppercase rounded-lg py-2 px-4 mt-4 hover:bg-[#28DF99] duration-300">
              Sign in
            </button>
          </form>

          <p className="my-5">
            Login admin&nbsp;
            <button onClick={handleOpen} className="text-[#42E6A4] underline">
              here
            </button>
          </p>
        </div>
      </div>

      {/* Modal Login Admin */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={styleModalAdmin}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Login Admin
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {/* Form Login Admin */}
              <form>
                <div className="relative flex items-center">
                  <label className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <PersonIcon />
                  </label>
                  <input type="text" id="username" name="username" placeholder="Username" className="w-full py-2 px-4 pl-9 border border-inherit border-2 rounded-lg shadow-md" required />
                </div>
                <div className="relative flex items-center my-3">
                  <label className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <PersonIcon />
                  </label>
                  <input type="text" id="idadmin" name="idadmin" placeholder="Id admin" className="w-full py-2 px-4 pl-9 border border-inherit border-2 rounded-lg shadow-md" required></input>
                </div>
                <div className="relative flex items-center my-3">
                  <label className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <LockIcon />
                  </label>
                  <input type="password" id="password" name="password" placeholder="Password" className="w-full py-2 px-4 pl-9 border border-inherit border-2 rounded-lg shadow-md" required></input>
                </div>
                <button type="submit" className="w-full bg-[#28FFBF] font-bold text-white uppercase rounded-lg py-2 px-4 mt-4 hover:bg-[#28DF99] duration-300">
                  Sign in
                </button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Login;
