
import NewsList from "./components/newsList";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-14">
      {/* make a search bar below with a search input and a button to search and another button for filters, the filter button should be a dropdown*/}
      <div className="w-full flex gap-6   overflow-hidden">
        <input
          type="text"
          placeholder="Search for news"
          className="w-96 h-12 p-4 rounded-r-lg font-semibold"
        />
        <button className="bg-blue-500 text-white p-4 w-32 text-center text-xl rounded-r-lg absolute h-12 left-80 flex items-center justify-center hover:bg-black duration-500 hover:text-2xl">
          <span className="">Search</span>
        </button>
        <button className="bg-gray-500 text-white p-2 w-32 text-left rounded-lg flex items-center justify-evenly font-bold text-xl group">
          <span>Filters</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-4 mt-1 -rotate-90 group-hover:rotate-0 duration-300"
            fill="white"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div>
      <div className="py-10">
        <NewsList />
      </div>
      <footer className="bottom-0 relative w-full"></footer>
    </main>
  );
}
