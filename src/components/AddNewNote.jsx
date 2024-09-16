import React, { useState, useEffect } from "react";

function AddNewNote({ AddNote }) {
  const [labelInput, setLabelInput] = useState({ title: "", description: "" });
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    description: "",
  });

  const [isDisable, setIsDisable] = useState(true);
  const [isTouched, setIsTouched] = useState(false); // وضعیت جدید برای پیگیری تعامل کاربر

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLabelInput((prevLabelInput) => ({
      ...prevLabelInput,
      [name]: value,
    }));

    setIsTouched(true); // زمانی که کاربر شروع به تغییر ورودی‌ها می‌کند، وضعیت تغییر می‌کند
  };

  const handleErrorMessage = (labelInput) => {
    const regexTitle = /^[A-Za-z][A-Za-z0-9@#$%^&*()!?.]{0,7}$/;
    const regexDescription = /^[A-Za-z][A-Za-z0-9@#$%^&*()!?.]{0,64}$/;

    let isValid = true;

    // فقط زمانی که کاربر شروع به تعامل با فرم کرده، اعتبارسنجی را انجام بده
    if (isTouched) {
      // بررسی خطای عنوان
      if (!regexTitle.test(labelInput.title)) {
        setErrorMessage((prevState) => ({
          ...prevState,
          title: "Title must be 8 characters max and start with a letter.",
        }));
        isValid = false;
      } else {
        setErrorMessage((prevState) => ({
          ...prevState,
          title: "", // اگر خطا نیست، پیام خطا را پاک کنید
        }));
      }

      // بررسی خطای توضیحات
      if (!regexDescription.test(labelInput.description)) {
        setErrorMessage((prevState) => ({
          ...prevState,
          description:
            "Description must be up to 64 characters and start with a letter.",
        }));
        isValid = false;
      } else {
        setErrorMessage((prevState) => ({
          ...prevState,
          description: "", // اگر خطا نیست، پیام خطا را پاک کنید
        }));
      }
    }

    setIsDisable(!isValid); // فعال یا غیرفعال کردن دکمه بر اساس اعتبار

    return isValid;
  };

  // استفاده از useEffect برای بررسی اعتبار ورودی‌ها و بروزرسانی وضعیت دکمه
  useEffect(() => {
    handleErrorMessage(labelInput);
  }, [labelInput]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // بررسی اعتبار ورودی‌ها
    if (!handleErrorMessage(labelInput)) return; // جلوگیری از ارسال در صورت عدم اعتبار

    const newNote = {
      ...labelInput,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setLabelInput({ title: "", description: "" });
    AddNote(newNote);
    setIsTouched(false); // ریست کردن وضعیت تعامل پس از ارسال فرم
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          name="title"
          value={labelInput.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        {errorMessage.title && (
          <p className="error-message">{errorMessage.title}</p>
        )}

        <input
          type="text"
          className="text-field"
          name="description"
          value={labelInput.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        {errorMessage.description && (
          <p className="error-message">{errorMessage.description}</p>
        )}

        <button
          className={isDisable ? "btn btn--secondary" : "btn btn--primary"}
          type="submit"
          disabled={isDisable}
        >
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
