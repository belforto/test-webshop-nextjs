import React from 'react'

export default function index({ posts,generatedAt }) {
    return (
        <div>
          Static rendering, every 10 seconds
            <div class="flex flex-wrap md items-center h-screen">
      <div class="bg-white w-full md:w-1/2 h-screen">
        <div class="mx-32">
          <h1 class="text-6xl font-bold mt-16">Tokyo Blog</h1>

    
          <div class="flex mt-16 font-light text-gray-500">
            <div class="pr-4">
              <span class="uppercase">Country</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">Japan</p>
            </div>
            <div class="pr-4">
              <span class="uppercase">Region</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">Kanto</p>
            </div>
            <div class="pr-4">
              <span class="uppercase">island</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">Honshu</p>
            </div>
            
          </div>

          
          <div
            class="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm"
          >
            Tokyo, Japan’s busy capital, mixes the ultramodern and the
            traditional, from neon-lit skyscrapers to historic temples. The
            opulent Meiji Shinto Shrine is known for its towering gate and
            surrounding woods. The Imperial Palace sits amid large public
            gardens
          </div>

          <button class="uppercase mt-5 text-sm font-semibold hover:underline">
            read more
          </button>
        </div>
      </div>
      <div class="bg-red-600 w-full md:w-1/2 h-screen">
        <img
          src={posts.url}
          class="h-screen w-full"
          alt=""
        />
      </div>
    </div>
    <div class="pr-4">
              <span class="uppercase">Generated at</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">{generatedAt.date}</p>
            </div>
        </div>
    )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
    const res = await fetch('https://picsum.photos/200/300?grayscale')
    let posts = await res.url
  console.log("Regeneration of the page at "+ (new Date()).toISOString(),posts)
  posts={url:posts}
  let generatedAt={date:(new Date()).toISOString()}



    return {
      props: {
        posts,
        generatedAt
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once 10 every second
      revalidate: 10, // In seconds
    }
  }
  
  
