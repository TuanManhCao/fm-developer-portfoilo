import React, {
  FormEvent,
  InputHTMLAttributes,
  MutableRefObject,
  ReactComponentElement,
  ReactHTMLElement,
  useRef,
  useState,
} from "react";
import ringImage from "./assets/images/pattern-rings.svg";
export default function ContactSection() {
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  function validateName() {
    if (nameRef.current == null || nameRef.current.value.length == 0) {
      setNameError("Name cannot be blank");
    } else {
      setNameError("");
    }
  }

  function validateEmail() {
    if (emailRef.current == null || emailRef.current.value.length == 0) {
      setEmailError("email cannot be blank");
    } else {
      setEmailError("");
    }
  }
  function validateMessage() {
    if (messageRef.current == null || messageRef.current.value.length == 0) {
      setMessageError("Message cannot be blank");
    } else {
      setMessageError("");
    }
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log("Name: " + nameRef.current?.value);

    validateName();

    validateEmail();

    validateMessage();
  }

  return (
    <div id="contact" className="relative mx-auto bg-tc-dark-grey md:max-w-5xl xl:flex xl:max-w-6xl xl:flex-row xl:justify-between ">
      <div className="mx-auto flex max-w-lg flex-col gap-4  xl:mx-0">
        <h2 className="mt-16 text-center text-4xl xl:mt-0 xl:text-left xl:text-8xl">
          Contact
        </h2>
        <p className="mb-8 text-center text-base md:px-4 md:text-lg md:leading-7 xl:px-0 xl:text-left">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <img
        src={ringImage}
        alt=""
        className="absolute bottom-1 -left-48 z-0 opacity-25"
      />
      <div className="relative z-10">
        <form action="" onSubmit={handleSubmit}>
          <div className="mx-auto flex max-w-lg flex-col items-end gap-8 xl:w-[445px]">
            <InputWithError
              type="text"
              placeholder="NAME"
              errorMessage={nameError}
              innerRef={nameRef}
              onChangeFunc={(e) => {
                e.preventDefault();
                validateName();
              }}
            />
            <InputWithError
              type="text"
              placeholder="EMAIL"
              errorMessage={emailError}
              innerRef={emailRef}
              onChangeFunc={(e) => {
                e.preventDefault();
                validateEmail();
              }}
            />
            <TextAreaWithError
              placeholder="MESSAGE"
              errorMessage={messageError}
              innerRef={messageRef}
              onChangeFunc={(e) => {
                e.preventDefault();
                validateMessage();
              }}
            />
            <button
              type="submit"
              className="text-center text-xl font-bold uppercase underline decoration-tc-green decoration-2 underline-offset-8 hover:text-tc-green"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

type InputProp = {
  type: string;
  placeholder: string;
  errorMessage: string;
  innerRef: any;
  onChangeFunc: (e: React.ChangeEvent<HTMLElement>) => void;
};

export function InputWithError({
  type,
  placeholder,
  errorMessage,
  innerRef,
  onChangeFunc,
}: InputProp) {
  return (
    <div className="w-full ">
      <input
        type="text"
        placeholder="NAME"
        className={`h-12 w-full border-b-2 bg-transparent pl-6 placeholder-tc-grey focus:border-tc-green focus:outline-none ${
          errorMessage.length > 0 ? "border-[#FF6F5B]" : ""
        }`}
        ref={innerRef}
        onChange={onChangeFunc}
      />
      {errorMessage.length > 0 && (
        <p className="w-full truncate pt-1 text-right text-xs text-[#FF6F5B]">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export function TextAreaWithError({
  placeholder,
  errorMessage,
  innerRef,
  onChangeFunc,
}: Partial<InputProp>) {
  return (
    <div className="w-full ">
      <textarea
        name="message"
        id=""
        cols={30}
        rows={10}
        className={`w-full resize-none border-b-2 bg-transparent pl-6 leading-6 placeholder-tc-grey focus:border-tc-green focus:outline-none ${
          errorMessage!.length > 0 ? "border-[#FF6F5B]" : ""
        }`}
        placeholder="MESSAGE"
        ref={innerRef}
        onChange={onChangeFunc}
      />
      {errorMessage!.length > 0 && (
        <p className="w-full truncate pt-1 text-right text-xs text-[#FF6`F5B]">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
