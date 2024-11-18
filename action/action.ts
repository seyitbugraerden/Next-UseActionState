"use server";

import { UserInfo } from "@/types/types";

export const ForExampleDemo = async (
  prevState: void | null,
  formData: FormData
): Promise<void> => {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  const repeatPassword = formData.get("repeat-password") as string | null;
  const terms = formData.get("terms") === "on"; // ensures the checkbox state is correctly interpreted

  // Validation
  if (!email || !password || !repeatPassword || terms === null) {
    console.error("Please fill out all fields.");
    return;
  }

  if (password !== repeatPassword) {
    console.error("Passwords do not match.");
    return;
  }

  const userInfo: UserInfo = {
    email,
    password,
    repeatPassword,
    terms,
  };

  console.log(userInfo); // You can process this further, like sending it to an API
};
