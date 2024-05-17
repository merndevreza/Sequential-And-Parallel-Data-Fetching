import Link from "next/link";

const Header = () => {
   return (
      <div className="mx-auto text-center w-1/2 mt-6">
      <h2 className="text-2xl">
        Data Fetching Patterns and Best Practices - Sequential & Parallel Data
        Fetching
      </h2>
      <div className="flex justify-center mt-5 gap-4">
        <div>
          <Link
            className=" block bg-green-300 hover:bg-green-400 p-4 text-xl rounded text-black"
            href="/sequential"
          >
            Sequential Data Fetching
          </Link>
        </div>
        <div>
          <Link
            className=" block bg-orange-200 hover:bg-orange-300 p-4 text-xl rounded text-black "
            href="/parallel"
          >
            Parallel Data Fetching
          </Link>
        </div>
      </div>
    </div>
   );
};

export default Header;