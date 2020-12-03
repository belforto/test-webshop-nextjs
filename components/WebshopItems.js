import React from "react";

function WebshopItems(props) {
  return props.data.map(x => (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
      <article className="overflow-hidden rounded-lg shadow-lg transform  hover:scale-75 transition duration-300">
        <a href={"/details/"+x.id}>
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src={x.image}
          />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              {x.title}
            </a>
          </h1>
          <p className="text-grey-darker text-sm">${x.price} </p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-black"
            href="#"
          >
            <p className="ml-2 text-sm">{x.category}</p>
          </a>
          <a
            className="no-underline text-grey-darker hover:text-red-dark"
            href="#"
          >
            <span className="hidden">Like</span>
            <i className="fa fa-heart"></i>
          </a>
        </footer>
      </article>
    </div>
  ));
}

export default WebshopItems;
