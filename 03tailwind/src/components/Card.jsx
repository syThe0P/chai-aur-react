import React from "react";

const Card = ({src, name, design}) => {
  return (
    <div>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={src}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>{name}</div>
            <div>{design}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
