import React, { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", body: "" });
  const [disabled, setDisabled] = useState(false);

  const handleClear = () => {
    setName("");
    setEmail("");
    setBody("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newError = { name: "", email: "", body: "" };
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name.length === 0) {
      newError.name = "お名前は必須です。";
    } else if (name.length > 30) {
      newError.name = "お名前は30文字以内で入力してください。";
    }

    if (email.length === 0) {
      newError.email = "メールアドレスは必須です。";
    } else if (!emailPattern.test(email)) {
      newError.email = "メールアドレスの形式が正しくありません。";
    }

    if (body.length === 0) {
      newError.body = "本文は必須です。";
    } else if (body.length > 500) {
      newError.body = "本文は500文字以内で入力してください。";
    }

    if (newError.name !== "" || newError.email !== "" || newError.body !== "") {
      setErrors(newError);
      return;
    } else {
      setErrors({ name: "", email: "", body: "" });
      setDisabled(true);
    }

    try {
      const response = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, body }),
        }
      );
      if (response.ok) {
        alert("送信しました");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setEmail("");
      setBody("");
      setDisabled(false);
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="font-bold text-2xl mb-10 text-center">
          お問い合わせフォーム
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label className="w-48" htmlFor="name">
              お名前
            </label>
            <div className="w-full">
              <input
                className="border border-slate-400 w-full rounded-md p-3"
                type="text"
                id="name"
                name="name"
                value={name}
                disabled={disabled}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="text-red-700">{errors.name}</div>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <label className="w-48" htmlFor="email">
              メールアドレス
            </label>
            <div className="w-full">
              <input
                className="border border-slate-400 w-full rounded-md p-3"
                type="email"
                id="email"
                name="email"
                value={email}
                disabled={disabled}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="text-red-700">{errors.email}</div>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <label className="w-48" htmlFor="body">
              本文
            </label>
            <div className="w-full">
              <textarea
                className="border border-slate-400 w-full rounded-md h-50 p-3"
                name="body"
                id="body"
                value={body}
                disabled={disabled}
                onChange={(e) => setBody(e.target.value)}
              />
              <div className="text-red-700">{errors.body}</div>
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <button
              className={`bg-slate-900 py-2 px-4 rounded-md text-white font-bold  ${
                disabled === true ? "cursor-default" : "cursor-pointer"
              }`}
              type="submit"
              disabled={disabled}
            >
              送信
            </button>
            <button
              className={`bg-neutral-300 py-2 px-4 rounded-md text-slate-900 font-bold ${
                disabled === true ? "cursor-default" : "cursor-pointer"
              }`}
              type="button"
              disabled={disabled}
              onClick={handleClear}
            >
              クリア
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
