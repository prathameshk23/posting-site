"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function EditPost({ avatar, name, title, comments, id }) {
  //Toggle
  const [toggle, setToggle] = useState(false);
  //Delete
  const { mutate } = useMutation(
    async (id: string) =>
      await axios.delete("/api/posts/deletePost", { data: id }),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  const deletePost = () => {
    mutate(id);
  };

  return (
    <>
      <div className="bg-mywhite my-8 p-8 rounded-lg">
        <div className="flex items-center gap-2">
          <Image
            width={32}
            height={32}
            src={avatar}
            alt="avatar"
            className="rounded-full"
          />
          <h1 className="font-bold text-gray-700">{name}</h1>
        </div>
        <div className="my-8">
          <p className="break-all">{title}</p>
        </div>
        <div className="flex gap-4  items-center">
          <p className="text-sm font-bold text-gray-700">
            {comments?.length} Comments
          </p>
          <button
            className="text-sm text-red-500 font-bold"
            onClick={(e) => {setToggle(true)}}
          >
            Delete
          </button>
        </div>
      </div>
      {toggle && <Toggle deletePost={deletePost} setToggle={setToggle} />}
    </>
  );
}
