export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div>
          <div className="loader">
            <svg viewBox="0 0 80 80">
              <circle r="32" cy="40" cx="40" id="test"></circle>
            </svg>
          </div>

          <div className="loader triangle">
            <svg viewBox="0 0 86 80">
              <polygon points="43 8 79 72 7 72"></polygon>
            </svg>
          </div>

          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect height="64" width="64" y="8" x="8"></rect>
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-10 h-1 bg-white " />

          <h1 className="mx-4 font-semibold text-xs whitespace-nowrap text-yellow-200">
            COMING SOON
          </h1>

          <div className="w-10 h-1 bg-white " />
        </div>
      </div>
    </div>
  );
}
