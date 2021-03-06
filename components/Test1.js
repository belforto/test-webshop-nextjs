import React from "react";

export default function Test1() {
  return (
    <div>
      <figure class="bg-gray-100 rounded-xl p-8">
        <img
          class="w-32 h-32 rounded-full"
          src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg">“Hey I am Contact person Number 1”</p>
          </blockquote>
          <figcaption>
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
