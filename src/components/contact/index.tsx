import { TopArrow } from "../../../public/assets/svg";

export function Contact() {
  return (
    <div className="relative p-20 text-center text-white rounded-2xl bg-blue">
      <TopArrow className="absolute top-0 left-0" />
      <h2 className="font-bold">Subscribe to my blog.</h2>
      <p className="my-2 text-sm font-extralight">
        I post fresh content every week
      </p>
      <div className="mt-6">
        <input
          type="email"
          placeholder="Email address"
          className="px-6 py-3 text-black outline-none rounded-l-xl"
        />
        <button className="px-4 py-3 font-bold bg-blue-500 cursor-pointer rounded-r-xl text-blue">
          Subscribe
        </button>
      </div>
    </div>
  );
}
