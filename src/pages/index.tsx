function Default() {
  return ( 
    <div className="flex flex-col h-full">
      {/* Some header */}
      <div className="flex flex-grow items-center justify-center">
        <div className="text-center">
          <p className="font-bold text-3xl">The template works</p>
          <p>Unless its not bold and huge</p>
        </div>
      </div>
      <p className="text-center">This template is intended for single page apps</p>
      {/* Some footer */}
    </div>
   );
}

export default Default;