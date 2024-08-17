"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function signInWithCredentials(formData: FormData) {
  try {
    const res = await signIn("credentials", {
      email: formData.get("email") || "",
      password: formData.get("password") || "",
      redirect: false,
    });
  } catch (err) {
    console.error(err);
  }
  redirect("/");
}

export async function signInWithKakao(formData: FormData) {
  await signIn("kakao", { redirectTo: "/" });
}

export async function signInWithNaver(formData: FormData) {
  await signIn("naver", { redirectTo: "/" });
}

export async function signInWithGoogle(formData: FormData) {
  console.log("google");
  await signIn("google", { redirectTo: "/" });
}